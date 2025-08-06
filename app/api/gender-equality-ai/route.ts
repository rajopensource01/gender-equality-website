import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

// Fallback responses for when API is unavailable
const fallbackResponses = [
  "Gender equality is fundamental to creating a just and inclusive society. It means ensuring that all people, regardless of gender, have equal rights, responsibilities, and opportunities.",
  "Empowering women and girls is crucial for sustainable development. When women thrive, communities thrive. Education, economic opportunities, and leadership roles are key areas for progress.",
  "Intersectionality reminds us that gender equality intersects with race, class, sexuality, and other identities. True equality requires addressing all forms of discrimination.",
  "Small actions matter: challenge stereotypes, support women in leadership, educate yourself and others, and advocate for inclusive policies in your community.",
  "Gender equality benefits everyone. It creates healthier relationships, stronger economies, and more peaceful societies. We all have a role to play in this journey."
];

function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('what') || lowerMessage.includes('explain')) {
    return fallbackResponses[0];
  } else if (lowerMessage.includes('empower') || lowerMessage.includes('women')) {
    return fallbackResponses[1];
  } else if (lowerMessage.includes('intersection') || lowerMessage.includes('diversity')) {
    return fallbackResponses[2];
  } else if (lowerMessage.includes('action') || lowerMessage.includes('help') || lowerMessage.includes('do')) {
    return fallbackResponses[3];
  } else {
    return fallbackResponses[4];
  }
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Debug: Check if API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is not set');
      const fallbackResponse = getFallbackResponse(message);
      return Response.json({ 
        response: fallbackResponse,
        note: 'Using fallback response due to missing API configuration'
      });
    }

    console.log('API Key available:', !!process.env.OPENAI_API_KEY);
    console.log('Message received:', message);

    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      system: `You are an AI assistant specialized in gender equality, women's empowerment, and social justice. Your role is to:

1. Provide powerful, inspiring words and phrases related to gender equality
2. Suggest actionable strategies for promoting gender equality
3. Share educational content about gender equality issues
4. Offer motivational quotes and messages
5. Recommend resources and ways to get involved
6. Help users understand intersectionality and inclusive approaches

Always be:
- Inclusive and intersectional in your approach
- Positive and empowering in tone
- Factual and evidence-based
- Actionable and practical
- Respectful of all genders and identities

Focus on solutions, empowerment, and concrete steps people can take to make a difference.`,
      prompt: message,
    });

    console.log('Response generated successfully');
    return Response.json({ response: text });
  } catch (error) {
    console.error('AI API Error:', error);
    
    // Get message from request for fallback
    let message = '';
    try {
      const body = await request.json();
      message = body.message || '';
    } catch {
      message = '';
    }
    
    // Handle specific quota errors
    if (error instanceof Error && error.message.includes('quota')) {
      const fallbackResponse = getFallbackResponse(message);
      return Response.json(
        { 
          response: fallbackResponse,
          error: 'API quota exceeded. Using fallback response.',
          details: 'Your OpenAI account has exceeded its current quota. Please upgrade your plan or wait for quota reset.'
        },
        { status: 200 }
      );
    }
    
    // For any other error, use fallback
    const fallbackResponse = getFallbackResponse(message);
    return Response.json(
      { 
        response: fallbackResponse,
        error: 'API unavailable. Using fallback response.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 200 }
    );
  }
}

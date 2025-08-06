import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || '',
});

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
    const { message, type = 'general' } = await request.json();

    // Check if API key is available
    if (!process.env.GOOGLE_API_KEY) {
      console.error('Google API key is not set');
      const fallbackResponse = getFallbackResponse(message);
      return Response.json({ 
        response: fallbackResponse,
        note: 'Using fallback response due to missing API configuration'
      });
    }

    let systemPrompt = '';
    
    switch (type) {
      case 'quiz':
        systemPrompt = `You are an expert in gender equality education. Create engaging, educational quiz questions about gender equality, women's rights, and social justice. Format your response as JSON with questions, options, and explanations.`;
        break;
      case 'analysis':
        systemPrompt = `You are a gender equality data analyst. Provide detailed analysis, statistics, and insights about gender equality trends, challenges, and progress globally.`;
        break;
      case 'action':
        systemPrompt = `You are an activist and strategist for gender equality. Provide specific, actionable steps and strategies for promoting gender equality in various contexts.`;
        break;
      default:
        systemPrompt = `You are an AI assistant specialized in gender equality, women's empowerment, and social justice. Your role is to:

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

Focus on solutions, empowerment, and concrete steps people can take to make a difference.`;
    }

    const result = await streamText({
      model: google('models/gemini-pro'),
      system: systemPrompt,
      prompt: message,
    });

    // Convert stream to text
    let fullResponse = '';
    for await (const chunk of result.textStream) {
      fullResponse += chunk;
    }

    return Response.json({ response: fullResponse });
  } catch (error) {
    console.error('Gemini AI API Error:', error);
    
    // Get message from request for fallback
    let message = '';
    try {
      const body = await request.json();
      message = body.message || '';
    } catch {
      message = '';
    }
    
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

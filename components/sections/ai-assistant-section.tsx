"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, MessageSquare, Sparkles } from 'lucide-react';

export function AIAssistantSection() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      const res = await fetch('/api/gemini-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("I'm experiencing technical difficulties. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "What are some powerful words for gender equality?",
    "How can I promote gender equality in my workplace?",
    "Give me inspiring quotes about women's empowerment",
    "What are the key gender equality issues today?",
    "How can men support gender equality?"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            AI Equality Assistant
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get personalized suggestions, powerful words, and actionable advice for promoting gender equality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Lightbulb className="w-5 h-5" />
                Ask for Gender Equality Guidance
              </CardTitle>
              <CardDescription className="text-gray-300">
                Ask me anything about gender equality, empowerment, or how to make a difference.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Ask me about gender equality words, strategies, or how to get involved..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[100px] bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
              />
              <Button 
                onClick={handleSubmit}
                disabled={isLoading || !input.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                    </motion.div>
                    AI Thinking...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4 mr-2" />
                    Get AI Suggestions
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {response && (
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="text-white">AI Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap text-gray-300">
                  {response}
                </p>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Quick Suggestions
              </h3>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(suggestion)}
                    className="w-full text-left p-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors text-sm text-gray-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Empowerment", "Leadership", "Equal Pay", "Education", 
                  "Healthcare", "Political Participation", "Workplace Equality",
                  "Violence Prevention", "Economic Independence", "Rights"
                ].map((topic, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-purple-600 hover:text-white transition-colors bg-gray-700 text-gray-300"
                    onClick={() => setInput(`Tell me about ${topic.toLowerCase()} in gender equality`)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

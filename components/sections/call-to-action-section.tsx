"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight, Brain, BookOpen, Users, MessageSquare } from 'lucide-react';

export function CallToActionSection() {
  const actionCards = [
    {
      icon: Brain,
      title: "Try AI Assistant",
      description: "Get personalized guidance on gender equality topics",
      action: "Start Chatting",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Take a Quiz",
      description: "Test your knowledge and learn something new",
      action: "Start Quiz",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with others passionate about equality",
      action: "Get Started",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: MessageSquare,
      title: "Share Feedback",
      description: "Help us improve the platform with your input",
      action: "Give Feedback",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Ready to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore our platform and discover how you can contribute to gender equality through education, 
            awareness, and community engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {actionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{card.description}</p>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${card.color} hover:opacity-90 group-hover:shadow-lg transition-all duration-300`}
                  >
                    {card.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

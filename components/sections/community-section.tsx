"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, MessageSquare, Target } from 'lucide-react';

export function CommunitySection() {
  const communityFeatures = [
    { 
      label: "Join Community", 
      description: "Connect with advocates", 
      icon: Users, 
      color: "text-purple-400" 
    },
    { 
      label: "Share Stories", 
      description: "Inspire others", 
      icon: Heart, 
      color: "text-pink-400" 
    },
    { 
      label: "Discussions", 
      description: "Engage in conversations", 
      icon: MessageSquare, 
      color: "text-blue-400" 
    },
    { 
      label: "Take Action", 
      description: "Make a difference", 
      icon: Target, 
      color: "text-green-400" 
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-pink-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with others who share your passion for gender equality and work together towards positive change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {communityFeatures.map((feature, index) => (
            <Card key={feature.label} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
              <CardContent className="p-6">
                <feature.icon className={`w-8 h-8 mx-auto mb-4 ${feature.color}`} />
                <div className={`text-lg font-bold mb-2 ${feature.color}`}>
                  {feature.label}
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  Get Started
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Ready to join the movement for gender equality?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Start your journey by exploring our AI assistant, taking interactive quizzes, 
                  and accessing educational resources designed to empower and inform.
                </p>
                <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                  Explore Platform
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-pink-500/30">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Join Our Community
                </h3>
                <p className="text-gray-300 mb-6">
                  Be part of a growing community dedicated to creating positive change
                </p>
                <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 mb-4">
                  Get Started
                </Button>
                <p className="text-gray-400 text-sm">
                  Free to join • Educational resources • AI-powered guidance
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

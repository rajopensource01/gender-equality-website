"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Brain, Target } from 'lucide-react';

export function StatsSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Assistant",
      description: "Get personalized advice and guidance on gender equality topics",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engage with quizzes and educational content",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Users,
      title: "Community Platform",
      description: "Connect with others passionate about equality",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Target,
      title: "Actionable Resources",
      description: "Access tools and guides for real-world impact",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the tools and resources designed to promote gender equality education and awareness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-3`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

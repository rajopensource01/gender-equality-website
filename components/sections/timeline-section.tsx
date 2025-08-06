"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Sparkles } from 'lucide-react';

export function TimelineSection() {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Foundation & Core Features",
      description: "Building the essential platform with AI integration and interactive learning.",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI-powered assistant with Gemini integration",
        "Interactive quiz system",
        "Educational content sections",
        "Responsive design implementation"
      ]
    },
    {
      phase: "Phase 2",
      title: "Enhanced User Experience",
      description: "Adding advanced features and improving user engagement.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      features: [
        "User authentication and profiles",
        "Progress tracking and achievements",
        "Advanced quiz categories",
        "Resource library expansion"
      ]
    },
    {
      phase: "Phase 3",
      title: "Community & Growth",
      description: "Building community features and scaling the platform.",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      features: [
        "Community forums and discussions",
        "User-generated content",
        "Mobile application development",
        "Multi-language support"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our planned journey to create a comprehensive gender equality education platform
          </p>
        </motion.div>

        <div className="space-y-12">
          {roadmapData.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                          {item.phase}
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">Key Features</h4>
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`} />
                          <p className="text-gray-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="hidden lg:block">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

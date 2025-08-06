"use client";

import { motion } from "motion/react";
import { Users, Heart, BookOpen, Target } from 'lucide-react';

export function MissionSection() {
  const features = [
    { 
      icon: BookOpen, 
      label: "Educational Content", 
      description: "Interactive learning materials and resources",
      color: "from-purple-500 to-pink-500" 
    },
    { 
      icon: Users, 
      label: "Community Building", 
      description: "Connect with like-minded advocates",
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      icon: Heart, 
      label: "Awareness Campaigns", 
      description: "Promote understanding and empathy",
      color: "from-green-500 to-emerald-500" 
    },
    { 
      icon: Target, 
      label: "Actionable Solutions", 
      description: "Practical steps towards equality",
      color: "from-orange-500 to-red-500" 
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            To create an accessible platform that educates, empowers, and connects people 
            in the fight for gender equality through modern technology and AI-powered solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-2`}>
                {feature.label}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

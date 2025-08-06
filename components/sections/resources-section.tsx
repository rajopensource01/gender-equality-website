"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, FileText, Video, Headphones, Star } from 'lucide-react';

export function ResourcesSection() {
  const resources = [
    {
      id: 1,
      title: "Gender Equality in the Workplace: A Complete Guide",
      description: "Comprehensive guide covering policies, practices, and strategies for creating inclusive workplaces.",
      type: "PDF",
      rating: 4.9,
      downloads: 15420,
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      tags: ["Policy", "HR", "Leadership"]
    },
    {
      id: 2,
      title: "Breaking Barriers: Women in STEM",
      description: "Documentary exploring challenges and successes of women in science, technology, engineering, and mathematics.",
      type: "Video",
      rating: 4.8,
      downloads: 8930,
      icon: Video,
      color: "from-purple-500 to-pink-500",
      tags: ["STEM", "Career", "Inspiration"]
    },
    {
      id: 3,
      title: "Unconscious Bias Training Podcast Series",
      description: "12-part podcast series addressing unconscious bias in hiring, promotion, and daily workplace interactions.",
      type: "Audio",
      rating: 4.7,
      downloads: 12100,
      icon: Headphones,
      color: "from-green-500 to-emerald-500",
      tags: ["Training", "Bias", "Awareness"]
    }
  ];

  return (
    <section id="resources" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Resource Library
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive collection of tools, guides, and materials to advance gender equality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      {resource.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-teal-400 transition-colors duration-300">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {resource.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {resource.downloads.toLocaleString()}
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${resource.color} hover:opacity-90`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

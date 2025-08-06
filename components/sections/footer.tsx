"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "About",
      links: ["Our Mission", "Our Team", "Impact Report", "Careers", "Press Kit"]
    },
    {
      title: "Resources",
      links: ["Research Library", "Training Materials", "Policy Templates", "Best Practices", "Webinars"]
    },
    {
      title: "Community",
      links: ["Join Us", "Local Chapters", "Events", "Success Stories", "Volunteer"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Report Issue", "Privacy Policy", "Terms of Service"]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Gender Equality Hub</h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Empowering gender equality through AI-driven solutions, community building, and systemic change. 
                Join us in creating a world where everyone has equal opportunities and rights.
              </p>

              <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@genderequality.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Global Headquarters</span>
                </div>
              </div>
            </motion.div>

            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 text-sm text-gray-400"
            >
              <span>&copy; 2024 Gender Equality Hub. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-400" /> for equality
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

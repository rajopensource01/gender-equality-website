"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { AIAssistantSection } from "@/components/sections/ai-assistant-section";
import { StatsSection } from "@/components/sections/stats-section";
import { QuizSection } from "@/components/sections/quiz-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { CommunitySection } from "@/components/sections/community-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { CallToActionSection } from "@/components/sections/call-to-action-section";
import { Footer } from "@/components/sections/footer";
import { ProgressIndicator } from "@/components/ui/progress-indicator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <ProgressIndicator />
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <AIAssistantSection />
      <QuizSection />
      <ResourcesSection />
      <CommunitySection />
      <TimelineSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExpeditionSection from "@/components/ExpeditionSection";
import DonationSection from "@/components/DonationSection";
import ApplicationSection from "@/components/ApplicationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ProjectsSection />
        <ExpeditionSection />
        <DonationSection />
        <ApplicationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
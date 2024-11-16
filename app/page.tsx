"use client";

import { useEffect } from 'react';
import { enableSmoothScroll } from '@/utils/smoothScroll';
import { Banner } from "@/components/Banner"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { LogoTicker } from "@/components/LogoTicker"
import RecentProjects from "@/components/RecentProjects"
import VolunteerExperience from "@/components/VolunteerExperience"
import PricingSection from "@/components/Pricing"

export default function Home() {
  useEffect(() => {
    const cleanup = enableSmoothScroll();
    return () => cleanup();
  }, []);

  return (
    <main className="relative bg-[#010117] flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full items-center">
        <Banner />
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="logos">
          <LogoTicker />
        </div>
      </div>
      <div className="max-w-[80vw] w-full px-5 sm:px-10" id="projects">
        <RecentProjects />
      </div>
      <div className="w-full items-center" id="volunteer">
        <VolunteerExperience />
      </div>
      <div className="w-full items-center" id="pricing">
        <PricingSection />
      </div>
    </main>
  );
}

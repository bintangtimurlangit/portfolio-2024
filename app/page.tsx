"use client";

import { Banner } from "@/components/Banner"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { LogoTicker } from "@/components/LogoTicker"
import RecentProjects from "@/components/RecentProjects"
import { Volunteer } from "@/components/Volunteer"

export default function Home() {
  return (
    <main className="relative bg-[#010117] flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full items-center">
        <Banner />
        <Navbar />
        <Hero />
        <LogoTicker />
      </div>
      <div className="max-w-[80vw] w-full px-5 sm:px-10">
        <RecentProjects />
      </div>
      <div className="w-full items-center">
        <Volunteer />
      </div>
    </main>
  );
}

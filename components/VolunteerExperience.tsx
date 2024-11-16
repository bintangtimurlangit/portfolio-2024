"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCheck from "@/public/glassSend.svg";
import Image from "next/image";

const volunteerData = [
  {
    id: 1,
    role: "Documentation Assistant & Event Staff ",
    organization: "Starlight UMN",
    duration: "Aug 2021 - Dec 2021 Mar 2022 - Dec 2022",
    description: "Led the prestigious campus ambassador program and organized a grand finale event with a unique wayang-themed concept.",
    achievements: [
      "Successfully attracted 700+ attendees to the grand finale",
      "Hosted two guest stars for off-campus events",
      "Led key committee meetings and team management",
      "Managed sponsorships and external collaborations",
      "Oversaw event documentation and execution"
    ],
  },
  {
    id: 2,
    role: "Member of Pragiwaka",
    organization: "OMB UMN 2022",
    duration: "Mar 2022 - Sep 2022",
    description: "Mentored underprivileged students in web development fundamentals",
    achievements: [
      "Taught 30+ students HTML, CSS, and JavaScript",
      "Created comprehensive learning materials",
      "Organized coding bootcamp sessions",
      "90% student completion rate"
    ],
    image: "/volunteer-2.jpg"
  },
  {
    id: 3,
    role: "President",
    organization: "Mr. & Ms. UMN 2023",
    duration: "Jan 2023 - Dec 2023",
    description: "Led the prestigious campus ambassador program and organized a grand finale event with a unique wayang-themed concept.",
    achievements: [
      "Successfully attracted 700+ attendees to the grand finale",
      "Hosted two guest stars for off-campus events",
      "Led key committee meetings and team management",
      "Managed sponsorships and external collaborations",
      "Oversaw event documentation and execution"
    ],
    image: "/volunteer-3.jpg"
  }
];

const VolunteerExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % volunteerData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + volunteerData.length) % volunteerData.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    const totalCards = volunteerData.length;

    // Add previous card
    const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
    cards.push({ ...volunteerData[prevIndex], position: -1 });

    // Add current card
    cards.push({ ...volunteerData[currentIndex], position: 0 });

    // Add next card
    const nextIndex = (currentIndex + 1) % totalCards;
    cards.push({ ...volunteerData[nextIndex], position: 1 });

    return cards;
  };

  return (
    <div className="h-screen flex flex-col justify-center bg-gradient-to-b from-[#010117] via-[#1a1d3a] to-[#010117] relative">
      <div className="absolute inset-0 bg-gradient-radial from-[#9560EB]/10 via-transparent to-transparent blur-3xl"></div>
      
      <h1 className="relative text-center text-[25px] sm:text-[25px] md:text-center leading-tight font-bold mb-16">
        Volunteer{" "}
        <span className="block sm:block lg:inline text-[#9560EB] drop-shadow-[0_0_20px_rgba(149,96,235,0.7)]">
          Experience
        </span>
      </h1>

      <div className="relative flex items-center justify-center px-4 h-[500px]">
        <button
          onClick={handlePrev}
          className="absolute left-8 z-10 w-12 h-12 rounded-full
          flex items-center justify-center
          bg-[#201F30]/50 backdrop-blur-sm
          border border-white/[0.1]
          text-white/50 
          transition-all duration-300
          hover:bg-[#9560EB]/20
          hover:border-[#9560EB]/50
          hover:text-white
          hover:scale-110
          hover:shadow-[0_0_20px_rgba(149,96,235,0.3)]"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        <div className="relative w-full max-w-4xl h-full">
          <AnimatePresence mode="popLayout">
            {getVisibleCards().map((item) => (
              <motion.div
                key={`${item.id}-${item.position}`}
                initial={{ 
                  scale: 0.8, 
                  opacity: 0,
                  x: item.position > 0 ? 200 : -200
                }}
                animate={{
                  scale: item.position === 0 ? 1 : 0.8,
                  opacity: item.position === 0 ? 1 : 0.5,
                  x: item.position * 400,
                  zIndex: item.position === 0 ? 1 : 0,
                }}
                exit={{ 
                  scale: 0.8, 
                  opacity: 0,
                  x: item.position < 0 ? -200 : 200
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 right-0 mx-auto w-full max-w-4xl"
              >
                <div 
                  className="w-full h-[450px] rounded-2xl p-8
                  shadow-[0_8px_16px_rgb(0_0_0/0.4)] 
                  border border-white/[0.1] 
                  hover:border-[#9560EB]/50
                  hover:shadow-[0_8px_30px_rgb(149,96,235,0.2)]
                  transition-all duration-500 ease-out
                  overflow-hidden"
                  style={{ 
                    backgroundColor: "#13162D",
                    transform: `perspective(1000px) rotateY(${item.position * -5}deg)`
                  }}
                >
                  <div className="flex gap-8 h-full">
                    {item.id === 1 ? (
                      <div className="relative w-[300px] h-full flex-shrink-0 flex flex-col gap-4">
                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-[#201F30]">
                          <Image
                            src="/volunteer-1-a.jpg"
                            alt={`${item.organization} event 1`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                        </div>
                        
                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-[#201F30]">
                          <Image
                            src="/volunteer-1-b.jpg"
                            alt={`${item.organization} event 2`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-[300px] h-full rounded-lg overflow-hidden bg-[#201F30] flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={`${item.organization} image`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                    )}

                    <div className="flex flex-col flex-grow">
                      <h2 className="text-2xl font-semibold text-[#ffffff] drop-shadow-[0_0_35px_rgba(149,96,235,0.9)]">
                        {item.role}
                      </h2>
                      
                      <h3 className="text-[16px] text-[#9560EB] mt-2">
                        {item.organization}
                      </h3>
                      
                      <p className="text-neutrals-6 mt-1 text-sm">
                        {item.duration}
                      </p>

                      <p className="text-washed-purple-800 mt-4 text-sm">
                        {item.description}
                      </p>

                      <div className="mt-6">
                        <p className="font-normal text-[14px] text-white mb-3">
                          Key Achievements
                        </p>
                        <ul className="font-normal flex flex-col gap-3">
                          {item.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-neutrals-6 text-[14px]"
                            >
                              <GlassCheck />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-8 z-10 w-12 h-12 rounded-full
          flex items-center justify-center
          bg-[#201F30]/50 backdrop-blur-sm
          border border-white/[0.1]
          text-white/50 
          transition-all duration-300
          hover:bg-[#9560EB]/20
          hover:border-[#9560EB]/50
          hover:text-white
          hover:scale-110
          hover:shadow-[0_0_20px_rgba(149,96,235,0.3)]"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VolunteerExperience;
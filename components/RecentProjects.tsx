"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data/index";
import { PinContainer } from "./Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="text-center text-[25px] sm:text-[25px] md:text-center leading-tight font-bold">
        A small selection of my{" "}
        <span className="block sm:block lg:inline text-[#9560EB]">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-10 p-2">
                <div
                  className="relative w-full h-full lg:rounded-3xl shadow-[0_0_15px_rgba(149,96,235,0.5)]"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src={item.img}
                    alt="cover"
                    className="absolute bottom-0 w-full h-full object-cover brightness-110 hover:brightness-125 transition-all duration-300 lg:rounded-3xl"
                  />
                  <img 
                    src="/bg.png" 
                    alt="bgimg" 
                    className="relative z-10 w-full h-full object-cover opacity-50 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-md md:text-xs text-sm text-purple">
                    Check Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
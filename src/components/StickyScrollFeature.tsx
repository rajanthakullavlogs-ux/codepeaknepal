"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const contentData = [
  {
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals to create a tailored digital strategy.",
    videoUrl: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Design & Prototyping",
    description: "Our designers craft beautiful, intuitive interfaces focused on user experience.",
    videoUrl: "https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4",
  },
  {
    title: "Development & Engineering",
    description: "We build robust, scalable applications using modern technologies.",
    videoUrl: "https://videos.pexels.com/video-files/18069166/18069166-uhd_2160_3840_24fps.mp4",
  },
  {
    title: "Testing & Launch",
    description: "Rigorous testing ensures a flawless product before it goes live to the world.",
    videoUrl: "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
  }
];

export default function StickyScrollFeature() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin the intro text section
    const trigger = ScrollTrigger.create({
      trigger: ".intro-wrapper",
      start: "top top",
      end: "bottom top",
      pin: ".text-align-center",
      pinSpacing: false,
    });

    const handleScroll = () => {
      if (!trigger) return;
      
      // Calculate scroll position relative to the START of the trigger
      // This makes it work perfectly regardless of where it is on the page.
      let scrollPosition = window.scrollY - trigger.start;
      if (scrollPosition < 0) scrollPosition = 0;

      let windowHeight = window.innerHeight + 550; // +550 = increasing the scroll distance before each class changes
      let sections = document.querySelectorAll('.tabs_let-content');
      let videos = document.querySelectorAll('.tabs_video');
      let lastSectionIndex = sections.length - 1;

      sections.forEach((section, index) => {
        if (scrollPosition >= (index * windowHeight) && scrollPosition < ((index + 1) * windowHeight)) {
          section.classList.add('is-1');
          videos[index].classList.add('is-1');
        } else {
          // Remove is-1 class from all sections except the last one
          if (index !== lastSectionIndex) {
            section.classList.remove('is-1');
            videos[index].classList.remove('is-1');
          }
        }
      });

      // Keep is-1 class on the last section until user scrolls past it
      if (scrollPosition > (lastSectionIndex * windowHeight)) {
        sections[lastSectionIndex].classList.add('is-1');
        videos[lastSectionIndex].classList.add('is-1');
      } else {
        sections[lastSectionIndex].classList.remove('is-1');
        videos[lastSectionIndex].classList.remove('is-1');
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial state check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      trigger.kill();
    };
  }, { scope: containerRef });

  return (
    <section className="intro-wrapper relative w-full bg-navy text-white" ref={containerRef}>
      {/* 
        This wrapper creates the scrollable height based on the number of tabs.
        Using windowHeight (100vh + 550px) to perfectly match the JS logic interval.
      */}
      <div style={{ height: `calc(${contentData.length} * (100vh + 550px))` }} className="w-full relative">
        
        {/* Pinned Section */}
        <div className="text-align-center h-screen w-full flex items-center justify-center top-0 overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pb-20">
            
            {/* Left Content (Tabs) */}
            <div className="flex flex-col gap-6 w-full max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Our Approach
              </h2>
              <div className="relative flex flex-col gap-4">
                {contentData.map((item, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "tabs_let-content p-6 rounded-2xl border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "opacity-30 translate-x-[-30px] scale-95",
                      "[&.is-1]:opacity-100 [&.is-1]:translate-x-0 [&.is-1]:scale-100 [&.is-1]:border-primary/50 [&.is-1]:bg-white/5 [&.is-1]:shadow-2xl [&.is-1]:shadow-primary/10"
                    )}
                  >
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm lg:text-base text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content (Videos) */}
            <div className="relative h-[50vh] lg:h-[70vh] w-full rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
              {contentData.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "tabs_video absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "opacity-0 scale-105 blur-sm",
                    "[&.is-1]:opacity-100 [&.is-1]:scale-100 [&.is-1]:blur-0"
                  )}
                >
                  <video
                    src={item.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Premium overlay gradient for readability and aesthetics */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

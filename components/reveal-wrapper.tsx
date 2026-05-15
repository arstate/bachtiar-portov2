'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface RevealWrapperProps {
  aboutMe: React.ReactNode;
  selectedWorks: React.ReactNode;
}

export default function RevealWrapper({ aboutMe, selectedWorks }: RevealWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the position of the container relative to the viewport.
  // "start 100vh" means progress = 0 when container starts entering at the bottom of the screen.
  // "start 65px" means progress = 1 when the top of the container hits 65px from the top (under header).
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100vh", "start 65px"]
  });

  // We want Selected Works to be visible but properly positioned.
  // We can just keep it in normal document flow below About Me. 
  // About Me already has a background color to mask out the video under it.

  return (
    <div ref={containerRef} className="relative w-full z-20 bg-transparent flex flex-col">
      
      {/* LAYER 3: ABOUT ME (Z-30) */}
      <div className="relative z-30 w-full bg-[#FDFCFB] shadow-[0_-20px_60px_rgba(0,0,0,0.15)] pointer-events-auto snap-start">
        {aboutMe}
      </div>

      {/* LAYER 2: SELECTED WORKS (Normal Flow, Z-20) */}
      <div className="relative z-20 w-full pointer-events-auto bg-[#050505]">
        {selectedWorks}
      </div>

    </div>
  );
}

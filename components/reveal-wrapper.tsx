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

  // We want Selected Works to be completely hidden (opacity 0) while About Me is scrolling UP
  // to cover the Video section. Once About Me reaches the top (progress = 1), we make Selected Works visible
  // so it's ready to be revealed AS About Me continues to scroll up.
  const opacity = useTransform(scrollYProgress, [0.99, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full z-20 bg-transparent">
      
      {/* LAYER 2: SELECTED WORKS (Z-20) */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
      >
        <div className="sticky top-[65px] w-full pointer-events-auto">
          {selectedWorks}
        </div>
      </motion.div>

      {/* LAYER 3: ABOUT ME (Z-30) */}
      <div className="relative z-30 w-full bg-[#FDFCFB] border-t border-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] pointer-events-auto">
        {aboutMe}
      </div>

      {/* SPACER (Z-10) - Ensures there is enough height for the user to scroll 
          while Selected Works remains sticky. */}
      {/* Set to a large height (250vh) so that if Selected Works is very tall (e.g. Bento grid),
          it has room to stick before the container pushes it up to reveal its bottom. */}
      <div className="relative z-10 w-full h-[250vh] pointer-events-none" />
      
    </div>
  );
}

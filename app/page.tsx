import Image from 'next/image';

import FloatingGallery from '@/components/floating-gallery';
import RevealWrapper from '@/components/reveal-wrapper';
import AboutMeSection from '@/components/about-me-section';
import SelectedWorksSection from '@/components/selected-works-section';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col relative w-full bg-[#FDFCFB]">
      {/* 
        Header Section
        - Thin black borders (border-black)
        - Controlled asymmetry and experimental layout structure
        - Ample white space
      */}
      <header className="sticky top-0 z-50 bg-[#FDFCFB] w-full h-[70px] md:h-[85px] border-b border-black px-6 flex justify-between items-center shrink-0">
        <div className="flex flex-col justify-center">
          <span className="text-sm md:text-lg tracking-[0.3em] uppercase font-black leading-none">
            BACHTIAR ARYANSYAH PUTRA
          </span>
          <span className="text-[10px] opacity-70 uppercase mt-[6px] hidden sm:block tracking-[0.2em] font-medium leading-none">
            Photographer & Cinematographer
          </span>
        </div>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest hidden sm:flex items-center">
           <span className="border-b border-black pb-0.5">Est. 2026</span>
        </div>
      </header>
      
      <div className="w-full border-b border-black">
        <h1 
          className="font-serif text-[22vw] sm:text-[18vw] leading-[0.8] tracking-[-0.04em] uppercase italic text-center w-full py-4 sm:py-6 select-none"
          style={{ 
            // Using inline styles for extreme typography fine-tuning to ensure it fills the width nicely
            transform: 'scaleY(1.05)', // slight vertical stretch for editorial magazine look
          }}
        >
          Portfolio
        </h1>
      </div>
      
      {/* LAYER 1: VIDEO & FLOATING CARDS (Z-10) */}
      <div className="relative z-10 w-full">
        <FloatingGallery />
      </div>

      {/* LAYER 2 & LAYER 3: REVEAL MASKING EFFECT */}
      {/* We use -mt-[80vh] with the 600vh Gallery to wait for the text to disappear, pause, 
          and then slide up exactly enough to cover the video before it unsticks. */}
      <div className="-mt-[80vh] relative z-20 w-full">
        <RevealWrapper 
          aboutMe={<AboutMeSection />}
          selectedWorks={<SelectedWorksSection />}
        />
      </div>

      {/* Footer Decorative Bar */}
      <footer className="relative z-40 w-full border-t border-black py-4 px-6 flex justify-center items-center text-[8px] uppercase tracking-[0.2em] font-medium mt-auto bg-[#FDFCFB]">
        <span>&copy;2026 Bachtiar Aryansyah Putra. All rights reserved.</span>
      </footer>

    </main>
  );
}

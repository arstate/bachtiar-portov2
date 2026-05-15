import Image from 'next/image';

import FloatingGallery from '@/components/floating-gallery';
import RevealWrapper from '@/components/reveal-wrapper';
import AboutMeSection from '@/components/about-me-section';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col relative w-full bg-[#FDFCFB]">
      {/* 
        Header Section
        - Thin black borders (border-black)
        - Controlled asymmetry and experimental layout structure
        - Ample white space
      */}
      <header className="sticky top-0 z-50 bg-[#FDFCFB] w-full border-b border-black py-4 px-6 flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-sm md:text-lg tracking-[0.3em] uppercase font-black">
            BACHTIAR ARYANSYAH PUTRA
          </span>
          <span className="text-[10px] opacity-70 uppercase mt-1 hidden sm:block tracking-[0.2em] font-medium">
            Photographer & Cinematographer
          </span>
        </div>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest hidden sm:flex">
           <span className="border-b border-black">Est. 2026</span>
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
          selectedWorks={
            <div className="w-full bg-[#FDFCFB] flex flex-col">
            {/* Showcase Section */}
            <section className="w-full border-t border-black flex flex-col">
        {/* Banner / Title */}
        <div className="w-full border-b border-black py-4 px-6 flex justify-between items-center bg-black text-white">
           <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">Selected Works</span>
           <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80">Archive. 001</span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[250px] md:auto-rows-[350px]">
          
          {/* Item 1: Large (5 cols, 2 rows) */}
          <div className="group relative border-b md:border-b-0 md:border-r md:border-black col-span-1 md:col-span-6 lg:col-span-5 row-span-2 overflow-hidden bg-neutral-200 cursor-crosshair">
            <Image 
              src="https://images.unsplash.com/photo-1541814670085-f55ae99daebf?q=80&w=1500&auto=format&fit=crop" 
              alt="Editorial 1" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[800ms]" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-black transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 text-[10px] md:text-xs uppercase tracking-widest font-bold border-2 border-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
              NYC Street / Vol. 1
            </div>
            {/* Random Y2K floating label */}
            <div className="absolute top-8 -right-12 bg-black text-white px-20 py-2 text-[10px] uppercase font-bold tracking-[0.5em] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
              RAW CAPTURE
            </div>
          </div>

          {/* Item 2: Small (3 cols, 1 row) */}
          <div className="group relative border-b md:border-b-0 md:border-r border-black col-span-1 md:col-span-6 lg:col-span-3 row-span-1 overflow-hidden bg-neutral-300 cursor-crosshair">
            <Image 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop" 
              alt="Portrait 1" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[0px] group-hover:border-[8px] border-black transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Portraiture
            </div>
          </div>

          {/* Item 3: Medium (4 cols, 1 row) */}
          <div className="group relative border-b border-black col-span-1 md:col-span-12 lg:col-span-4 row-span-1 overflow-hidden bg-neutral-100 cursor-crosshair">
            <Image 
              src="https://images.unsplash.com/photo-1621360841013-c76831f13bf3?q=80&w=1200&auto=format&fit=crop" 
              alt="Fashion 1" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 blur-[2px] group-hover:blur-0" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="text-white text-4xl md:text-5xl font-serif italic drop-shadow-lg">Mise en scène</span>
            </div>
            <div className="absolute inset-0 border-[0px] group-hover:border-b-[12px] group-hover:border-l-[12px] border-black transition-all duration-300 pointer-events-none z-30" />
          </div>

          {/* Item 4: Wide (7 cols, 1 row) */}
          <div className="group relative border-b md:border-b-0 md:border-r border-black col-span-1 md:col-span-12 lg:col-span-7 row-span-1 border-t-0 md:-mt-[1px] lg:mt-0 overflow-hidden bg-neutral-400 cursor-crosshair">
            <Image 
              src="https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=2000&auto=format&fit=crop" 
              alt="Cinematic 1" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
            {/* Split color block hover */}
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#FF4500] mix-blend-multiply opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-x-[-100%] group-hover:translate-x-0" />
            <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#00FF00] mix-blend-multiply opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-x-[100%] group-hover:translate-x-0" />
            
            <div className="absolute inset-0 flex justify-between items-end p-6 z-20">
              <span className="text-white text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                02 // Motion
              </span>
              <span className="text-white text-[10px] md:text-xs uppercase tracking-widest font-mono translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                REC. 709
              </span>
            </div>
          </div>

        </div>
        
        {/* Row 2 of Grid (to keep it clean for LG screens) */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[450px]">
          
          {/* Item 5: Hero / Cinema (8 cols) */}
          <div className="group relative border-b md:border-b-0 md:border-r border-t lg:border-t-0 border-black col-span-1 md:col-span-8 overflow-hidden bg-neutral-50 cursor-crosshair">
            <Image 
              src="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1600&auto=format&fit=crop" 
              alt="Concept" 
              fill 
              className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[0px] group-hover:border-[16px] border-black transition-all duration-300 pointer-events-none z-10" />
            
            {/* Giant Title appearing on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
               <h3 className="font-sans text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase text-white mix-blend-difference opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500">
                 Duality
               </h3>
               <span className="text-white bg-black px-3 py-1 mt-4 text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                 Exhibition Series
               </span>
            </div>
          </div>

          {/* Item 6: Tall Portrait (4 cols) */}
          <div className="group relative border-b md:border-b-0 border-t md:border-t lg:border-t-0 border-black col-span-1 md:col-span-4 overflow-hidden bg-neutral-600 cursor-crosshair">
            <Image 
              src="https://images.unsplash.com/photo-1618018357388-69df1e0394c8?q=80&w=1000&auto=format&fit=crop" 
              alt="Editorial 2" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s]" 
              referrerPolicy="no-referrer"
            />
            {/* Film grain overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
            
            <div className="absolute top-6 right-6 border border-white text-white p-2 rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 rotate-[-45deg] group-hover:rotate-0 transition-all duration-500 z-20">
              <span className="text-[8px] font-bold">INFO</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  }
/>
</div>

      {/* Footer Decorative Bar */}
      <footer className="relative z-40 w-full border-t border-black py-4 px-6 flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.2em] font-medium gap-4 md:gap-0 mt-auto bg-[#FDFCFB]">
        <span>All rights reserved &copy; 2026</span>
        <div className="flex gap-4 md:gap-8">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Behance</a>
          <a href="#" className="hover:underline">Vimeo</a>
        </div>
        <span>Design System v1.0.2</span>
      </footer>

    </main>
  );
}

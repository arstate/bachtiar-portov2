export default function AboutMeSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-12 h-auto py-24 md:py-32">
      {/* Left Sidebar / Info (rotated text) */}
      <div className="md:col-span-2 lg:col-span-3 border-b md:border-b-0 md:border-r border-black p-6 flex flex-col justify-between items-start md:items-end md:relative overflow-hidden">
        <div className="hidden md:block absolute top-1/2 left-6 rotate-[-90deg] origin-top-left -translate-y-1/2 whitespace-nowrap">
          <span className="text-[10px] uppercase tracking-[0.6em] font-medium opacity-40">
            VISIONARY / ARCHITECT OF LIGHT
          </span>
        </div>
        <div className="w-full border-t border-black pt-4 mt-auto">
          <span className="text-[10px] block uppercase font-bold tracking-[0.2em]">About Me</span>
          <span className="text-[10px] block uppercase opacity-60 mt-2">Volume I</span>
        </div>
      </div>

      {/* Center / Main Bio Content */}
      <div className="md:col-span-7 lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black relative">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.85] tracking-tighter italic mb-10 w-max text-black">
          Capturing<br />
          <span className="pl-8 md:pl-16">Raw Emotion.</span>
        </h2>
        
        <div className="relative z-10 max-w-md space-y-6 md:ml-auto mr-auto md:mr-0 pl-0 md:pl-12 border-l-0 md:border-l-[0.5px] border-black/20">
          <p className="text-xs md:text-sm leading-relaxed font-sans text-justify">
            I am a visual storyteller driven by the visceral power of the lens. My work lives at the intersection of high-fashion elegance and brutalist anti-design, stripping away the unnecessary to reveal clear, unpolished truth.
          </p>
          <p className="text-xs md:text-sm leading-relaxed font-sans text-justify">
            Through controlled asymmetry and a deliberate embrace of negative space, I craft visual narratives that challenge conventional framing. Every captured frame is a calculated study in tension, light, and geometry.
          </p>
        </div>
      </div>

      {/* Right Sidebar / Details */}
      <div className="md:col-span-3 lg:col-span-3 p-6 flex flex-col justify-between bg-neutral-50/30">
        <div className="space-y-8 w-full">
          <div className="group">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">Cinematography</span>
              <span className="text-[10px] font-bold">I</span>
            </div>
            <div className="h-[1px] bg-black w-full"></div>
          </div>
          
          <div className="group">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">Portraiture</span>
              <span className="text-[10px] font-bold">II</span>
            </div>
            <div className="h-[1px] bg-black w-full opacity-60"></div>
          </div>
          
          <div className="group">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">Editorial</span>
              <span className="text-[10px] font-bold">III</span>
            </div>
            <div className="h-[1px] bg-black w-full opacity-30"></div>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24 w-full flex justify-end">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[1px] border-black flex items-center justify-center p-2 text-center group cursor-crosshair hover:bg-black hover:text-white transition-colors duration-500 bg-[#FDFCFB]">
              <span className="text-[8px] uppercase tracking-[0.2em] font-medium">Read<br/>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

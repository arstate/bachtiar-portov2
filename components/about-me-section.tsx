export default function AboutMeSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-85px)] shrink-0">
      {/* Left Sidebar / Info (rotated text) */}
      <div className="md:col-span-2 lg:col-span-3 border-b md:border-b-0 md:border-r border-black p-6 flex flex-col justify-between items-start md:items-end md:relative overflow-hidden">
        <div className="hidden md:block absolute top-1/2 left-6 rotate-[-90deg] origin-top-left -translate-y-1/2 whitespace-nowrap">
          <span className="text-[10px] uppercase tracking-[0.6em] font-medium opacity-40">
            VISIONARY / ARCHITECT OF LIGHT
          </span>
        </div>
        <div className="w-full border-t border-black pt-4 mt-auto">
          <span className="text-[10px] block uppercase font-bold tracking-[0.2em]">My Profile</span>
          <span className="text-[10px] block uppercase opacity-60 mt-2">Volume I</span>
        </div>
      </div>

      {/* Center / Main Bio Content */}
      <div className="md:col-span-7 lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black relative">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.85] tracking-tighter italic mb-10 w-max text-black">
          My<br />
          <span className="pl-8 md:pl-16">Profile.</span>
        </h2>
        
        <div className="relative z-10 max-w-md space-y-6 md:ml-auto mr-auto md:mr-0 pl-0 md:pl-12 border-l-0 md:border-l-[0.5px] border-black/20">
          <p className="text-xs md:text-sm leading-relaxed font-sans text-justify">
            Allowing the visuals to speak for themselves is the foundation of my work. Instead of being limited by production silos, I control the entire process—capturing the essence on camera and refining the final rhythm in post-production.
          </p>
          <p className="text-xs md:text-sm leading-relaxed font-sans text-justify">
            Backed by an understanding of Graphic Design and my track record with Arstate.Cinema since 2020, I forge raw concepts into flawless visual narratives. The process might be unusual, but my final work does all the talking.
          </p>
        </div>
      </div>

      {/* Right Sidebar / Details */}
      <div className="md:col-span-3 lg:col-span-3 p-6 flex flex-col gap-10 bg-neutral-50/30 overflow-y-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-6">
          <div className="border-l border-black pl-4">
            <h3 className="text-3xl font-serif italic leading-none">6+</h3>
            <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 mt-2">Years Active</p>
          </div>
          <div className="border-l border-black pl-4 text-right md:text-left">
            <h3 className="text-3xl font-serif italic leading-none">200+</h3>
            <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 mt-2">Events Covered</p>
          </div>
          <div className="border-l border-black pl-4">
            <h3 className="text-3xl font-serif italic leading-none">20+</h3>
            <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 mt-2">Brand Clients</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-8 mt-4">
          <div className="flex items-center gap-4">
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Experience</h4>
             <div className="h-[1px] bg-black/10 w-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-[11px] font-bold uppercase tracking-wider">PT Cita Entertainment</h5>
                <span className="text-[9px] font-mono opacity-40">22-24</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest opacity-60 mb-2">Divisi Multimedia</p>
              <p className="text-[10px] leading-relaxed text-neutral-600">
                Videographer, Photographer, Camera Operator for major events and highlight editing. Managed post-production workflows.
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-[11px] font-bold uppercase tracking-wider">Arstate.Cinema</h5>
                <span className="text-[9px] font-mono opacity-40">20-PR</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest opacity-60 mb-2">Founder & Creative Director</p>
              <p className="text-[10px] leading-relaxed text-neutral-600">
                Managing photo/video documentation services for weddings, corporate, commercials, and leading the creative post-production process.
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-[11px] font-bold uppercase tracking-wider">Tiar Property</h5>
                <span className="text-[9px] font-mono opacity-40">25-PR</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest opacity-60 mb-2">Social Media Specialist</p>
              <p className="text-[10px] leading-relaxed text-neutral-600">
                Creative Social Media Strategy & Content Planning. Digital Imaging & AI Workflow (Adobe Firefly).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-85px)] shrink-0">
      {/* Left Sidebar / Info (rotated text) */}
      <div className="md:col-span-2 lg:col-span-3 border-b md:border-b-0 md:border-r border-black p-6 flex flex-col justify-between items-start md:items-stretch md:relative overflow-hidden">
        <div className="hidden md:block absolute top-1/2 left-6 rotate-[-90deg] origin-top-left -translate-y-1/2 whitespace-nowrap z-10">
          <span className="text-[10px] uppercase tracking-[0.6em] font-medium opacity-40">
            VISIONARY / ARCHITECT OF LIGHT
          </span>
        </div>
        
        <div className="relative w-full h-[50vh] md:h-full md:ml-12 mb-8 md:mb-12 overflow-hidden bg-neutral-100 mt-2 md:mt-0">
           <Image
             src="https://github.com/user-attachments/assets/470cf318-e681-439c-ad10-0bb2d95bac8c"
             alt="Portrait"
             fill
             className="object-cover grayscale"
             referrerPolicy="no-referrer"
           />
        </div>

        <div className="w-full border-t border-black pt-4 mt-auto relative z-10">
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
      <div className="md:col-span-3 lg:col-span-3 p-6 flex flex-col gap-6 bg-neutral-50/30 overflow-y-auto">
        {/* Stats Section */}
        <div className="flex justify-between items-center w-full gap-2 border-b border-black/10 pb-4">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-serif italic leading-none">6+</h3>
            <p className="text-[8px] uppercase tracking-widest opacity-60 mt-1">Years Active</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-serif italic leading-none">200+</h3>
            <p className="text-[8px] uppercase tracking-widest opacity-60 mt-1">Events Covered</p>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-xl md:text-2xl font-serif italic leading-none">20+</h3>
            <p className="text-[8px] uppercase tracking-widest opacity-60 mt-1">Brand Clients</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-6 mt-2">
          <div className="flex items-center gap-4">
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Experience</h4>
             <div className="h-[1px] bg-black/10 w-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-xs font-bold uppercase tracking-wider">PT Cita Entertainment</h5>
                <span className="text-[10px] font-mono opacity-40">2022 - 2024</span>
              </div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-60 mb-2">Divisi Multimedia</p>
              <p className="text-xs leading-relaxed text-neutral-600">
                Videographer, Photographer, Camera Operator for major events and highlight editing. Managed post-production workflows.
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-xs font-bold uppercase tracking-wider">Arstate.Cinema</h5>
                <span className="text-[10px] font-mono opacity-40">2020 - Present</span>
              </div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-60 mb-2">Founder & Creative Director</p>
              <p className="text-xs leading-relaxed text-neutral-600">
                Managing photo/video documentation services for weddings, corporate, commercials, and leading the creative post-production process.
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-xs font-bold uppercase tracking-wider">Tiar Property</h5>
                <span className="text-[10px] font-mono opacity-40">2025 - Present</span>
              </div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-60 mb-2">Social Media Specialist</p>
              <p className="text-xs leading-relaxed text-neutral-600">
                Creative Social Media Strategy & Content Planning. Digital Imaging & AI Workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="space-y-6 mt-8 pt-8 border-t border-black/10">
          <div className="flex items-center gap-4">
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Connect With Me</h4>
             <div className="h-[1px] bg-black/10 w-full"></div>
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="https://www.linkedin.com/in/bachtiar-aryansyah-putra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
               <Linkedin className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
               <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">BACHTIAR ARYANSYAH PUTRA</span>
            </a>
            <a href="https://instagram.com/aryansyah.ow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
               <Instagram className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
               <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">aryansyah.ow</span>
            </a>
            <a href="mailto:aryansyah1509@gmail.com" className="flex items-center gap-3 group">
               <Mail className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
               <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">aryansyah1509@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

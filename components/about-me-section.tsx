"use client";

import Image from "next/image";
import { Linkedin, Instagram, Mail, Download, X, FileText, Layout } from "lucide-react";
import { useState } from "react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3" />
  </svg>
);

export default function AboutMeSection() {
  const [showCVModal, setShowCVModal] = useState(false);
  const [cvPreviewType, setCvPreviewType] = useState<"ats" | "design" | null>(null);

  const handleDownloadWait = () => {
    // For now do nothing or show toast
  };

  return (
    <>
    <section className="w-full grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-85px)] shrink-0 relative">
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
      <div className="md:col-span-7 lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black relative overflow-hidden">
        
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        {/* Decorative Elements */}
        {/* Faded Background "About Me" Text */}
        <div 
          className="absolute top-10 md:top-16 left-8 md:left-32 pointer-events-none select-none text-black opacity-[0.05] font-serif text-[80px] md:text-[160px] leading-none font-bold whitespace-nowrap"
          style={{
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 90%)",
            maskImage: "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 90%)"
          }}
        >
          About Me
        </div>

        <h2 className="relative z-10 font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.85] tracking-tighter italic mb-10 mt-4 md:mt-6 lg:mt-8 w-max text-black">
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
          <div className="pt-8 pb-4">
            <div className="grid grid-cols-3 gap-6 items-center w-full border-t border-b border-black/10 py-6 mb-6">
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-serif italic leading-none">6+</h3>
                <p className="text-[8px] uppercase tracking-widest opacity-60 mt-1">Years Active</p>
              </div>
              <div className="flex flex-col text-center">
                <h3 className="text-xl md:text-2xl font-serif italic leading-none">200+</h3>
                <p className="text-[8px] uppercase tracking-widest opacity-60 mt-1">Events Covered</p>
              </div>
              <div className="flex flex-col text-center md:text-right">
                <h3 className="text-xl md:text-2xl font-serif italic leading-none">20+</h3>
                <p className="text-[8px] uppercase tracking-widest opacity-60 mt-1">Brand Clients</p>
              </div>
            </div>

             <button
               onClick={() => setShowCVModal(true)}
               className="group flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 border border-black hover:bg-black hover:text-white transition-all font-sans text-xs uppercase tracking-widest font-bold"
             >
               <span>Download CV</span>
               <Download className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
             </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar / Details */}
      <div className="md:col-span-3 lg:col-span-3 p-6 flex flex-col gap-6 bg-neutral-50/30 overflow-y-auto">
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
        <div className="space-y-4 mt-4 pt-4 border-t border-black/10">
          <div className="flex items-center gap-4">
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Connect With Me</h4>
             <div className="h-[1px] bg-black/10 w-full"></div>
          </div>
          
          <div className="flex flex-col gap-3">
            <a href="https://www.linkedin.com/in/bachtiar-aryansyah-putra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
               <Linkedin className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
               <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">BACHTIAR ARYANSYAH PUTRA</span>
            </a>
            <a href="https://instagram.com/aryansyah.ow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
               <Instagram className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
               <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">aryansyah.ow</span>
            </a>
            <a href="https://www.tiktok.com/@tiar.arstate.cinema" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
               <TikTokIcon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
               <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">tiar.arstate.cinema</span>
            </a>
            <a href="mailto:aryansyah1509@gmail.com" className="flex items-center gap-3 group">
               <Mail className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
               <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">aryansyah1509@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    {/* CV Download Modal */}
    {showCVModal && (
      <div className="fixed top-[70px] md:top-[85px] left-0 w-full h-[calc(100dvh-70px)] md:h-[calc(100dvh-85px)] z-[9999] flex items-center justify-center bg-[#F4F3ED]/95 backdrop-blur-sm px-4">
        <div className="relative w-full max-w-2xl bg-[#F4F3ED] border border-black/20 shadow-2xl flex flex-col max-h-[90vh]">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-black">
            <h3 className="font-serif italic text-2xl">
              {cvPreviewType ? `Preview ${cvPreviewType === "ats" ? "ATS" : "Design"} CV` : "Select CV Format"}
            </h3>
            <button 
              onClick={() => {
                setShowCVModal(false);
                setCvPreviewType(null);
              }}
              className="p-2 hover:bg-black/5 transition-colors rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
            {!cvPreviewType ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Option: ATS CV */}
                <button 
                  onClick={() => setCvPreviewType("ats")}
                  className="group flex flex-col items-center justify-center gap-4 p-8 border border-black/20 hover:border-black bg-neutral-50 hover:bg-neutral-100 transition-all text-left w-full h-full"
                >
                  <FileText className="w-12 h-12 stroke-[1] text-black opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="text-center">
                    <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-2">CV ATS</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px] mx-auto">
                      Clean, text-based format optimized for Applicant Tracking Systems and corporate applications.
                    </p>
                  </div>
                </button>

                {/* Option: Design CV */}
                <button 
                  onClick={() => setCvPreviewType("design")}
                  className="group flex flex-col items-center justify-center gap-4 p-8 border border-black/20 hover:border-black bg-neutral-50 hover:bg-neutral-100 transition-all text-left w-full h-full"
                >
                  <Layout className="w-12 h-12 stroke-[1] text-black opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="text-center">
                    <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-2">CV Design</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px] mx-auto">
                      Visually engaging format with creative layout, best for direct applications and portfolio submissions.
                    </p>
                  </div>
                </button>

              </div>
            ) : (
              <div className="flex flex-col h-full bg-neutral-100/50 border border-black/10 items-center justify-center min-h-[50vh] relative p-4 md:p-8">
                {cvPreviewType === "ats" ? (
                  <iframe 
                    src="https://drive.google.com/file/d/1bAbi1o8eHfKgnHV67dtYP7V7AaUxf5y8/preview" 
                    className="w-full h-[60vh] border border-black/20" 
                    allow="autoplay"
                  ></iframe>
                ) : (
                  <div className="w-full h-[60vh] overflow-y-auto border border-black/20 bg-white">
                     <Image 
                       src="https://github.com/user-attachments/assets/2bec4ee0-eacc-4095-bac5-3871f8f66495" 
                       alt="Design CV Preview" 
                       width={1200}
                       height={1600}
                       className="w-full h-auto object-contain" 
                       priority
                     />
                  </div>
                )}
                
                <div className="absolute top-6 left-6 z-10 bg-white/80 px-3 py-2 backdrop-blur-sm border border-black/10 shadow-sm rounded-md">
                  <button 
                    onClick={() => setCvPreviewType(null)}
                    className="text-[10px] uppercase tracking-widest font-bold hover:opacity-70 transition-opacity flex items-center gap-2"
                  >
                    <span>&larr; Back</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer (only visible when a preview is selected) */}
          {cvPreviewType && (
            <div className="p-6 border-t border-black flex justify-end gap-4 bg-neutral-50">
               <button 
                 onClick={() => setCvPreviewType(null)}
                 className="px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold border border-black hover:bg-black/5 transition-colors"
               >
                 Cancel
               </button>
               <a 
                 href={
                   cvPreviewType === "ats" 
                     ? "https://drive.usercontent.google.com/download?id=1bAbi1o8eHfKgnHV67dtYP7V7AaUxf5y8&export=download&authuser=0&confirm=t&uuid=0b169bdd-4cc0-40e2-8df5-36e25510c73c&at=ALBwUgn1RcZ2OVDJxwF5yzB1ixK-:1779028903076"
                     : "https://drive.usercontent.google.com/download?id=1Fj2DMg2ByOwZlHXuea6Q_iP23evyq2WR&export=download&authuser=0&confirm=t&uuid=d51d894a-c332-454e-b437-bf4dd8881dbc&at=ALBwUgkRZJUwk0bv0HqxkcuOLNBf:1779028833329"
                 }
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold bg-black text-white hover:bg-black/80 transition-colors flex items-center gap-2"
               >
                 <span>Download PDF</span>
                 <Download className="w-4 h-4" />
               </a>
            </div>
          )}

        </div>
      </div>
    )}
    </>
  );
}

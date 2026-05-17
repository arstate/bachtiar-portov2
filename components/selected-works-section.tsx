"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, MessageSquare, Send } from "lucide-react";

const photographyData = [
  {
    id: "concert",
    category: "CONCERT PHOTOGRAPHY",
    theme: "dark",
    layout: "PORTRAIT_3",
    images: [
      { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop", location: "Stadium X", year: "2025" },
      { src: "https://images.unsplash.com/photo-1540039155732-d6f74a001a1c?q=80&w=1000&auto=format&fit=crop", location: "Arena Center", year: "2025" },
      { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop", location: "Live Space", year: "2025" }
    ],
    description: "Capturing the raw energy, the sweat, and the electrifying atmosphere of live music performances."
  },
  {
    id: "event",
    category: "EVENT DOCUMENTARY",
    theme: "dark",
    layout: "3_LAND_2_PORT",
    images: [
      { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e325?q=80&w=1500&auto=format&fit=crop", location: "Grand Hall", year: "2025" },
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1500&auto=format&fit=crop", location: "Downtown", year: "2025" },
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1500&auto=format&fit=crop", location: "Summit", year: "2025" },
      { src: "https://images.unsplash.com/photo-1521478413868-1af19c11bd45?q=80&w=1000&auto=format&fit=crop", location: "Backstage", year: "2025" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop", location: "VIP Lounge", year: "2025" },
    ],
    description: "Unfiltered human interactions. Documenting unscripted moments within curated spaces."
  },
  {
    id: "landscape",
    category: "LANDSCAPE & ARCHITECTURE",
    theme: "dark",
    layout: "PORTRAIT_6",
    images: [
      { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop", location: "Death Valley", year: "2024" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop", location: "Swiss Alps", year: "2024" },
      { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000&auto=format&fit=crop", location: "Mojave", year: "2024" },
      { src: "https://images.unsplash.com/photo-1506744626753-ce81510cf5f0?q=80&w=1000&auto=format&fit=crop", location: "Yosemite", year: "2024" },
      { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop", location: "Patagonia", year: "2024" },
      { src: "https://images.unsplash.com/photo-1414441460515-bb8ad7064d47?q=80&w=1000&auto=format&fit=crop", location: "Nordic", year: "2024" },
    ],
    description: "The brutal scale of nature and man-made structures framing human insignificance."
  },
  {
    id: "animals",
    category: "WILDLIFE",
    theme: "dark",
    layout: "PORTRAIT_2",
    images: [
      { src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1000&auto=format&fit=crop", location: "Savanna", year: "2026" },
      { src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop", location: "Jungle", year: "2026" },
    ],
    description: "Intimate portraits of untamed beauty, holding the tension of a fleeting glance."
  },
  {
    id: "yearbook",
    category: "YEARBOOK & YOUTH",
    theme: "dark",
    layout: "PORTRAIT_3",
    images: [
      { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop", location: "Campus", year: "2025" },
      { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop", location: "Library", year: "2025" },
      { src: "https://images.unsplash.com/photo-1526426861295-8e3dcd8cdfe9?q=80&w=1000&auto=format&fit=crop", location: "Dorm", year: "2025" },
    ],
    description: "The fleeting era of youth. A nostalgic glimpse into the chaotic beauty of coming of age."
  },
  {
    id: "portrait",
    category: "PORTRAIT PHOTOGRAPHY",
    theme: "cream",
    layout: "PORTRAIT_3",
    images: [
      { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", location: "Studio A", year: "2026" },
      { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop", location: "Outdoor", year: "2026" },
      { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop", location: "City", year: "2026" },
    ],
    description: "Stripping away the layers. Focusing on the quiet, profound reality etched into the human face."
  },
  {
    id: "prewedding",
    category: "PRE WEDDING",
    theme: "cream",
    layout: "1_PORT_1_LAND",
    images: [
      { src: "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?q=80&w=1000&auto=format&fit=crop", location: "Lake Como", year: "2025" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop", location: "Tuscany", year: "2025" }
    ],
    description: "A testament to anticipation. Stillness and whispered promises before the grand noise begins."
  },
  {
    id: "wedding",
    category: "WEDDING EDITORIAL",
    theme: "cream",
    layout: "PORTRAIT_3",
    images: [
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop", location: "Cathedral", year: "2026" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop", location: "Reception", year: "2026" },
      { src: "https://images.unsplash.com/photo-1535688597036-7c9082ef7de8?q=80&w=1000&auto=format&fit=crop", location: "Afterparty", year: "2026" },
    ],
    description: "The culmination of chaos into a single, breathless editorial narrative. High-fashion approach to a sacred tradition."
  },
  {
    id: "graduation",
    category: "GRADUATION",
    theme: "cream",
    layout: "PORTRAIT_4",
    images: [
      { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop", location: "Hall", year: "2026" },
      { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop", location: "Lawn", year: "2026" },
      { src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1000&auto=format&fit=crop", location: "Ceremony", year: "2026" },
      { src: "https://images.unsplash.com/photo-1525926477800-7a0eab2330a8?q=80&w=1000&auto=format&fit=crop", location: "Campus", year: "2026" },
    ],
    description: "Commemorating chapters closed. A documentation of achievement wrapped in clean minimalism."
  }
];

const videographyData = [
  {
    id: "commercial",
    category: "COMMERCIAL VIDEO",
    theme: "dark",
    layout: "1_PORT_1_LAND",
    images: [
      { src: "https://images.unsplash.com/photo-1540039155732-d6f74a001a1c?q=80&w=1000&auto=format&fit=crop", location: "Studio A", year: "2026" },
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop", location: "City", year: "2026" }
    ],
    description: "Telling compelling stories through motion and cinematic visuals for brands and businesses."
  },
  {
    id: "wedding_video",
    category: "WEDDING FILM",
    theme: "cream",
    layout: "PORTRAIT_3",
    images: [
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop", location: "Lake Como", year: "2026" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop", location: "Tuscany", year: "2026" },
      { src: "https://images.unsplash.com/photo-1535688597036-7c9082ef7de8?q=80&w=1000&auto=format&fit=crop", location: "Afterparty", year: "2026" },
    ],
    description: "Cinematic documentation of love, emotional depth, and beautifully crafted memories."
  },
  {
    id: "documentary_video",
    category: "EVENT DOCUMENTARY",
    theme: "dark",
    layout: "PORTRAIT_4",
    images: [
      { src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop", location: "Convention Center", year: "2026" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop", location: "Hotel Hall", year: "2026" },
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop", location: "Downtown", year: "2026" },
      { src: "https://images.unsplash.com/photo-1521478413868-1af19c11bd45?q=80&w=1000&auto=format&fit=crop", location: "Backstage", year: "2026" },
    ],
    description: "Capturing the true essence and continuous flow of events in motion."
  }
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  }
};

interface PortfolioSection {
  id: string;
  category: string;
  theme: string;
  layout: string;
  images: Array<{ src: string; location?: string; year?: string }>;
  description: string;
}

export default function SelectedWorksSection() {
  const [activeTab, setActiveTab] = useState<"photography" | "videography" | "contact">("photography");
  const [direction, setDirection] = useState(0);

  const [contactName, setContactName] = useState("");
  const [contactBrand, setContactBrand] = useState("");
  const [contactProject, setContactProject] = useState("");

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!contactName || !contactProject) return;
    
    const phoneNumber = "6289617323344"; // 089617323344
    const text = `Halo Kak Bachtiar,\n\nNama: ${contactName}\nBrand/Institusi/Perorangan: ${contactBrand}\n\nProject/Needs:\n${contactProject}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleTabChange = (newTab: "photography" | "videography" | "contact") => {
    if (activeTab === newTab) return;
    const tabOrder = { photography: 0, videography: 1, contact: 2 };
    setDirection(tabOrder[newTab] > tabOrder[activeTab] ? 1 : -1);
    setActiveTab(newTab);
    
    if (sectionRef.current) {
      const yOffset = -70; // Header offset
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      
      // Delay slightly to let the animation start, or do it immediately
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
  };

  const currentData = activeTab === "photography" ? photographyData : videographyData;

  const renderSection = (section: PortfolioSection) => (
    <section 
      key={section.id} 
      className={`relative w-full overflow-hidden flex flex-col justify-center items-center py-20 lg:py-32 ${
        section.theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-[#F4F3ED] text-black'
      }`}
    >
          {/* Title */}
          <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20 pointer-events-none pb-20">
            <h2 className="text-red-700 font-serif font-bold uppercase tracking-tighter text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              {section.category}
            </h2>
          </div>

          <div className="w-full h-full max-w-screen-2xl mx-auto px-4 md:px-8 mt-24">
            
            {section.layout === "PORTRAIT_3" && (
              <div className="w-full flex flex-col gap-8">
                 <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {section.images.slice(0, 3).map((img, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[3/4] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={img.src}
                          alt={`${section.category} ${i}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <table className="w-full font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                          <tbody>
                            <tr>
                              <td className="w-20 opacity-60">Location</td>
                              <td>: {img.location}</td>
                            </tr>
                            <tr>
                              <td className="w-20 opacity-60">Year</td>
                              <td>: {img.year}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                 </div>
                 {section.description && (
                  <div className="w-full mt-4 md:mt-8 flex justify-center text-center">
                     <p className="font-sans text-xs md:text-sm max-w-xl opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                 )}
              </div>
            )}

            {section.layout === "3_LAND_2_PORT" && (
              <div className="w-full flex flex-col gap-12">
                 {/* Top row: 3 Landscape */}
                 <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {section.images.slice(0, 3).map((img, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[16/9] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={img.src}
                          alt={`${section.category} Landscape ${i}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                         <span className="opacity-60">{img.location}</span>
                         <span>{img.year}</span>
                      </div>
                    </div>
                  ))}
                 </div>
                 
                 {/* Bottom row: 2 Portrait */}
                 <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {section.images.slice(3, 5).map((img, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[3/4] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={img.src}
                          alt={`${section.category} Portrait ${i}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                         <span className="opacity-60">{img.location}</span>
                         <span>{img.year}</span>
                      </div>
                    </div>
                  ))}
                 </div>

                 {section.description && (
                  <div className="w-full flex justify-center text-center max-w-2xl mx-auto border-t border-opacity-20 border-inherit pt-8">
                     <p className="font-sans text-xs md:text-sm opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                 )}
              </div>
            )}

            {section.layout === "PORTRAIT_6" && (
              <div className="w-full flex flex-col gap-12 md:gap-16">
                 {/* First Row of 3 */}
                 <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {section.images.slice(0, 3).map((img, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[4/5] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={img.src}
                          alt={`${section.category} ${i}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                         <span className="opacity-60">{img.location}</span>
                         <span>{img.year}</span>
                      </div>
                    </div>
                  ))}
                 </div>
                 {/* Description in middle */}
                 {section.description && (
                  <div className="w-full flex justify-center text-center">
                     <p className="font-sans text-xs md:text-sm max-w-xl opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                 )}
                 {/* Second Row of 3 */}
                 <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {section.images.slice(3, 6).map((img, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[4/5] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={img.src}
                          alt={`${section.category} ${i + 3}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                         <span className="opacity-60">{img.location}</span>
                         <span>{img.year}</span>
                      </div>
                    </div>
                  ))}
                 </div>
              </div>
            )}

            {section.layout === "PORTRAIT_2" && (
              <div className="w-full flex flex-col gap-12">
                 <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
                  {section.images.slice(0, 2).map((img, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[3/4] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={img.src}
                          alt={`${section.category} ${i}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                         <span className="opacity-60">{img.location}</span>
                         <span>{img.year}</span>
                      </div>
                    </div>
                  ))}
                 </div>
                 {section.description && (
                  <div className="w-full mt-4 flex justify-center text-center">
                     <p className="font-sans text-xs md:text-sm max-w-xl opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                 )}
              </div>
            )}
            
            {section.layout === "1_PORT_1_LAND" && (
              <div className="w-full flex flex-col gap-12">
                 <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  
                  {/* Portrait on Left (5 cols) */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="relative w-full aspect-[3/4] bg-neutral-800 overflow-hidden group">
                      <Image 
                        src={section.images[0].src}
                        alt={`${section.category} Portrait`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                        <span className="opacity-60">{section.images[0].location}</span>
                        <span>{section.images[0].year}</span>
                    </div>
                  </div>

                  {/* Landscape on Right (7 cols) */}
                  <div className="md:col-span-7 flex flex-col gap-4">
                    <div className="relative w-full aspect-[16/9] bg-neutral-800 overflow-hidden group">
                      <Image 
                        src={section.images[1].src}
                        alt={`${section.category} Landscape`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s] group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                        <span className="opacity-60">{section.images[1].location}</span>
                        <span>{section.images[1].year}</span>
                    </div>
                    {section.description && (
                      <p className="font-sans text-xs md:text-sm opacity-80 leading-relaxed uppercase tracking-wide mt-4 md:mt-8 max-w-md">
                        {section.description}
                      </p>
                    )}
                  </div>

                 </div>
              </div>
            )}

            {section.layout === "PORTRAIT_4" && (
              <div className="w-full flex flex-col gap-8">
                 <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {section.images.slice(0, 4).map((img, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[3/4] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={img.src}
                          alt={`${section.category} ${i}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                         <span className="opacity-60 truncate mr-2">{img.location}</span>
                         <span>{img.year}</span>
                      </div>
                    </div>
                  ))}
                 </div>
                 {section.description && (
                  <div className="w-full mt-4 md:mt-8 flex justify-center text-center">
                     <p className="font-sans text-xs md:text-sm max-w-xl opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                 )}
              </div>
            )}

           </div>
        </section>
  );

  return (
    <div ref={sectionRef} className="w-full flex flex-col relative">
      {/* Category Sub-navigation */}
      <div className="sticky top-[70px] md:top-[85px] z-40 w-full bg-[#FDFCFB] border-b border-black py-4 px-6 flex justify-center md:justify-start items-center gap-8 sm:gap-12 text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.2em] text-black">
         <span 
           onClick={() => handleTabChange("photography")}
           className={`cursor-pointer pb-1 transition-opacity ${activeTab === 'photography' ? 'border-b-2 border-black opacity-100' : 'opacity-40 hover:opacity-100'}`}
         >
           Photography
         </span>
         <span 
           onClick={() => handleTabChange("videography")}
           className={`cursor-pointer pb-1 transition-opacity ${activeTab === 'videography' ? 'border-b-2 border-black opacity-100' : 'opacity-40 hover:opacity-100'}`}
         >
           Videography
         </span>
         <span 
           onClick={() => handleTabChange("contact")}
           className={`cursor-pointer pb-1 transition-opacity ${activeTab === 'contact' ? 'border-b-2 border-black opacity-100' : 'opacity-40 hover:opacity-100'}`}
         >
           Contact
         </span>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="w-full flex flex-col"
          >
            {activeTab === "contact" ? (
              <section className="relative w-full flex flex-col items-center justify-center py-24 px-6 md:py-32 xl:py-40 bg-[#111] text-white min-h-[80vh]">
                <div className="max-w-2xl w-full flex flex-col items-center gap-10 z-10">
                  <div className="text-center space-y-4">
                    <h2 className="font-sans text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-none">
                      GET IN <span className="font-serif italic font-normal text-red-600 lowercase tracking-normal">touch</span>
                    </h2>
                    <p className="opacity-60 text-sm md:text-base max-w-md mx-auto">
                      Have a project in mind? Let's discuss how we can bring your vision to life.
                    </p>
                  </div>
                  
                  <form className="w-full flex flex-col gap-4">
                    <div className="relative w-full group">
                      <div className="absolute top-0 left-0 h-[4rem] w-14 flex items-center justify-center text-white/30 group-focus-within:text-white/60 transition-colors">
                         <User className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your Name" 
                        className="w-full h-[4rem] bg-[#1a1a1a]/80 border border-white/5 rounded-2xl pl-14 pr-4 outline-none focus:border-white/20 focus:bg-[#252525]/80 transition-all placeholder:text-white/30 text-sm"
                      />
                    </div>
                    <div className="relative w-full group">
                      <div className="absolute top-0 left-0 h-[4rem] w-14 flex items-center justify-center text-white/30 group-focus-within:text-white/60 transition-colors">
                         <User className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        value={contactBrand}
                        onChange={(e) => setContactBrand(e.target.value)}
                        placeholder="Brand / Institusi / Perorangan" 
                        className="w-full h-[4rem] bg-[#1a1a1a]/80 border border-white/5 rounded-2xl pl-14 pr-4 outline-none focus:border-white/20 focus:bg-[#252525]/80 transition-all placeholder:text-white/30 text-sm"
                      />
                    </div>
                    <div className="relative w-full group">
                      <div className="absolute top-0 left-0 pt-[1.3rem] w-14 flex justify-center text-white/30 group-focus-within:text-white/60 transition-colors">
                         <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea 
                        value={contactProject}
                        onChange={(e) => setContactProject(e.target.value)}
                        placeholder="Tell me about your project / needs..." 
                        className="w-full min-h-[160px] bg-[#1a1a1a]/80 border border-white/5 rounded-2xl pl-14 pr-4 pt-[1.3rem] outline-none focus:border-white/20 focus:bg-[#252525]/80 transition-all placeholder:text-white/30 text-sm resize-y"
                      />
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={handleWhatsApp} 
                      disabled={!contactName || !contactProject}
                      className={`w-full h-[4rem] mt-4 rounded-2xl flex items-center justify-center gap-2 font-medium transition-all ${
                        contactName && contactProject
                          ? "bg-red-600 text-white hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] border border-red-500/50 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]"
                          : "bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5"
                      }`}
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-1" />
                    </button>
                  </form>
                </div>
                
                {/* Y2K Linear Background Elements */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                {/* Tech lines */}
                <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/[0.02] pointer-events-none"></div>
                <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/[0.02] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
              </section>
            ) : (
              currentData.map((section) => renderSection(section))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


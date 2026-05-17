"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, MessageSquare, Send, X, Play } from "lucide-react";

const photographyData = [
  {
    id: "concert",
    category: "CONCERT PHOTOGRAPHY",
    theme: "dark",
    layout: "PORTRAIT_3",
    images: [
      { src: "https://github.com/user-attachments/assets/afb4552a-cd26-4849-9956-46e6d0b96665", location: "DPR FEST", year: "2025" },
      { src: "https://github.com/user-attachments/assets/87242bf1-0421-4542-9a62-dd8f96e88cf8", location: "ROCKAMINATION", year: "2025" },
      { src: "https://github.com/user-attachments/assets/f225d0fe-25ef-4b0a-819c-757f44c99785", location: "DUA DELAPAN PADI", year: "2025" }
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
    id: "ads",
    category: "ADS",
    theme: "dark",
    layout: "VIDEO_GRID_1_2",
    images: [
      { src: "https://www.youtube.com/embed/apSUJIjz8qY", videoId: "apSUJIjz8qY", location: "Food Reel", year: "2025", title: "Food Reel Probolinggo", overview: "A short cinematic showcase of local culinary delights in Probolinggo, capturing the vibrant cooking process and presentation.", challenge: "Capturing the fast-paced environment of local kitchens while maintaining high-quality, cinematic lighting and stabilization.", solution: "Used a handheld gimbal for dynamic movements and fast lenses to adapt to the ambient light, ensuring maximum appetite appeal." },
      { src: "https://www.youtube.com/embed/wPr-Qp0MySk", videoId: "wPr-Qp0MySk", location: "Cinematic Shots", year: "2025", title: "Probolinggo Reel Food", overview: "Dynamic cinematic shots highlighting the texture and details of local food and street delicacies.", challenge: "Highlighting texture and detail in low-light street environments.", solution: "Implemented off-camera continuous lighting specifically designed for micro-lighting food subjects." },
      { src: "https://www.youtube.com/embed/-YjYYBbSAIw", videoId: "-YjYYBbSAIw", location: "Antasena Brand", year: "2025", title: "Antasena Brand Cinematic Ads", overview: "Commercial advertising for Antasena clothing brand, focusing on urban aesthetic and raw lifestyle.", challenge: "Creating a cohesive narrative that aligns the brand with an edgy lifestyle aesthetic.", solution: "Employed a fast-paced editing style and color grading inspired by urban streetwear culture." }
    ],
    description: "Telling compelling stories through motion and cinematic visuals for brands and businesses."
  },
  {
    id: "angkatan_sekolah",
    category: "ANGKATAN SEKOLAH",
    theme: "dark",
    layout: "VIDEO_GRID_2_1",
    images: [
      { src: "https://www.youtube.com/embed/TfjWdkN7-dU", videoId: "TfjWdkN7-dU", location: "The End of Eternal 12", year: "2025", title: "The End of Eternal 12", overview: "A full movie capturing the precious memories and final moments of class 12.", challenge: "Coordinating a massive group of students and organizing schedule for different scenes across the school year.", solution: "Structured a detailed production timeline and involved students as assistant directors to ensure smooth crowd control." },
      { src: "https://www.youtube.com/embed/d6BjcUcF1ts", videoId: "d6BjcUcF1ts", location: "SMA Intensif", year: "2024", title: "SMA Intensif Taruna Pembangunan", overview: "A cinematic documentary style film for the graduation class of SMA Intensif Taruna Pembangunan 2024.", challenge: "Balancing formal academic ceremonies with the energetic spirit of the youth.", solution: "Intercut strict formal shots with candid, emotional behind-the-scenes moments to create a balanced narrative." },
      { src: "https://www.youtube.com/embed/ymmWgdcrZ3s", videoId: "ymmWgdcrZ3s", location: "SMA ITP", year: "2025", title: "Angkatan SMA ITP 2025", overview: "An emotional visual narrative honoring the journey of SMA ITP class of 2025.", challenge: "Capturing authentic emotions leading up to graduation day.", solution: "Conducted candid interviews and paired them with emotional background scoring." }
    ],
    description: "Capturing the fleeting moments of youth, friendship, and school memories."
  },
  {
    id: "corporate_event",
    category: "CORPORATE / EVENT",
    theme: "cream",
    layout: "VIDEO_GRID_1_1_1",
    images: [
      { src: "https://www.youtube.com/embed/rwDE0plGm1c", videoId: "rwDE0plGm1c", location: "Makan Bergizi", year: "2025", title: "Sosialisasi Makanan Bergizi", overview: "Highlight video covering the social event for free nutritious meals program.", challenge: "Documenting an event spread across a massive open area without missing any key moments.", solution: "Deployed multiple camera units and utilized drone shots to establish scale." },
      { src: "https://www.youtube.com/embed/i_x4lVRNT0g", videoId: "i_x4lVRNT0g", location: "SKK Migas", year: "2024", title: "SKK Migas Corporate Event", overview: "A premium corporate summary of SKK Migas event focusing on professional networking and presentations.", challenge: "Maintaining visual interest during long keynote presentations.", solution: "Focused on audience reactions and detailed cutaways of the venue." },
      { src: "https://www.youtube.com/embed/-bUjUMvBM_U", videoId: "-bUjUMvBM_U", location: "Annual MGEI", year: "2025", title: "The Annual MGEI 2025", overview: "An energetic recap video of the MGEI Annual Event 2025.", challenge: "Delivering the recap video rapidly for social media deployment.", solution: "Employed a live-edit workflow that allowed for same-day delivery of the highlight reel." }
    ],
    description: "Capturing the true essence and continuous flow of events in motion."
  },
  {
    id: "prewedding",
    category: "PREWEDDING",
    theme: "cream",
    layout: "VIDEO_GRID_2",
    images: [
      { src: "https://www.youtube.com/embed/jfqdS11OEx0", videoId: "jfqdS11OEx0", location: "Ian & Anggun", year: "2026", title: "Prewedding Ian & Anggun", overview: "A romantic prewedding cinematic storytelling the love journey of Ian & Anggun.", challenge: "Shooting in unpredictable weather conditions while keeping the subjects comfortable.", solution: "Adapted lighting techniques to match the moody sky, resulting in a dramatic cinematic aesthetic." },
      { src: "https://www.youtube.com/embed/FEKm_xKezT0", videoId: "FEKm_xKezT0", location: "Hadad & Calrisa", year: "2026", title: "Prewedding Hadad & Calrisa", overview: "Elegant visual narrative capturing the chemistry and bond between Hadad & Calrisa.", challenge: "Finding unique angles in a heavily photographed popular tourist location.", solution: "Used long focal length lenses to compress the background and isolate the couple from crowds." }
    ],
    description: "Cinematic documentation of love, emotional depth, and beautifully crafted memories."
  },
  {
    id: "wedding",
    category: "WEDDING",
    theme: "cream",
    layout: "VIDEO_GRID_1_2",
    images: [
      { src: "https://www.youtube.com/embed/HfTF7wBjDCE", videoId: "HfTF7wBjDCE", location: "Ian & Anggun", year: "2026", title: "Wedding Ian & Anggun", overview: "Full wedding cinematic documenting the sacred and joyous moments of Ian and Anggun's big day.", challenge: "Managing the timeline between traditional ceremonies and the reception.", solution: "Coordinated tightly with the wedding planner to ensure seamless camera positioning." },
      { src: "https://www.youtube.com/embed/gB1btodORWo", videoId: "gB1btodORWo", location: "Krisna & Olynda", year: "2026", title: "Wedding Krisna & Olynda (Akad)", overview: "An intimate and touching visual record of Krisna and Olynda's Akad ceremony.", challenge: "Capturing the intimate audio of the vows in a highly reverberant mosque.", solution: "Used a dedicated lavalier microphone closely attached to the groom." },
      { src: "https://www.youtube.com/embed/h2qaKrnz4fY", videoId: "h2qaKrnz4fY", location: "Vera & Afiqo", year: "2026", title: "Wedding Vera & Afiqo", overview: "A beautifully crafted full wedding documentary celebrating the love of Vera and Afiqo.", challenge: "Adapting to rapidly changing lighting setups during the evening reception.", solution: "Relied on high-dynamic-range cameras and continuous on-camera fill lights." }
    ],
    description: "Capturing the pure magic of your special day, creating a timeless film."
  },
  {
    id: "wisuda",
    category: "WISUDA",
    theme: "cream",
    layout: "VIDEO_GRID_2_1",
    images: [
      { src: "https://www.youtube.com/embed/7jEe0DVsww4", videoId: "7jEe0DVsww4", location: "SMK Walisongo", year: "2023", title: "Wisuda SMK Walisongo 2", overview: "A majestic cinematic graduation film capturing the pride and joy of the SMK Walisongo class of 2023.", challenge: "Covering the vast number of graduates smoothly without missing key individuals.", solution: "Implemented a multi-camera setup covering wide establishing shots and tight portraits simultaneously." },
      { src: "https://www.youtube.com/embed/RvtQfdvzMgo", videoId: "RvtQfdvzMgo", location: "SMK NU", year: "2023", title: "Highlight Wisuda SMK NU", overview: "A fast-paced, emotional highlight reel of the SMK NU graduation ceremony.", challenge: "Condensing a 4-hour event into a powerful 3-minute highlight.", solution: "Pre-selected key emotional beats and structured the edit around the valedictorian speech." },
      { src: "https://www.youtube.com/embed/jXAf9T06T9U", videoId: "jXAf9T06T9U", location: "SMP Wachid Hasyim", year: "2023", title: "Wisuda SMP Wachid Hasyim WarU", overview: "A memorable cinematic piece honoring the graduation of SMP Wachid Hasyim Waru students.", challenge: "Capturing the energy of middle school graduates in a formal setting.", solution: "Focused heavily on candid interactions off-stage to bring a youthful energy to the film." }
    ],
    description: "Honoring achievements and academic milestones with a cinematic touch."
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
  images: Array<{ src: string; location?: string; year?: string; videoId?: string; title?: string; overview?: string; challenge?: string; solution?: string }>;
  description: string;
}

export default function SelectedWorksSection() {
  const [activeTab, setActiveTab] = useState<"photography" | "videography" | "contact">("photography");
  const [direction, setDirection] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{ src?: string; videoId?: string; title?: string; overview?: string; challenge?: string; solution?: string; location?: string; year?: string } | null>(null);

  const [contactName, setContactName] = useState("");
  const [contactBrand, setContactBrand] = useState("");
  const [contactProject, setContactProject] = useState("");

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

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

            {section.layout.startsWith("VIDEO_GRID") && (
              <div className="w-full flex flex-col gap-8">
                 <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
                  {section.images.map((img, i) => {
                    let colSpanClass = "md:col-span-2"; // default

                    if (section.layout === "VIDEO_GRID_1_2") {
                      if (i === 0) colSpanClass = "md:col-span-6";
                      else colSpanClass = "md:col-span-3";
                    } else if (section.layout === "VIDEO_GRID_2_1") {
                      if (i === 2) colSpanClass = "md:col-span-6";
                      else colSpanClass = "md:col-span-3";
                    } else if (section.layout === "VIDEO_GRID_1_1_1") {
                      colSpanClass = "md:col-span-6";
                    } else if (section.layout === "VIDEO_GRID_2") {
                      colSpanClass = "md:col-span-3";
                    }

                    return (
                    <div key={i} className={`flex flex-col gap-4 ${colSpanClass}`}>
                      <div 
                        className="relative w-full aspect-[21/9] bg-neutral-900 overflow-hidden group cursor-pointer"
                        onClick={() => setSelectedVideo(img)}
                      >
                         <img 
                           src={`https://img.youtube.com/vi/${img.videoId}/maxresdefault.jpg`}
                           alt={img.title || "Video thumbnail"}
                           className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s]" 
                         />
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center pl-1 text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-transform group-hover:scale-110">
                               <Play className="w-8 h-8 fill-current" />
                            </div>
                         </div>
                      </div>
                      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                         <span className="opacity-60">{img.location}</span>
                         <span>{img.year}</span>
                      </div>
                    </div>
                  )})}
                 </div>
                 {section.description && (
                  <div className="w-full mt-4 flex justify-center text-center max-w-2xl mx-auto border-t border-opacity-20 border-inherit pt-8">
                     <p className="font-sans text-xs md:text-sm opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                 )}
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
              <motion.section 
                initial={{ backgroundColor: "#000000" }}
                animate={{ backgroundColor: "#111111" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative w-full flex flex-col items-center justify-center py-24 px-6 md:py-32 xl:py-40 text-white min-h-[80vh]"
              >
                <div className="max-w-2xl w-full flex flex-col items-center gap-10 z-10">
                  <div className="text-center space-y-4">
                    <h2 className="font-sans text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-none">
                      GET IN <span className="font-serif italic font-normal text-red-600 lowercase tracking-normal">touch</span>
                    </h2>
                    <p className="opacity-60 text-sm md:text-base max-w-md mx-auto">
                      Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
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
                        className="w-full h-[4rem] bg-[#1a1a1a]/80 border border-white/5 rounded-none pl-14 pr-4 outline-none focus:border-white/20 focus:bg-[#252525]/80 transition-all placeholder:text-white/30 text-sm"
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
                        className="w-full h-[4rem] bg-[#1a1a1a]/80 border border-white/5 rounded-none pl-14 pr-4 outline-none focus:border-white/20 focus:bg-[#252525]/80 transition-all placeholder:text-white/30 text-sm"
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
                        className="w-full min-h-[160px] bg-[#1a1a1a]/80 border border-white/5 rounded-none pl-14 pr-4 pt-[1.3rem] outline-none focus:border-white/20 focus:bg-[#252525]/80 transition-all placeholder:text-white/30 text-sm resize-y"
                      />
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={handleWhatsApp} 
                      disabled={!contactName || !contactProject}
                      className={`w-full h-[4rem] mt-4 rounded-none flex items-center justify-center gap-2 font-medium transition-all ${
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
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                </motion.div>
              </motion.section>
            ) : (
              currentData.map((section) => renderSection(section))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] pb-12 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-5xl bg-[#111] border border-white/10 flex flex-col mt-4 md:mt-8 mb-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full relative pt-[56.25%] bg-black">
                <iframe 
                   src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                   className="absolute top-0 left-0 w-full h-full border-0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                />
              </div>
              <div className="p-8 md:p-12 text-white flex flex-col gap-8">
                 <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
                      <span>{selectedVideo.year}</span>
                      <span>•</span>
                      <span>{selectedVideo.location}</span>
                   </div>
                   <h3 className="text-3xl md:text-5xl font-serif tracking-tighter italic">{selectedVideo.title}</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4 text-sm md:text-base text-white/80 leading-relaxed font-sans">
                    <div className="md:col-span-1 border-t border-white/10 pt-4">
                       <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Overview</h4>
                       <p className="opacity-80 leading-relaxed">{selectedVideo.overview}</p>
                    </div>
                    <div className="md:col-span-1 border-t border-white/10 pt-4">
                       <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">The Challenge</h4>
                       <p className="opacity-80 leading-relaxed">{selectedVideo.challenge}</p>
                    </div>
                    <div className="md:col-span-1 border-t border-white/10 pt-4">
                       <h4 className="text-red-500 font-bold mb-2 uppercase tracking-widest text-xs">The Solution</h4>
                       <p className="opacity-80 leading-relaxed">{selectedVideo.solution}</p>
                    </div>
                 </div>
              </div>
              <button 
                 className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-all backdrop-blur-sm z-10 hover:scale-110 active:scale-95"
                 onClick={() => setSelectedVideo(null)}
              >
                 <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}


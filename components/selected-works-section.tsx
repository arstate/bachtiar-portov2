import Image from "next/image";

const portfolioData = [
  {
    id: "concert",
    category: "CONCERT PHOTOGRAPHY",
    theme: "dark", // #050505
    layout: "C", // Full Width Hero
    images: [
      { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2000&auto=format&fit=crop", location: "Stadium X", year: "2025" }
    ],
    description: "Capturing the raw energy, the sweat, and the electrifying atmosphere of live music performances."
  },
  {
    id: "event",
    category: "EVENT DOCUMENTARY",
    theme: "dark",
    layout: "A+B",
    images: [
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop", location: "Grand Hall", year: "2025" },
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop", location: "Downtown Center", year: "2025" },
      // Bento images
      { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e325?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1521478413868-1af19c11bd45?q=80&w=800&auto=format&fit=crop" },
    ],
    description: "Unfiltered human interactions. Documenting unscripted moments within curated spaces."
  },
  {
    id: "landscape",
    category: "LANDSCAPE & ARCHITECTURE",
    theme: "dark",
    layout: "A+B",
    images: [
      { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop", location: "Death Valley", year: "2024" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop", location: "Swiss Alps", year: "2024" },
      // Bento images
      { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1506744626753-ce81510cf5f0?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1414441460515-bb8ad7064d47?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop" },
    ],
    description: "The brutal scale of nature and man-made structures framing human insignificance."
  },
  {
    id: "animals",
    category: "WILDLIFE",
    theme: "dark",
    layout: "C",
    images: [
      { src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2000&auto=format&fit=crop", location: "Savanna", year: "2026" }
    ],
    description: "Intimate portraits of untamed beauty, holding the tension of a fleeting glance."
  },
  {
    id: "yearbook",
    category: "YEARBOOK & YOUTH",
    theme: "dark",
    layout: "B", // Dense Collage
    images: [
      { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1526426861295-8e3dcd8cdfe9?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop" },
    ],
    description: "The fleeting era of youth. A nostalgic glimpse into the chaotic beauty of coming of age."
  },
  {
    id: "portrait",
    category: "PORTRAIT PHOTOGRAPHY",
    theme: "cream", // #F4F3ED
    layout: "A3", // Layout A but 3 images
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
    layout: "C",
    images: [
      { src: "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?q=80&w=2000&auto=format&fit=crop", location: "Lake Como", year: "2025" }
    ],
    description: "A testament to anticipation. Stillness and whispered promises before the grand noise begins."
  },
  {
    id: "wedding",
    category: "WEDDING EDITORIAL",
    theme: "cream",
    layout: "A+B",
    images: [
      // Layout A
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop", location: "Cathedral", year: "2026" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop", location: "Reception", year: "2026" },
      // Layout B
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1535688597036-7c9082ef7de8?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1520106209564-9b5ccff8b323?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1601115162985-2e11a68131d2?q=80&w=800&auto=format&fit=crop" },
    ],
    description: "The culmination of chaos into a single, breathless editorial narrative. High-fashion approach to a sacred tradition."
  },
  {
    id: "graduation",
    category: "GRADUATION",
    theme: "cream",
    layout: "B",
    images: [
      { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1525926477800-7a0eab2330a8?q=80&w=800&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1531200155022-7f9e8a7fe7bd?q=80&w=800&auto=format&fit=crop" },
    ],
    description: "Commemorating chapters closed. A documentation of achievement wrapped in clean minimalism."
  }
];

export default function SelectedWorksSection() {
  return (
    <div className="w-full flex flex-col relative">
      {/* Category Sub-navigation */}
      <div className="sticky top-[70px] md:top-[85px] z-40 w-full bg-[#FDFCFB] border-b border-black py-4 px-6 flex justify-center md:justify-start items-center gap-8 sm:gap-12 text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.2em] text-black">
         <span className="cursor-pointer border-b-2 border-black pb-1">Photography</span>
         <span className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity pb-1">Videography</span>
      </div>

      {portfolioData.map((section, idx) => (
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
            
            {section.layout === "C" && (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-neutral-900 group overflow-hidden">
                  <Image 
                    src={section.images[0].src}
                    alt={section.category}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/20">
                    <h3 className="text-white text-[8vw] md:text-[6vw] font-serif italic tracking-tighter leading-none mix-blend-overlay">
                      My Works.
                    </h3>
                  </div>
                </div>
                {section.description && (
                  <div className="w-full mt-6">
                     <p className="font-sans text-xs sm:text-sm max-w-lg opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                )}
              </div>
            )}

            {section.layout === "A+B" && (
              <div className="w-full flex flex-col gap-24">
                {/* Layout A */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {[0, 1].map((i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[4/5] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={section.images[i].src}
                          alt={`${section.category} ${i}`}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[800ms]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <table className="w-full font-mono text-[10px] md:text-xs uppercase tracking-widest border-b border-opacity-20 pb-2 border-inherit">
                          <tbody>
                            <tr>
                              <td className="w-24 opacity-60">Location</td>
                              <td>: {section.images[i].location}</td>
                            </tr>
                            <tr>
                              <td className="w-24 opacity-60">Year</td>
                              <td>: {section.images[i].year}</td>
                            </tr>
                          </tbody>
                        </table>
                        {i === 0 && (
                          <p className="font-sans text-xs md:text-sm leading-relaxed opacity-80 max-w-sm mt-2 line-clamp-3">
                            {section.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Layout B */}
                <div className="w-full mt-12">
                   <div className="columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
                      {section.images.slice(2).map((img, idx) => (
                        <div key={idx} className="relative w-full break-inside-avoid overflow-hidden group">
                          {/* We use a pseudo Random height approach for masonry feeling */}
                          <div className={`relative w-full bg-neutral-900 ${idx % 3 === 0 ? 'aspect-square' : idx % 2 === 0 ? 'aspect-[3/4]' : 'aspect-video'}`}>
                             <Image 
                                src={img.src}
                                alt="Bento grid"
                                fill
                                className="object-cover saturate-50 group-hover:saturate-100 transition-all duration-700"
                                referrerPolicy="no-referrer"
                             />
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {section.layout === "B" && (
              <div className="w-full flex flex-col">
                 <div className="columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
                    {section.images.map((img, idx) => (
                      <div key={idx} className="relative w-full break-inside-avoid overflow-hidden group">
                        <div className={`relative w-full bg-neutral-900 ${idx % 3 === 0 ? 'aspect-[4/3]' : idx % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                           <Image 
                              src={img.src}
                              alt="Bento Grid"
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                           />
                        </div>
                      </div>
                    ))}
                 </div>
                 {section.description && (
                  <div className="w-full mt-6">
                     <p className="font-sans text-xs sm:text-sm max-w-lg opacity-80 leading-relaxed uppercase tracking-wide">
                      {section.description}
                     </p>
                  </div>
                 )}
              </div>
            )}

            {section.layout === "A3" && (
              <div className="w-full flex flex-col gap-8">
                 <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[3/4] bg-neutral-800 overflow-hidden group">
                        <Image 
                          src={section.images[i].src}
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
                              <td>: {section.images[i].location}</td>
                            </tr>
                            <tr>
                              <td className="w-20 opacity-60">Year</td>
                              <td>: {section.images[i].year}</td>
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
            
          </div>
        </section>
      ))}
    </div>
  );
}

"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";

const floatingImages = [
  "https://github.com/user-attachments/assets/6aa7d72a-9e29-41cf-b8ae-43a86997625f",
  "https://github.com/user-attachments/assets/5ee7d47a-6ff2-4fd6-aade-43f90b01a2f7",
  "https://github.com/user-attachments/assets/e4e4cc53-3bee-46cd-97f3-a2351a5538b0",
  "https://github.com/user-attachments/assets/0491059d-851d-4611-80cf-befdee030957",
  "https://github.com/user-attachments/assets/0ecfe0c7-057a-4369-b928-5c39076f260d",
  "https://github.com/user-attachments/assets/1f74319c-7369-48a4-ab51-55f598aec6cd",
  "https://github.com/user-attachments/assets/a1e4781a-2e32-415f-ad8a-1e47c55f94ae",
  "https://github.com/user-attachments/assets/97aca0bf-e883-4773-8bd2-31a895dddf0b"
];

// Horizontal overlapping layout mapped over 8 cards
const cardConfigs = [
  { left: "10%", top: "55%", rotate: -10, delay: 0.2, rotX: 75, rotY: -50, rotZStart: -35, rotZEnd: 45 },
  { left: "21%", top: "60%", rotate: 8, delay: 0.5, rotX: -60, rotY: 65, rotZStart: 45, rotZEnd: -30 },
  { left: "32%", top: "40%", rotate: -6, delay: 0.05, rotX: 85, rotY: 40, rotZStart: -55, rotZEnd: 60 },
  { left: "44%", top: "45%", rotate: 4, delay: 0.35, rotX: -55, rotY: -75, rotZStart: 30, rotZEnd: -55 },
  { left: "56%", top: "50%", rotate: -2, delay: 0.1, rotX: 65, rotY: 55, rotZStart: -40, rotZEnd: 40 },
  { left: "67%", top: "60%", rotate: 6, delay: 0.45, rotX: -80, rotY: -45, rotZStart: 50, rotZEnd: -65 },
  { left: "78%", top: "40%", rotate: -8, delay: 0.25, rotX: 45, rotY: 80, rotZStart: -25, rotZEnd: 50 },
  { left: "90%", top: "55%", rotate: 5, delay: 0.15, rotX: -70, rotY: -60, rotZStart: 60, rotZEnd: -40 }
];

function FloatingCard({ src, config, scrollYProgress, index }: { src: string; config: any; scrollYProgress: any, index: number }) {
  // Enter phase stagger: each card waits until its delay before moving up
  const d = config.delay;
  
  const enterStart = 0.001 + d * 0.05;
  const enterEnd = 0.35 + d * 0.12;
  
  const exitStart = 0.6 + d * 0.1;
  const exitEnd = 0.9 + d * 0.1;

  // S-Curve mapping points to smooth out the transition into the hold phase
  const eMid1 = enterStart + (enterEnd - enterStart) * 0.3;
  const eMid2 = enterStart + (enterEnd - enterStart) * 0.7;
  const eMid3 = enterStart + (enterEnd - enterStart) * 0.9;

  const exMid1 = exitStart + (exitEnd - exitStart) * 0.1;
  const exMid2 = exitStart + (exitEnd - exitStart) * 0.3;
  const exMid3 = exitStart + (exitEnd - exitStart) * 0.7;

  const mInput = [0, enterStart, eMid1, eMid2, eMid3, enterEnd, exitStart, exMid1, exMid2, exMid3, exitEnd, 1];

  const yEnterExit = useTransform(
    scrollYProgress,
    mInput,
    ["150vh", "150vh", "90vh", "25vh", "5vh", "0vh", "0vh", "-5vh", "-25vh", "-90vh", "-150vh", "-150vh"]
  );

  const zScroll = useTransform(
    scrollYProgress,
    mInput,
    [-800, -800, -500, -200, -40, 0, 0, -40, -200, -500, -800, -800]
  );

  const rotXBase = config.rotX;
  const rotateXScroll = useTransform(
    scrollYProgress,
    mInput,
    [rotXBase, rotXBase, rotXBase * 0.7, rotXBase * 0.3, rotXBase * 0.1, 0, 0, -rotXBase * 0.1, -rotXBase * 0.3, -rotXBase * 0.7, -rotXBase, -rotXBase]
  );

  const rotYBase = config.rotY;
  const rotateYScroll = useTransform(
    scrollYProgress,
    mInput,
    [rotYBase, rotYBase, rotYBase * 0.7, rotYBase * 0.3, rotYBase * 0.1, 0, 0, -rotYBase * 0.1, -rotYBase * 0.3, -rotYBase * 0.7, -rotYBase, -rotYBase]
  );

  const rotateZScroll = useTransform(
    scrollYProgress,
    mInput,
    [
      config.rotate + config.rotZStart, 
      config.rotate + config.rotZStart, 
      config.rotate + config.rotZStart * 0.7, 
      config.rotate + config.rotZStart * 0.3, 
      config.rotate + config.rotZStart * 0.1, 
      config.rotate, 
      config.rotate, 
      config.rotate + config.rotZEnd * 0.1, 
      config.rotate + config.rotZEnd * 0.3, 
      config.rotate + config.rotZEnd * 0.7, 
      config.rotate + config.rotZEnd, 
      config.rotate + config.rotZEnd
    ]
  );
  
  // Randomize floating animation values slightly for organic feel
  const floatDuration = useMemo(() => 4 + Math.random() * 3, []);
  const yVariance = useMemo(() => 8 + Math.random() * 8, []);
  const floatRotX = useMemo(() => 2 + Math.random() * 3, []);
  const floatRotY = useMemo(() => 2 + Math.random() * 3, []);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: config.left,
        top: config.top,
        y: yEnterExit,
        z: zScroll,
        rotateX: rotateXScroll,
        rotateY: rotateYScroll,
        rotateZ: rotateZScroll,
        zIndex: 50 + index, 
      }}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none [transform-style:preserve-3d]">
        <motion.div
          className="relative overflow-hidden shadow-2xl bg-white p-[3px] md:p-1 lg:p-[6px] pointer-events-auto"
        style={{
          width: "14vw",
          minWidth: "80px",
          aspectRatio: "3/4" 
        }}
        animate={{
          y: [-yVariance, yVariance],
          rotateX: [-floatRotX, floatRotX],
          rotateY: [floatRotY, -floatRotY],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={src}
            alt={`Floating Artwork ${index}`}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            sizes="15vw"
            priority
          />
        </div>
      </motion.div>
      </div>
    </motion.div>
  );
}

export default function FloatingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 50,
    mass: 1.2,
    restDelta: 0.001
  });

  const scrollDownOpacity = useTransform(smoothProgress, [0, 0.1, 0.15], [1, 1, 0]);

  return (
    <section ref={containerRef} className="relative z-10 w-full h-[400vh] bg-[#FDFCFB]">
      {/* Sticky container that spans the full viewport to avoid overlap issues */}
      <div className="sticky top-[65px] w-full h-[calc(100vh-65px)] flex flex-col items-center justify-start overflow-hidden z-0 bg-[#FDFCFB]">
        
        {/* Centered container with 21:9 aspect ratio */}
        <div className="relative w-full aspect-[21/9] overflow-hidden [perspective:1200px] border-b border-black">
          
          {/* Video Background */}
          <video 
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://ia600105.us.archive.org/16/items/bg_20260514/BG.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none mix-blend-overlay" />

          {/* Floating Cards Container */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {floatingImages.map((src, i) => (
              <FloatingCard 
                key={i} 
                index={i}
                src={src} 
                config={cardConfigs[i % cardConfigs.length]} 
                scrollYProgress={smoothProgress} 
              />
            ))}
          </div>
          
          {/* Overlay subtle tracking lines & aesthetics */}
          <div className="absolute inset-0 border border-white/10 z-30 pointer-events-none m-4 md:m-8 mix-blend-difference" />
          <div className="absolute top-8 right-8 text-white text-[8px] md:text-xs font-mono uppercase tracking-widest z-30 opacity-70 drop-shadow-md">
            REC. 709 // 21:9
          </div>
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 z-10 pointer-events-none mix-blend-overlay" />

          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none"
            style={{ opacity: scrollDownOpacity }}
          >
            <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.3em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">SCROLL DOWN</span>
            <div className="w-[2px] h-10 md:h-14 bg-white/30 relative overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <motion.div 
                className="w-full h-1/2 bg-white absolute top-0 left-0"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Running Text / Marquee */}
        <div className="flex-grow w-full flex items-center overflow-hidden border-b border-black bg-[#FDFCFB]">
          <motion.div
            className="flex whitespace-nowrap font-serif text-4xl md:text-6xl lg:text-8xl uppercase tracking-wider text-black py-4 md:py-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            style={{ width: "fit-content" }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="pr-12 md:pr-16 flex items-center gap-12 md:gap-16">
                <span className="italic">CINEMATOGRAPHY</span>
                <span className="font-sans text-xl md:text-3xl opacity-50">✦</span>
                <span>PHOTOGRAPHY</span>
                <span className="font-sans text-xl md:text-3xl opacity-50">✦</span>
                <span className="italic">CREATIVE DIRECTION</span>
                <span className="font-sans text-xl md:text-3xl opacity-50">✦</span>
                <span>CAPTURE</span>
                <span className="font-sans text-xl md:text-3xl opacity-50">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

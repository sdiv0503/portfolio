"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Code2, 
  Dumbbell, 
  GraduationCap, 
  MapPin, 
  Terminal, 
  Cpu, 
  Globe2, 
  Activity 
} from "lucide-react";

// --- 1. THE SPOTLIGHT CARD COMPONENT ---
// This handles the "glow" following your mouse
function SpotlightCard({ 
  children, 
  className = "",
  colSpan = "md:col-span-1" 
}: { 
  children: React.ReactNode; 
  className?: string;
  colSpan?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black/50 shadow-sm",
        colSpan,
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120, 120, 120, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full flex flex-col">{children}</div>
    </motion.div>
  );
}

// --- 2. CUSTOM VISUALS ---

// A. Code Typing Animation
const CodeVisual = () => {
  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900/50 p-4 font-mono text-xs overflow-hidden relative">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="space-y-1 text-neutral-600 dark:text-neutral-400">
        <p><span className="text-purple-500">const</span> <span className="text-blue-500">Developer</span> = {"{"}</p>
        <p className="pl-4">name: <span className="text-green-500">"Divyansh"</span>,</p>
        <p className="pl-4">skills: [<span className="text-green-500">"Next.js"</span>, <span className="text-green-500">"React"</span>],</p>
        <p className="pl-4">hardWorker: <span className="text-orange-500">true</span>,</p>
        <p>{"}"};</p>
        <motion.div 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-blue-500 mt-1"
        />
      </div>
      {/* Fade out bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-neutral-100 dark:from-black/40 to-transparent" />
    </div>
  );
};

// B. Heartbeat Animation
const HeartbeatVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-red-500/5">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* ECG Line SVG */}
        <svg viewBox="0 0 500 150" className="w-full opacity-20">
            <motion.path
                d="M0,75 L50,75 L60,45 L70,105 L80,75 L450,75"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-red-500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
        </svg>
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="z-10 bg-white dark:bg-neutral-800 p-4 rounded-full shadow-xl border border-red-100 dark:border-red-900/30"
      >
        <Activity className="w-8 h-8 text-red-500" />
      </motion.div>
    </div>
  );
};

// C. Floating Map Pin
const MapVisual = () => {
    return (
        <div className="relative w-full h-full bg-blue-500/5 flex items-center justify-center overflow-hidden">
            {/* Radar Rings */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-blue-500/20 rounded-full"
                    style={{ width: i * 100, height: i * 100 }}
                    animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}
            <div className="z-10 flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Remote Ready</span>
            </div>
        </div>
    )
}

// --- 3. MAIN COMPONENT ---

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-32 overflow-hidden">
      
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-2xl">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
          >
             <span className="h-px w-8 bg-neutral-400 dark:bg-neutral-600" />
             <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">About Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-300 dark:to-neutral-500"
          >
            I’m not just a compiler.<br /> I’m a <span className="text-primary">creator.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            My journey isn't just about writing code; it's about solving real problems with elegant engineering. From the gym to the terminal, I believe in discipline, clarity, and continuous iteration.
          </motion.p>
        </div>
      </div>

      {/* The "Pro" Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Engineering (Large) */}
          <SpotlightCard colSpan="md:col-span-2">
            <div className="absolute top-0 right-0 p-6 z-10">
               <Cpu className="w-8 h-8 text-neutral-300 dark:text-neutral-700" />
            </div>
            <div className="p-8 h-full flex flex-col z-10 relative">
               <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Engineering Excellence</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 max-w-sm">
                    Building production-grade applications. I don't just write code that works; I write code that scales, reads well, and handles errors gracefully.
                  </p>
               </div>
               
               {/* Visual at bottom right */}
               <div className="w-full h-32 mt-6 rounded-xl overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-800">
                  <CodeVisual />
               </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Education (Tall/Square on mobile) */}
          <SpotlightCard className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-black">
             <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-6 p-4 bg-white dark:bg-neutral-800 rounded-full shadow-lg">
                   <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">VIT Vellore</h3>
                <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">B.Tech IT</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                   Where I learned the fundamentals of CS, but taught myself the art of development.
                </p>
             </div>
          </SpotlightCard>

          {/* Card 3: Gym/Discipline */}
          <SpotlightCard>
             <div className="h-full flex flex-col">
                <div className="flex-1 p-6 relative z-10">
                   <h3 className="text-xl font-bold mb-2">Discipline & Health</h3>
                   <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      A gym enthusiast and badminton player. Physical resilience fuels my mental clarity for debugging complex logic.
                   </p>
                </div>
                <div className="h-32 w-full relative overflow-hidden">
                   <HeartbeatVisual />
                </div>
             </div>
          </SpotlightCard>

          {/* Card 4: Global (Large) */}
          <SpotlightCard colSpan="md:col-span-2">
             <div className="h-full grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                      <Globe2 className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">Global Perspective</h3>
                   <p className="text-neutral-500 dark:text-neutral-400">
                      Based in India, but building for the world. I write documentation in English, commit in Git, and deploy on the Edge. Ready for asynchronous, remote challenges.
                   </p>
                </div>
                <div className="relative h-full min-h-[200px] border-t md:border-t-0 md:border-l border-neutral-100 dark:border-neutral-800">
                   <MapVisual />
                </div>
             </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}
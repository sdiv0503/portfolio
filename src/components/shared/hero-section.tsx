"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Terminal, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

// --- 1. Dynamic Text Component (Shows off JS Skills) ---
const roles = ["Modern Web Apps", "Scalable APIs", "Pixel-Perfect UI", "Secure Systems"];
function TypewriterEffect() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText === currentRole) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <span className="inline-block min-w-[200px] text-left font-bold text-violet-500 dark:text-violet-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// --- 2. Floating Tech Icons (Visual Interest) ---
function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] opacity-20 dark:opacity-10"
      >
        <Code2 size={120} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[10%] opacity-20 dark:opacity-10"
      >
        <Terminal size={100} />
      </motion.div>
      <motion.div 
         animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         className="absolute top-1/3 right-[20%] opacity-10"
      >
        <Cpu size={80} />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  // Parallax effect for the text
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-background">
      
      {/* --- BACKGROUND: Aurora Gradients --- */}
      <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-500/30 blur-[100px] animate-blob transform-gpu mix-blend-multiply dark:mix-blend-normal dark:bg-purple-900/40" />
      <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/30 blur-[100px] animate-blob transform-gpu animation-delay-2000 mix-blend-multiply dark:mix-blend-normal dark:bg-cyan-900/40" />
      <div className="absolute -bottom-40 left-20 h-96 w-96 rounded-full bg-blue-500/30 blur-[100px] animate-blob transform-gpu animation-delay-4000 mix-blend-multiply dark:mix-blend-normal dark:bg-blue-900/40" />

      {/* Floating Elements */}
      <FloatingIcons />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Badge: Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center rounded-full border border-zinc-200/50 bg-white/30 px-4 py-1.5 text-sm font-medium text-zinc-900 backdrop-blur-md dark:border-zinc-700/50 dark:bg-zinc-800/30 dark:text-zinc-100 shadow-xl shadow-purple-500/10"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-4 text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl leading-tight"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
              Divyansh Sharma
            </span>
          </motion.h1>

          {/* Subtitle with Typewriter */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300 sm:text-xl md:text-2xl"
          >
            I build <TypewriterEffect /> <br className="hidden sm:block" />
            using Next.js, TypeScript, and modern design principles.
          </motion.div>

          {/* Buttons: Enhanced with Shimmer and Shadows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row items-center"
          >
            <Link href="/projects">
              <Button size="lg" className="group relative h-12 min-w-[160px] overflow-hidden rounded-full bg-zinc-900 text-white shadow-2xl shadow-purple-500/20 transition-all hover:scale-105 hover:shadow-purple-500/40 dark:bg-white dark:text-zinc-900">
                 {/* Shimmer Effect */}
                 <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                 <span className="relative z-20 flex items-center">
                    View Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                 </span>
              </Button>
            </Link>
            
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline" size="lg" className="h-12 min-w-[160px] rounded-full border-zinc-200 bg-white/50 backdrop-blur-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 transition-all hover:scale-105">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
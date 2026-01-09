"use client";

import { cn } from "@/lib/utils";
import { Code2, Terminal, Cpu, Globe } from "lucide-react";

// 1. The Terminal Graphic (For "Full Stack")
export const TerminalGraphic = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 p-4 relative overflow-hidden group">
      {/* Top Bar */}
      <div className="flex gap-2 mb-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      {/* Code Text */}
      <div className="font-mono text-xs text-green-400 space-y-1 opacity-80">
        <p>$ npm install next-gen-skills</p>
        <p className="text-blue-400">Installing...</p>
        <p>+ TypeScript@5.0</p>
        <p>+ React@19.0</p>
        <p>+ Tailwind@4.0</p>
        <p className="animate-pulse">_</p>
      </div>
    </div>
  );
};

// 2. The Map/Globe Graphic (For "Location")
export const MapGraphic = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] dark:bg-dot-white/[0.2] relative items-center justify-center overflow-hidden">
       {/* Radar Pulse Effect */}
       <div className="absolute h-full w-full flex items-center justify-center">
         <div className="h-24 w-24 bg-blue-500/20 rounded-full animate-ping absolute" />
         <div className="h-16 w-16 bg-blue-500/40 rounded-full absolute" />
         <Globe className="h-8 w-8 text-blue-500 relative z-10" />
       </div>
    </div>
  );
};

// 3. The Active Life Graphic
export const ActiveGraphic = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 relative p-4 items-center justify-center gap-4">
        {/* Simple aesthetic representation of gym/sports */}
        <div className="flex flex-col items-center gap-2 group">
             <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center border border-orange-200 dark:border-orange-800">
                <span className="text-xl">💪</span>
             </div>
             <span className="text-[10px] uppercase font-bold text-neutral-400">Gym</span>
        </div>
        <div className="h-8 w-[1px] bg-neutral-200 dark:bg-neutral-800" />
        <div className="flex flex-col items-center gap-2 group">
             <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                <span className="text-xl">🏸</span>
             </div>
             <span className="text-[10px] uppercase font-bold text-neutral-400">Sport</span>
        </div>
    </div>
  );
};

// 4. Education Graphic
export const EducationGraphic = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-tr from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex flex-col items-center justify-center text-center p-2">
            <span className="text-3xl font-bold text-violet-500">VIT</span>
            <span className="text-xs uppercase tracking-widest text-violet-400 font-semibold">Vellore</span>
            <div className="mt-2 text-[10px] px-2 py-1 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20">
                Class of 2026
            </div>
        </div>
    )
}
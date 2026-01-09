"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface TimelineItemProps {
  data: {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
    tech: string[];
  };
  index: number;
}

export const TimelineItem = ({ data, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0; // Checks if it's the 1st, 3rd, 5th item...

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Mobile: Left-aligned line marker */}
      <div className="md:hidden absolute left-0 top-0 h-full w-[2px] bg-neutral-800">
        <div className="absolute top-6 -left-[5px] h-3 w-3 rounded-full bg-blue-500 ring-4 ring-black" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
          // This aligns the Title/Date towards the center line
          isEven ? "md:text-right" : "md:text-left"
        }`}
      >
        {/* 1. The Date & Title Side */}
        <div className={`${isEven ? "md:order-1" : "md:order-2 md:col-start-2"}`}>
          <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
          <div
            className={`flex flex-col gap-1 text-neutral-400 font-medium mb-4 ${
              // Aligns the icons to be near the center line
              isEven ? "md:items-end" : "md:items-start"
            }`}
          >
            <span className="flex items-center gap-2 text-blue-400">
              <Calendar className="w-4 h-4" /> {data.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {data.company}, {data.location}
            </span>
          </div>
        </div>

        {/* 2. The Center Dot (Desktop only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 h-full flex-col items-center justify-start">
          <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-black z-20 mt-2" />
        </div>

        {/* 3. The Card Side */}
        <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
          <div className="bg-neutral-900/50 border border-white/10 p-6 rounded-2xl hover:bg-neutral-900/80 transition-colors text-left">
            {/* ^ ADDED 'text-left' above to force override parent alignment */}
            
            <ul className="list-disc pl-5 space-y-2 mb-4 text-left">
              {/* ^ ADDED 'list-disc pl-5' for proper bullet formatting */}
              {data.description.map((desc, i) => (
                <li key={i} className="text-neutral-300 text-sm leading-relaxed">
                  {/* Removed the manual "•" string, CSS handles it better */}
                  {desc}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 justify-start">
              {/* ^ Changed to always 'justify-start' so tags align left */}
              {data.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
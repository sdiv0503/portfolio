"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE_DATA } from "@/constants/experience";
import { TimelineItem } from "@/components/ui/timeline-item";

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a growing line height based on scroll
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black py-32"
      ref={containerRef}
    >
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className=" pb-2 mb-4 bg-linear-to-b from-white to-white/40 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Professional Journey
          </h2>
          <p className="mx-auto max-w-xl text-lg text-neutral-400">
            Experience bridging the gap between design and functional
            engineering.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* The Vertical Line (Desktop Background) */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-[2px] -translate-x-1/2 bg-neutral-800 md:block" />

          {/* The Glowing Progress Line (Desktop) */}
          <motion.div
            style={{ height }}
            className="absolute top-0 left-1/2 z-0 hidden w-0.5 -translate-x-1/2 bg-linear-to-b from-blue-500 via-purple-500 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:block"
          />

          <div className="flex flex-col gap-0">
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

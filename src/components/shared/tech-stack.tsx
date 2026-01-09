"use client";

import { TechMarquee } from "@/components/ui/tech-marquee";
import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS_SKILLS } from "@/constants/skills";

export const TechStack = () => {
  // Combine Backend and Tools for the second row to make it dense
  const row2 = [...BACKEND_SKILLS, ...TOOLS_SKILLS];

  return (
    <section className="relative py-20 w-full overflow-hidden bg-black/95 text-white">
      {/* Background aesthetics: A subtle gradient blob to give depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <h2 className=" pb-2 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
          The Tech Ecosystem
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          My coding arsenal. I treat my stack like a product—constantly upgrading 
          for speed, security, and scalability.
        </p>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        {/* Row 1: Frontend - Moving Left */}
        <div className="rotate-1 hover:rotate-0 transition-transform duration-500">
             <TechMarquee items={FRONTEND_SKILLS} direction="left" speed="slow" />
        </div>

        {/* Row 2: Backend & Tools - Moving Right */}
        <div className="-rotate-1 hover:rotate-0 transition-transform duration-500">
            <TechMarquee items={row2} direction="right" speed="normal" />
        </div>
      </div>
    </section>
  );
};
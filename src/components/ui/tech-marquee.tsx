"use client";

import { cn } from "@/lib/utils"; // Assuming you have the shadcn utility
import { motion } from "framer-motion";

interface TechMarqueeProps {
  items: { name: string; icon: React.ElementType }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const TechMarquee = ({
  items,
  direction = "left",
  speed = "normal",
  className,
}: TechMarqueeProps) => {
  const speedDuration = {
    fast: 20,
    normal: 40,
    slow: 60,
  };

  return (
    <div
      className={cn(
        // The mask-image here creates the fade effect on left and right
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speedDuration[speed],
        }}
        className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
      >
        {/* We duplicate the items to ensure seamless looping */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl border border-white/10 bg-white/5 px-8 py-6 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-4">
              <item.icon className="h-8 w-8 text-neutral-300" />
              <span className="text-sm font-semibold text-neutral-200">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
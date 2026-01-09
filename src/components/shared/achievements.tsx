"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// 1. Data Source
const achievements = [
  {
    title: "Hackathon Top 10",
    category: "Technical",
    org: "IEEE Gravitas '23",
    description: "Secured top 10 position building 'LocalLens' - an AI inventory engine.",
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    color: "bg-yellow-500/10 border-yellow-500/20",
    href: null,
  },
  {
    title: "Meta Front-End Developer",
    category: "Professional Cert",
    org: "Meta",
    description: "Mastered React, Advanced JavaScript, and Version Control. Built production-ready frontend applications.",
    icon: <Star className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-500/10 border-blue-500/20",
    href: "https://www.coursera.org/account/accomplishments/verify/5ZJSY6JRWW8E",
  },
  {
    title: "IBM Data Analyst",
    category: "Professional Cert",
    org: "IBM",
    description: "Gained proficiency in Python, SQL, and Data Visualization. Analyzed real-world datasets for business insights.",
    icon: <Award className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-500/10 border-purple-500/20",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/96WVW9DA07E0",
  },
  {
    title: "State Badminton Champion",
    category: "Sports",
    org: "State Championship",
    description: "Played at National Level. 10th Grade State Champion.",
    icon: <Medal className="h-6 w-6 text-emerald-500" />,
    color: "bg-emerald-500/10 border-emerald-500/20",
    href: null,
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-2 text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-neutral-600 to-neutral-400 dark:from-neutral-100 dark:via-neutral-400 dark:to-neutral-600"
          >
            Trophy Case
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A collection of my professional certifications, hackathon wins, and competitive milestones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <AchievementCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Create a motion component for Next.js Link
const MotionLink = motion.create(Link);

function AchievementCard({ item, index }: { item: any; index: number }) {
  // Common visual classes
  const cardClasses = cn(
    "group relative overflow-hidden rounded-2xl border bg-white dark:bg-neutral-900/50 p-6 sm:p-8 transition-all duration-300 block h-full",
    "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1",
    "border-neutral-200 dark:border-neutral-800"
  );

  // Common Animation Props
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1, duration: 0.4 },
    viewport: { once: true }
  };

  // Render Logic: If it has a link, use MotionLink; otherwise use motion.div
  if (item.href) {
    return (
      <MotionLink href={item.href} target="_blank" className={cardClasses} {...animationProps}>
        <CardContent item={item} />
      </MotionLink>
    );
  }

  return (
    <motion.div className={cardClasses} {...animationProps}>
      <CardContent item={item} />
    </motion.div>
  );
}

// Extracted content to avoid code duplication
function CardContent({ item }: { item: any }) {
  return (
    <>
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
        <div
          className={cn(
            "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110",
            item.color,
            "bg-opacity-50 backdrop-blur-md"
          )}
        >
          {item.icon}
          <div className={cn("absolute inset-0 blur-xl opacity-20", item.color.split(" ")[0])} />
        </div>

        <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/80">
                        {item.org}
                    </p>
                </div>
                <span className="shrink-0 inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                    {item.category}
                </span>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
            </p>

            {item.href && (
                <div className="pt-4 flex items-center text-xs font-medium text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    View Certificate <ArrowUpRight className="ml-1 h-3 w-3" />
                </div>
            )}
        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </>
  );
}
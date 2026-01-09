"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  TerminalGraphic,
  MapGraphic,
  ActiveGraphic,
  EducationGraphic,
} from "./bento-items";
import { Code2, Dumbbell, GraduationCap, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-background relative w-full py-24">
      <div className="mx-auto mb-12 max-w-7xl px-4 md:px-8">
        <h2 className="pb-2 mb-4 bg-linear-to-b from-neutral-800 to-neutral-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl dark:from-neutral-50 dark:to-neutral-400">
          Beyond the Code
        </h2>
        <p className="mx-auto max-w-lg text-center text-neutral-500 dark:text-neutral-400">
          I’m not just a compiler. I’m a problem solver, a creative thinker, and
          an active individual.
        </p>
      </div>

      <BentoGrid className="mx-auto max-w-4xl px-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
            colSpan={item.colSpan}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "Engineering Excellence",
    description:
      "Building production-grade applications with the modern React ecosystem. Obsessed with clean code and performance.",
    header: <TerminalGraphic />,
    icon: <Code2 className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    colSpan: 2,
  },
  {
    title: "VIT Vellore",
    description:
      "B.Tech Information Technology.",
    header: <EducationGraphic />,
    icon: <GraduationCap className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    colSpan: 1,
  },
  {
    title: "Discipline & Health",
    description:
      "A gym enthusiast and badminton player. Physical discipline fuels my mental clarity.",
    header: <ActiveGraphic />,
    icon: <Dumbbell className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    colSpan: 1,
  },
  {
    title: "Global Perspective",
    description:
      "Based in India, but building for the world. Ready for remote challenges.",
    header: <MapGraphic />,
    icon: <MapPin className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    colSpan: 2,
  },
];

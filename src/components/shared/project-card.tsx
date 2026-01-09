"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@prisma/client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black/40"
    >
      {/* Image Section with Zoom Effect */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            // OPTIMIZATION: Tells browser which size to load based on screen width
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-500">
            No Image
          </div>
        )}

        {/* Overlay Links (Visible on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <div className="rounded-full bg-white p-3 text-black transition-transform hover:scale-110 hover:bg-neutral-200">
                <Github size={20} />
              </div>
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              aria-label={`View live demo of ${project.title}`}
            >
              <div className="rounded-full bg-white p-3 text-black transition-transform hover:scale-110 hover:bg-neutral-200">
                <ExternalLink size={20} />
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <Link
          href={`/projects/${project.slug}`}
          className="block decoration-neutral-500 underline-offset-4 group-hover:underline"
        >
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="border-none bg-neutral-100 font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer: Read Case Study Button */}
        <div className="mt-auto pt-6">
          <Link href={`/projects/${project.slug}`} className="w-full">
            <Button variant="outline" className="group/btn w-full gap-2">
              Case Study
              <span className="transition-transform group-hover/btn:translate-x-1">
                →
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

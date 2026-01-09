"use server";

import prisma from "@/lib/db";
import { Project } from "@prisma/client";

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc", // Newest projects first
      },
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
    try {
      const projects = await prisma.project.findMany({
        where: {
            featured: true
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 3 // Only top 3 for the home page
      });
      return projects;
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      return [];
    }
  }
  // Add this to the existing file
export async function getProject(slug: string): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: {
        slug: slug,
      },
    });
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
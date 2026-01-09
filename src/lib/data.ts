// lib/data.ts
import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the global object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc', // Newest projects first
      },
    })
    return projects
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch projects")
  }
}
// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting project seeding...");

  // 1. Clear existing data
  await prisma.project.deleteMany();

  // 2. Define The Projects with CORRECTED PATHS
  const projects = [
    {
      title: "Insight-Zero",
      slug: "insight-zero",
      description:
        "The Autonomous Data Steward. A multi-tenant Enterprise Data Intelligence Platform integrating RBAC and Presidio for SOC2-ready PII redaction.",
      content: `
## Overview
Architected a scalable, multi-tenant Enterprise Data Intelligence Platform using **Turborepo**, **Node.js**, and **FastAPI**.

## Key Features
- **Security:** Integrated RBAC and Presidio for SOC2-ready PII redaction.
- **RAG Brain:** Engineered an autonomous agent using **Pinecone** vector database to correlate structured SQL data with unstructured business docs.
- **High Performance:** Optimized data processing implementing asynchronous task queues with **Redis** and **BullMQ**.
- **Reporting:** Developed a multi-modal reporting engine using **React-PDF**, generating executive summaries and interactive dashboards.
      `,
      tags: ["Turborepo", "Node.js", "FastAPI", "Pinecone", "Redis"],
      demoUrl: null,
      githubUrl: "https://github.com/sdiv0503/Insight-zero",
      imageUrl: null, // This handles correctly as "No Image"
      featured: true,
    },
    {
      title: "Career Journal",
      slug: "career-journal",
      description:
        "A split-architecture developer command center. Features a gamified coding journal ('The Gym') and an AI-powered career growth suite ('The Lab').",
      content: `
## Overview
Architected a production-ready, gamified career platform using **Next.js 15**, **Prisma**, and **Clerk Auth** to help developers track daily habits and optimize their job hunt.

## Key Features
- **Gamification Engine:** Developed "The Gym" with a dynamic streak system, XP tracking, and unlockable achievements using **PostgreSQL**.
- **AI Resume Analytics:** Integrated **Gemini 2.5 Flash** for strict ATS scoring, structured feedback, and targeted Job Description gap analysis.
- **Mock Interviewer:** Engineered a real-time, streaming AI chat interface utilizing the Vercel AI SDK to act as a hiring manager based on the user's specific resume context.
- **Career Roadmap:** Created an autonomous generator that builds customized, month-by-month technical curriculums to bridge user skill gaps.
      `,
      tags: ["Next.js", "TypeScript", "Prisma", "Gemini AI", "Tailwind CSS"],
      demoUrl: "https://careerjournal2.vercel.app/",
      githubUrl: "https://github.com/sdiv0503/Career-Journal-2.0",
      imageUrl: "/images/career-journal.png", 
      featured: true,
    },
    {
      title: "LocalLens",
      slug: "locallens",
      description:
        "AI-Powered Demand Forecasting & Inventory Engine. Top 10 Finish in IEEE Gravitas Hackathon.",
      content: `
## Achievement
Secured a Top 10 Finish in the **IEEE Gravitas Hackathon** by engineering a scalable solution for inventory optimization.

## Technical Implementation
- **NLP Pipeline:** Devised a custom pipeline using **spaCy** and **BeautifulSoup** to parse unstructured web data with 90%+ accuracy.
- **Forecasting:** Formulated precision demand predictions implementing a **Prophet** time-series model.
- **Architecture:** Architected a dual-purpose data application using **Streamlit** and **PostgreSQL** for B2B analytics.
- **DevOps:** Streamlined deployment by containerizing the end-to-end application with **Docker**.
      `,
      tags: ["Python", "NLP", "Prophet", "Docker", "Streamlit", "PostgreSQL"],
      demoUrl: "https://locallens.streamlit.app/",
      githubUrl: "https://github.com/sdiv0503/Local-Lens",
      imageUrl: "/images/localLens.png",
      featured: true,
    },
    {
      title: "Fit Track",
      slug: "fit-track",
      description:
        "Full-Stack Fitness Coaching Platform built with Next.js 14 and Feature-Sliced Design.",
      content: `
## Architecture
Built a robust application using **Next.js** and **TypeScript**, implementing Server-Side Rendering (SSR).

## Impact
- **Performance:** Accelerated page load performance by over 50% using SSR.
- **Design Pattern:** Designed the frontend architecture using **Feature-Sliced Design (FSD)**, reducing development cycle time by 30%.
- **Backend:** Constructed a type-safe backend with **PostgreSQL** and **Prisma** to ensure data integrity.
      `,
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "FSD",
        "Tailwind",
      ],
      demoUrl: "https://fittrackthing.vercel.app/",
      githubUrl: "https://github.com/sdiv0503/FitTrack",
      imageUrl: "/images/fitTrack.png",
      featured: false,
    },
    {
      title: "SkillSync",
      slug: "skillsync",
      description:
        "AI-Powered Career Development Platform generating personalized skill recommendations.",
      content: `
## Core Features
- **AI Integration:** Integrated **Hugging Face BERT** to generate personalized skill recommendations.
- **Backend:** Utilized **Supabase** for backend management and real-time capabilities.
- **Analytics:** Created real-time analytical dashboards using **Chart.js**.
- **CI/CD:** Automated the testing and deployment lifecycle, successfully delivering over 10 scalable features.
      `,
      tags: ["Supabase", "BERT", "Chart.js", "CI/CD", "React"],
      demoUrl: "https://skillsyncjournal.vercel.app/",
      githubUrl: "https://github.com/sdiv0503/AI-powered-Career-Journal",
      imageUrl: "/images/skillSync.png",
      featured: false,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log(`✅ Seeded ${projects.length} projects successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

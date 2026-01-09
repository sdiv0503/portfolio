import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject } from "@/actions/get-projects";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Dynamic Metadata (for SEO)
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Divyansh Sharma`,
    description: project.description,
  };
}

// 2. The Page Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-20 pt-24">
      {/* Back Button */}
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Link
          href="/projects"
          className="group mb-8 inline-flex items-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </div>

      <article className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-12 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>

          {/* Metadata & Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-neutral-200 py-6 dark:border-neutral-800">
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
               <div className="flex items-center gap-2">
                 <Calendar className="h-4 w-4" />
                 <span>{new Date(project.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
               </div>
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </Button>
                </Link>
              )}
              {project.demoUrl && (
                <Link href={project.demoUrl} target="_blank">
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {project.imageUrl && (
          <div className="relative mb-16 aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Markdown Content Area */}
        {project.content && (
          <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-a:text-blue-600 dark:prose-a:text-blue-400">
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>
        )}
      </article>
    </main>
  );
}
import { getProjects } from "@/actions/get-projects";
import { ProjectCard } from "@/components/shared/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Divyansh Sharma",
  description: "A showcase of my technical projects and experiments.",
};

// Force dynamic rendering so we always get fresh data
export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen w-full bg-background px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="pb-2 text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
            Featured Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            A collection of full-stack applications, experiments, and open-source contributions.
          </p>
        </div>

        {/* Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold">No projects found</h3>
            <p className="text-neutral-500">The database is currently empty.</p>
          </div>
        )}
      </div>
    </main>
  );
}
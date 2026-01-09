import { getFeaturedProjects } from "@/actions/get-projects";
import { ProjectCard } from "@/components/shared/project-card";
import { FadeIn } from "@/components/shared/fade-in";

export async function FeaturedProjectsSuspense() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
          Featured Work
        </h2>
      </FadeIn>

      {featuredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p, index) => (
            <FadeIn key={p.id} delay={index * 0.1}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="text-center text-neutral-500">
          <p>No featured projects found.</p>
        </div>
      )}
    </div>
  );
}
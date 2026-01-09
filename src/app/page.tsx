import { Suspense } from "react";
import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { TechStack } from "@/components/shared/tech-stack";
import { ExperienceSection } from "@/components/shared/experience";
import { AchievementsSection } from "@/components/shared/achievements";
import { ContactAndSocials } from "@/components/shared/contact-socials";
import { FadeIn } from "@/components/shared/fade-in";
import {
  ProjectGridSkeleton,
  BentoSkeleton,
} from "@/components/shared/skeletons";
import { FeaturedProjectsSuspense } from "@/components/home/featured-projects-suspense";

// Ensure the page is dynamic to fetch fresh data on every request
export const dynamic = "force-dynamic";

export default function Home() {
  // NOTE: We are NOT awaiting data here anymore. The page loads instantly.

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <FadeIn>
        <AboutSection />
      </FadeIn>

      <FadeIn delay={0.2}>
        <TechStack />
      </FadeIn>

      <section id= "experience">
        <FadeIn>
          <ExperienceSection />
        </FadeIn>
      </section>

      {/* Streaming Projects Section */}
      <section className="bg-neutral-50 px-4 py-24 dark:bg-black/20">
        <Suspense fallback={<ProjectGridSkeleton />}>
          <FeaturedProjectsSuspense />
        </Suspense>
      </section>

      <FadeIn>
        <AchievementsSection />
      </FadeIn>

      {/* Streaming Socials Section */}
      <Suspense fallback={<BentoSkeleton />}>
        <ContactAndSocials />
      </Suspense>
    </div>
  );
}

import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Divyansh Sharma",
  description: "Technical articles and thoughts on software engineering.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="container mx-auto max-w-4xl px-4 py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Technical Writings</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts on development, architecture, and my journey.
        </p>
      </div>

      <div className="space-y-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="flex flex-col gap-3 rounded-2xl border p-6 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <time dateTime={post.metadata.publishedAt}>
                    {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  {/* The new Reading Time badge */}
                  <span className="font-medium text-primary/80">{post.readingTime}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                {post.metadata.title}
              </h2>
              
              <p className="text-neutral-600 dark:text-neutral-400">
                {post.metadata.summary}
              </p>
              
              <div className="text-sm font-medium text-primary mt-2">
                Read Article →
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
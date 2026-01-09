import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.metadata.title} | Divyansh Sharma`,
    description: post.metadata.summary,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    console.error(`Post not found for slug: ${slug}`); // Check your terminal for this
    notFound();
  }

  return (
    <main className="container mx-auto max-w-3xl px-4 py-24">
      <Link
        href="/blog"
        className="group mb-8 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.metadata.publishedAt}>
                {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric",
                })}
                </time>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            {post.metadata.title}
          </h1>
        </div>

        {post.metadata.image && (
          <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-xl border bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
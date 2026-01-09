import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
  content: string;
  readingTime: string; // <--- NEW FIELD
};

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(rootDirectory)) {
    return [];
  }

  const files = fs.readdirSync(rootDirectory);

  const posts = files.map((file) => {
    const filePath = path.join(rootDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: file.replace(".mdx", ""),
      metadata: data as BlogPost["metadata"],
      content,
      readingTime: calculateReadingTime(content), // <--- Calculate here
    };
  });

  return posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      metadata: data as BlogPost["metadata"],
      content,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    return null;
  }
}
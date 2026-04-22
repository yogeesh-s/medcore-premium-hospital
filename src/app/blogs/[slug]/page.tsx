import { blogPosts } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogDetailUI from "@/components/BlogDetailUI";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return <BlogDetailUI post={post} />;
}

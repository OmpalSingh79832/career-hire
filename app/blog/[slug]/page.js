import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { breadcrumbSchema, blogPostingSchema, JsonLd } from "@/lib/structuredData";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `/blog/${post.meta.slug}` },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.meta.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.meta.title, path: `/blog/${post.meta.slug}` },
        ])}
      />
      <JsonLd data={blogPostingSchema(post.meta)} />

      <article className="py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <Link href="/blog" className="flex items-center gap-1.5 text-sm font-medium text-brand">
              <ArrowLeft size={14} /> Back to blog
            </Link>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {date} · {post.meta.readingTime} · {post.meta.author}
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              {post.meta.title}
            </h1>

            <div className="prose prose-slate mt-10 max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
              <MDXRemote source={post.content} />
            </div>
          </Reveal>
        </Container>
      </article>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  const date = new Date(post.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-red-900/5"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-brand">
        {date} · {post.readingTime}
      </span>
      <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{post.description}</p>
      <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-brand">
        Read article
        <ArrowRight size={14} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

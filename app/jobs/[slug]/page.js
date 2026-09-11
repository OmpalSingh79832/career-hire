import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { getAllJobSlugs, getJobBySlug } from "@/lib/jobs";
import { breadcrumbSchema, jobPostingSchema, JsonLd } from "@/lib/structuredData";
import { MapPin, Briefcase, Calendar, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};

  return {
    title: job.title,
    description: job.summary,
    alternates: { canonical: `/jobs/${job.slug}` },
    openGraph: {
      title: `${job.title} | Career Hire`,
      description: job.summary,
    },
  };
}

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Jobs", path: "/jobs" },
          { name: job.title, path: `/jobs/${job.slug}` },
        ])}
      />
      <JsonLd data={jobPostingSchema(job)} />

      <section className="bg-ink bg-noise py-16">
        <Container>
          <Reveal>
            <Link href="/jobs" className="flex items-center gap-1.5 text-sm font-medium text-brand-light">
              <ArrowLeft size={14} /> Back to all jobs
            </Link>
            <span className="mt-6 inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-light">
              {job.industry}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              {job.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-brand-light" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={16} className="text-brand-light" />
                {job.employmentType === "FULL_TIME" ? "Full-time" : "Part-time"}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} className="text-brand-light" />
                Posted {new Date(job.postedDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-ink">About this role</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {job.description}
            </p>

            <h2 className="mt-10 font-display text-xl font-bold text-ink">Requirements</h2>
            <ul className="mt-4 space-y-2">
              {job.requirements.map((req) => (
                <li key={req} className="flex gap-3 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {req}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              {job.salaryRange && (
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Compensation
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">
                    {job.salaryRange}
                  </p>
                </div>
              )}
              <Link
                href="/contact"
                className="block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-brand-dark"
              >
                Apply for this role
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

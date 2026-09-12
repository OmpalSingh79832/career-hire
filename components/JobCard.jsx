import Link from "next/link";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

export default function JobCard({ job, homepage = false }) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-red-900/5 ${homepage ? "border-red-100" : "border-slate-200"}`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-50 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
          {job.industry}
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand">
          {job.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{job.summary}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase size={14} />
            {job.employmentType === "FULL_TIME" ? "Full-time" : "Part-time"}
          </span>
        </div>
      </div>
      <div className="relative mt-6 flex items-center gap-1 text-sm font-semibold text-brand">
        View role <ArrowRight size={14} className="transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

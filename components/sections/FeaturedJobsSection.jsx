import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JobCard from "@/components/JobCard";
import { getAllJobs } from "@/lib/jobs";
import { ArrowRight } from "lucide-react";

export default function FeaturedJobsSection() {
  const jobs = getAllJobs().slice(0, 3);

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Opportunities"
            title="Featured openings"
            description="A snapshot of current roles across Healthcare, Retail, and Hospitality."
          />
          <Link href="/jobs" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand">
            View all jobs <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {jobs.map((job, i) => (
            <Reveal key={job.slug} delay={i * 0.08}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import JobCard from "@/components/JobCard";
import Reveal from "@/components/Reveal";
import { getAllJobs } from "@/lib/jobs";
import { breadcrumbSchema, JsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Job Listings",
  description:
    "Browse current openings in Healthcare, Retail, and Hospitality across Canada, posted by Career Hire.",
  alternates: { canonical: "/jobs" },
};

export default function JobsPage() {
  const jobs = getAllJobs();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Jobs", path: "/jobs" }])} />

      <PageHero
        eyebrow="Careers"
        title="Find your next role in Canada"
        description="Current openings across Healthcare, Retail, and Hospitality — updated regularly."
        image="https://loremflickr.com/1600/700/career,interview,office?lock=9"
      />

      <section className="py-20">
        <Container>
          <p className="mb-8 text-sm font-semibold text-brand">{jobs.length} open roles</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal key={job.slug} delay={(i % 3) * 0.08}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

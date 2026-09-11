import jobsData from "@/content/jobs.json";

export function getAllJobs() {
  return [...jobsData].sort(
    (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
  );
}

export function getJobBySlug(slug) {
  return jobsData.find((job) => job.slug === slug) || null;
}

export function getJobsByIndustry(industrySlug) {
  return getAllJobs().filter((job) => job.industry === industrySlug);
}

export function getAllJobSlugs() {
  return jobsData.map((job) => job.slug);
}

import { site, industries } from "@/lib/site";
import { getAllJobs } from "@/lib/jobs";
import { getAllPostsMeta } from "@/lib/blog";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/industries",
    "/services",
    "/jobs",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    ...industries.map((i) => `/industries/${i.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const jobRoutes = getAllJobs().map((job) => ({
    url: `${site.url}/jobs/${job.slug}`,
    lastModified: new Date(job.postedDate),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogRoutes = getAllPostsMeta().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...jobRoutes, ...blogRoutes];
}

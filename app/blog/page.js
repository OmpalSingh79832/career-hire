import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import { getAllPostsMeta } from "@/lib/blog";
import { breadcrumbSchema, JsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Blog",
  description:
    "Guidance, market insight, and practical advice for job seekers and employers navigating the Canadian labour market.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />

      <PageHero
        eyebrow="Resources"
        title="Insights for job seekers & employers"
        description="Practical guidance on working, hiring, and immigrating in Canada."
        image="https://loremflickr.com/1600/700/writing,notebook,desk?lock=10"
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

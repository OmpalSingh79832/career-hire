import PageHero from "@/components/PageHero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import { breadcrumbSchema, JsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Industries We Serve",
  description:
    "Career Hire specializes in recruitment for Healthcare, Retail, and Hospitality — connecting Canadian employers with vetted, work-ready talent.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />

      <PageHero
        eyebrow="Industries"
        title="Focused expertise, deeper candidate networks"
        description="We recruit exclusively across three sectors — so our knowledge of each one runs deep, not thin."
        image="https://loremflickr.com/1600/700/canada,office,team?lock=5"
      />

      <IndustriesSection />
    </>
  );
}

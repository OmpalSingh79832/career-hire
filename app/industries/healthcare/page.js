import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { industries } from "@/lib/site";

const industry = industries.find((i) => i.slug === "healthcare");

export const metadata = {
  title: "Healthcare Recruitment & Staffing",
  description: industry.heroDescription,
  alternates: { canonical: "/industries/healthcare" },
};

export default function HealthcarePage() {
  return <IndustryPageTemplate industry={industry} />;
}

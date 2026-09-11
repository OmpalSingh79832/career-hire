import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { industries } from "@/lib/site";

const industry = industries.find((i) => i.slug === "hospitality");

export const metadata = {
  title: "Hospitality Recruitment & Staffing",
  description: industry.heroDescription,
  alternates: { canonical: "/industries/hospitality" },
};

export default function HospitalityPage() {
  return <IndustryPageTemplate industry={industry} />;
}

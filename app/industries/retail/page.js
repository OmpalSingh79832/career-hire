import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { industries } from "@/lib/site";

const industry = industries.find((i) => i.slug === "retail");

export const metadata = {
  title: "Retail Recruitment & Staffing",
  description: industry.heroDescription,
  alternates: { canonical: "/industries/retail" },
};

export default function RetailPage() {
  return <IndustryPageTemplate industry={industry} />;
}

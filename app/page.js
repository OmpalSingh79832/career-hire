import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FeaturedJobsSection from "@/components/sections/FeaturedJobsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/lib/site";
import { faqSchema, JsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Canadian Recruitment & Staffing Agency",
  description: site.description,
  alternates: { canonical: "/" },
};

const faqs = [
  {
    question: "What is Career Hire, and how can it help my business?",
    answer:
      "Career Hire is a Canadian recruitment agency connecting employers with vetted domestic and international talent. We manage sourcing, screening, and onboarding so you can focus on running your business.",
  },
  {
    question: "How can I hire a foreign worker for my business in Canada?",
    answer:
      "The process typically starts with a Labour Market Impact Assessment (LMIA), followed by a formal job offer and a work permit application through IRCC. We guide employers through each step.",
  },
  {
    question: "What industries does Career Hire specialize in?",
    answer:
      "We focus on Healthcare, Retail, and Hospitality — sectors where Canadian employers consistently face skills and staffing shortages.",
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "Timelines vary by role and industry, but our streamlined screening process is designed to get qualified candidates in front of you quickly, without compromising on vetting quality.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <HeroSlider />
      <StatsSection homepage />
      <ServicesSection homepage />
      <IndustriesSection homepage />
      <ProcessSection homepage />
      <WhyUsSection homepage />
      <FeaturedJobsSection homepage />
      <TestimonialsSection homepage />
      <FAQSection faqs={faqs} />
      <CTASection homepage />
    </>
  );
}

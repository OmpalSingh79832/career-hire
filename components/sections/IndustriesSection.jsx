import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DynamicIcon from "@/components/DynamicIcon";
import { industries } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function IndustriesSection({ homepage = false }) {
  return (
    <section className={`py-24 ${homepage ? "bg-white" : "bg-white"}`}>
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Deep expertise where it counts"
          description="We focus our recruitment expertise on three sectors that keep Canada running — so our candidate networks stay deep, not wide."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 0.1}>
              <Link
                href={`/industries/${industry.slug}`}
                className={`group relative block overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${homepage ? "h-[420px] border-red-100 bg-[#fff7f5]" : "h-[420px] border-transparent"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industry.image}
                  alt={`${industry.name} recruitment`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition duration-300 ${homepage ? "bg-linear-to-t from-ink/80 via-ink/10 to-transparent group-hover:from-brand/85" : "bg-gradient-to-t from-ink via-ink/60 to-transparent group-hover:from-brand-dark/90"}`} />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                    <DynamicIcon name={industry.icon} size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-slate-200 opacity-90">
                    {industry.shortDescription}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    Explore {industry.name}
                    <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

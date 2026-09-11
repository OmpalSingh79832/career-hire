import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DynamicIcon from "@/components/DynamicIcon";
import { services } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Full-service recruitment support"
            description="Whether you need one specialist hire or an ongoing pipeline of talent, our services scale to fit your business."
          />
          <Link href="/services" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand">
            View all services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-red-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <DynamicIcon name={s.icon} size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display font-bold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                <ArrowUpRight
                  size={16}
                  className="absolute right-6 top-6 text-slate-300 opacity-0 transition group-hover:opacity-100 group-hover:text-brand"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

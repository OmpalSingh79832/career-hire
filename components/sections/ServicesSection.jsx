import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DynamicIcon from "@/components/DynamicIcon";
import { services } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ServicesSection({ homepage = false }) {
  return (
    <section className={`py-24 ${homepage ? "bg-[#f8f6f2]" : "bg-slate-50"}`}>
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
              {homepage ? (
                <div className={`group relative flex min-h-80 h-full flex-col justify-between overflow-hidden rounded-4xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/8 md:p-6 ${i % 3 === 1 ? "border-slate-200 bg-[#fcfbf8]" : i % 3 === 2 ? "border-red-200 bg-[#fff0ef]" : "border-slate-200 bg-white"}`}>
                  <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                    <span>Service 0{i + 1}</span>
                    <DynamicIcon name={s.icon} size={18} strokeWidth={1.8} className="text-brand" />
                  </div>
                  <div className="mt-12 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="max-w-44 font-display text-3xl font-semibold leading-[1.2] tracking-[-0.045em] text-ink md:text-4xl">{s.name}</h3>
                      <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">{s.description}</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                    <DynamicIcon name={s.icon} size={22} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                  <ArrowUpRight size={16} className="absolute right-6 top-6 text-slate-300 opacity-0 transition group-hover:opacity-100 group-hover:text-brand" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

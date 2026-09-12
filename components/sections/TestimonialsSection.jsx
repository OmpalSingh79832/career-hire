import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";
import { ArrowUpRight, Quote } from "lucide-react";

export default function TestimonialsSection({ homepage = false }) {
  return (
    <section className={`py-24 ${homepage ? "bg-[#f8f6f2]" : "bg-slate-50"}`}>
      <Container>
        <SectionHeading
          eyebrow="Trust"
          title="What our clients say"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className={`group relative flex min-h-96 h-full flex-col justify-between overflow-hidden rounded-4xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/8 md:p-8 ${homepage
                ? i === 1 ? "border-red-200 bg-[#fff0ef]" : "border-slate-200 bg-white"
                : "border-slate-200 bg-white"
                }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand">Client story 0{i + 1}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                      <Quote size={18} strokeWidth={1.8} fill="currentColor" />
                    </span>
                  </div>
                  <div className="mt-7 h-1 w-12 rounded-full bg-brand transition-all duration-300 group-hover:w-20" />
                  <p className="mt-7 font-display text-xl font-normal  leading-[1.3] tracking-tight text-ink md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-10 flex items-end justify-between gap-4 border-t border-slate-200/80 pt-5">
                  <div className="flex min-w-0 items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover ring-4 ring-white" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-extrabold text-ink">{t.name}</p>
                      <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="shrink-0 text-brand transition duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

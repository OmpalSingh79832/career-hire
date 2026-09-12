import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DynamicIcon from "@/components/DynamicIcon";
import { processSteps } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export default function ProcessSection({ homepage = false }) {
  if (homepage) {
    return (
      <section className="bg-[#fff7f5] py-24 md:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="How it works"
              title="A recruitment process built for results"
              description="From the first conversation to the first day, every step is clear, considered, and focused on the right fit."
            />
            <span className="hidden pb-1 text-xs font-extrabold uppercase tracking-[0.18em] text-brand md:block">Five steps, one clear route</span>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.08}>
                <article className={`group relative flex min-h-80 h-full flex-col justify-between overflow-hidden rounded-4xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/8 md:p-7 ${index % 3 === 1 ? "border-slate-200 bg-[#fcfbf8]" : index % 3 === 2 ? "border-red-200 bg-[#fff0ef]" : "border-slate-200 bg-white"}`}>
                  <div className="flex items-start justify-between">
                    <span className="font-display text-4xl font-semibold tracking-[-0.06em] text-red-200 transition group-hover:text-brand">{step.step}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                      <DynamicIcon name={step.icon} size={18} strokeWidth={1.8} />
                    </span>
                  </div>
                  <div>

                    <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-[-0.03em] text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
                    <ArrowUpRight size={19} className="mt-6 text-brand transition duration-300 group-hover:rotate-45" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-ink bg-noise py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"

        />
        <h2 className={`mt-3 font-display text-3xl font-extrabold md:text-4xl ${homepage ? "text-ink" : "text-white"}`}>
          A recruitment process built for results
        </h2>
        <p className="sr-only">Recruitment process steps</p>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className={`absolute left-0 right-0 top-6 hidden h-px md:block ${homepage ? "bg-linear-to-r from-transparent via-brand/30 to-transparent" : "bg-linear-to-r from-transparent via-white/15 to-transparent"}`} />
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="relative text-center md:text-left">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-red-950/20 md:mx-0">
                <DynamicIcon name={step.icon} size={20} />
              </div>
              <p className="mt-5 font-display text-xs font-bold tracking-widest text-brand-light">
                STEP {step.step}
              </p>
              <h3 className={`mt-2 font-display font-bold ${homepage ? "text-ink" : "text-white"}`}>{step.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${homepage ? "text-slate-600" : "text-slate-400"}`}>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section >
  );
}

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DynamicIcon from "@/components/DynamicIcon";
import { processSteps } from "@/lib/site";

export default function ProcessSection() {
  return (
    <section className="bg-ink bg-noise py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"

        />
        <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
          A recruitment process built for results
        </h2>
        <p className="sr-only">Recruitment process steps</p>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="relative text-center md:text-left">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-red-950/40 md:mx-0">
                <DynamicIcon name={step.icon} size={20} />
              </div>
              <p className="mt-5 font-display text-xs font-bold tracking-widest text-brand-light">
                STEP {step.step}
              </p>
              <h3 className="mt-2 font-display font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section >
  );
}

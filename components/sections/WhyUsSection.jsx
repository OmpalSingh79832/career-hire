import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck, Globe2, Users, Clock } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Rigorous Screening",
    text: "Every candidate is vetted for credentials, experience, and fit before they ever reach your desk.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    text: "A strong international network gives you access to talent pools beyond the local market.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    text: "We stay involved through onboarding and beyond — recruitment is the start, not the finish line.",
  },
  {
    icon: Clock,
    title: "Fast, Focused Turnaround",
    text: "Deep specialization in three industries means shorter searches, not generic mass sourcing.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand/10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://loremflickr.com/900/1000/office,teamwork,canada?lock=45"
              alt="Career Hire recruitment team at work"
              loading="lazy"
              className="aspect-[9/10] w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/10"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-5 shadow-xl md:block">
              <p className="font-display text-3xl font-extrabold text-brand">89%</p>
              <p className="text-xs font-medium text-slate-500">Client retention rate</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Career Hire"
            title="A recruitment partner, not just a vendor"
          />
          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand shadow-sm ring-1 ring-slate-200">
                  <p.icon size={18} />
                </div>
                <h3 className="mt-3 font-display font-bold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

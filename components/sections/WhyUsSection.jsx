import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck, Globe2, Users, Clock } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

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

export default function WhyUsSection({ homepage = false }) {
  if (homepage) {
    return (
      <section className="bg-white py-24 md:py-20">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-3 rounded-4xl border border-red-100 bg-[#fff7f5]" />
              <div className="relative overflow-hidden rounded-4xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://loremflickr.com/900/1000/office,teamwork,canada?lock=45"
                  alt="Career Hire recruitment team at work"
                  loading="lazy"
                  className="aspect-[0.9] w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-7 -right-3 rounded-3xl border border-red-100 bg-white px-6 py-5 shadow-xl shadow-red-900/10 sm:-right-7">
                <p className="font-display text-4xl font-semibold tracking-tighter text-brand">89%</p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Client retention</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand">
                <span className="h-px w-8 bg-brand" /> Why Career Hire
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[0.95] tracking-tighter text-ink sm:text-3xl md:text-4xl">
                The difference is in the details.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
                We bring care, market knowledge, and a genuinely human process to every search. That is what makes a placement last.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {points.map((point, index) => (
                <Reveal key={point.title} delay={index * 0.08}>
                  <div className="group h-full rounded-3xl border border-slate-200 bg-[#fcfbf8] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-900/5">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                        <point.icon size={18} strokeWidth={1.8} />
                      </span>
                      <ArrowUpRight size={17} className="text-slate-300 transition group-hover:rotate-45 group-hover:text-brand" />
                    </div>
                    <h3 className="mt-7 font-display text-lg font-semibold tracking-[-0.02em] text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-4xl bg-brand/10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://loremflickr.com/900/1000/office,teamwork,canada?lock=45"
              alt="Career Hire recruitment team at work"
              loading="lazy"
              className="aspect-9/10 w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/10"
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

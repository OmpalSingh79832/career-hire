import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/structuredData";
import { ArrowUpRight, CheckCircle2, Compass, HeartHandshake, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Career Hire is an Ontario-based executive search and recruitment firm helping Canadian businesses find the right talent since 2016.",
  alternates: { canonical: "/about" },
};

const objectives = [
  "Lead in thought and practice across Executive Search, Employee Outsourcing, Overseas Recruitment, and Onboarding.",
  "Align the best people with the right opportunities based on skills, knowledge, and competencies.",
  "Help businesses identify talent shortfalls, skill gaps, and development needs.",
  "Maintain cost leadership through best practices, technology, and process improvement.",
  "Ensure every organization has the right people in the right roles to hit its goals.",
];

const values = [
  {
    title: "Professional Service",
    text: "Our recruiters bring deep experience to every search, understanding client requirements before sourcing a single candidate.",
  },
  {
    title: "Long-Term Partnership",
    text: "We're an Ontario-based firm built for lasting relationships — not one-off placements.",
  },
  {
    title: "Ethics",
    text: "Respect, integrity, and transparency guide every stage of our process, with every stakeholder.",
  },
  {
    title: "Needs Assessment",
    text: "No two businesses are alike. We tailor our staffing approach to your specific needs, not a generic template.",
  },
  {
    title: "Global Search Network",
    text: "A strong international candidate network gives you access to diverse skill sets you won't find locally.",
  },
  {
    title: "Quality Process",
    text: "Our qualitative, repeatable process is what makes our placements reliable and our clients confident.",
  },
];

const highlights = [
  { value: "2016", label: "Founded in Ontario" },
  { value: "3", label: "Specialist industries" },
  { value: "89%", label: "Client retention rate" },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Managing Director",
    bio: "Sarah brings a people-first approach and a clear view of what makes a placement last.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Daniel Okafor",
    role: "Director, Executive Search",
    bio: "Daniel pairs thoughtful market insight with a sharp eye for leadership potential and fit.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Priya Sharma",
    role: "Senior Recruitment Partner",
    bio: "Priya creates trusted connections between ambitious professionals and growing teams.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Michael Chen",
    role: "Client Success Lead",
    bio: "Michael keeps every search focused, responsive, and aligned with the client’s bigger goals.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
];


function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] py-16 md:pb-20 md:pt-8">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* LEFT */}
          <Reveal>
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-brand" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand">
                  About Career Hire
                </span>
              </div>

              <h1 className="max-w-3xl font-display text-[3.7rem] font-semibold leading-[0.88] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[6.4rem]">
                People
                <br />
                <span className="text-brand">behind</span>
                <br />
                progress.
              </h1>

              <p className="mt-8 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                Career Hire connects Canadian businesses with people who bring
                the right experience, energy, and potential to move forward.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <CTAButton href="/contact">Start a conversation</CTAButton>
                <CTAButton href="/jobs" variant="outline">
                  Explore roles
                </CTAButton>
              </div>

              <div className="mt-12 flex gap-10 border-t border-black/10 pt-7">
                <div>
                  <div className="font-display text-3xl font-semibold text-ink">
                    10+
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    Years of experience
                  </div>
                </div>

                <div>
                  <div className="font-display text-3xl font-semibold text-ink">
                    1000+
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    Careers connected
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand/10" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-brand/20" />

              <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[7rem] bg-brand p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[1.5rem] rounded-bl-[6rem]">
                  <img
                    src="https://careerhire.ca/wp-content/uploads/2022/05/industry1.webp"
                    alt="Career Hire team and partnership"
                    className="h-[480px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
                  />
                </div>

                <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand">
                    Our approach
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-ink">
                    People first.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }])} />

      <AboutHero />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-50/70 blur-3xl" />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
                <span className="h-px w-8 bg-brand" /> Our foundation
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
                Built around better matches.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
                We bring clarity to complex hiring decisions and care to every career move. The result is work that lasts beyond the first placement.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">
                {highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <p className="font-display text-2xl font-extrabold text-brand md:text-3xl">{highlight.value}</p>
                    <p className="mt-1 max-w-22.5 text-xs leading-relaxed text-slate-500">{highlight.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-4xl border border-red-100 bg-[#fff0ef] p-7 shadow-xl shadow-red-900/5 md:p-10">
                <div className="absolute right-8 top-8 text-brand/20">
                  <Compass size={42} strokeWidth={1.2} />
                </div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand">Corporate objective</p>
                <h3 className="mt-4 max-w-lg font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                  Make every hiring decision a confident one.
                </h3>
                <ul className="mt-8 space-y-4 border-t border-red-200 pt-7">
                  {objectives.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f6f2] py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative pl-4 md:pl-8">
              <div className="absolute -left-1 top-10 h-4/5 w-px bg-brand/30" />
              <div className="overflow-hidden rounded-4xl border border-red-100 bg-white p-2 shadow-xl shadow-red-900/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://careerhire.ca/wp-content/uploads/2022/05/industry1.webp"
                  alt="Career Hire partnership"
                  loading="lazy"
                  className="aspect-4/4 w-full rounded-3xl object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 right-0 flex max-w-52 items-center gap-3 rounded-2xl border border-red-100 bg-white p-4 shadow-xl shadow-red-900/10 md:right-6">
                <HeartHandshake className="shrink-0 text-brand" size={24} />
                <p className="text-xs font-semibold leading-relaxed text-ink">People-first by design, from first conversation to first day.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
              <span className="h-px w-8 bg-brand" /> Our story
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              Local insight. Global perspective.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Since {site.founded}, Career Hire has helped thousands of job seekers build careers in Canada, while giving Canadian employers reliable access to the talent they need to grow.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              What began as a focused recruitment practice is now a trusted partner across Healthcare, Retail, and Hospitality. We combine local market knowledge with a global candidate network and rigorous screening standards.
            </p>
            <CTAButton href="/contact" variant="outline" className="mt-8">Start a conversation</CTAButton>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28 ">
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border-28 border-brand/4" />
        <div className="mx-auto w-full md:max-w-[90%] px-6">
          <Reveal>
            <div className="relative flex flex-col justify-between gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
                  <span className="h-px w-8 bg-brand" /> Our team
                </p>
                <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[0.95] tracking-tighter text-ink md:text-5xl">
                  The people behind the placements.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                Experienced recruiters, thoughtful partners, and one shared commitment to helping people do meaningful work.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <article className="group flex h-full min-h-60 overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/8 sm:p-4">
                  <div className="relative w-[38%] shrink-0 overflow-hidden rounded-3xl bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full md:h-64 w-full object-cover object-top grayscale-12 transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 font-display text-xs font-extrabold text-brand shadow-sm">0{index + 1}</span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-7">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">{member.role}</p>
                        <ArrowUpRight size={18} className="shrink-0 text-slate-300 transition duration-300 group-hover:rotate-45 group-hover:text-brand" />
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink">{member.name}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                    </div>
                    <div className="mt-7 h-px w-10 bg-brand/40 transition-all duration-500 group-hover:w-full group-hover:bg-brand" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f2] py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-5 border-b border-red-200 pb-8 md:flex-row md:items-end">
              <div>
                <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand"><span className="h-px w-8 bg-brand" /> The Career Hire standard</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-tighter text-ink md:text-5xl">What sets us apart.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500 md:text-right">A considered process, measured by the quality of the relationship as much as the result.</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className={`group flex h-full min-h-56 flex-col justify-between rounded-4xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/5 md:p-7 ${i % 3 === 1 ? "border-red-200 bg-[#fff0ef]" : "border-slate-200 bg-white"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-3xl font-semibold tracking-tighter text-red-200 transition group-hover:text-brand">0{i + 1}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-brand transition group-hover:bg-brand group-hover:text-white"><ShieldCheck size={18} /></span>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
                    <div className="mt-6 h-px w-10 bg-brand/40 transition-all duration-300 group-hover:w-20 group-hover:bg-brand" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection homepage />
      <CTASection homepage />
    </>
  );
}

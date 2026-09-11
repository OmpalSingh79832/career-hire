import Link from "next/link";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DynamicIcon from "@/components/DynamicIcon";
import { breadcrumbSchema, JsonLd } from "@/lib/structuredData";
import { getJobsByIndustry } from "@/lib/jobs";
import { ArrowRight, ArrowUpRight, CheckCircle2, UsersRound } from "lucide-react";

export default function IndustryPageTemplate({ industry }) {
  const openRoles = getJobsByIndustry(industry.slug);
  const roleCards = industry.roles.slice(0, 5).map((role) => {
    const matchingJob = openRoles.find((job) => job.title === role);
    return { title: role, href: matchingJob ? `/jobs/${matchingJob.slug}` : "/jobs" };
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />

      <PageHero
        eyebrow="Industries"
        title={`${industry.name} Recruitment`}
        description={industry.heroDescription}
        ctaLabel="Hire With Us"
        ctaHref="/contact"
        image={industry.image}
      />

      <section className="border-b border-white/10 bg-ink py-5">
        <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="flex items-center gap-3 text-sm font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
              <UsersRound size={15} />
            </span>
            Need reliable {industry.name.toLowerCase()} talent?
          </p>
          <Link href="/contact" className="group flex items-center gap-2 text-sm font-bold text-brand-light">
            Tell us what you need <ArrowRight size={15} className="transition group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="relative pl-3 md:pl-8">
              <div className="absolute -left-1 top-10 h-4/5 w-px bg-brand/30" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={industry.image}
                alt={`${industry.name} professionals`}
                loading="lazy"
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/10"
              />
              <div className="absolute -bottom-5 right-0 rounded-xl bg-ink px-5 py-4 text-white shadow-xl md:right-6">
                <p className="font-display text-2xl font-extrabold text-brand-light">01</p>
                <p className="mt-1 text-xs font-medium text-slate-300">A considered search,<br />from first brief to first day.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
              <span className="h-px w-8 bg-brand" /> Our approach
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              {industry.name} recruitment, done with care.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {industry.shortDescription} We manage sourcing, credential verification, and screening so every candidate who reaches you is ready to contribute from day one.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Whether you need a single specialist hire or ongoing staffing support, our recruiters bring focused {industry.name.toLowerCase()} market knowledge to every search.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
              {industry.roles.slice(0, 4).map((role) => (
                <p key={role} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-brand" /> {role}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand py-20 md:py-24">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <Container className="relative text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">For candidates</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Be part of Canada&apos;s {industry.name.toLowerCase()} industry.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              Looking for your next opportunity? Explore roles where your experience matters, your work is valued, and your next chapter can begin.
            </p>
            <Link href="/jobs" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand transition hover:bg-slate-100">
              Explore open roles <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand"><span className="h-px w-8 bg-brand" /> Opportunities</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">Explore {industry.name} roles</h2>
              </div>
              <Link href="/jobs" className="group flex items-center gap-2 text-sm font-bold text-brand">View all jobs <ArrowRight size={15} className="transition group-hover:translate-x-1" /></Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {roleCards.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.07}>
                <Link href={role.href} className="group relative flex aspect-[0.78] items-end overflow-hidden rounded-2xl bg-ink p-5 shadow-lg shadow-slate-900/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={industry.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-70" />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
                  <div className="relative">
                    <p className="mb-2 text-xs font-bold text-brand-light">0{i + 1}</p>
                    <h3 className="font-display text-base font-bold leading-snug text-white">{role.title}</h3>
                    <ArrowUpRight size={17} className="mt-4 text-white/70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 md:py-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={industry.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/95 to-ink/60" />
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">For employers</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Build a {industry.name.toLowerCase()} team that stays.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-9">
              <p className="text-base leading-relaxed text-slate-300">
                Tell us about the role you need to fill. We will bring the market insight, candidate network, and process to find the right fit.
              </p>
              <Link href="/contact" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark">
                Recruit with us <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

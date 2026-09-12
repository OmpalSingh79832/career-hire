import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DynamicIcon from "@/components/DynamicIcon";
import CTAButton from "@/components/CTAButton";
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

      <section className="relative overflow-hidden bg-[#f8f6f2] py-16 md:pb-20 md:pt-8">
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-brand" /><span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand">Industries · {industry.name}</span></div>
              <h1 className="max-w-3xl font-display text-[3.7rem] font-semibold leading-[0.88] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[6.4rem]">{industry.name}<br /><span className="text-brand">recruitment</span><br />done right.</h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">{industry.heroDescription}</p>
              <CTAButton href="/contact" className="mt-9">Hire with us</CTAButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand/10" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-brand/20" />
              <div className="relative overflow-hidden rounded-4xl rounded-bl-[7rem] bg-brand p-3 shadow-2xl">
                <div className="overflow-hidden rounded-3xl rounded-bl-[6rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={industry.image} alt={`${industry.name} professionals`} loading="eager" className="h-120 w-full object-cover transition duration-700 hover:scale-105 sm:h-150" />
                </div>
                <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur"><p className="text-xs font-bold uppercase tracking-widest text-brand">Specialist sector</p><p className="mt-1 font-display text-xl font-semibold text-ink">{industry.name} talent</p></div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-red-100 bg-white py-5">
        <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="flex items-center gap-3 text-sm font-semibold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-brand">
              <UsersRound size={15} />
            </span>
            Need reliable {industry.name.toLowerCase()} talent?
          </p>
          <Link href="/contact" className="group flex items-center gap-2 text-sm font-bold text-brand">
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
                className="aspect-4/3 w-full rounded-4xl border border-red-100 object-cover shadow-xl shadow-red-900/5"
              />
              <div className="absolute -bottom-5 right-0 rounded-2xl border border-red-100 bg-white px-5 py-4 shadow-xl shadow-red-900/10 md:right-6">
                <p className="font-display text-2xl font-semibold text-brand">01</p>
                <p className="mt-1 text-xs font-medium text-slate-500">A considered search,<br />from first brief to first day.</p>
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

      <section className="relative overflow-hidden bg-[#fff0ef] py-20 md:py-24">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-24 border-brand/8" />
        <Container className="relative text-center">
          <Reveal>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand">For candidates</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Be part of Canada&apos;s {industry.name.toLowerCase()} industry.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Looking for your next opportunity? Explore roles where your experience matters, your work is valued, and your next chapter can begin.
            </p>
            <CTAButton href="/jobs" className="mt-8">Explore open roles</CTAButton>
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
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {roleCards.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.07}>
                <Link href={role.href} className="group relative flex min-h-48 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-[#fcfbf8] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-900/8">
                  <div className="flex items-start justify-between"><p className="font-display text-3xl font-semibold tracking-tighter text-red-200 transition group-hover:text-brand">0{i + 1}</p><ArrowUpRight size={19} className="text-brand transition group-hover:rotate-45" /></div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">Open role</p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-tight tracking-tight text-ink">{role.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand">For employers</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Build a {industry.name.toLowerCase()} team that stays.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-4xl border border-red-100 bg-[#fff7f5] p-7 shadow-sm md:p-9">
              <p className="text-base leading-relaxed text-slate-600">
                Tell us about the role you need to fill. We will bring the market insight, candidate network, and process to find the right fit.
              </p>
              <CTAButton href="/contact" className="mt-7">Recruit with us</CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DynamicIcon from "@/components/DynamicIcon";
import CTAButton from "@/components/CTAButton";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/structuredData";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Services",
  description:
    "From executive search to overseas recruitment and onboarding, Career Hire offers full-service staffing support for Canadian businesses.",
  alternates: { canonical: "/services" },
};

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] py-16 md:pb-20 md:pt-8">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-brand" /><span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand">Our services</span></div>
              <h1 className="max-w-3xl font-display text-[3.7rem] font-semibold leading-[0.88] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[6.4rem]">Recruitment<br /><span className="text-brand">support</span><br />that fits.</h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">Whether you need one specialist hire or an ongoing pipeline of talent, our services scale to fit how your business grows.</p>
              <CTAButton href="/contact" className="mt-9">Request a service</CTAButton>
              <div className="mt-12 flex gap-10 border-t border-black/10 pt-7"><div><div className="font-display text-3xl font-semibold text-ink">04</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500">Ways we help teams</div></div><div><div className="font-display text-3xl font-semibold text-ink">10+</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500">Years of experience</div></div></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand/10" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-brand/20" />
              <div className="relative overflow-hidden rounded-4xl rounded-bl-[7rem] bg-brand p-3 shadow-2xl">
                <div className="overflow-hidden rounded-3xl rounded-bl-[6rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://careerhire.ca/wp-content/uploads/2022/05/industry1.webp" alt="Career Hire recruitment consultation" loading="eager" className="h-120 w-full object-cover transition duration-700 hover:scale-105 sm:h-150" />
                </div>
                <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur"><p className="text-xs font-bold uppercase tracking-widest text-brand">Our approach</p><p className="mt-1 font-display text-xl font-semibold text-ink">People first.</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />

      <ServicesHero />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
                  <span className="h-px w-8 bg-brand" /> What we do
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
                  A sharper way to build your team.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                Every service is designed around one outcome: the right person, in the right role, for the long term.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 0.08}
                className={i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <div
                  className={`group relative flex h-full min-h-70 flex-col justify-between overflow-hidden rounded-4xl border p-7 text-ink transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/8 md:p-9 ${i % 3 === 1 ? "border-red-200 bg-[#fff0ef]" : i % 3 === 2 ? "border-slate-200 bg-[#fcfbf8]" : "border-slate-200 bg-white"}`}
                >
                  <div className="absolute right-7 top-7 flex items-center gap-3">
                    <span className="font-display text-3xl font-semibold tracking-tighter text-red-200 transition group-hover:text-brand">0{i + 1}</span>
                    <ArrowUpRight size={19} className="text-brand transition duration-300 group-hover:rotate-45" />
                  </div>
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-brand">
                      <DynamicIcon name={service.icon} size={22} />
                    </div>
                    <h3 className="mt-7 max-w-sm font-display text-2xl font-semibold tracking-tight">{service.name}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                  <p className="mt-8 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand">
                    Explore service <ArrowRight size={14} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-brand/15 bg-white px-6 py-5 shadow-sm md:flex-row md:items-center md:justify-between md:px-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
                <p className="text-sm leading-relaxed text-slate-600">
                  Not sure which service fits? We will map the right approach to your hiring goals.
                </p>
              </div>
              <a href="/contact" className="group flex shrink-0 items-center gap-2 text-sm font-bold text-brand">
                Talk to our team <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white"><ArrowUpRight size={16} className="transition duration-300 group-hover:rotate-45" /></span>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <ProcessSection homepage />
      <CTASection homepage />
    </>
  );
}

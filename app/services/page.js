import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DynamicIcon from "@/components/DynamicIcon";
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

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />

      <PageHero
        eyebrow="Services"
        title="Recruitment support, tailored to how you hire"
        description="Whether you need one specialist hire or an ongoing pipeline of talent, our services scale to fit your business."
        ctaLabel="Request a Service"
        ctaHref="/contact"
        image="https://loremflickr.com/1600/700/business,consulting,office?lock=6"
      />

      <section className="bg-[#f7f8fa] py-20 md:py-28">
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
                  className={`group relative flex h-full min-h-70 flex-col justify-between overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-9 ${i === 0
                      ? "bg-ink text-white shadow-xl shadow-slate-900/10"
                      : "border border-slate-200 bg-white text-ink hover:border-brand/30"
                    }`}
                >
                  <div className="absolute right-7 top-7 flex items-center gap-3">
                    <span className={`font-display text-xs font-bold ${i === 0 ? "text-slate-400" : "text-slate-300"}`}>0{i + 1}</span>
                    <ArrowUpRight
                      size={19}
                      className={`transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${i === 0 ? "text-brand-light" : "text-slate-300 group-hover:text-brand"}`}
                    />
                  </div>
                  <div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${i === 0 ? "bg-white/10 text-brand-light" : "bg-red-50 text-brand"}`}>
                      <DynamicIcon name={service.icon} size={22} />
                    </div>
                    <h3 className="mt-7 max-w-sm font-display text-2xl font-bold">{service.name}</h3>
                    <p className={`mt-3 max-w-lg text-sm leading-relaxed ${i === 0 ? "text-slate-300" : "text-slate-600"}`}>
                      {service.description}
                    </p>
                  </div>
                  <p className={`mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${i === 0 ? "text-brand-light" : "text-brand"}`}>
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
                Talk to our team <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}

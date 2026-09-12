import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/structuredData";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Search, ShieldCheck, UsersRound } from "lucide-react";

export const metadata = {
  title: "Request a Service",
  description:
    "Looking for a customised talent acquisition service for your business? Get in touch with Career Hire today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <PageHero
        eyebrow="Get in Touch"
        title="You need real talent, not just resumes."
        description="Tell us what your team needs and we will help you find people who can make a meaningful difference from day one."
        image="https://loremflickr.com/1600/500/office,phone,meeting?lock=11"
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            <InfoCard
              icon={Search}
              title="Find the right people"
              text="Job boards and generic recruiters can overwhelm your inbox with resumes that miss the mark. We take the time to understand the skills, culture, and context your role really needs."
              tone="ink"
            />
            <InfoCard
              icon={ShieldCheck}
              title="Hire with confidence"
              text="Our process combines focused market knowledge, careful screening, and a clear understanding of your organization, so every introduction is made with purpose."
              tone="brand"
            />
            <InfoCard
              icon={UsersRound}
              title="Candidates are more than resumes"
              text="We look beyond a checklist. We learn what motivates each candidate and connect their strengths with teams where they can grow and contribute."
              tone="brand"
            />
            <InfoCard
              icon={CheckCircle2}
              title="A pre-screened talent network"
              text="When you need talent, you should not have to start from zero. Our domestic and international network helps you reach qualified people faster."
              tone="ink"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f8fa] py-16 md:py-24">
        <Container className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal className="flex h-full flex-col">
            <div className="mb-8">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand">
                <span className="h-px w-8 bg-brand" /> Start a conversation
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
                Tell us what your next hire needs to achieve.
              </h2>

            </div>
            <div className="flex-1 rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 md:p-9">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex h-full lg:pt-20">
            <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-3xl border border-brand/15 bg-white p-8 text-ink shadow-xl shadow-slate-900/5 md:p-10">
              <div className="absolute right-0 top-0 h-2 w-32 bg-brand" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-50 blur-3xl" />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">A better search starts here</p>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-ink md:text-3xl">Your search for the right candidate stops here.</h3>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  Finding the perfect match can be difficult. We help you reach beyond familiar channels and connect with candidates who bring the right skills, experience, and intent.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  From the first conversation to onboarding, Career Hire stays close to the process so your next hire is built to last.
                </p>
                <div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
                  <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition hover:text-brand"><Phone size={16} className="text-brand" /> {site.phoneDisplay}</a>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-brand"><Mail size={16} className="text-brand" /> {site.email}</a>
                  <p className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-brand" /> {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand py-16 md:py-20">
        <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Ready when you are</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">Let&apos;s make your next hire count.</h2>
          </div>
          <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand transition hover:-translate-y-1 hover:bg-slate-100">
            Email our team <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white"><ArrowRight size={16} className="transition duration-300 group-hover:rotate-45" /></span>
          </a>
        </Container>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, text, tone }) {
  const isAccent = tone === "brand";

  return (
    <Reveal>
      <article className={`group relative overflow-hidden rounded-3xl border bg-white p-7 text-ink transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9 ${isAccent ? "border-brand/20 shadow-sm shadow-red-900/5" : "border-slate-200"}`}>
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isAccent ? "bg-brand text-white" : "bg-red-50 text-brand"}`}>
          <Icon size={22} />
        </div>
        <h2 className="mt-7 font-display text-2xl font-bold">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">{text}</p>
        <ArrowRight size={18} className="absolute bottom-8 right-8 text-brand transition group-hover:translate-x-1" />
      </article>
    </Reveal>
  );
}

import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, CheckCircle2, Globe2, Sparkles } from "lucide-react";

function WorkWithHero({ region }) {
    return (
        <section className="relative overflow-hidden bg-[#f7f8fb] py-14 md:py-20 lg:py-24">
            <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-red-100/70 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-100/80 blur-3xl" />
            <Container className="relative">
                <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
                    <Reveal>
                        <div className="max-w-xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-brand" /> {region.name} · {region.eyebrow}
                            </div>
                            <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl lg:text-[4.2rem]">
                                {region.title}
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                                {region.description}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:bg-brand-dark">
                                    Start a conversation <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                                </Link>
                                <Link href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:border-brand hover:text-brand">
                                    See how it works
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
                            <div className="absolute -inset-3 rounded-4xl border border-white/80 bg-white/50 shadow-2xl shadow-slate-900/10" />
                            <div className="relative aspect-[1.12] overflow-hidden rounded-[1.75rem] bg-slate-200">

                                <img src={region.image} alt={`${region.name} professionals`} loading="eager" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-tr from-ink/45 via-transparent to-violet-500/10" />
                            </div>
                            <div className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-slate-900/10 sm:left-8">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-brand"><Globe2 size={19} /></span>
                                <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Global reach</p><p className="mt-0.5 text-sm font-extrabold text-ink">People first recruitment</p></div>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}

export default function WorkWithPageTemplate({ region }) {
    return (
        <>
            <WorkWithHero region={region} />

            <section className="border-b border-slate-200 bg-white py-5">
                <Container className="flex items-center justify-between gap-4 overflow-x-auto">
                    <p className="flex shrink-0 items-center gap-2 text-sm font-bold text-ink"><Globe2 size={17} className="text-brand" /> Working across borders, with clarity.</p>
                    <Link href="/contact" className="group flex shrink-0 items-center gap-2 text-sm font-bold text-brand">Talk to our team <ArrowRight size={15} className="transition group-hover:translate-x-1" /></Link>
                </Container>
            </section>

            <section className="bg-white py-20 md:py-28">
                <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl bg-ink p-8 md:p-12">
                            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
                            <Sparkles className="relative text-brand-light" size={28} />
                            <p className="relative mt-16 max-w-sm font-display text-2xl font-extrabold leading-tight text-white md:text-3xl">{region.quote}</p>
                            <div className="relative mt-10 h-px w-16 bg-brand-light" />
                            <p className="relative mt-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Career Hire perspective</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <SectionHeading eyebrow="The right connection" title={region.introTitle} description={region.intro} />
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {region.signals.map((signal) => <p key={signal} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 size={17} className="shrink-0 text-brand" /> {signal}</p>)}
                        </div>
                    </Reveal>
                </Container>
            </section>

            <section className="bg-slate-50 py-20 md:py-24">
                <Container>
                    <Reveal><SectionHeading eyebrow="Where we help" title="Focused talent for teams that need momentum." description="Our recruitment conversations start with the work itself, then find people who can make a real difference." /></Reveal>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {region.sectors.map((sector, index) => (
                            <Reveal key={sector} delay={index * 0.07}>
                                <div className="group border-t-2 border-brand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <span className="font-display text-3xl font-extrabold text-slate-200">0{index + 1}</span>
                                    <h3 className="mt-12 font-display text-lg font-bold text-ink">{sector}</h3>
                                    <ArrowRight size={17} className="mt-6 text-brand transition group-hover:translate-x-1" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            <section id="how-it-works" className="relative overflow-hidden border-y border-slate-200 bg-white py-20 md:py-28">
                <div className="absolute right-0 top-0 h-80 w-80 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_68%)]" />
                <Container className="relative">
                    <Reveal>
                        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
                            <div className="max-w-2xl">
                                <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                                    <span className="h-px w-10 bg-brand" /> How it works
                                </p>
                                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink md:text-5xl">A clearer route to the right fit.</h2>
                            </div>
                            <p className="max-w-sm text-sm leading-relaxed text-slate-500 md:text-right">You always know what is happening next, who is responsible, and where we are in the search.</p>
                        </div>
                    </Reveal>

                    <div className="mt-10 md:mt-14">
                        {region.steps.map((step, index) => (
                            <Reveal key={step} delay={index * 0.08}>
                                <div className="group grid grid-cols-[4.5rem_1fr] gap-5 border-b border-slate-200 py-7 first:border-t md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-8 md:py-8">
                                    <div className="relative flex h-full items-start justify-center md:justify-start">
                                        <span className="font-display text-4xl font-extrabold tracking-tight text-slate-200 transition duration-300 group-hover:text-brand md:text-6xl">0{index + 1}</span>
                                        {index < region.steps.length - 1 && <span className="absolute left-1/2 top-14 h-7 w-px bg-slate-200 md:hidden" />}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="h-2 w-2 shrink-0 rounded-full bg-violet-400 transition group-hover:bg-brand" />
                                        <h3 className="max-w-xl font-display text-xl font-extrabold leading-snug text-ink transition group-hover:translate-x-1 md:text-2xl">{step}</h3>
                                    </div>
                                    <div className="col-start-2 mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400 md:col-start-auto md:mt-0">
                                        Step {index + 1} <ArrowRight size={15} className="text-brand transition group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.15}>
                        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#f7f8fb] px-6 py-5 sm:flex-row sm:items-center md:px-8">
                            <p className="text-sm font-semibold text-slate-600">Ready to take the first step?</p>
                            <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-extrabold text-brand">Start with a conversation <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
                        </div>
                    </Reveal>
                </Container>
            </section>

            <section className="relative overflow-hidden bg-brand py-20 md:py-24">
                <div className="absolute inset-0 bg-noise opacity-20" />
                <Container className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                    <Reveal><p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Your next move</p><h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">Ready to explore what is possible from {region.name}?</h2></Reveal>
                    <Reveal delay={0.1}><Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand transition hover:bg-slate-100">Start the conversation <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link></Reveal>
                </Container>
            </section>

            <section className="bg-white py-20 md:py-24">
                <Container className="max-w-3xl"><Reveal><SectionHeading eyebrow="Questions" title="A clearer way to get started." /></Reveal><div className="mt-8 divide-y divide-slate-200">{region.faqs.map(([question, answer], index) => <Reveal key={question} delay={index * 0.05}><details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-bold text-ink"><span>{question}</span><span className="text-2xl font-normal text-brand transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{answer}</p></details></Reveal>)}</div></Container>
            </section>
        </>
    );
}
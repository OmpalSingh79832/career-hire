import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { ArrowUpRight, CheckCircle2, Globe2, Sparkles } from "lucide-react";

function WorkWithHero({ region }) {
    return (
        <section className="relative overflow-hidden bg-[#f8f6f2] py-16 md:pb-20 md:pt-8">
            <Container className="relative">
                <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                    <Reveal>
                        <div className="relative z-10">
                            <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-brand" /><span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand">Work with Career Hire</span></div>
                            <h1 className="max-w-3xl font-display text-[3.7rem] font-semibold leading-[0.88] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[6.4rem]">Find your<br /><span className="text-brand">next move</span><br />in {region.name}.</h1>
                            <p className="mt-8 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">{region.description}</p>
                            <div className="mt-9 flex flex-wrap gap-3"><CTAButton href="/contact">Start a conversation</CTAButton><CTAButton href="#how-it-works" variant="outline">See how it works</CTAButton></div>
                            <div className="mt-12 flex gap-10 border-t border-black/10 pt-7"><div><div className="font-display text-3xl font-semibold text-ink">{region.name}</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500">Your next destination</div></div><div><div className="font-display text-3xl font-semibold text-ink">01</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500">Focused support</div></div></div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand/10" />
                            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-brand/20" />
                            <div className="relative overflow-hidden rounded-4xl rounded-bl-[7rem] bg-brand p-3 shadow-2xl">
                                <div className="overflow-hidden rounded-3xl rounded-bl-[6rem]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={region.image} alt={`${region.name} professionals`} loading="eager" className="h-120 w-full object-cover transition duration-700 hover:scale-105 sm:h-150" />
                                </div>
                                <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur"><p className="text-xs font-bold uppercase tracking-widest text-brand">Global reach</p><p className="mt-1 font-display text-xl font-semibold text-ink">{region.name} talent.</p></div>
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
                    <CTAButton href="/contact" variant="outline" className="px-4 py-2 text-xs">Talk to our team</CTAButton>
                </Container>
            </section>

            <section className="bg-white py-20 md:py-28">
                <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-4xl border border-red-100 bg-[#fff0ef] p-8 shadow-sm md:p-12">
                            <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border-24 border-brand/8" />
                            <Sparkles className="relative text-brand" size={28} />
                            <p className="relative mt-16 max-w-sm font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">{region.quote}</p>
                            <div className="relative mt-10 h-px w-16 bg-brand" />
                            <p className="relative mt-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand">Career Hire perspective</p>
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

            <section className="bg-[#f8f6f2] py-20 md:py-24">
                <Container>
                    <Reveal><SectionHeading eyebrow="Where we help" title="Focused talent for teams that need momentum." description="Our recruitment conversations start with the work itself, then find people who can make a real difference." /></Reveal>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {region.sectors.map((sector, index) => (
                            <Reveal key={sector} delay={index * 0.07}>
                                <div className="group flex min-h-52 flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/8">
                                    <div className="flex items-start justify-between"><span className="font-display text-3xl font-semibold tracking-tighter text-red-200 transition group-hover:text-brand">0{index + 1}</span><ArrowUpRight size={18} className="text-brand transition group-hover:rotate-45" /></div>
                                    <div><p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">Specialist focus</p><h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">{sector}</h3></div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            <section id="how-it-works" className="border-y border-slate-200 bg-white py-20 md:py-28">
                <Container>
                    <Reveal><SectionHeading eyebrow="How it works" title="A clearer route to the right fit." description="You always know what is happening next, who is responsible, and where we are in the search." /></Reveal>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {region.steps.map((step, index) => (
                            <Reveal key={step} delay={index * 0.08}>
                                <div className="group flex min-h-64 flex-col justify-between rounded-3xl border border-slate-200 bg-[#fcfbf8] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-900/8 md:p-7">
                                    <div className="flex items-start justify-between"><span className="font-display text-4xl font-semibold tracking-tighter text-red-200 transition group-hover:text-brand">0{index + 1}</span><ArrowUpRight size={19} className="text-brand transition group-hover:rotate-45" /></div>
                                    <div><p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">Step {index + 1}</p><h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-ink">{step}</h3><div className="mt-5 h-px w-10 bg-brand/40 transition-all duration-300 group-hover:w-20 group-hover:bg-brand" /></div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="relative overflow-hidden bg-brand py-20 md:py-24">
                <div className="absolute inset-0 bg-noise opacity-20" />
                <Container className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                    <Reveal><p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Your next move</p><h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">Ready to explore what is possible from {region.name}?</h2></Reveal>
                    <Reveal delay={0.1}><CTAButton href="/contact" variant="white">Start the conversation</CTAButton></Reveal>
                </Container>
            </section>

            <section className="bg-white py-20 md:py-24">
                <Container className="max-w-3xl"><Reveal><SectionHeading eyebrow="Questions" title="A clearer way to get started." /></Reveal><div className="mt-8 divide-y divide-slate-200">{region.faqs.map(([question, answer], index) => <Reveal key={question} delay={index * 0.05}><details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-bold text-ink"><span>{question}</span><span className="text-2xl font-normal text-brand transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{answer}</p></details></Reveal>)}</div></Container>
            </section>
        </>
    );
}
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-dark py-20">
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">
            Ready to build your team, or find your next role?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand transition hover:bg-slate-100"
            >
              Request a Service
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/jobs"
              className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Open Roles
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

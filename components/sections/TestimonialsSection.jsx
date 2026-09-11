import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Trust"
          title="What our clients say"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <Quote className="text-red-100" size={36} strokeWidth={1.5} fill="currentColor" />
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-red-50"
                  />
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

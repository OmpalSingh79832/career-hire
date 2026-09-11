import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  compact = false,
  image,
}) {
  return (
    <section className={`relative overflow-hidden bg-ink bg-noise ${compact ? "py-16" : "py-24 md:py-28"}`}>
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        </>
      )}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />

      <Container className="relative">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-light">
              <span className="h-[2px] w-6 bg-brand-light" />
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition hover:bg-brand-dark"
            >
              {ctaLabel}
            </Link>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

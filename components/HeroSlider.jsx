"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/site";
import CTAButton from "@/components/CTAButton";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[index];

  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] pb-10 pt-8 sm:pt-12 lg:pb-16 lg:pt-18 -mt-25">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute right-0 top-0 h-full w-full lg:left-[42%] lg:w-[58%]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#f8f6f2] via-[#f8f6f2]/70 to-transparent lg:from-[#f8f6f2] lg:via-[#f8f6f2]/20" />
          <div className="absolute inset-0 bg-linear-to-t from-[#f8f6f2] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-155 max-w-350 flex-col justify-center px-5 sm:px-8 lg:min-h-170 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-[54%]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
              <span className="h-2 w-2 animate-pulse-slow rounded-full bg-brand" />
              {slide.eyebrow}
            </span>
            <h1 className="mt-6 max-w-2xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-8xl">
              {slide.title.split(" ").map((word, wordIndex) => (
                <span key={`${word}-${wordIndex}`} className={wordIndex === slide.title.split(" ").length - 1 ? "text-brand" : ""}>{word}{" "}</span>
              ))}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTAButton href="/contact">Hire With Us</CTAButton>
              <Link
                href="/jobs"
                className="rounded-full text-center border border-slate-300 bg-white/70 px-10 py-4 text-sm font-bold text-ink transition hover:border-brand hover:text-brand"
              >
                Find a Job
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-5 z-10 flex items-center gap-4 sm:left-8 lg:left-12">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="rounded-full border border-slate-300 bg-white/80 p-2 text-ink transition hover:border-brand hover:text-brand"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand" : "w-1.5 bg-slate-300"
                }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="rounded-full border border-slate-300 bg-white/80 p-2 text-ink transition hover:border-brand hover:text-brand"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from "lucide-react";
import { site, industries } from "@/lib/site";
import { workWithRegions } from "@/lib/workWith";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map((i) => ({
      label: i.name,
      href: `/industries/${i.slug}`,
    })),
  },
  {
    label: "Work With",
    href: "/work-with/europe",
    children: workWithRegions.map((region) => ({
      label: region.name,
      href: `/work-with/${region.slug}`,
    })),
  },
  { label: "Services", href: "/services" },
  { label: "Jobs", href: "/jobs" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
        : "border-b border-transparent bg-white"
        }`}
    >
      {/* Utility bar */}
      <div
        className={`hidden overflow-hidden bg-ink text-slate-300 transition-all duration-300 md:block ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-xs tracking-wide">
          <a href={`tel:${site.phone}`} className="flex items-center gap-1.5 hover:text-white">
            <Phone size={13} />
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-3">
        <Link href="/" className="">
          <span className="pt-1">
            <img src="/ch-logo-new.webp" alt="Career Hire" className="block h-auto w-40" />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="group flex items-center gap-1.5 text-sm font-bold text-ink/80 transition hover:text-brand">
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl shadow-slate-900/10">
                        <div className="mb-1 flex items-center justify-between border-b border-slate-100 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Explore regions <ArrowUpRight size={13} />
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-red-50 hover:text-brand"
                          >
                            {child.label}
                            <ArrowUpRight size={15} className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-ink/80 transition hover:text-brand"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:shadow-red-900/30"
          >
            <span className="relative z-10">Request a Service</span>
            <span className="absolute inset-0 -translate-x-full bg-brand-dark transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>

        <button
          className="text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-slate-100 py-1 last:border-0">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={link.href}
                      className="block py-3 text-sm font-bold text-ink"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${link.label} submenu`}
                        onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                        className="rounded-full p-2 text-slate-500 transition hover:bg-red-50 hover:text-brand"
                      >
                        <ChevronDown size={17} className={`transition-transform ${mobileDropdown === link.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {link.children && (
                    <div className={`grid overflow-hidden transition-all duration-300 ${mobileDropdown === link.label ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="min-h-0 pl-3">
                        <div className="flex flex-col gap-1 border-l-2 border-red-100 pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="py-2 text-sm font-medium text-slate-600 transition hover:text-brand"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-3 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Request a Service
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

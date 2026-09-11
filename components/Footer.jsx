import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { site, industries, services } from "@/lib/site";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-slate-300">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Let's talk
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Ready to build your team, or find your next role?
            </h2>
          </div>
          <Link
            href="/contact"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-brand-dark"
          >
            Get in Touch
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl font-extrabold text-white">
              Career<span className="text-brand-light">Hire</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Recruiting Canadian &amp; international talent since {site.founded}.
            </p>
            <div className="mt-5 flex gap-4">
              <a href={site.social.facebook} aria-label="Facebook" className="text-slate-400 transition hover:text-brand-light">
                <FacebookIcon />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" className="text-slate-400 transition hover:text-brand-light">
                <InstagramIcon />
              </a>
              <a href={site.social.linkedin} aria-label="LinkedIn" className="text-slate-400 transition hover:text-brand-light">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Industries
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="transition hover:text-brand-light">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="transition hover:text-brand-light">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="transition hover:text-brand-light">About Us</Link></li>
              <li><Link href="/jobs" className="transition hover:text-brand-light">Job Listings</Link></li>
              <li><Link href="/blog" className="transition hover:text-brand-light">Blog</Link></li>
              <li><Link href="/contact" className="transition hover:text-brand-light">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="transition hover:text-brand-light">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="transition hover:text-brand-light">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-light" />
              {site.address.street}, {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </span>
            <a href={`tel:${site.phone}`} className="flex items-center gap-2 transition hover:text-white">
              <Phone size={14} className="text-brand-light" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-white">
              <Mail size={14} className="text-brand-light" /> {site.email}
            </a>
          </div>
          <span>© {year} Career Hire. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

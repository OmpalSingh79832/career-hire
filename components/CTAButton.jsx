import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const variants = {
    brand: "bg-brand text-white shadow-lg shadow-red-900/15 hover:bg-brand-dark",
    white: "bg-white text-brand hover:bg-slate-100",
    outline: "border border-slate-300 bg-white/70 text-ink hover:border-brand hover:text-brand",
};

export default function CTAButton({ href, children, variant = "brand", className = "" }) {
    return (
        <Link
            href={href}
            className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold transition duration-300 hover:-translate-y-1 ${variants[variant] || variants.brand} ${className}`}
        >
            {children}
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${variant === "brand" || variant === "outline" ? "bg-white text-brand" : "bg-brand text-white"}`}>
                <ArrowUpRight size={17} className="transition duration-300 group-hover:rotate-45" />
            </span>
        </Link>
    );
}

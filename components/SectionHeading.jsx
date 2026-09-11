export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand">
          <span className={`h-[2px] w-6 bg-brand ${center ? "hidden" : ""}`} />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600">{description}</p>
      )}
    </div>
  );
}

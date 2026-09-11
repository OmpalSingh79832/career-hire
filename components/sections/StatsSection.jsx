import Container from "@/components/Container";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "10", suffix: "+", label: "Years in business" },
  { value: "89", suffix: "%", label: "Customer retention" },
  { value: "1000", suffix: "+", label: "Candidates placed" },
  { value: "3", suffix: "", label: "Industries served" },
];

export default function StatsSection() {
  return (
    <section className="relative border-y border-slate-100 bg-white py-14">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-4xl font-extrabold text-ink md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-slate-500">{s.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

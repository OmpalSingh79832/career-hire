import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";

export default function CTASection({ homepage = false }) {
  return (
    <section className={`relative overflow-hidden py-20 ${homepage ? "bg-brand" : "bg-linear-to-br from-brand via-brand to-brand-dark"}`}>
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">
            Ready to build your team, or find your next role?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact" variant="white">Request a Service</CTAButton>
            <CTAButton href="/jobs" variant="outline" className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"><span>Browse Open Roles</span></CTAButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

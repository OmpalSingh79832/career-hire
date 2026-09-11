import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: September 2026</p>

      <div className="prose prose-slate mt-10 max-w-none">
        <p>
          {site.name} ("we", "us", "our") respects your privacy. This policy
          explains what information we collect, how we use it, and the
          choices you have.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name,
          email, phone number, and resume, when you apply for a role or
          submit a service request through our site.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information to match you with relevant opportunities,
          respond to service requests, and communicate with you about our
          services. We do not sell your personal information to third
          parties.
        </p>
        <h2>Contact Us</h2>
        <p>
          Questions about this policy can be directed to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </Container>
  );
}

import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms of Use",
  description: `The terms and conditions governing use of the ${site.name} website.`,
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: September 2026</p>

      <div className="prose prose-slate mt-10 max-w-none">
        <p>
          By accessing this website, you agree to be bound by these terms of
          use. If you do not agree with any part of these terms, please do
          not use this site.
        </p>
        <h2>Use of Content</h2>
        <p>
          All content on this site is the property of {site.name} unless
          otherwise noted, and may not be reproduced without permission.
        </p>
        <h2>Job Listings</h2>
        <p>
          Job listings are provided for informational purposes and are
          subject to change without notice. {site.name} does not guarantee
          placement for any candidate.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be directed to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </Container>
  );
}

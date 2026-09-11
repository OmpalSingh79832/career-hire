import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { organizationSchema, JsonLd } from "@/lib/structuredData";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Canadian Recruitment & Staffing Agency`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Canada recruitment agency",
    "foreign worker recruitment Canada",
    "healthcare staffing Canada",
    "retail staffing Canada",
    "hospitality staffing Canada",
    "Ontario executive search",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Canadian Recruitment & Staffing Agency`,
    description: site.description,
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Canadian Recruitment & Staffing Agency`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

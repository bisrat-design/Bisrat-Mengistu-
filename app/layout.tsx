import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site, about } from "@/lib/data";
const title = `${site.name} — Graphic Design & UI/UX Portfolio`;
export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: { default: title, template: `%s | ${site.name}` },
  description: about.body, openGraph: { title, description: about.headline, type: "website", images: ["/images/p-01.jpg"] },
  twitter: { card: "summary_large_image", title, description: about.headline, images: ["/images/p-01.jpg"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.role, email: site.email,
    telephone: site.phone, url: site.url, sameAs: [`https://instagram.com/${site.instagram}`] };
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-lime focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Navbar /><main id="main">{children}</main><Footer />
      </body>
    </html>
  );
}

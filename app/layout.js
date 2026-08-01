import "./globals.css";
import Script from "next/script";
import MobileMenu from "@/components/MobileMenu";
import SiteFooter from "@/components/SiteFooter";
import Dock from "@/components/Dock";

export const metadata = {
  metadataBase: new URL("https://lennorply.com"),
  title: {
    default: "Lennor Ply — ISI-Certified Plywood Manufacturer, Karnataka",
    template: "%s | Lennor Ply",
  },
  description:
    "Lennor Ply manufactures ISI-certified MR, BWR, BWP and Marine grade plywood, block boards and flush doors in Karnataka — composed, calibrated, ACC-treated and lab-tested across a sixteen-station line.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/assets/brand/mark-white-256.png",
    apple: "/assets/brand/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Lennor Ply",
    locale: "en_IN",
    title: "Lennor Ply — ISI-Certified Plywood Manufacturer",
    description:
      "MR, BWR, BWP and Marine grade plywood — composed, calibrated, treated and lab-tested on one sixteen-station line in Karnataka.",
    url: "https://lennorply.com/",
    images: ["/assets/img/hero-dark.jpg?v=39"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#fcfbf8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link sr-only" href="#main">Skip to content</a>
        <MobileMenu />
        {children}
        <SiteFooter />
        <Dock />
        <Script src="/js/main.js?v=31" strategy="afterInteractive" />
      </body>
    </html>
  );
}

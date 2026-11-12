import type { Metadata, Viewport } from "next";
import { Caveat, Teko, Ubuntu } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import "./globals.css";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: ["400", "500", "600"],
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600"],
  display: "swap",
});

// Vercel provides the production hostname at build time. Replace with the
// final custom domain once it exists.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Professional Baseball Player`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${ubuntu.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables JS-only reveal states so content is never hidden without JS */}
        <script dangerouslySetInnerHTML={{ __html: "(function(d){d.classList.add('js');setTimeout(function(){if(!d.classList.contains('reveal-ready'))d.classList.remove('js')},2000)})(document.documentElement)" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

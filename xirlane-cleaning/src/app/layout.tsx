import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CrawlerSiteNav from "@/components/layout/CrawlerSiteNav";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollQuotePopup from "@/components/layout/ScrollQuotePopup";
import ExitIntentModal from "@/components/layout/ExitIntentModal";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { globalSchemaGraph } from "@/lib/schema";
import { rootMetadata } from "@/lib/seo";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "600"],
  display: "swap",
  preload: true,
});

const bodyFont = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-text-primary"
        >
          Skip to main content
        </a>
        <JsonLdGraph nodes={globalSchemaGraph()} />
        <CrawlerSiteNav />
        <AnnouncementBar />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <ScrollQuotePopup />
        <ExitIntentModal />
      </body>
    </html>
  );
}

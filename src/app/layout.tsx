import type { Metadata } from "next";

import { SITE, SOCIAL } from "@/lib/config";

import "@/styles/globals.css";

import { META_TITLE_SEPARATOR } from "@/lib/config";
import FathomAnalytics from "@/components/core/fathom-analytics";
import AppFooter from "@/components/core/site-footer";
import SiteHeader from "@/components/core/site-header";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: SITE.name,
    template: `%s ${META_TITLE_SEPARATOR} ${SITE.name}`,
  },
  description:
    "Software developer founders building startup businesses using blockchain, especially Solana.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: "/img/cover.jpg",
        width: 256,
        height: 256,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    site: `@${SOCIAL.twitter}`,
    creator: `@${SOCIAL.twitter}`,
    card: "summary",
    // card: "summary_large_image",
  },
  category: "technology",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <style jsx global>
        {`
          :root {
            --font-theme: ${font.style.fontFamily};
          }
        `}
      </style> */}

      <body>
        <FathomAnalytics />

        <SiteHeader />

        <section
          className={"container px-6 py-12  space-y-14 md:space-y-20 mx-auto"}
        >
          {children}
        </section>

        <AppFooter />
      </body>
    </html>
  );
}

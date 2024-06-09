"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { load, trackPageview } from "fathom-client";

// import SITE from "@/lib/config";

// note: this is a public value and safe to be shared
const FATHOM_ID = "QXAXOREB";

function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process?.env?.NODE_ENV !== "production") return;

    load(FATHOM_ID, {
      auto: false,
      // includedDomains: [SITE.domain, `www.${SITE.domain}`],
    });
  }, []);

  // Record a page view when route changes (including params)
  useEffect(() => {
    if (!pathname) return;

    trackPageview({
      url: pathname + searchParams.toString(),
      referrer: document.referrer,
    });
  }, [pathname, searchParams]); //

  return null;
}

export default function FathomAnalytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  );
}

"use client";

import { useEffect } from "react";

/**
 * When the brochure page loads (reached by clicking "Download brochure"),
 * automatically trigger the PDF download once, then leave the visitor on the
 * recreated on-site brochure. A visible "Download PDF" button remains as a
 * manual fallback for browsers that block programmatic downloads.
 */
export default function BrochureAutoDownload({ href, fileName = "Lennor-Ply-Brochure.pdf" }) {
  useEffect(() => {
    // small delay so the page paints before the browser's download prompt
    const t = setTimeout(() => {
      const a = document.createElement("a");
      a.href = href;
      a.download = fileName;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, 800);
    return () => clearTimeout(t);
  }, [href, fileName]);

  return null;
}

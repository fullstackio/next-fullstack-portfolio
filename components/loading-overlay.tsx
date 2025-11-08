"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Defer setState to the next animation frame to avoid synchronous setState in effect
    let raf = 0;

    if (typeof document !== "undefined" && document.readyState === "complete") {
      raf = requestAnimationFrame(() => setLoading(false));
      return () => cancelAnimationFrame(raf);
    }

    const onLoad = () => {
      requestAnimationFrame(() => setLoading(false));
    };
    window.addEventListener("load", onLoad);

    // Fallback: don't keep loader more than 3s
    const fallback = window.setTimeout(
      () => requestAnimationFrame(() => setLoading(false)),
      3000
    );

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/80">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-t-transparent border-primary animate-spin" />
        <div className="text-sm text-slate-700 dark:text-slate-200">
          Loading...
        </div>
      </div>
    </div>
  );
}

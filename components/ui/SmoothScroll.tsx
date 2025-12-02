"use client";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let instance: Scrollbar | null = null;
    if (scrollRef.current) {
      instance = Scrollbar.init(scrollRef.current, {
        damping: 0.08,
        alwaysShowTracks: false,
        continuousScrolling: true,
      });
    }
    return () => {
      if (instance) instance.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 0,
      }}
      className="hide-scrollbar"
    >
      <div style={{ minHeight: "100vh", width: "100%" }}>{children}</div>
    </div>
  );
}

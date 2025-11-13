"use client";

import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function VideoBannerClient() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  return (
    <section className="video-banner">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
            <div className="flex flex-col items-center gap-4">
              <Spinner size="lg" />
              <p className="text-white text-sm">Loading video...</p>
            </div>
          </div>
        )}

        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/dark-wheel.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/banner-poster.jpg"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
        />

        {/* Dim overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        {/* Banner content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-white">
          <h1 className="text-[225px] font-semibold mr-10">HI!</h1>
          <div>
            <h2 className="text-6xl font-semibold mb-5">I AM AVIJIT GHOSH</h2>
            <p className="mt-4 max-w-2xl text-2xl">
              I build fullstack applications using: ReactJs, NextJs, VueJs,
              Angular, TypeScript, Node.js and MongoDB — take a look at my
              projects and get in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

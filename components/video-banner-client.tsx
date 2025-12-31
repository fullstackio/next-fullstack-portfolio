"use client";

import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

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
          poster="/videos/poster.png"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
        />

        {/* Dim overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        {/* Banner content */}
        <div className="relative z-10 h-full flex items-center justify-center flex-col px-6 text-white">
          <div className="flex items-center justify-center px-6">
            <h1 className="text-[285px] font-semibold mr-10">HI!</h1>
            <div>
              <h2 className="text-4xl font-semibold mb-5">
                I&#39;m AVIJIT GHOSH
              </h2>
              <h3 className="text-7xl font-semibold mb-5">
                Fullstact Developer
              </h3>
              <p className="mt-4 max-w-2xl text-4xl">
                and the creator of QuantumAlgo.
              </p>
              <p className="mt-4 max-w-2xl text-2xl">
                — Take a look at my projects and get in touch.
              </p>
            </div>
          </div>

          <div className="link-button flex mt-8 space-x-6 gap-2">
            <Link
              href="/portfolio"
              className="
    mt-8 px-8 py-3
    min-w-[220px]
    text-white text-lg font-semibold
    rounded-full
    bg-gradient-to-r from-pink-500 to-blue-600
    shadow-lg
    flex items-center justify-center
    hover:opacity-90
    transition-all duration-300
  "
            >
              See My Portfolio
            </Link>
            <Link
              href="/hireme"
              className="
    mt-8 px-8 py-3
    min-w-[220px]
    text-white text-lg font-semibold
    rounded-full
    relative
    flex items-center justify-center
    bg-white/10 backdrop-blur-md
    border border-pink-500
    bg-clip-padding
    before:content-[''] before:-z-10
    hover:opacity-90 transition-all duration-300
  "
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

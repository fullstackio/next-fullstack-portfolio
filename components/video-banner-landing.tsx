"use client";

import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export default function VideoBannerLanding() {
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
          <div className="flex items-center justify-center px-6 flex-col md:flex-row gap-5">
            <h1 className="text-[60px] sm:text-[150px] md:text-[220px] lg:text-[315px] font-semibold  text-center md:text-left">
              HI!
            </h1>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-center md:text-left">
                I&#39;m AVIJIT GHOSH
              </h2>
              <h3 className="text-3xl md:text-8xl font-semibold mb-5 text-center md:text-left">
                <span className="bg-gradient-to-r from-[#1aaebd]  to-[#68c394] bg-clip-text text-transparent">
                  Fullstack
                </span>{" "}
                Developer
              </h3>
              {/* <p className="mt-4 max-w-2xl text-2xl sm:text-3xl md:text-4xl lg:text-4xl! text-center md:text-left">
                and the creator of{" "}
                <span className="bg-blue-800 text-[26px] md:text-[40px] px-2 rounded">
                  QuantumAlgo.AI
                </span>
                .
              </p> */}
              <p className="mt-4 max-w-3xl text-[16px] sm:text-2xl md:text-2xl lg:text-2xl! text-center md:text-left">
                — Take a look at my projects and get in touch.
              </p>
            </div>
          </div>

          <div className="link-button flex mt-8 space-x-6 gap-2">
            <Link
              href="/blogs"
              className="
        mt-8 px-3 py-3
        min-w-[150px] sm:min-w-[220px]
        text-base sm:text-lg font-semibold
        rounded-full
        bg-gradient-to-r from-[#1aaebd]  to-[#68c394]
        shadow-lg
        flex items-center justify-center
        hover:opacity-90
        transition-all duration-300
        text-center
        "
            >
              {/* See My Portfolio */} See My Blogs
            </Link>
            <Link
              href="/hireme"
              className="
        mt-8 px-3 py-3
        min-w-[150px] sm:min-w-[220px]
        text-white text-base sm:text-lg font-semibold
        rounded-full
        relative
        flex items-center justify-center
        bg-black/40 backdrop-blur-md
        border border-[#1aaebd]
        bg-clip-padding
        before:content-[''] before:-z-10
        hover:opacity-90 transition-all duration-300
        text-center
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

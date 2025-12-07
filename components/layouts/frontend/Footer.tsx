"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Github,
  Instagram,
  Link,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="w-full overflow-hidden relative border-t bg-background/80 py-8 md:py-10 lg:py-14  text-center text-xs text-muted-foreground">
      <div className="pointer-events-none absolute inset-0">
        {/* Light mode gradients */}

        <div
          className="absolute right-60 top-40 bottom-0 h-60 w-100 rounded-full
                     bg-gradient-to-tr from-indigo-500/40 via-blue-400/30 to-orange-500/40
                     blur-3xl animate-glow-slow dark:hidden"
        />
        <div
          className="absolute left-50 bottom-[-100px] mx-auto h-80 w-150
                     rounded-full bg-gradient-to-t from-pink-500/25 via-purple-500/15 to-transparent
                     blur-3xl animate-glow-slow dark:hidden"
        />
        {/* Dark mode gradients */}
        <div
          className="absolute right-120 bottom-[-160px] bottom-0 h-60 w-100 rounded-full
                     bg-gradient-to-tr from-purple-900/40 via-indigo-900/30 to-blue-900/40
                     blur-3xl animate-glow-slow hidden dark:block"
        />
        <div
          className="absolute left-90 bottom-[-180px] mx-auto h-80 w-150
                     rounded-full bg-gradient-to-t from-fuchsia-900/25 via-purple-900/15 to-transparent
                     blur-3xl animate-glow-slow hidden dark:block"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex gap-4 justify-center mb-4 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Facebook
              absoluteStrokeWidth
              className="transition duration-200 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] text-gray-400 dark:text-gray-600 hover:text-blue-500 dark:hover:text-blue-500"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Linkedin
              absoluteStrokeWidth
              className="transition duration-200 group-hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)] hover:text-blue-700 dark:hover:text-blue-700 text-gray-400 dark:text-gray-600"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Instagram
              absoluteStrokeWidth
              className="transition duration-200 group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.8)] hover:text-pink-500 dark:hover:text-pink-500 text-gray-400 dark:text-gray-600"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Youtube
              absoluteStrokeWidth
              className="transition duration-200 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] hover:text-red-600 dark:hover:text-red-600 text-gray-400 dark:text-gray-600"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Twitter
              absoluteStrokeWidth
              className="transition duration-200 group-hover:drop-shadow-[0_0_8px_rgba(29,155,209,0.8)] hover:text-sky-500 dark:hover:text-sky-500 text-gray-400 dark:text-gray-600"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Github
              absoluteStrokeWidth
              className="transition duration-200 group-hover:drop-shadow-[0_0_8px_rgba(24,24,24,0.8)] hover:text-black dark:hover:text-white text-gray-400 dark:text-gray-600"
            />
          </a>
        </div>
        <p>&copy; {year} QuantumAlgo.AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

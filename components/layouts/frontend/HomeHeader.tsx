"use client";
import { ModeToggle } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // hide header entirely on admin routes
  if (pathname.startsWith("/admin")) return null;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-2 px-3 md:py-3 md:px-3 lg:py-5 lg:px-4 bg-transparent ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between  dark:bg-black/7 bg-black/7 backdrop-blur-lg border border-white/8 px-3 py-2 md:px-7 md:py-4 lg:px-10 lg:py-5 rounded-full">
        <div className="w-1/5">
          <Link
            href="/"
            className="font-bold mb-0 text-white text-3xl ml-3 flex items-center"
          >
            <span className="bg-gradient-to-r from-pink-500  to-blue-600 bg-clip-text text-transparent ">
              QuantumAlgo.AI
            </span>
          </Link>
        </div>

        <div className="w-1/5 flex justify-end items-center gap-5">
          <ModeToggle />
          <Button
            className="
     px-2 py-2 m
    w-10 h-10
    md:w-30 md:h-10
    text-white text-lg font-semibold
    rounded-full
    bg-gradient-to-r from-yellow-200  to-blue-600
    shadow-lg
    flex items-center justify-center
    hover:opacity-90
    transition-all duration-300 cursor-pointer
  "
          >
            <span className="hidden md:flex lg:flex">SignUp</span> <LogIn />
          </Button>
        </div>
      </div>
    </header>
  );
}

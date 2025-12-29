"use client";
import { ModeToggle } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
      <div className="mx-auto flex max-w-[1280px] items-center justify-between  dark:bg-white/6 bg-black/6 backdrop-blur-lg border border-white/8 px-2 py-1 md:px-7 md:py-3 lg:px-6 lg:py-3 rounded-full">
        <div className="w-auto">
          <Link href="/" className="gap-3 w-full flex">
            {/* <Image
              src="/logo-main.png"
              alt="QuantumAlgo.AI Logo"
              width={60}
              height={60}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            /> */}
            <h1 className="text-[#00b7e0] text-2xl sm:text-3xl md:text-4xl">
              Code With Avijit
            </h1>
          </Link>
        </div>

        <div className="w-auto flex justify-end items-center gap-5">
          <ModeToggle />
          <div className="animated-border-box radius-style-2 rounded-full">
            <Button
              className="
     px-2 py-2 m
    w-8 h-8
    md:w-30 md:h-10
    text-white text-lg font-semibold
    rounded-full
    bg-gradient-to-r from-[#85a5d4]  to-[#e4b472]
    shadow-lg
    flex items-center justify-center
    hover:opacity-90
    transition-all duration-300 cursor-pointer
    m-[2px]
  "
            >
              <span className="hidden md:flex lg:flex">SignUp</span> <LogIn />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import { ModeToggle } from "@/components/theme-toggler";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname() ?? "";
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY || 0;
      // if scrolling down and past 50px, hide header
      if (current > lastScrollY.current && current > 0) {
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hide header entirely on admin routes
  if (pathname.startsWith("/admin")) return null;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transform transition-transform duration-300 py-3  ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-white ">
          codeWith Avi
        </Link>
        <div>
          <nav className="will-change-transform  backdrop-blur-sm shadow-sm max-w-[550px] w-full bg-amber-50/15 rounded-[30px] px-12 py-4">
            <ul className="flex justify-center items-center gap-6">
              <li>
                <Link
                  href="/"
                  className={`uppercase font-bold ${
                    pathname === "/" ? "text-amber-400" : "text-white"
                  }`}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  MY PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`uppercase font-bold ${
                    pathname.startsWith("/blogs")
                      ? "text-amber-400"
                      : "text-white"
                  }`}
                  aria-current={
                    pathname.startsWith("/blogs") ? "page" : undefined
                  }
                >
                  BLOGS
                </Link>
              </li>
              <li>
                <Link
                  href="/hireme"
                  className={`uppercase font-bold ${
                    pathname.startsWith("/hireme")
                      ? "text-amber-400"
                      : "text-white"
                  }`}
                  aria-current={
                    pathname.startsWith("/hireme") ? "page" : undefined
                  }
                >
                  HIRE ME
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

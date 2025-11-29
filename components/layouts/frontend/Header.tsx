"use client";
import { ModeToggle } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() ?? "";

  // hide header entirely on admin routes
  if (pathname.startsWith("/admin")) return null;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-5 px-4 bg-transparent`}
    >
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-1/5">
          <Link href="/" className={`font-bold mb-0 text-blue-600 text-3xl`}>
            QuantumAlgo.AI
          </Link>
        </div>

        <div>
          <nav className="will-change-transform  backdrop-blur-sm shadow-sm max-w-[550px] w-full bg-amber-50/15 rounded-[30px] px-12 py-4">
            <ul className="flex justify-center items-center gap-6">
              <li>
                <Link
                  href="/portfolio"
                  className={`uppercase font-bold ${
                    pathname === "/portfolio" ? "text-amber-400" : "text-white"
                  }`}
                  aria-current={pathname === "/portfolio" ? "page" : undefined}
                >
                  PORTFOLIO
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
                  href="/courses"
                  className={`uppercase font-bold ${
                    pathname.startsWith("/courses")
                      ? "text-amber-400"
                      : "text-white"
                  }`}
                  aria-current={
                    pathname.startsWith("/courses") ? "page" : undefined
                  }
                >
                  COURSES
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
        <div className="w-1/5 flex justify-end items-center">
          <ModeToggle />
          <Button variant="outline" className="ml-4">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}

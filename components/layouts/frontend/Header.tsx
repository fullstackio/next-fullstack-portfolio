"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/admin")) return null;
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur ">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold">
            MyApp
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="/hireme" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {/* Add user actions, theme toggler, etc. here */}
        </div>
      </nav>
    </header>
  );
}

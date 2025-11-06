"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/admin/auth")) return null;
  return (
    <header className="w-full border-b bg-muted/80 backdrop-blur supports-backdrop-filter:bg-muted/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-lg font-bold">
            Admin Panel
          </Link>
          <Link
            href="/admin/news"
            className="text-sm font-medium hover:underline"
          >
            news
          </Link>
          <Link
            href="/admin/posts"
            className="text-sm font-medium hover:underline"
          >
            Posts
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {/* Add admin actions, profile, etc. here */}
        </div>
      </nav>
    </header>
  );
}

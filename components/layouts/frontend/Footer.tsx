"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="w-full border-t bg-background/80 py-4 text-center text-xs text-muted-foreground">
      <div className="container mx-auto">
        &copy; {year} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

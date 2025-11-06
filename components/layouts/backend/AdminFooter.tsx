"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminFooter() {
  const [year] = useState(() => new Date().getFullYear());
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/admin/auth")) return null;
  return (
    <footer className="w-full border-t bg-muted py-4 text-center text-xs text-muted-foreground">
      <div className="container mx-auto">
        Admin Panel &copy; {year} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

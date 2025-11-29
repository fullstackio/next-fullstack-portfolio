"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/layouts/frontend/Header";
import HomeHeader from "@/components/layouts/frontend/HomeHeader";

export default function HeaderSwitcher() {
  const pathname = usePathname();
  // Show HomeHeader only on root route
  if (pathname === "/") {
    return <HomeHeader />;
  }
  return <Header />;
}

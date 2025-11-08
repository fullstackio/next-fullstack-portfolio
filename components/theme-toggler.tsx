"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Prevent hydration mismatch by rendering theme-dependent UI only after
  // the component is mounted on the client. Server and initial client render
  // will use `mounted === false` and produce identical HTML.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const toggleTheme = useCallback(() => {
    const current = resolvedTheme || theme;
    setTheme(current === "dark" ? "light" : "dark");
  }, [resolvedTheme, theme, setTheme]);

  const isDark = mounted ? (resolvedTheme || theme) === "dark" : false;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-pressed={mounted ? isDark : false}
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0"
        }`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

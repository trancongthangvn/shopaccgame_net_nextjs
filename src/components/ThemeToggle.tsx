"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(readTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  // Render a placeholder until mounted to avoid hydration mismatch on icon swap.
  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      title={isDark ? "Chế độ sáng" : "Chế độ tối"}
      className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${className}`}
      style={{
        color: "var(--fg2)",
        background: "var(--scrim)",
        border: "1px solid var(--border)",
      }}
    >
      <Sun
        className="w-4 h-4 absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: `rotate(${isDark ? -90 : 0}deg) scale(${isDark ? 0.6 : 1})`,
        }}
      />
      <Moon
        className="w-4 h-4 absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: `rotate(${isDark ? 0 : 90}deg) scale(${isDark ? 1 : 0.6})`,
        }}
      />
    </button>
  );
}

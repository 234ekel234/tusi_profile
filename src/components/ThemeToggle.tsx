"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  // `null` until mounted; then mirrors the class the no-flash script set on <html>.
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const mounted = theme !== null;
  const isLight = theme === "light";

  useEffect(() => {
    // Client-only: read the theme already applied to <html> before paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      document.documentElement.classList.contains("light") ? "light" : "dark",
    );
  }, []);

  function toggle() {
    const next = !isLight;
    setTheme(next ? "light" : "dark");
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // ignore storage failures (e.g. private mode)
    }
  }

  // What clicking the button switches *to*.
  const targetLabel = isLight ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mounted ? `Switch to ${targetLabel.toLowerCase()} mode` : "Toggle color theme"
      }
      title={mounted ? `Switch to ${targetLabel.toLowerCase()} mode` : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-3.5 py-2 text-sm font-semibold text-foreground/80 shadow-sm transition hover:border-foreground/30 hover:bg-foreground/10 hover:text-foreground"
    >
      {/* Render contents only after mount to avoid a hydration mismatch;
          keep a width placeholder so the nav layout doesn't shift. */}
      {mounted ? (
        <>
          {isLight ? (
            // Moon — click to go dark
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            // Sun — click to go light
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          )}
          <span>{targetLabel}</span>
        </>
      ) : (
        // Invisible placeholder reserves the same width before mount.
        <span className="opacity-0">Light</span>
      )}
    </button>
  );
}

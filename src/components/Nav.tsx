"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Ask AI", href: "/#ask" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-foreground/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/#top"
          className="text-lg font-bold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          {site.name.split(" ")[0]}
          <span className="text-gradient">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 text-sm font-medium text-foreground/70 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden rounded-full bg-foreground/10 px-4 py-2 text-sm font-semibold ring-1 ring-foreground/15 transition hover:bg-foreground/20 sm:inline-block"
          >
            Let&apos;s talk
          </Link>

          {/* Mobile hamburger / close toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-foreground/15 transition hover:bg-foreground/10 sm:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`overflow-hidden border-t border-foreground/10 bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 sm:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-center font-semibold text-white"
            >
              Let&apos;s talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

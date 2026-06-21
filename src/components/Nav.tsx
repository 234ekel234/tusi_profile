"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "Bio", href: "/#about" },
  { label: "Service Record", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "AI", href: "/#ask" },
  { label: "Builds", href: "/#projects" },
  { label: "Dispatch", href: "/#contact" },
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
          ? "border-b border-line bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Colony tag */}
        <Link
          href="/#top"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 font-display text-base font-extrabold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-surface-2 text-sm text-teal">
            ◎
          </span>
          {site.name.split(" ")[0]}
          <span className="text-teal">.colony</span>
        </Link>

        {/* Desktop tabs */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-md px-3 py-1.5 font-display text-sm font-semibold text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden rounded-lg border border-line bg-surface-2 px-3.5 py-2 font-display text-sm font-bold text-foreground transition hover:border-teal hover:text-teal sm:inline-block"
          >
            Recruit me
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 transition hover:border-teal lg:hidden"
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

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-t border-line bg-background/97 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 font-display text-base font-semibold text-foreground/80 transition hover:bg-surface-2 hover:text-teal"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg border border-teal bg-teal/10 px-5 py-3 text-center font-display font-bold text-teal"
            >
              Recruit me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

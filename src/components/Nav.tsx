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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-foreground/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/#top" className="text-lg font-bold tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-gradient">.</span>
        </Link>
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
            className="rounded-full bg-foreground/10 px-4 py-2 text-sm font-semibold ring-1 ring-foreground/15 transition hover:bg-foreground/20"
          >
            Let&apos;s talk
          </Link>
        </div>
      </nav>
    </header>
  );
}

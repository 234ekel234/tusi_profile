"use client";

import { useEffect, useRef, useState } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  icon?: string; // emoji glyph shown in the module header
};

export function Section({ id, eyebrow, title, children, icon = "⚙" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // Reveal the module the first time it scrolls into view — like a system
  // powering on. Disconnects after firing so it only animates once.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-12 transition-all duration-700 ease-out sm:px-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="panel rivets overflow-hidden transition-colors duration-300 hover:border-teal/50">
        {/* Module header strip — like an ONI overlay panel title bar */}
        <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-5 py-3">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-background text-sm"
          >
            {icon}
          </span>
          <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-amber">
            {eyebrow}
          </span>
          <span className="pip-pulse ml-auto h-2 w-2 rounded-full bg-teal" />
        </div>

        {/* Module body */}
        <div className="px-5 py-7 sm:px-8 sm:py-9">
          <h2 className="mb-8 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

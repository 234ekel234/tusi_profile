import { Fragment } from "react";

export type ArchStep = {
  title: string;
  items?: readonly string[];
};

// A responsive architecture flow: horizontal on desktop, stacked on mobile.
// Pure layout/SVG-free, theme-aware via foreground tokens + the project gradient.
export function ArchDiagram({
  steps,
  caption,
  gradient,
}: {
  steps: readonly ArchStep[];
  caption?: string;
  gradient: string;
}) {
  return (
    <figure className="m-0">
      <div className="flex flex-col items-stretch gap-2 md:flex-row">
        {steps.map((step, i) => (
          <Fragment key={step.title}>
            <div className="flex-1 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4">
              <div
                className={`mb-2.5 h-1 w-8 rounded-full bg-gradient-to-r ${gradient}`}
              />
              <h4 className="text-sm font-bold leading-tight">{step.title}</h4>
              {step.items && step.items.length > 0 ? (
                <ul className="mt-2 space-y-1">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs leading-snug text-foreground/55"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {i < steps.length - 1 ? (
              <div
                aria-hidden
                className="flex shrink-0 items-center justify-center text-foreground/30"
              >
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs text-foreground/45">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

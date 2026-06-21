import Link from "next/link";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group panel flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-teal"
    >
      {/* Blueprint header strip */}
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-background font-display text-base font-black text-teal">
          {project.title.charAt(0)}
        </span>
        {"status" in project ? (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-amber/40 bg-amber/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-amber">
            <span className="blink h-1.5 w-1.5 rounded-full bg-amber" />
            {project.status}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-lime/40 bg-lime/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Online
          </span>
        )}
        <span className="ml-auto font-mono text-xs text-muted">{project.period}</span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-extrabold leading-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-line bg-background px-2.5 py-1 font-mono text-[0.7rem] text-foreground/75"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 font-display text-sm font-bold text-teal">
          View blueprint
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

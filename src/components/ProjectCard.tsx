import Link from "next/link";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.06]"
    >
      <div
        className={`absolute inset-x-0 -top-px h-1 bg-gradient-to-r ${project.gradient} opacity-80`}
      />
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-lg font-black text-white shadow-lg`}
      >
        {project.title.charAt(0)}
      </div>
      {"status" in project ? (
        <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-foreground/[0.06] px-2.5 py-0.5 text-xs font-semibold text-foreground/70 ring-1 ring-foreground/15">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          {project.status}
        </span>
      ) : null}
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70 ring-1 ring-foreground/10"
          >
            {tag}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition group-hover:text-foreground">
        Read case study
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div
        className={`absolute inset-x-0 -top-px h-1 bg-gradient-to-r ${project.gradient} opacity-80`}
      />
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-lg font-black text-white shadow-lg`}
      >
        {project.title.charAt(0)}
      </div>
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10"
          >
            {tag}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition group-hover:text-white">
        View project
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </a>
  );
}

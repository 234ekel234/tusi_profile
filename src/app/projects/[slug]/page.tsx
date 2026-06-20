import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { ArchDiagram } from "@/components/ArchDiagram";
import { site, type ProjectImage } from "@/lib/site";

// Only the slugs we know about are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return site.projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — ${site.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const liveUrl = "liveUrl" in project ? project.liveUrl : null;
  const poster = "poster" in project ? project.poster : null;
  const downloads = "downloads" in project ? project.downloads : null;
  const metrics = "metrics" in project ? project.metrics : null;
  const status = "status" in project ? project.status : null;
  const demo = "demo" in project ? project.demo : null;
  const architecture = "architecture" in project ? project.architecture : null;
  const images: readonly ProjectImage[] = project.images;

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden px-6 pt-32 pb-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className={`absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r ${project.gradient} opacity-20 blur-3xl`}
            />
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-1 text-sm font-medium text-foreground/50 transition hover:text-foreground"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to projects
            </Link>

            {status ? (
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-foreground/[0.06] px-3 py-1 text-xs font-semibold text-foreground/70 ring-1 ring-foreground/15">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                  {status}
                </span>
              </div>
            ) : null}

            <div
              className={`${status ? "mt-4" : "mt-8"} flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-foreground/50`}
            >
              <span>{project.client}</span>
              <span className="text-foreground/20">•</span>
              <span>{project.role}</span>
              <span className="text-foreground/20">•</span>
              <span>{project.period}</span>
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/60">
              {project.description}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70 ring-1 ring-foreground/10"
                >
                  {item}
                </li>
              ))}
            </ul>

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:opacity-90"
              >
                Visit live site
                <span aria-hidden>↗</span>
              </a>
            ) : null}

            {demo ? (
              <div className="mt-5 inline-block rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-fuchsia-400">
                  Demo access
                </p>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  <span className="text-foreground/50">
                    Email{" "}
                    <span className="font-mono text-foreground/80">
                      {demo.email}
                    </span>
                  </span>
                  <span className="text-foreground/50">
                    Password{" "}
                    <span className="font-mono text-foreground/80">
                      {demo.password}
                    </span>
                  </span>
                </div>
                {demo.note ? (
                  <p className="mt-1.5 text-xs text-foreground/45">{demo.note}</p>
                ) : null}
              </div>
            ) : null}

            {metrics && metrics.length > 0 ? (
              <dl className="mt-10 flex flex-wrap gap-3">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="min-w-[8rem] flex-1 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5"
                  >
                    <dt className="text-xl font-black tracking-tight sm:text-2xl">
                      {m.value}
                    </dt>
                    <dd className="mt-1 text-xs font-medium leading-snug text-foreground/55">
                      {m.label}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </section>

        {/* Body */}
        <div className="mx-auto w-full max-w-4xl space-y-16 px-6 pb-24">
          {/* Gallery */}
          <section>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
              {poster ? "Poster" : "Screenshots"}
            </h2>
            {poster ? (
              <div className="space-y-6">
                <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-2">
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    width={poster.width}
                    height={poster.height}
                    sizes="(min-width: 768px) 28rem, 100vw"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                {downloads && downloads.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-3">
                    {downloads.map((d) => (
                      <a
                        key={d.href}
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground/5"
                      >
                        {d.label}
                        <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : images.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {images.map((img) => (
                  <figure
                    key={img.src}
                    className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {img.caption ? (
                      <figcaption className="px-4 py-3 text-sm text-foreground/50">
                        {img.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] px-6 py-16 text-center transition hover:border-foreground/30 hover:bg-foreground/[0.04]"
              >
                <div
                  className={`mb-4 h-12 w-12 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80`}
                />
                <p className="text-sm text-foreground/60">
                  This project is live — explore the real thing.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition group-hover:text-foreground">
                  Open {liveUrl.replace(/^https?:\/\//, "")}
                  <span aria-hidden>↗</span>
                </span>
              </a>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] px-6 py-16 text-center">
                <div
                  className={`mb-4 h-12 w-12 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80`}
                />
                <p className="text-sm text-foreground/50">
                  This is a private client system — screenshots available on
                  request.
                </p>
              </div>
            )}
          </section>

          {/* The challenge */}
          <section>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
              The challenge
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70">
              {project.problem}
            </p>
          </section>

          {/* What I built */}
          <section>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
              What I built
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((point, i) => (
                <li key={i} className="flex gap-3 text-foreground/70">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${project.gradient}`}
                  />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture */}
          {architecture ? (
            <section>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                Architecture
              </h2>
              <ArchDiagram
                steps={architecture.steps}
                caption={architecture.caption}
                gradient={project.gradient}
              />
            </section>
          ) : null}

          {/* Outcome */}
          <section>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
              Outcome
            </h2>
            <ul className="space-y-3">
              {project.outcome.map((point, i) => (
                <li key={i} className="flex gap-3 text-foreground/70">
                  <span className="mt-1.5 shrink-0 text-fuchsia-400">✓</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-indigo-500/10 p-8 sm:p-10">
            <p className="text-lg text-foreground/70">
              Want to talk through how this was built, or see a walkthrough?
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-block rounded-full bg-foreground px-7 py-3 font-semibold text-background transition hover:bg-foreground/90"
              >
                Get in touch
              </a>
              <Link
                href="/#projects"
                className="inline-block rounded-full border border-foreground/15 px-7 py-3 font-semibold text-foreground transition hover:bg-foreground/5"
              >
                See other projects
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-foreground/10 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 text-sm text-foreground/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="/" className="transition hover:text-foreground">
            Back home →
          </Link>
        </div>
      </footer>
    </>
  );
}

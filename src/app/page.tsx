import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-6">
          {/* Animated color blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="animate-float-slow absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
            <div className="animate-float-slower absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
            <div className="animate-float-slow absolute bottom-[8%] left-[35%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <p className="animate-fade-up mb-5 inline-block rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-sm font-medium text-foreground/70">
              👋 Hi, I&apos;m {site.name} — based in {site.location}
            </p>
            <h1 className="animate-fade-up text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
              I&apos;m a <span className="text-gradient">{site.role}</span>
              <br />
              who ships production systems.
            </h1>
            <p className="animate-fade-up mt-6 max-w-xl text-lg text-foreground/60">
              {site.tagline}
            </p>
            <p className="animate-fade-up mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground/50">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {site.lookingFor}
            </p>
            <div className="animate-fade-up mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:opacity-90"
              >
                See my work
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/15 px-7 py-3 font-semibold text-foreground transition hover:bg-foreground/5"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="rounded-full border border-foreground/15 px-7 py-3 font-semibold text-foreground transition hover:bg-foreground/5"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="About" title="A little about me">
          <div className="grid gap-6 text-lg leading-relaxed text-foreground/70 md:grid-cols-2">
            {site.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <div className="relative space-y-10 border-l border-foreground/10 pl-8">
            {site.experience.map((job) => (
              <div key={job.company} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-xl font-bold">{job.company}</h3>
                  <span className="text-sm font-medium text-foreground/40">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-fuchsia-400">
                  {job.role}
                </p>
                <ul className="mt-4 space-y-2 text-foreground/65">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Toolkit" title="Things I work with">
          <div className="grid gap-8 sm:grid-cols-2">
            {site.skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-fuchsia-400">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-2.5 text-sm font-medium text-foreground/80 transition hover:border-fuchsia-400/40 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Work" title={<>Selected projects</>}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...site.projects]
              .sort(
                (a, b) =>
                  site.projectOrder.indexOf(a.slug) -
                  site.projectOrder.indexOf(b.slug),
              )
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's build something">
          <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-indigo-500/10 p-10 sm:p-14">
            <p className="max-w-lg text-lg text-foreground/70">
              Have a project in mind, a question, or just want to say hi? My
              inbox is always open.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-block rounded-full bg-foreground px-8 py-3.5 font-semibold text-background transition hover:bg-foreground/90"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-block rounded-full border border-foreground/15 px-8 py-3.5 font-semibold text-foreground transition hover:bg-foreground/5"
              >
                {site.phone}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-foreground/60">
              {site.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-foreground"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Off the clock */}
        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                {site.offTheClock.eyebrow}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {site.offTheClock.note}
              </p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
              {site.offTheClock.ranks.map((r) => (
                <li
                  key={r.game}
                  className="rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-2.5"
                >
                  <span className="block text-sm font-bold">{r.rank}</span>
                  <span className="block text-xs text-foreground/50">
                    {r.game}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-foreground/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}

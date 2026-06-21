import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Chat } from "@/components/Chat";
import { site } from "@/lib/site";

// Accent color per skill category — cycles through the ONI resource palette.
const SKILL_ACCENTS = ["bg-teal", "bg-amber", "bg-lime", "bg-rust"];

// Resource-meter fill colors, keyed by the `color` on each attribute.
const ATTR_BAR = {
  teal: "bg-teal",
  amber: "bg-amber",
  lime: "bg-lime",
  rust: "bg-rust",
} as const;

export default function Home() {
  // ONI counts time in "cycles" (days). Colony founded when the career began.
  const cycle = Math.floor(
    (Date.now() - new Date("2024-06-01").getTime()) / 86_400_000,
  );

  return (
    <>
      <Nav />

      <main id="top" className="flex-1">
        {/* ── Hero: Duplicant dossier ──────────────────────────────── */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-8 pt-28 sm:px-6 sm:pt-32">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Intro */}
            <div className="animate-fade-up">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs text-foreground/70">
                <span className="pip-pulse h-2 w-2 rounded-full bg-lime" />
                DUPLICANT ONLINE · {site.location}
              </p>
              <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl">
                {site.name}
              </h1>
              <p className="mt-3 font-display text-lg font-bold text-teal sm:text-xl">
                DESIGNATION: {site.role}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">
                {site.tagline}
              </p>

              {/* Vital readouts */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { v: `${site.projects.length}`, l: "systems shipped", c: "bg-teal" },
                  { v: "Solo", l: "crew size", c: "bg-amber" },
                  { v: "UPLB", l: "BS Comp Sci", c: "bg-lime" },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="relative overflow-hidden rounded-lg border border-line bg-surface px-4 py-2"
                  >
                    <span className={`absolute inset-y-0 left-0 w-1 ${stat.c}`} />
                    <span className="block font-display text-xl font-extrabold text-foreground">
                      {stat.v}
                    </span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                      {stat.l}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-amber" />
                {site.lookingFor}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ask"
                  className="inline-flex items-center gap-2 rounded-lg border border-teal bg-teal/15 px-5 py-2.5 font-display font-bold text-teal transition hover:bg-teal/25"
                >
                  <span aria-hidden>✨</span> Chat with my AI
                </a>
                <a
                  href="#projects"
                  className="rounded-lg border border-line bg-surface px-5 py-2.5 font-display font-bold text-foreground transition hover:border-amber hover:text-amber"
                >
                  View blueprints
                </a>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-line bg-surface px-5 py-2.5 font-display font-bold text-foreground transition hover:border-amber hover:text-amber"
                >
                  Download dossier
                </a>
              </div>
            </div>

            {/* Duplicant dossier */}
            <div className="animate-fade-up relative">
              {/* Oxygen-generator glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-teal/15 blur-3xl"
              />
              <div className="panel rivets overflow-hidden">
              <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
                <span aria-hidden className="text-sm">⬡</span>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber">
                  Duplicant Dossier
                </span>
                <span className="pip-pulse ml-auto inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-teal">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" /> printed
                </span>
              </div>
              <Image
                src="/final_oni_tusi.png"
                alt={`${site.name} as an Oxygen Not Included duplicant, with a stat panel showing his developer skills`}
                width={1254}
                height={1254}
                priority
                className="h-auto w-full"
              />
              </div>
            </div>
          </div>
        </section>

        {/* ── Current Mission (rocket) ─────────────────────────────── */}
        <section className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6">
          <div className="panel overflow-hidden transition-colors duration-300 hover:border-teal/50">
            {/* Mission-control header */}
            <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
              <span aria-hidden className="text-base">🚀</span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-amber">
                Current Mission
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-lime">
                <span className="pip-pulse h-1.5 w-1.5 rounded-full bg-lime" />
                ▲ {site.currentMission.status}
              </span>
            </div>

            {/* Mission body */}
            <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <h3 className="font-display text-lg font-extrabold text-foreground">
                  {site.currentMission.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
                  {site.currentMission.detail}
                </p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-teal/40 bg-teal/10 px-4 py-2 font-mono text-xs text-teal">
                <span className="h-2 w-2 rounded-full bg-teal" />
                Accepting new missions
              </span>
            </div>
          </div>
        </section>

        {/* ── Bio ──────────────────────────────────────────────────── */}
        <Section id="about" eyebrow="Bio" title="Duplicant background" icon="📋">
          <div className="grid gap-6 leading-relaxed text-muted md:grid-cols-2">
            {site.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Section>

        {/* ── Skills ───────────────────────────────────────────────── */}
        <Section id="skills" eyebrow="Skills" title="Stored materials" icon="📦">
          {/* Attribute meters — mirror the duplicant dossier stat panel */}
          <div className="mb-8 rounded-xl border border-line bg-background/40 p-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Attribute levels
            </p>
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {site.attributes.map((attr) => (
                <div key={attr.label}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3">
                    <span className="text-sm text-foreground/85">{attr.label}</span>
                    <span className="font-mono text-xs text-muted">
                      {attr.level}/10
                    </span>
                  </div>
                  <div className="meter">
                    <span
                      className={ATTR_BAR[attr.color as keyof typeof ATTR_BAR]}
                      style={{ width: `${attr.level * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {site.skillGroups.map((group, gi) => (
              <div
                key={group.category}
                className="rounded-xl border border-line bg-background/40 p-5"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded-sm ${SKILL_ACCENTS[gi % SKILL_ACCENTS.length]}`}
                  />
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-foreground/85"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${SKILL_ACCENTS[gi % SKILL_ACCENTS.length]}`}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Research log (experience) ────────────────────────────── */}
        <Section id="experience" eyebrow="Service Record" title="Postings & deployments" icon="📜">
          <div className="relative space-y-8 border-l-2 border-line pl-7">
            {site.experience.map((job) => (
              <div key={job.company} className="relative">
                <span className="absolute -left-[35px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-teal bg-background text-[0.6rem] text-teal">
                  ✓
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {job.company}
                  </h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="mt-0.5 font-display text-sm font-bold text-amber">
                  {job.role}
                </p>
                <ul className="mt-4 space-y-2 text-muted">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Comms (Ask AI) ───────────────────────────────────────── */}
        <Section id="ask" eyebrow="AI" title="Hail the colony AI" icon="📡">
          <p className="mb-7 max-w-xl leading-relaxed text-muted">
            A live AI assistant trained on this colony&apos;s records. Ask it
            anything about my background, skills, or builds — it answers in real
            time (English or Taglish). Powered by Azure AI Foundry.
          </p>
          <Chat />
        </Section>

        {/* ── Builds (projects) ────────────────────────────────────── */}
        <Section id="projects" eyebrow="Builds" title="Constructed systems" icon="🏗">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* ── Recreation (off the clock) ───────────────────────────── */}
        <Section id="recreation" eyebrow="Recreation" title="Off-shift activity" icon="🎮">
          <div className="sm:flex sm:items-start sm:justify-between sm:gap-8">
            <p className="max-w-md leading-relaxed text-muted">
              {site.offTheClock.note}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:mt-0 sm:shrink-0">
              {site.offTheClock.ranks.map((r) => (
                <li
                  key={r.game}
                  className="rounded-lg border border-line bg-surface px-4 py-2.5"
                >
                  <span className="flex items-center gap-2 font-display text-sm font-bold text-amber">
                    🏆 {r.rank}
                  </span>
                  <span className="font-mono text-xs text-muted">{r.game}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ── Dispatch (contact) ───────────────────────────────────── */}
        <Section id="contact" eyebrow="Dispatch" title="Open a supply line" icon="✉">
          <p className="max-w-lg leading-relaxed text-muted">
            Have a system to build, a question, or just want to say hi? My inbox
            is always open.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border border-teal bg-teal/15 px-6 py-3 font-display font-bold text-teal transition hover:bg-teal/25"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="rounded-lg border border-line bg-surface px-6 py-3 font-display font-bold text-foreground transition hover:border-amber hover:text-amber"
            >
              {site.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 font-mono text-sm text-muted">
            {site.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-teal"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-2 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · Cycle {cycle} · colony
            stable
          </p>
          <p>Built with Next.js · Tailwind · powered by oxygen 🌿</p>
        </div>
      </footer>
    </>
  );
}

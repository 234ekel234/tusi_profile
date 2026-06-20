type SectionProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
        {eyebrow}
      </p>
      <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

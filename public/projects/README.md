# Project screenshots

Drop screenshots here, one folder per project slug, then register them in
`src/lib/site.ts` under that project's `images` array.

Slugs: `cmms`, `wms`, `smt-payroll`, `sanro-inventory`, `thesis-llm`.

Example:

1. Save the file: `public/projects/sanro-inventory/dashboard.png`
2. Add it in `src/lib/site.ts`:

```ts
images: [
  {
    src: "/projects/sanro-inventory/dashboard.png",
    alt: "Sanro inventory dashboard",
    caption: "Stock overview screen", // optional
  },
],
```

Until a project has images, its case-study page shows a tasteful
"screenshots available on request" placeholder, so nothing breaks.
Redacted/blurred screenshots are fine for confidential client systems.

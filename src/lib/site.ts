// ────────────────────────────────────────────────────────────────
// Edit this file to personalize your site. Everything renders from here.
// ────────────────────────────────────────────────────────────────

export const site = {
  name: "Simoun Ezequiel Tusi",
  fullName: "Simoun Ezequiel Tusi",
  role: "Full-Stack Developer",
  tagline:
    "I build and run the business-critical systems companies depend on — solo, from data model to deployment and maintenance.",
  // 🔧 Adjust to match the work you actually want.
  lookingFor:
    "Open to full-time roles and freelance projects — remote, or on-site around Calamba / Laguna.",
  // 🔧 What you're actively building right now — shown in the "Current Mission" strip.
  currentMission: {
    title: "FMI Web Admin Console — CMMS v2",
    detail:
      "Building a desktop admin frontend on the live CMMS API so managers can run operations from the web.",
    status: "In flight",
  },
  // 🔧 Attribute levels (out of 10) — these mirror the stat panel on the
  // duplicant avatar, shown as resource meters in the Skills section.
  attributes: [
    { label: "Backend Engineering", level: 9, color: "teal" },
    { label: "Frontend Engineering", level: 7, color: "amber" },
    { label: "Database & Data Modeling", level: 8, color: "lime" },
    { label: "Systems Architecture", level: 8, color: "teal" },
    { label: "DevOps & Infrastructure", level: 6, color: "rust" },
    { label: "AI / LLM Integration", level: 6, color: "amber" },
  ],
  // 🔧 Drop your CV at public/Simoun-Ezequiel-Tusi-CV.pdf (or change this path).
  resumeUrl: "/Simoun-Ezequiel-Tusi-CV.pdf",
  email: "tusi.ekel@gmail.com",
  phone: "0935 733 0435",
  location: "Calamba City, Laguna 🇵🇭",
  offTheClock: {
    eyebrow: "Off the clock",
    note: "When I'm not shipping systems, I'm climbing ranked ladders. Top-percentile play scratches the same itch as engineering — read the system, adapt fast, out-execute. I also get lost in Oxygen Not Included, where designing self-balancing systems for fun is basically engineering with a different UI.",
    ranks: [
      { game: "Dota 2", rank: "Immortal" },
      { game: "Teamfight Tactics", rank: "Master (peak)" },
      { game: "Oxygen Not Included", rank: "Systems sim" },
    ],
  },
  about: [
    "I'm a full-stack developer and BS Computer Science graduate from UP Los Baños. I take business-critical systems from a blank page to production — gathering requirements, modeling data, building the engine, deploying it, and keeping it running — usually as the only developer on the project.",
    "I've shipped payroll engines, maintenance and warehouse platforms, a legacy-system rescue, and HR tooling on paid engagements. I care about correctness on business-critical logic, clean data models, and software that mirrors how people actually work.",
  ],
  // 🔧 Add your real GitHub / LinkedIn URLs below.
  socials: [
    { label: "GitHub", href: "https://github.com/234ekel234" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/simoun-ezequiel-tusi-9947a6230/" },
    { label: "Email", href: "mailto:tusi.ekel@gmail.com" },
  ],
  skillGroups: [
    {
      category: "Backend",
      items: [
        "Ruby on Rails",
        "Node.js / Express",
        "Python",
        "Go",
        "REST API Design",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "React Native (Expo)"],
    },
    {
      category: "Data & AI",
      items: ["PostgreSQL", "MySQL", "Prisma ORM", "LLMs"],
    },
    {
      category: "Infra & Tools",
      items: ["Docker", "Git", "Linux / Bash", "Microsoft 365 Administration"],
    },
  ],
  experience: [
    {
      role: "Programmer",
      company: "FMI — Facility Management & Integration",
      period: "Apr 2026 – Present",
      points: [
        "Sole developer who built two enterprise systems from scratch concurrently — a CMMS and a WMS — both now in active use across the company.",
        "CMMS (React Native/Expo · Express.js · PostgreSQL · Prisma · DigitalOcean): centralizes maintenance operations, asset tracking, and work order management for managers, supervisors, and client-side staff.",
        "WMS (Ruby on Rails · PostgreSQL · Docker): real-time inventory visibility, usage-based reorder alerts, batch expiry monitoring, and a full audit trail of every stock movement.",
        "Owns the entire lifecycle — requirements, architecture, data modeling, development, deployment, and maintenance — with no senior oversight.",
      ],
    },
    {
      role: "Independent Developer — Paid Client Project",
      company: "SMT Payroll System",
      period: "Dec 2025 – Mar 2026",
      points: [
        "Built a full payroll engine for ~100 employees with automatic time-slicing, overtime, night differential, and legal/special holiday calculations.",
        "Designed an alias-mapping layer to reconcile biometric display names against an employee masterlist, eliminating manual ID lookups.",
        "Generated print-ready Excel payroll slips (RubyXL) with per-company logo injection for HR.",
      ],
    },
    {
      role: "Independent Developer — Paid Client Project",
      company: "Sanro Inventory — Legacy System Migration",
      period: "Oct 2025 – Nov 2025",
      points: [
        "Revived a 2015-era Ruby on Rails inventory & invoicing system that could no longer run on modern Linux, keeping the shop operational without a costly rewrite.",
        "Containerized the unsupported stack inside an older Ubuntu Docker image to resurrect dependencies that no longer build on current operating systems.",
        "Performed a full data migration to a new on-premise server with minimal downtime, so Sanro's day-to-day operations continued uninterrupted.",
      ],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "City Human Resource Management Office",
      period: "Jun 2024 – Aug 2024",
      points: [
        "Built a full Learning & Development module in Sails.js managing training programs, materials, and employee training records.",
        "Collaborated with a team using Git/GitHub for version control and iterative delivery.",
      ],
    },
  ],
  // Display order for the homepage grid — leads with the strongest shipped
  // systems, surfaces the clickable live demos, and pushes WIP/academic last.
  projectOrder: [
    "cmms",
    "wms",
    "hotel-pms",
    "pmafi",
    "smt-payroll",
    "sanro-inventory",
    "dtr-consolidator",
    "thesis-llm",
  ],
  projects: [
    {
      slug: "cmms",
      title: "CMMS — Maintenance & Workforce System",
      description:
        "Purpose-built CMMS that replaced a commercial off-the-shelf SaaS for a facilities firm — multi-site work orders, PM checklists, attendance, and a multi-tenant client portal, with role- and site-scoped access enforced server-side.",
      tags: ["React Native", "Express.js", "PostgreSQL", "Prisma"],
      gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
      client: "FMI — Facility Management & Integration",
      role: "Sole Developer",
      period: "2026",
      metrics: [
        { value: "~$2.4k/yr", label: "commercial SaaS cost eliminated" },
        { value: "4", label: "server-enforced access roles" },
        { value: "~26 days", label: "MVP delivered ahead of schedule" },
        { value: "13", label: "core features shipped" },
      ],
      problem:
        "FMI tracked maintenance across multiple sites on paper — no central view of what was open or overdue, and no proof of who inspected what, when. Their stop-gap, a generic off-the-shelf CMMS, cost roughly $2,400/year for just two seats, didn't fit how the company actually operated, and gave clients no real isolation.",
      highlights: [
        "Built an Android (Expo) app on an Express.js + Prisma + PostgreSQL backend, replacing a commercial SaaS with a system owned outright and free of per-seat fees.",
        "Building a second frontend — a web admin console alongside the Android app, on the same API — so managers can administer the system from a desktop.",
        "Designed role- and site-scoped access control for four roles (Client, Supervisor, Manager, General Manager), enforced on the server — an unassigned site returns a 403 from the API, not just a hidden tab.",
        "Delivered a true multi-tenant client portal: each client sees only their own site and requests, while major jobs (Special Projects) are gated behind manager approval.",
        "Shipped the full workflow: work orders, recurring jobs, an asset registry with health tracking, person- and time-stamped PM checklists, attendance, shift scheduling, a training library, and a cross-site dashboard.",
        "Added a complete audit trail and per-site CSV reporting so management can prove what was done, by whom, and when.",
      ],
      outcome: [
        "Replaced a ~$2,400/year off-the-shelf SaaS with a purpose-built system the company owns outright — now in active use across its sites.",
        "Delivered the MVP roughly 26 days ahead of schedule, with 13 core features shipped.",
        "Gave management one live view across every site, and clients a real-time portal into their own requests.",
      ],
      architecture: {
        caption:
          "Mobile-first client, with role and site access enforced at the API — not just hidden in the app.",
        steps: [
          {
            title: "Two frontends",
            items: [
              "Android app — React Native (Expo)",
              "Web admin console (in progress)",
              "Manager · Supervisor · Client · GM",
            ],
          },
          {
            title: "API + access control",
            items: [
              "Express.js + Prisma",
              "Role + site scope server-side (403 on unassigned)",
              "Manager-approval gating",
            ],
          },
          {
            title: "Database",
            items: [
              "PostgreSQL",
              "Assets · work orders · checklists · attendance · audit log",
            ],
          },
          { title: "Hosting", items: ["DigitalOcean"] },
        ],
      },
      stack: [
        "React Native (Expo)",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "DigitalOcean",
      ],
      images: [],
    },
    {
      slug: "wms",
      title: "WMS — Warehouse Management",
      description:
        "Web-based warehouse system that tracks every unit from receipt to dispatch, with a supervisor approval gate and automated replenishment driven by 12 months of usage history — replacing spreadsheets and paper.",
      tags: ["Ruby on Rails", "PostgreSQL", "Docker"],
      gradient: "from-amber-400 via-orange-500 to-rose-500",
      client: "FMI — Facility Management & Integration",
      role: "Sole Developer",
      period: "2026",
      metrics: [
        { value: "12-mo", label: "usage history driving auto-replenishment" },
        { value: "100%", label: "stock moves supervisor-verified before posting" },
        { value: "3", label: "server-enforced access roles" },
        { value: "QR-scan", label: "receive · dispatch · adjust" },
      ],
      problem:
        "FMI ran the warehouse on spreadsheets, paper, and memory: no real-time stock visibility, stockouts with no warning, expired batches slipping through unnoticed, replenishment by guesswork, no audit trail, and no verification gate on stock movements.",
      highlights: [
        "Built a web-based WMS (Ruby on Rails · PostgreSQL · Docker) that records every receipt, dispatch, and adjustment in real time — but only updates stock on hand after supervisor approval.",
        "Engineered automated replenishment: from 12 months of dispatch history it derives weighted average and peak (90th-percentile) usage, auto safety stock, reorder points, and exact order quantities — recalculated on every stock move.",
        "Added per-batch expiry monitoring (30/90-day alerts), PO-linked receiving and Sales-Order-linked dispatch, and QR-code scan to receive, dispatch, or adjust.",
        "Designed three approval-gated roles (Staff, Supervisor, Admin) with page-level access enforced server-side, plus a full audit trail logging every change with user, timestamp, and before/after values.",
        "Shipped a management dashboard (warehouse health score, inventory value, stockout & expiry risk, pending approvals), Excel import/export, and in-browser database backup/restore — no technical staff needed to operate.",
      ],
      outcome: [
        "Replaced spreadsheets and paper with one real-time system of record where no stock movement posts without supervisory sign-off.",
        "Turned replenishment from guesswork into data-driven reorder points and quantities derived from a year of usage.",
        "Gave management a live view of stock value, expiry risk, and exactly what to reorder — now in active use.",
      ],
      architecture: {
        caption:
          "Every stock movement passes an approval gate before it affects stock on hand.",
        steps: [
          {
            title: "Staff actions",
            items: ["Receive · dispatch · adjust", "QR scan or forms", "PO / SO referenced"],
          },
          {
            title: "Approval gate",
            items: [
              "Pending until supervisor approves",
              "Reject / escalate paths",
              "Rails app (Dockerized)",
            ],
          },
          {
            title: "Stock & ledger",
            items: ["PostgreSQL", "SOH updates on approval", "Append-only audit trail"],
          },
          {
            title: "Replenishment engine",
            items: [
              "12-mo usage → avg & 90th-pct peak",
              "Safety stock · reorder point · order qty",
            ],
          },
        ],
      },
      stack: ["Ruby on Rails", "PostgreSQL", "Docker"],
      images: [],
    },
    {
      slug: "dtr-consolidator",
      title: "DTR / Biometric Consolidator",
      description:
        "An ETL pipeline that extracts raw attendance exports from multiple biometric devices, transforms them into clean, reconciled daily time records, and loads them for payroll and HR — with an API planned for other systems to consume.",
      tags: ["Python", "Flask", "ETL"],
      gradient: "from-teal-400 via-cyan-500 to-sky-500",
      client: "FMI — Facility Management & Integration",
      role: "Sole Developer",
      period: "2026 – Present",
      status: "In progress",
      metrics: [
        { value: "Multi-device", label: "biometric exports unified" },
        { value: "ETL", label: "extract → transform → load pipeline" },
      ],
      problem:
        "FMI runs several different biometric devices, and each one exports attendance in its own format — different columns, layouts, and timestamp conventions. Consolidating all of them into one reliable set of daily time records meant slow, error-prone manual cleanup every payroll cycle, on top of the biometric-name-vs-masterlist mismatch that already complicates payroll.",
      highlights: [
        "Building a Python (Flask) ETL pipeline with a format adapter per device, so each vendor's biometric export maps into one consistent schema.",
        "Transform stage reconciles and deduplicates overlapping punches into clean daily time records — first-in/last-out, multi-shift handling, and conflict resolution.",
        "Maps biometric display names to the official employee masterlist so records line up without manual ID lookups.",
        "Loads consolidated DTRs for payroll and HR, with a REST API planned so other systems can pull them directly instead of trading spreadsheets.",
      ],
      outcome: [
        "Aims to make one consolidated dataset the source of truth for attendance, replacing manual biometric reconciliation.",
        "Designed to plug straight into existing payroll and HR workflows.",
      ],
      architecture: {
        caption:
          "A classic extract → transform → load pipeline (Python · Flask), with an API as the planned serving layer.",
        steps: [
          {
            title: "Extract",
            items: [
              "Raw exports from multiple biometric devices",
              "One format adapter per device",
              "Normalized to one schema",
            ],
          },
          {
            title: "Transform",
            items: [
              "Reconcile & dedup overlapping punches",
              "First-in / last-out, multi-shift",
              "Map names → employee masterlist",
            ],
          },
          {
            title: "Load",
            items: ["Clean daily time records", "Stored in PostgreSQL"],
          },
          {
            title: "Serve (planned)",
            items: ["REST API", "Consumed by payroll & HR"],
          },
        ],
      },
      stack: ["Python", "Flask", "PostgreSQL", "ETL"],
      images: [],
    },
    {
      slug: "smt-payroll",
      title: "SMT Payroll Engine",
      description:
        "Full payroll engine for ~100 employees with time-slicing, overtime, night differential, holiday rules, and print-ready Excel slips. Delivered end to end for a paying client.",
      tags: ["Ruby on Rails", "PostgreSQL", "RubyXL"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      client: "Paid Client Project",
      role: "Independent Developer",
      period: "Dec 2025 – Mar 2026",
      metrics: [
        { value: "~100", label: "employees on payroll" },
        { value: "4", label: "pay rules automated (OT, ND, legal & special holidays)" },
      ],
      problem:
        "Payroll for ~100 employees was computed by hand — error-prone across overtime, night differential, and Philippine legal/special holiday rules — and biometric exports used display names that didn't match the official masterlist.",
      highlights: [
        "Built a full payroll engine with automatic time-slicing across overtime, night differential, and legal/special holiday calculations.",
        "Designed an alias-mapping layer to reconcile biometric display names against the employee masterlist, eliminating manual ID lookups.",
        "Generated print-ready Excel payroll slips with RubyXL, including per-company logo injection for HR.",
      ],
      outcome: [
        "Turned a manual, error-prone process into a repeatable engine for the full ~100-person roster.",
        "Delivered end to end for a paying client, from requirements to handoff.",
      ],
      architecture: {
        caption:
          "Reconciles messy biometric names first, then computes pay rule by rule.",
        steps: [
          {
            title: "Biometric export",
            items: ["Raw punches with display names"],
          },
          {
            title: "Alias mapping",
            items: ["Reconcile names → employee masterlist", "No manual ID lookups"],
          },
          {
            title: "Payroll engine",
            items: [
              "Time-slicing",
              "OT · night differential",
              "Legal & special holidays",
            ],
          },
          {
            title: "Output",
            items: ["Print-ready Excel slips (RubyXL)", "Per-company logo"],
          },
        ],
      },
      stack: ["Ruby on Rails", "PostgreSQL", "RubyXL"],
      images: [],
    },
    {
      slug: "sanro-inventory",
      title: "Sanro Inventory — Legacy Migration",
      description:
        "Revived a 2015 Ruby on Rails inventory & invoicing system that no longer runs on modern Linux. Containerized the legacy stack in an older Ubuntu Docker image and migrated all data to a new on-premise server — keeping the shop running with zero rewrite.",
      tags: ["Ruby on Rails", "Docker", "Legacy Migration"],
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      client: "Sanro — Paid Client Project",
      role: "Independent Developer",
      period: "Oct 2025 – Nov 2025",
      metrics: [
        { value: "2015", label: "legacy system revived" },
        { value: "Zero", label: "rewrites needed" },
        { value: "Minimal", label: "downtime during cutover" },
      ],
      problem:
        "Sanro depended on a 2015-era Ruby on Rails inventory & invoicing system that no longer ran on modern Linux — many of its dependencies simply don't build on current operating systems. The business risked losing a tool it used every day, with a full rewrite being slow and expensive.",
      highlights: [
        "Resurrected the unsupported stack by running it inside an older Ubuntu Docker image, reviving dependencies that no longer build on current OSes.",
        "Performed a full data migration of the existing records onto a new on-premise server.",
        "Kept downtime minimal so the shop could keep operating through the move.",
        "Chose preservation over rewrite — no rebuild, no retraining, no disruption to how the shop works.",
      ],
      outcome: [
        "A decade-old business-critical system runs again on current hardware.",
        "The shop continued day-to-day inventory and invoicing with zero rewrite.",
      ],
      stack: ["Ruby on Rails", "Docker", "Ubuntu", "PostgreSQL"],
      images: [],
    },
    {
      slug: "pmafi",
      title: "PMAFI — Foundation Website",
      description:
        "Official website for the Philippine Military Academy Foundation, Inc. — an 8-page site with a server-side member status check, a self-serve Digital Member ID generator, and full SEO, running at near-zero cost.",
      tags: ["Next.js", "Tailwind CSS", "Google Sheets"],
      gradient: "from-blue-700 via-indigo-600 to-amber-400",
      client: "Philippine Military Academy Foundation, Inc. (PMAFI)",
      role: "Designer & Developer (solo)",
      period: "2026",
      liveUrl: "https://pmafi.vercel.app",
      metrics: [
        { value: "8", label: "pages shipped" },
        { value: "100/100", label: "Lighthouse accessibility" },
        { value: "~₱0/mo", label: "operating cost" },
      ],
      problem:
        "The foundation needed a credible official web presence — telling its story and programs, listing its board, letting members check their status and apply, and giving donors a clear way to give — all at an operating cost a non-profit could sustain.",
      highlights: [
        "Designed and built the complete 8-page site with a custom navy/gold design system, fully responsive across desktop, tablet, and mobile.",
        "Built a private member status check: an online Google Form feeds a private Google Sheet that's read securely server-side, so the member roster never reaches the browser.",
        "Created a self-serve Digital Member ID generator with live preview, QR code, and downloadable card — all client-side, so member photos are never uploaded or stored.",
        "Engineered for trust and reach: structured data, sitemap, robots, Open Graph/Twitter previews, Google Analytics, and a 100/100 Lighthouse accessibility score.",
        "Deployed on Vercel with auto-deploys, running at roughly zero monthly cost on free hosting plus Google Forms/Sheets.",
      ],
      outcome: [
        "Live in production at pmafi.vercel.app — a fast, accessible, professional presence for the foundation.",
        "Near-zero operating cost, with a clean handover path for the foundation to maintain.",
      ],
      architecture: {
        caption:
          "The member roster stays server-side — it never reaches the browser.",
        steps: [
          {
            title: "Visitor / member",
            items: [
              "8-page Next.js site",
              "Status check · client-side digital ID + QR",
            ],
          },
          {
            title: "Next.js server",
            items: [
              "Server-side read of a private Google Sheet",
              "Roster never sent to the browser",
            ],
          },
          {
            title: "Data",
            items: ["Google Form → private Google Sheet", "Auto-tracks new applicants"],
          },
          {
            title: "Hosting",
            items: ["Vercel (auto-deploy)", "~₱0/mo"],
          },
        ],
      },
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Google Sheets API",
        "Vercel",
        "Google Analytics",
      ],
      images: [],
    },
    {
      slug: "hotel-pms",
      title: "Hotel PMS — Property Management System",
      description:
        "A multi-tenant SaaS property management system for small hotels and inns — front desk, reservations, housekeeping, folios & billing, night-audit reporting, and direct online booking — secured with Supabase row-level security.",
      tags: ["Next.js", "TypeScript", "Supabase"],
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      client: "Independent — SaaS side project",
      role: "Solo Developer",
      period: "2026 – Present",
      status: "In progress",
      liveUrl: "https://pms-v1-two.vercel.app",
      // Public demo account — keep this read-only / sandboxed.
      demo: {
        email: "demo@granddemo.ph",
        password: "DemoPass123!",
        note: "Shared read-only demo account — please don't change settings.",
      },
      metrics: [
        { value: "Multi-tenant", label: "Supabase RLS isolation per hotel" },
        { value: "9", label: "operational modules" },
        { value: "3", label: "role-scoped access levels" },
      ],
      problem:
        "Small hotels, inns, and boutique stays are stuck between spreadsheet-heavy workflows and oversized, expensive enterprise PMS tools. They need front-desk operations, reservations, housekeeping, billing, and direct online booking in one focused, affordable product — without the bloat.",
      highlights: [
        "Building an end-to-end, multi-tenant Hotel PMS as a SaaS side project on Next.js 16 (App Router · Server Actions) + TypeScript + Supabase Postgres.",
        "Full front-desk workflow: arrivals/departures dashboard, walk-ins, quick check-in/out, the complete reservation lifecycle with date-based availability checks and rate overrides, and a 14-day availability calendar.",
        "Folio & billing with automatic room charges, extra-charge presets, payments and balances, VAT/service-charge and discount handling, and print-friendly views.",
        "Housekeeping and maintenance boards plus reporting & night audit — occupancy, ADR, room-nights, daily revenue charts, cashier shift summaries, and CSV export.",
        "Guest-facing direct booking per hotel, secured with Supabase Row-Level Security (tenant isolation by hotel_id), role-based route guards, and an append-only audit log.",
      ],
      outcome: [
        "Aims to give small properties a focused, affordable alternative to spreadsheets and bloated enterprise PMS.",
        "Live staff app and guest booking flow already running on Vercel + Supabase.",
      ],
      architecture: {
        caption:
          "Multi-tenant by hotel_id, with Supabase Row-Level Security isolating every table.",
        steps: [
          {
            title: "Clients",
            items: [
              "Staff app (admin · front desk · housekeeping)",
              "Guest booking page /book/[hotelId]",
            ],
          },
          {
            title: "Next.js 16",
            items: [
              "App Router · Server Actions · Route Handlers",
              "Role-based route guards",
            ],
          },
          {
            title: "Supabase",
            items: [
              "Postgres + Auth",
              "Row-Level Security, tenant isolation by hotel_id",
              "Append-only audit log",
            ],
          },
          { title: "Hosting", items: ["Vercel + Supabase"] },
        ],
      },
      stack: [
        "Next.js 16",
        "TypeScript",
        "React 19",
        "Tailwind CSS",
        "Supabase (Postgres · Auth · RLS)",
      ],
      images: [],
    },
    {
      slug: "thesis-llm",
      title: "Thesis — LLM Analysis of Filipino Credential Vulnerabilities",
      description:
        "Undergraduate thesis on how LLMs can simulate culturally-specific password \"tweaking\" attacks on Filipino credentials — pairing synthetic identities with a hybrid similarity score and a web-based evaluation tool.",
      tags: ["Python", "LLMs", "Security Research"],
      gradient: "from-sky-400 via-blue-500 to-violet-500",
      client: "BS Computer Science Thesis — UP Los Baños",
      role: "Researcher & Developer",
      period: "2024 – 2025",
      metrics: [
        { value: "884.5M → 21.2k", label: "breach entries filtered" },
        { value: "5", label: "LLMs evaluated" },
        { value: "4.5 / 5", label: "tool usability score" },
      ],
      problem:
        "Filipinos often build passwords from culturally specific personal strings — names, Tagalog words, and affective phrases like \"mahal01\". Global password-security models lack this regional specificity, leaving Filipino users especially exposed to targeted credential tweaking, where an attacker reuses known personal information to guess password variants. Yet there was no ethical, data-driven way to study these localized weaknesses without exposing real users' private credentials.",
      highlights: [
        "Built an end-to-end Python framework to analyze Filipino credential and password-reuse behavior, filtering 884.5M raw breach entries (COMB + HQ datasets) down to ~21.2k unique, NIST-compliant Filipino passwords.",
        "Generated synthetic identities with DeepSeek-R1 (32B) — fictional but realistic names, emails, birthdates, and addresses — so attacks could be simulated without ever touching real users' personal information.",
        "Simulated targeted credential-tweaking attacks with five LLMs (Mistral 7B, Qwen 2.5 7B, Gemma 3 4B, LLaMA 3.1 8B, Phi-3 14B) to generate password variants from those identities.",
        "Designed a Hybrid Similarity Score (HSS = 0.5·Cosine + 0.5·Damerau–Levenshtein) to measure how close generated variants stayed to the originals.",
        "Shipped a React/Vue web tool for password strength (0–4) and similarity scoring, validated through usability testing.",
      ],
      outcome: [
        "Quantified the \"Pinoy gap\": adding a Filipino/Tagalog dictionary dropped average password-security scores from 2.67 to 1.51 — showing how cultural data sharply increases guessability.",
        "Found Mistral-7B best simulated human-like weak tweaks (smallest ~0.2% score drop), while Phi-3 (14B) produced the most secure, least-predictable variants (3.19).",
        "The web evaluation tool scored 4.5/5 for clarity and 4.4/5 for trust in user testing.",
      ],
      stack: ["Python", "LLMs", "React", "Vue", "Similarity Scoring"],
      poster: {
        src: "/projects/thesis-llm/poster.png",
        alt: "Research poster — LLM-driven vulnerability detection in Filipino credentials",
        width: 1587,
        height: 2245,
      },
      downloads: [
        {
          label: "Read the journal (PDF)",
          href: "/projects/thesis-llm/journal.pdf",
        },
        {
          label: "Download poster (PNG)",
          href: "/projects/thesis-llm/poster.png",
        },
      ],
      images: [],
    },
  ],
} as const;

export type Project = (typeof site.projects)[number];
export type Experience = (typeof site.experience)[number];

// `images: []` infers as `never[]` under `as const`; this is the real shape
// to use when reading a project's screenshots.
export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

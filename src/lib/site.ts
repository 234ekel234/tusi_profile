// ────────────────────────────────────────────────────────────────
// Edit this file to personalize your site. Everything renders from here.
// ────────────────────────────────────────────────────────────────

export const site = {
  name: "Simoun Tusi",
  fullName: "Simoun Ezequiel Tusi",
  role: "Full-Stack Developer",
  tagline:
    "I design and ship enterprise systems end to end — from data model to deployment — for real businesses.",
  email: "tusi.ekel@gmail.com",
  phone: "0935 733 0435",
  location: "Calamba City, Laguna 🇵🇭",
  about: [
    "I'm a full-stack developer and BS Computer Science graduate from UPLB. I specialize in taking enterprise systems from a blank page to a live deployment — gathering requirements, modeling data, building the engine, and handing it off to real users.",
    "I've shipped payroll engines, maintenance and warehouse management systems, and HR tooling as a solo developer on paid client engagements. I care about correctness on business-critical logic, clean data models, and software that mirrors how people actually work.",
  ],
  // 🔧 Add your real GitHub / LinkedIn URLs below.
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "Email", href: "mailto:tusi.ekel@gmail.com" },
  ],
  skills: [
    "Ruby on Rails",
    "JavaScript / Node.js",
    "React",
    "React Native (Expo)",
    "Next.js",
    "Express.js",
    "Python",
    "Go",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "Docker",
    "Git",
    "Linux / Bash",
    "REST API Design",
  ],
  experience: [
    {
      role: "Programmer",
      company: "FMI — Facility Management & Integration",
      period: "Apr 2026 – Present",
      points: [
        "Sole developer building two enterprise systems from scratch concurrently — a CMMS and a WMS — targeting a June 2026 go-live.",
        "CMMS (React Native/Expo · Express.js · PostgreSQL · Prisma · DigitalOcean): centralizes maintenance operations, asset tracking, and work order management for managers, supervisors, and client-side staff.",
        "WMS (Ruby on Rails · PostgreSQL · Docker): real-time inventory visibility, usage-based reorder alerts, batch expiry monitoring, and a full audit trail of every stock movement.",
        "Owns the entire lifecycle — requirements, architecture, data modeling, development, and deployment — with no senior oversight.",
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
      role: "Full-Stack Developer Intern",
      company: "City Human Resource Management Office",
      period: "Jun 2024 – Aug 2024",
      points: [
        "Built a full Learning & Development module in Sails.js managing training programs, materials, and employee training records.",
        "Collaborated with a team using Git/GitHub for version control and iterative delivery.",
      ],
    },
  ],
  projects: [
    {
      title: "CMMS — Maintenance Management",
      description:
        "Enterprise maintenance system centralizing asset tracking and work order management across managers, supervisors, and client staff. Built solo and deployed on DigitalOcean.",
      tags: ["React Native", "Express.js", "PostgreSQL", "Prisma"],
      href: "#contact",
      gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    },
    {
      title: "WMS — Warehouse Management",
      description:
        "Replaces spreadsheet/paper stock tracking with real-time inventory, usage-based reorder alerts, batch expiry monitoring, and a complete movement audit trail.",
      tags: ["Ruby on Rails", "PostgreSQL", "Docker"],
      href: "#contact",
      gradient: "from-amber-400 via-orange-500 to-rose-500",
    },
    {
      title: "SMT Payroll Engine",
      description:
        "Full payroll engine for ~100 employees with time-slicing, overtime, night differential, holiday rules, and print-ready Excel slips. Delivered end to end for a paying client.",
      tags: ["Ruby on Rails", "PostgreSQL", "RubyXL"],
      href: "#contact",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    },
    {
      title: "Thesis — LLM Credential Vulnerability Detection",
      description:
        "An LLM-driven framework to detect vulnerabilities in Filipino credentials using synthetic data generation, similarity scoring, and culturally contextualized analysis.",
      tags: ["Python", "LLMs", "Data Modeling"],
      href: "#contact",
      gradient: "from-sky-400 via-blue-500 to-violet-500",
    },
  ],
} as const;

export type Project = (typeof site.projects)[number];
export type Experience = (typeof site.experience)[number];

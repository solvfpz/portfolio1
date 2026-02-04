
import React from 'react';
import { Project, Experience, Contribution, BlogPost, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Synapse",
    description: "Full-stack productivity platform for saving URLs, notes, and insights.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "BetterAuth", "Resend"],
    link: "https://synapse-sage.vercel.app/",
    github: "https://github.com/vedantlavale/synapse",
    image: "https://picsum.photos/seed/synapse/600/400"
  },
  {
    title: "Mdify",
    description: "Web tool to convert Medium articles into clean, developer-friendly Markdown.",
    tags: ["Next.js", "TypeScript"],
    link: "https://mdify.vedant.works",
    github: "https://github.com/vedantlavale/mdify",
    image: "https://picsum.photos/seed/mdify/600/400"
  },
  {
    title: "Shadnex",
    description: "Open-source CLI tool to scaffold Next.js projects with automated Shadcn UI integration.",
    tags: ["TypeScript", "Bun", "CLI"],
    link: "https://www.npmjs.com/package/shadnex",
    github: "https://github.com/vedantlavale/shadnex",
    image: "https://picsum.photos/seed/shadnex/600/400"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Gauge.ro",
    role: "Full Stack Developer",
    period: "Nov 2025 - Present",
    logo: "G",
    isIntern: true,
    isRemote: true,
    description: [
      "Sole Full Stack Developer in a 3-member core engineering team.",
      "Working on production backend systems with 200+ REST APIs and highly scalable time-series databases.",
      "Developing Node.js services for IoT data ingestion and business logic."
    ]
  },
  {
    company: "Socialease",
    role: "Full Stack Developer",
    period: "Jun 2025 - Aug 2025",
    logo: "S",
    description: [
      "Developed responsive UI components using React and Tailwind CSS.",
      "Optimized database queries for improved application performance.",
      "Integrated third-party APIs for social media scheduling."
    ]
  }
];

export const CONTRIBUTIONS: Contribution[] = [
  {
    repo: "dodopayments/billingsdk",
    title: "Nestjs cli support for dodopayments and stripe for billingsdk",
    type: 'merge'
  },
  {
    repo: "vercel/next.js",
    title: "Add ShadCN UI Integration to create-next-app",
    type: 'pull-request'
  },
  {
    repo: "Dialectica-ai/dialectica-ai",
    title: "chore: add router functionality for navigation in LandingPage",
    type: 'merge'
  }
];

export const BLOGS: BlogPost[] = [
  {
    title: "Horizontal Scaling in Databases: Part 1 — Read Replicas",
    summary: "As applications grow, databases often become the bottleneck. Learn how read replicas helps serve data efficiently.",
    publishedAt: "2025-12-26",
    slug: "read-replicas"
  },
  {
    title: "How to convert any Medium blog to Markdown in seconds",
    summary: "Convert your Medium articles into clean, editable Markdown format quickly with mdify—no copy-pasting required.",
    publishedAt: "2025-11-14",
    slug: "mdify"
  }
];

export const SKILLS: Skill[] = [
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "React/Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
  { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Prisma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Bun", icon: "https://bun.sh/logo.svg" },
  { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" }
];

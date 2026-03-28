import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  NotebookPen,
} from "lucide-react";

import type { ExperienceItem, NavigationItem, Project, SkillGroup, SocialLink } from "@/types/site";

export const siteMetadata = {
  title: "Nixon | Personal Website",
  description:
    "Portfolio website for Nixon, focused on thoughtful product design, modern frontend engineering, and engaging digital experiences.",
  url: "https://your-domain.com",
};

export const profile = {
  name: "Nixon Lesmana",
  role: "Frontend Developer & UI Builder",
  tagline: "I build polished digital experiences with sleek interfaces, strong hierarchy, and motion that feels intentional.",
  location: "La Jolla, California",
  availability: "Open to internships, collaborations, and ambitious side projects.",
  heroDescription:
    "My focus is frontend work that feels sharp and elevated: dark visual systems, refined interactions, and portfolio pieces that leave a strong first impression.",
  about:
    "I like building websites and apps that balance visual confidence with clarity. My work usually sits between frontend engineering, interface design, and product thinking.",
  story:
    "Right now I’m focused on making my work feel more premium: stronger composition, cleaner rhythm, and more intentional case studies that show both the code and the design decisions behind it.",
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export const socials: SocialLink[] = [
  {
    href: "mailto:nlesmana@ucsd.edu",
    label: "Email",
    value: "nlesmana@ucsd.edu",
    icon: Mail,
  },
  {
    href: "https://github.com/NixonLesmana",
    label: "GitHub",
    value: "NixonLesmana",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/nixon-lesmana-38a594299/",
    label: "LinkedIn",
    value: "Nixon Lesmana",
    icon: Linkedin,
  },
  {
    href: "https://maps.google.com/?q=LaJolla",
    label: "Location",
    value: "La Jolla, California",
    icon: MapPin,
  },
];

export const heroStats = [
  { label: "Featured builds", value: "04" },
  { label: "Design style", value: "Clean + bold" },
  { label: "Primary focus", value: "Frontend UI" },
];

export const heroNotes = [
  "Sharp UI systems built with modern frontend tools.",
  "Working hard on stronger case-study quality and visual polish.",
  "Interfaces designed to feel premium, clear, and current.",
];

export const projects: Project[] = [
  {
    slug: "career-copilot",
    title: "Career Copilot",
    summary: "An AI-guided platform for refining resumes, reviewing matches, and improving application materials.",
    impact: "Translated a dense workflow into a clearer, more supportive experience for students and new grads.",
    tech: ["Next.js", "TypeScript", "Prisma", "OpenAI"],
    role: "Product design, frontend architecture, UX writing",
    timeline: "2025",
    links: {
      repo: "https://github.com/your-github/career-copilot",
    },
    featured: true,
    palette: {
      glow: "from-[#6ea8ff]/25 via-[#1d2944]/15 to-transparent",
      accent: "bg-[#8bb8ff]",
    },
  },
  {
    slug: "notex",
    title: "NoteX",
    summary: "A note-taking experience with structure, usability, and a foundation for smarter workflows.",
    impact: "Focused the interface around clarity and speed instead of overwhelming users with options.",
    tech: ["Next.js", "React", "Node.js", "UX Prototyping"],
    role: "Frontend implementation, interaction design",
    timeline: "2025",
    links: {
      repo: "https://github.com/your-github/notex",
    },
    featured: true,
    palette: {
      glow: "from-[#8a9dff]/25 via-[#20284d]/15 to-transparent",
      accent: "bg-[#8f9fff]",
    },
  },
  {
    slug: "glide",
    title: "Glide",
    summary: "A mobile-first concept exploring smooth onboarding, motion, and trust in everyday product flows.",
    impact: "Pushed visual polish and micro-interactions without sacrificing navigational clarity.",
    tech: ["Expo", "React Native", "TypeScript", "NativeWind"],
    role: "Motion direction, mobile UI systems",
    timeline: "2025",
    links: {
      repo: "https://github.com/your-github/glide",
    },
    featured: true,
    palette: {
      glow: "from-[#95d7ff]/22 via-[#14263f]/12 to-transparent",
      accent: "bg-[#84d8ff]",
    },
  },
  {
    slug: "embedded-lab",
    title: "Embedded Onboarding Guide",
    summary: "A clearer onboarding artifact that translates technical context into something new teammates can actually use.",
    impact: "Made technical ramp-up faster by structuring information around decisions, not just documentation.",
    tech: ["Technical Writing", "Systems Thinking", "HTML"],
    role: "Information architecture, writing, visual structure",
    timeline: "2026",
    links: {},
    featured: true,
    palette: {
      glow: "from-[#d9e4ff]/18 via-[#1a2235]/10 to-transparent",
      accent: "bg-[#cad7ff]",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    name: "Design",
    items: ["Interaction design", "Visual hierarchy", "Motion systems", "UX writing"],
  },
  {
    name: "Product",
    items: ["Prototyping", "Iteration", "Case study framing", "User empathy"],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Student Builder",
    place: "Personal and academic projects",
    timeframe: "Current",
    highlights: [
      "Building modern web and mobile interfaces with a stronger eye toward polish and story.",
      "Using project work to practice translating ideas into deliberate UX decisions.",
    ],
  },
  {
    title: "Frontend-focused collaborator",
    place: "Team and solo builds",
    timeframe: "Recent work",
    highlights: [
      "Designed clearer flows, reduced visual clutter, and improved responsiveness across prototypes.",
      "Worked across implementation and presentation to make projects feel more complete.",
    ],
  },
];

export const principles = [
  "Lead with presence, then support it with clarity.",
  "Keep layouts clean enough to scan and polished enough to remember.",
  "Use motion to frame the story, not to distract from it.",
];

export const contactOptions = [
  {
    label: "Start a conversation",
    value: "nixon@example.com",
    href: "mailto:nixon@example.com",
    icon: Mail,
  },
  {
    label: "See how I build",
    value: "GitHub profile",
    href: "https://github.com/your-github",
    icon: Github,
  },
  {
    label: "View my background",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/your-linkedin",
    icon: Linkedin,
  },
];

export const resumeHighlights = [
  "Modern frontend development with React, Next.js, and TypeScript",
  "Clean UI systems with attention to responsiveness and accessibility",
  "Strong interest in product thinking, user trust, and interface polish",
];

export const homeCta = {
  primary: {
    href: "/projects",
    label: "See My Projects",
    icon: ArrowUpRight,
  },
  secondary: {
    href: "/contact",
    label: "Book a Conversation",
    icon: NotebookPen,
  },
};

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
  tagline: "I build software projects and I’m especially interested in backend systems, embedded software, and hardware-oriented engineering.",
  location: "La Jolla, California",
  availability: "Open to internships, collaborations, and side projects.",
  heroDescription:
    "Most of the projects I’ve built so far are software-based, but I’m working toward backend development, embedded systems, and lower-level engineering areas like digital integrated circuit design.",
  about:
    "I’m interested in how systems work across different layers, from application code to lower-level software and hardware. I’m drawn to work that is practical, technical, and well structured.",
  story:
    "Right now, I’m focused on building stronger projects and showing not just what I built, but how I approached the problem and why I made certain decisions.",
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
  { label: "Projects", value: "04" },
  { label: "Primary focus", value: "Backend + Systems" },
  { label: "Growing toward", value: "Embedded + Hardware" },
];

export const heroNotes = [
  "Most of my work so far has been software-based, with a growing interest in lower-level systems.",
  "I’m especially interested in backend development, embedded software, and how software connects to hardware.",
  "I want my projects to show stronger technical depth, clearer thinking, and better engineering decisions.",
];

export const projects: Project[] = [
  {
    slug: "career-copilot",
    title: "Career Copilot",
    summary: "An AI-powered resume tailoring platform that improved application customization by parsing PDF/DOCX resumes, extracting job-posting requirements, and generating structured resume-to-role match analyses.",
    result: "Built a clearer workflow for tailoring resumes, extracting job requirements, and generating structured match analysis.",
    tech: ["Next.js", "TypeScript", "Prisma", "GeminiAPI", "PostgreSQL", "Tailwind CSS", "Clerk Authentication"],
    focus: "Full-stack development, resume workflow design, AI integration",
    timeline: "2026",
    links: {
      repo: "https://github.com/NixonLesmana/CareerCopilot",
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
    summary: "A full-stack note-sharing platform that lets users create, organize, store, and securely share notes through a REST API, including support for password-protected content.",
    result: "Built a note-sharing platform with a clear interface, secure authentication, and support for protected content.",
    tech: ["Next.js", "Python/Flask", "MySQL", "REST API", "JWT Authentication", "Bcrypt"],
    focus: "Full-stack development, note sharing platform, REST API, JWT Authentication",
    timeline: "2026",
    links: {
      repo: "https://github.com/NixonLesmana/NoteX",
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
    summary: "Uber-inspired mobile application that focuses on delivering a modern ride-booking experience with clean onboarding, authentication flows, and a scalable mobile app structure.",
    result: "Built a modern ride-booking experience with clean onboarding, authentication flows, and a scalable mobile app structure.",
    tech: ["Expo", "React Native", "TypeScript", "NativeWind", "Clerk Authentication", "Expo Router"],
    focus: "Mobile app development, interaction design, app flow implementation",
    timeline: "2026",
    links: {
      repo: "https://github.com/NixonLesmana/Glide",
    },
    featured: true,
    palette: {
      glow: "from-[#95d7ff]/22 via-[#14263f]/12 to-transparent",
      accent: "bg-[#84d8ff]",
    },
  },
  {
    slug: "web-chat-server",
    title: "Web Chat Server",
    summary: "A chat server in C that handles HTTP requests, stores chat messages in memory, and supports message and reaction endpoints.",
    result: "Built core networking and request-handling logic from scratch, with a stronger focus on systems programming, protocol handling, and server-side data flow.",
    tech: ["C", "WebSockets", "HTTP Protocol"],
    focus: "Server implementation, HTTP request handling, socket programming",
    timeline: "2025",
    links: {
      repo: "https://github.com/NixonLesmana/WebServer",
    },
    featured: true,
    palette: {
      glow: "from-[#d9e4ff]/18 via-[#1a2235]/10 to-transparent",
      accent: "bg-[#cad7ff]",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["C++", "C", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "MATLAB", "LaTeX", "SQL"],
  },
  {
    name: "Frameworks/Libraries",
    items: ["React", "Next.js", "Flask", "Tailwind CSS", "Prisma", "SQLAlchemy", "AI SDK"],
  },
  {
    name: "Tools/Technologies",
    items: ["PostgreSQL", "MySQL", "Docker", "REST APIs", "Git", "Jira", "Vim", "gdb"],
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
    value: "nlesmana@ucsd.edu",
    href: "mailto:nlesmana@ucsd.edu",
    icon: Mail,
  },
  {
    label: "See how I build",
    value: "GitHub profile",
    href: "https://github.com/NixonLesmana",
    icon: Github,
  },
  {
    label: "View my background",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/nixon-lesmana-38a594299/",
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
    label: "Let's Connect",
    icon: NotebookPen,
  },
};

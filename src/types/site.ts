import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
  value: string;
  icon: LucideIcon;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  tech: string[];
  role: string;
  timeline: string;
  links: {
    live?: string;
    repo?: string;
  };
  featured: boolean;
  palette: {
    glow: string;
    accent: string;
  };
};

export type ExperienceItem = {
  title: string;
  place: string;
  timeframe: string;
  highlights: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

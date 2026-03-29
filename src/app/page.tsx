import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { SocialLinks } from "@/components/site/social-links";
import { heroNotes, heroStats, homeCta, profile, projects, skillGroups } from "@/content/site";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const primaryProject = featuredProjects[0];

  return (
    <>
      <section className="page-section pt-8 pb-20 sm:pt-12 sm:pb-24">
        <div className="spotlight relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,32,0.88)_0%,rgba(7,10,19,0.96)_100%)] px-6 py-8 shadow-[0_40px_140px_rgba(0,0,0,0.46)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grain absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(118,146,255,0.16),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.09),transparent_18%),linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_40%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <FadeIn className="max-w-3xl pt-3 lg:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-[#9fb7ff]">
                <Sparkles className="h-3.5 w-3.5" />
                Computer Engineering @ UC San Diego
              </div>
              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[0.92] text-[#f4f7ff] text-balance sm:text-7xl lg:text-[5.75rem]">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d5def4] sm:text-[1.35rem]">{profile.tagline}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#8f9cb8]">{profile.heroDescription}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={homeCta.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9fb7ff] px-6 py-3 text-sm font-semibold text-[#07101f] transition hover:bg-[#c5d6ff] hover:text-[#07101f]"
                >
                  {homeCta.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={homeCta.secondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  {homeCta.secondary.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-[7.8rem] flex-col justify-between rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-xl"
                  >
                    <p className="text-2xl font-semibold text-[#f4f7ff]">{item.value}</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#74829e]">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="grid gap-5 lg:pt-6">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,21,39,0.92)_0%,rgba(10,14,24,0.98)_100%)] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.38)]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f7768e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f7c265]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#7bd88f]" />
                </div>
                <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(132,162,255,0.18),transparent_26%),linear-gradient(180deg,#0d1324_0%,#090d16_100%)] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#7a89a8]">Preview</p>
                      <p className="mt-2 text-lg font-semibold text-[#f4f7ff]">Featured Work</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#d7e1ff]">2026</span>
                  </div>

                  <div className="mt-6 rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4">
                    <p className="text-sm font-medium text-[#f4f7ff]">{primaryProject?.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#8f9cb8]">{primaryProject?.summary}</p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#f4f7ff]">Area</p>
                      <p className="mt-2 text-sm text-[#8f9cb8]">Software + AI</p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#f4f7ff]">Type</p>
                      <p className="mt-2 text-sm text-[#8f9cb8]">Web Application</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex min-h-[10.8rem] flex-col rounded-[1.55rem] border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#f4f7ff]">What I care about</p>
                  <p className="mt-3 text-[#8f9cb8]">Building practical systems, understanding how they work underneath, and writing software with a strong technical foundation.</p>
                </div>
                <div className="flex min-h-[10.8rem] flex-col rounded-[1.55rem] border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#f4f7ff]">Current goal</p>
                  <p className="mt-3 text-[#8f9cb8]">Keep growing in backend, embedded systems, and hardware-oriented engineering through more focused projects.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="page-section pb-20 sm:pb-22">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Focus"
              title="What I'm Building"
              description="A quick look at the areas I’m most interested in and the direction I want my work to keep growing in."
              theme="dark"
            />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroNotes.map((item, index) => (
              <FadeIn
                key={item}
                delay={index * 0.08}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 text-base leading-7 text-[#c7d3ee] shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              >
                {item}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pb-20 sm:pb-24">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Projects That Reflect My Interests"
            description="A selection of projects that reflect the kinds of problems I like working on, from web applications to lower-level systems and more technical software builds"
            theme="dark"
          />
          <Link href="/projects" className="hidden text-sm font-medium text-[#b9c7e5] transition hover:text-white md:inline-flex">
            View All Projects
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="page-section pb-20 sm:pb-24">
        <div className="flex items-end justify-between gap-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Technical Profile"
              title="The Stack Behind My Projects"
              description="These are the main technologies I’ve used so far across my projects, including languages, frameworks, databases, and development tools."
              theme="dark"
            />
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <FadeIn
              key={group.name}
              delay={index * 0.08}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,32,0.88)_0%,rgba(7,10,18,0.96)_100%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9fb7ff]">{group.name}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-[#d6e0f8]">
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="page-section pb-24 sm:pb-28">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            description="Connect with me through any of the links below."
            theme="dark"
          />
        </FadeIn>
        <div className="mt-10">
          <FadeIn delay={0.08}>
            <SocialLinks />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

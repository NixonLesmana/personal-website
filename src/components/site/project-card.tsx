import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,36,0.96)_0%,rgba(8,12,24,0.98)_100%)] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.4)] md:p-6">
      <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${project.palette.glow}`} />
      <div className="relative flex h-full flex-col">
        <div className="rounded-[1.6rem] border border-white/8 bg-[#0c1120] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f7768e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f7c265]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7bd88f]" />
          </div>
          <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-white/8 bg-[linear-gradient(135deg,#10172b_0%,#0a0f1d_100%)] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#73819f]">{project.timeline}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#f2f5ff]">{project.title}</h3>
              </div>
              <span className={`mt-1 h-3 w-3 rounded-full ${project.palette.accent} shadow-[0_0_16px_currentColor]`} />
            </div>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#98a7c5]">{project.summary}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-[0.7fr_1.3fr]">
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#73819f]">Focus</p>
                <p className="mt-3 text-sm leading-6 text-[#dbe4ff]">{project.focus}</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#73819f]">Result</p>
                <p className="mt-3 text-sm leading-6 text-[#b6c2db]">{project.result}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#73819f]">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-xs font-medium text-[#d8e1f8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#73819f]">Links</p>
            <div className="mt-3 flex flex-wrap justify-end gap-3">
              {project.links.repo ? (
                <Link
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-[#edf3ff] transition hover:border-[#8fb2ff]/30 hover:text-[#8fb2ff]"
                >
                  Code
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
              {project.links.live ? (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-[#edf3ff] transition hover:border-[#8fb2ff]/30 hover:text-[#8fb2ff]"
                >
                  Live site
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { socials } from "@/content/site";

type SocialLinksProps = {
  compact?: boolean;
};

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <div className={compact ? "flex flex-wrap gap-3" : "grid gap-3 sm:grid-cols-2"}>
      {socials.map(({ href, icon: Icon, label, value }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="group flex items-center justify-between rounded-[1.7rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#b5c0d8] shadow-[0_20px_50px_rgba(3,8,20,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#8fb2ff]/40 hover:bg-white/[0.08]"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0d1424] text-[#9fb7ff]">
              <Icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.22em] text-[#7282a3]">{label}</span>
              <span className="block font-medium text-[#f3f6ff]">{value}</span>
            </span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-[#7282a3] transition group-hover:text-[#f3f6ff]" />
        </Link>
      ))}
    </div>
  );
}

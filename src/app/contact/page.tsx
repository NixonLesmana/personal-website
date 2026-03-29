import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/site/section-heading";
import { SocialLinks } from "@/components/site/social-links";
import { contactOptions, profile } from "@/content/site";

export default function ContactPage() {
  return (
    <div className="page-section py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="If you&apos;re building something ambitious, I&apos;d love to hear about it."
            description={`${profile.availability} I’m especially interested in projects where frontend quality, UI detail, and product feel matter.`}
            theme="dark"
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="mailto:nlesmana@ucsd.edu"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#09111e] transition hover:bg-[#9fb7ff]"
            >
              Email Me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Open Resume PDF
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,16,28,0.92)_0%,rgba(7,10,18,0.98)_100%)] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.3)] sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9fb7ff]">Reach out</p>
          <div className="mt-5 space-y-4">
            {contactOptions.map(({ href, icon: Icon, label, value }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-[#c9d4ee] transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#11182b] text-[#9fb7ff]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[#7282a3]">{label}</span>
                    <span className="mt-1 block font-medium text-[#f2f5ff]">{value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#7282a3]" />
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="mt-10">
        <FadeIn delay={0.12}>
          <SocialLinks />
        </FadeIn>
      </div>
    </div>
  );
}

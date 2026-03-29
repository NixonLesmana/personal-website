"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { navigation } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(9,13,24,0.7)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-[#141b2e]">
            <Image
              src="/profile.jpg"
              alt="Nixon Lesmana"
              width={52}
              height={52}
              className="object-cover object-center"
              sizes="52px"
            />
          </div>
          <span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#73819f]">Personal Website</span>
            <span className="block font-display text-2xl leading-none text-[#f4f7ff]">Nixon Lesmana</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${active ? "bg-white/[0.08] text-white" : "text-[#97a5c2] hover:bg-white/[0.06] hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-[#9fb7ff] px-5 py-2.5 text-sm font-semibold text-[#07101f] transition hover:bg-[#c5d6ff] hover:text-[#07101f]"
          >
            Let&apos;s Connect
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(9,13,24,0.92)] shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base transition ${active ? "bg-white/[0.08] text-white" : "text-[#97a5c2] hover:bg-white/[0.06] hover:text-white"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

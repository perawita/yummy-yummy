"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Dictionary } from "@/lib/i18n";
type Props = {
  t: Dictionary;
};

export default function Hero({t}: Props) {
  return (
    <section
      id="hero"
      className="relative h-[90vh] md:h-screen overflow-hidden bg-[#0f0f0f] text-white"
    >
      {/* === Chalk stains (random kapur) === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,_rgba(255,255,255,0.07),_transparent_38%),radial-gradient(circle_at_82%_22%,_rgba(255,255,255,0.05),_transparent_42%),radial-gradient(circle_at_50%_68%,_rgba(255,255,255,0.04),_transparent_48%)]" />

      {/* === Big smudge (usap tangan) === */}
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full bg-white/5 blur-[120px]" />

      {/* === Chalk glow halus === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />

      {/* === Vignette gelap === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />

      {/* === Chalk dust / grain === */}
      <div className="absolute inset-0 bg-[url('/textures/grain.jpg')] opacity-[0.12] mix-blend-soft-light" />

      {/* === Content === */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs md:text-sm tracking-[0.35em] uppercase text-white/55"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white/95"
          >
            {t.hero.title} <br className="hidden md:block" />
            {t.hero.title_2}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm md:text-lg text-white/65 mb-10"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-8 py-3 text-sm tracking-wide text-white/90 transition hover:bg-white hover:text-[#0f0f0f]"
            >
              {t.hero.CTA}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* === Chalk dust / crop (BOTTOM FADE) === */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-[30vh]
          bg-[url('/textures/_crop.png')]
          bg-no-repeat
          bg-bottom
          bg-cover
          [mask-image:linear-gradient(to_top,black_65%,transparent)]
        "
      />

    </section>
  );
}

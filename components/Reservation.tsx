"use client";
import React from "react";
import { FaMapLocationDot, FaRegClock } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

import { Dictionary } from "@/lib/i18n";
type Props = {
  t: Dictionary;
};

export default function Reservation({ t }: Props) {
  return (
    <section
      id="reservation"
      className="overflow-hidden bg-[#202624] text-white"
    >
      {/* chalk grain */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/grain.jpg')] opacity-[0.08] mix-blend-soft-light" />

      {/* soft top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 py-24 sm:py-28 text-center">
        {/* Eyebrow */}
        <p className="mb-4 text-xs tracking-[0.4em] uppercase text-white/65">
          {t.reservation.subtitle}
        </p>

        {/* Heading */}
        <h2 className="mb-6 font-serif text-2xl sm:text-3xl md:text-4xl text-white/90">
          {t.reservation.title}
        </h2>

        {/* Description */}
        <p className="mx-auto mb-16 max-w-xl text-sm sm:text-base leading-relaxed text-white/65">
          {t.reservation.description}
        </p>

        {/* ================= INFO GRID ================= */}
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            auto-rows-[minmax(120px,auto)]
          "
        >
          {/* Lokasi (hero) */}
          <div
            className="
              sm:col-span-2 lg:col-span-1
              px-6 py-6
              bg-white/5
              border border-white/10
              backdrop-blur-sm
            "
          >
            <FaMapLocationDot className="mx-auto mb-3 h-6 w-6 text-white/70" />
            <p className="mb-1 text-xs tracking-wide uppercase text-white/60">
              {t.reservation.item.location.title}
            </p>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {t.reservation.item.location.road}
              <br />
              {t.reservation.item.location.subdistrict}
              <br />
              {t.reservation.item.location.province}
            </p>
          </div>

          {/* Nomor */}
          <div
            className="
              px-6 py-6
              bg-black/20
              border border-white/10
              hover:bg-white/5
              transition
            "
          >
            <BsTelephone className="mx-auto mb-3 h-6 w-6 text-white/70" />
            <p className="mb-1 text-xs tracking-wide uppercase text-white/60">
              {t.reservation.item.phone.title}
            </p>
            <p className="text-sm sm:text-base text-white/90">
              {t.reservation.item.phone.number}
            </p>
          </div>

          {/* Jam Buka (tall on desktop) */}
          <div
            className="
              px-6 py-6
              bg-black/30
              border border-white/10
              lg:row-span-1
            "
          >
            <FaRegClock className="mx-auto mb-3 h-6 w-6 text-white/70" />
            <p className="mb-1 text-xs tracking-wide uppercase text-white/60">
              {t.reservation.item.opening_hours.title}
            </p>
            <p className="text-sm sm:text-base text-white/90">
              {t.reservation.item.opening_hours.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

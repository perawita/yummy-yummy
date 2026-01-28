import Link from "next/link";

import { Dictionary } from "@/lib/i18n";
type Props = {
  t: Dictionary;
};

export default function Footer({t}: Props) {
  return (
    <footer className="relative bg-[#8B6A44] text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/textures/brick.png')] opacity-100 mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[url('/textures/grain.jpg')] opacity-10" />

      {/* Soft top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div
          className="
            flex flex-col items-center gap-10
            md:gap-14
          "
        >
          {/* Brand */}
          <div className="text-center">
            <h2
              className="
                text-xl md:text-2xl font-serif text-[#F4F1ED]
                mb-3
                [text-shadow:0_4px_10px_rgba(0,0,0,0.45)]
              "
            >
              {t.footer.title}
            </h2>

            <p className="text-xs md:text-sm text-[#E7E2DA]/80 tracking-wide max-w-sm mx-auto">
              {t.footer.description}
            </p>
          </div>

          {/* Social Links */}
          <div
            className="
              flex flex-col sm:flex-row
              items-center justify-center
              gap-6 sm:gap-10
              text-sm tracking-wide
            "
          >
            <Link
              href="https://www.instagram.com/explore/locations/106308655402540/yummy-yummy-food-drink/"
              target="_blank"
              className="
                relative text-[#D4CFC7] transition
                hover:text-[#F4F1ED]
                after:absolute after:-bottom-1 after:left-0
                after:h-px after:w-0 after:bg-[#F4F1ED]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {t.footer.item.link_button['1'].titl}
            </Link>

            <Link
              href="https://www.google.com/maps/place/Yummy+Yummy+Food+%26+Drink/"
              target="_blank"
              className="
                relative text-[#D4CFC7] transition
                hover:text-[#F4F1ED]
                after:absolute after:-bottom-1 after:left-0
                after:h-px after:w-0 after:bg-[#F4F1ED]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {t.footer.item.link_button['2'].titl}
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 opacity-60">
            <span className="h-px w-12 bg-white/30" />
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="h-px w-12 bg-white/30" />
          </div>

          {/* Copyright */}
          <p
            className="
              text-[11px] md:text-xs
              tracking-widest
              text-[#C2BDB6]
              text-center
            "
          >
            © {new Date().getFullYear()} Yummy Yummy Food & Drink · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

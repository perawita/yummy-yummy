import React from "react";
import Image from "next/image";

import { Dictionary } from "@/lib/i18n";
type Props = {
  t: Dictionary;
};

const images: string[] = [
  "/gallery/2022-06-21.jpg",
  "/gallery/2022-06-24.jpg",
  "/gallery/unnamed-2.jpg",
  "/gallery/unnamed-4.jpg",
  "/gallery/unnamed-5.jpg",
  "/gallery/unnamed-6.jpg",
  "/gallery/unnamed-7.jpg",
  "/gallery/unnamed-8.jpg",
  "/gallery/unnamed-9.jpg",
  "/gallery/unnamed-10.jpg",
  "/gallery/unnamed-11.jpg",
  "/gallery/unnamed-12.jpg",
  "/gallery/unnamed-13.jpg",
  "/gallery/unnamed-14.jpg",
  "/gallery/unnamed-15.jpg",
  "/gallery/unnamed-16.jpg",
  "/gallery/unnamed-17.jpg",
];

export default function Gallery({t}: Props) {
  return (
    <section
      id="gallery"
      className="relative bg-[#D6CFCB] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-24">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.4em] uppercase text-black/65">
            {t.gallery.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-black/90">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-black/65">
            {t.gallery.description}
          </p>
        </div>

        {/* === Dynamic Grid === */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {images.map((src, idx) => {
            const isWide = idx % 5 === 0;
            const isTall = idx % 3 === 0;

            return (
              <div
                key={idx}
                className={`
                  relative overflow-hidden
                  ${isWide ? "col-span-2" : ""}
                  ${isTall ? "h-72" : "h-48"}
                  md:col-span-1 md:h-60
                  lg:h-64
                `}
              >
                <Image
                  src={src}
                  alt={`gallery-${idx}`}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="
                    object-cover
                    transition-transform duration-500
                    hover:scale-110
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

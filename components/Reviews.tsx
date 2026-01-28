import React from "react";

const Review = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => (
  <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-lg">
    {/* chalk accent */}
    <span className="absolute -top-3 left-6 text-3xl text-neutral-300">
      “
    </span>

    <p className="mb-6 text-sm leading-relaxed text-neutral-700">
      {quote}
    </p>

    <cite className="text-xs tracking-wide text-olive-700 not-italic">
      — {author}
    </cite>
  </div>
);

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative bg-[#1f2a24] text-white overflow-hidden">
      {/* chalk grain */}
      <div className="absolute inset-0 bg-[url('/textures/grain.jpg')] opacity-[0.08] mix-blend-soft-light" />

      {/* soft top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.4em] uppercase text-olive-700">
            Guest Notes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900">
            Cerita dari Tamu Kami
          </h2>
        </div>

        {/* Rating */}
        <div className="mb-14 text-center">
          <p className="font-serif text-5xl text-neutral-900">
            4.7
          </p>
          <p className="mt-2 text-xs tracking-[0.35em] uppercase text-neutral-500">
            Based on Guest Reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Review
            quote="Tempatnya tenang dan cosy, cocok untuk bersantai di tengah Legian."
            author="Local Guest"
          />
          <Review
            quote="Pelayanan cepat dan ramah, membuat pengalaman makan terasa nyaman."
            author="Returning Customer"
          />
          <Review
            quote="Vintage vibe yang unik, dengan rasa makanan yang konsisten."
            author="Food Enthusiast"
          />
        </div>
      </div>
    </section>
  );
}

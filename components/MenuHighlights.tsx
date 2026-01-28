"use client";
import React from "react";
import Image from "next/image";

import { Dictionary } from "@/lib/i18n";

type Props = {
  t: Dictionary;
};

const MENU = {
  makanan: {
    "Indonesian Favorites": [
      "Nasi Goreng Kampung",
      "Nasi Goreng Seafood",
      "Nasi Goreng Ayam",
      "Nasi Goreng Vegetarian",
      "Mie Goreng",
      "Mie Rebus",
      "Bihun Goreng",
      "Kwetiau Goreng",
      "Ayam Goreng Mentega",
      "Ayam Asam Manis",
      "Ayam Saus Tiram",
      "Sapi Lada Hitam",
      "Sapi Saus Tiram",
      "Sapi Goreng Mentega",
      "Cap Cay",
      "Tumis Kangkung",
      "Tahu Goreng",
      "Tempe Goreng",
    ],
    "Western Main Course": [
      "Chicken Parmigiana",
      "Grilled Chicken Breast",
      "Chicken Cordon Bleu",
      "Chicken Steak",
      "Beef Steak",
      "Fish & Chips",
      "Spaghetti Bolognese",
      "Spaghetti Carbonara",
      "Spaghetti Aglio Olio",
    ],
    Burgers: [
      "Hamburger",
      "Cheeseburger",
      "Chicken Burger",
      "Fish Burger",
      "Bacon Cheese Burger",
      "Double Beef Burger",
    ],
    "From Our Grill": [
      "Beef Steak Black Pepper",
      "Beef Steak Mushroom Sauce",
      "Beef Steak BBQ Sauce",
      "Chicken Steak Black Pepper",
      "Chicken Steak Mushroom Sauce",
      "Chicken Steak BBQ Sauce",
      "Mix Grill",
    ],
    "Grill Fish": ["Grilled Snapper Fillet", "Grilled Tuna Fillet"],
  },
  minuman: {
    Coffee: ["Black Coffee", "Espresso", "Cappuccino", "Café Latte"],
    Tea: ["Hot Tea", "Iced Tea", "Lemon Tea"],
    SoftDrinks: ["Mineral Water", "Coca Cola", "Sprite", "Fanta"],
    Juice: ["Orange Juice", "Avocado Juice", "Mango Juice", "Pineapple Juice"],
  },
};

export default function MenuHighlights({t}: Props) {
  const drinkEntries = Object.entries(MENU.minuman);
  const foodEntries = Object.entries(MENU.makanan);

  const columns = 3;
  const chunk = (arr: any[]) =>
    Array.from({ length: columns }, (_, i) =>
      arr.filter((_, idx) => idx % columns === i),
    );

  const drinkChunked = chunk(drinkEntries);
  const foodChunked = chunk(foodEntries);

  return (
    <section
      id="menu"
      className="relative min-h-[100svh] overflow-hidden bg-[#0f0f0f] text-white"
    >
      {/* ===== TOP EFFECTS ===== */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-[18vh] md:h-[26vh] bg-[url('/textures/_crop.png')] bg-cover bg-bottom rotate-180" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,_rgba(255,255,255,0.07),_transparent_38%),radial-gradient(circle_at_82%_22%,_rgba(255,255,255,0.05),_transparent_42%),radial-gradient(circle_at_50%_68%,_rgba(255,255,255,0.04),_transparent_48%)]" />
      <div className="absolute inset-0 bg-[url('/textures/grain.jpg')] opacity-[0.12] mix-blend-soft-light" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 pt-28 md:pt-40 pb-28">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-white/65">
            {t.menu.title}
          </p>
        </div>

        {/* ================= MINUMAN ================= */}
        <div>
          {/* Title */}
          <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <Image
              src="/assets/tl.webp"
              alt=""
              width={62}
              height={62}
              className="opacity-70 sm:opacity-80 sm:translate-y-6"
            />
            <h3 className="text-lg sm:text-xl tracking-[0.3em] uppercase text-white/80">
              {t.menu.subtitle_1}
            </h3>
            <Image
              src="/assets/hatten.png"
              alt=""
              width={102}
              height={102}
              className="opacity-70 sm:opacity-80 sm:-translate-y-6 sm:translate-x-8"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 auto-rows-[minmax(80px,auto)]">
            {drinkChunked.map((col, i) => (
              <div key={i} className="space-y-10">
                {col.map(([subCat, items]) => (
                  <div
                    key={subCat}
                    className="px-4 py-3 hover:bg-white/5 transition"
                  >
                    <p className="mb-4 text-center text-xs tracking-widest uppercase text-white/60">
                      {subCat}
                    </p>
                    {items.map((item: string) => (
                      <div
                        key={item}
                        className="text-base sm:text-lg text-white/80 border-b border-dotted border-white/15 pb-1 hover:translate-x-1 transition"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAKANAN ================= */}
        <div className="mt-24">
          {/* Title */}
          <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-24">
            <Image
              src="/assets/nasgor.png"
              alt=""
              width={124}
              height={124}
              className="opacity-70 sm:opacity-80 w-20 h-20 sm:w-[124px] sm:h-[124px]"
            />
            <h3 className="text-lg sm:text-xl tracking-[0.3em] uppercase text-white/80">
              {t.menu.subtitle_2}
            </h3>
            <Image
              src="/assets/tacos.png"
              alt=""
              width={124}
              height={124}
              className="opacity-70 sm:opacity-80 w-20 h-20 sm:w-[124px] sm:h-[124px]"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 auto-rows-[minmax(80px,auto)]">
            {foodChunked.map((col, i) => (
              <div key={i} className="space-y-10">
                {col.map(([subCat, items]) => (
                  <div
                    key={subCat}
                    className="px-4 py-3 hover:bg-white/5 transition"
                  >
                    <p className="mb-4 text-center text-xs tracking-widest uppercase text-white/60">
                      {subCat}
                    </p>
                    {items.map((item: string) => (
                      <div
                        key={item}
                        className="text-base sm:text-lg text-white/80 border-b border-dotted border-white/15 pb-1 hover:translate-x-1 transition"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== BOTTOM EFFECTS ===== */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[30vh] bg-[url('/textures/_crop.png')] bg-cover bg-bottom [mask-image:linear-gradient(to_top,black_65%,transparent)]" />
    </section>
  );
}

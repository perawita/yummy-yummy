import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "@/app/globals.css";

import { getDictionary, Locale } from "@/lib/i18n";
import Header from "@/components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Yummy Yummy Food & Drink - Legian, Bali",
  description:
    "Casual, cosy, and trendy restaurant with a rustic-vintage and tropical modern vibe in Legian, Bali.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <html lang={lang} className="font-body">
      <body
        className={`${playfair.className} ${montserrat.className} bg-secondary-cream text-neutral-900 bg-[#0f0f0f]`}
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
        <Header t={t} />
        {children}
      </body>
    </html>
  );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import Facilities from "@/components/Facilities";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import { getDictionary, Locale, dictionaries } from "@/lib/i18n";

export async function generateStaticParams() {
  return Object.keys(dictionaries).map((lang) => ({
    lang,
  }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = getDictionary(lang);

  return (
    <div className="font-mono">
      <Hero t={t} />
      <main className="leading-relaxed">
        <About t={t} />
        <MenuHighlights t={t} />
        <Reservation t={t} />
        <Facilities t={t} />
        <Gallery t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

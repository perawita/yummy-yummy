import { Dictionary } from "@/lib/i18n";
type Props = {
  t: Dictionary;
};

const Facility = ({ title, desc }: { title: string; desc: string }) => (
  <div className="relative group w-full h-full border-neutral-200 bg-neutral-100/60 p-6 text-center transition overflow-hidden">
    {/* === Background layers === */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,_rgba(255,255,255,0.07),_transparent_38%),radial-gradient(circle_at_82%_22%,_rgba(255,255,255,0.05),_transparent_42%),radial-gradient(circle_at_50%_68%,_rgba(255,255,255,0.04),_transparent_48%)] pointer-events-none" />
    <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)] pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45 pointer-events-none" />
    <div className="absolute inset-0 bg-[url('/textures/grain.jpg')] opacity-[0.12] mix-blend-soft-light pointer-events-none" />

    {/* === Content === */}
    <div className="relative z-10 flex w-full h-full">
      <div
        className="flex flex-col justify-center space-y-2 
                      items-center md:items-end md:ml-auto text-center md:text-right"
      >
        {/* Title */}
        <h4 className="font-serif text-base tracking-wide text-black/95">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm leading-relaxed text-black/65">{desc}</p>
      </div>
    </div>
  </div>
);

export default function Facilities({ t }: Props) {
  return (
    <section
      id="facilities"
      className="bg-[#202624] text-white overflow-hidden"
    >
      {/* chalk grain */}
      <div className="absolute inset-0 bg-[url('/textures/grain.jpg')] opacity-[0.08] mix-blend-soft-light" />

      {/* soft top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.4em] uppercase text-white/65">
            {t.facilities.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white-90">
            {t.facilities.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-white/65">
            {t.facilities.description}
          </p>
        </div>


        {/* Facilities Grid */}
        <div
          className="
            grid gap-4 auto-rows-[minmax(120px,auto)]
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5 lg:grid-rows-2
          "
        >
          {/* HERO */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <Facility
              title={t.facilities.item["1"].title}
              desc={t.facilities.item["1"].description}
            />
          </div>

          {/* TALL / ANCHOR */}
          <div className="row-span-2 md:row-span-1 lg:row-span-2 lg:col-start-5">
            <Facility
              title={t.facilities.item["2"].title}
              desc={t.facilities.item["2"].description}
            />
          </div>

          {/* NORMAL */}
          <div className="md:col-span-1 lg:col-start-4 lg:row-start-1">
            <Facility
              title={t.facilities.item["3"].title}
              desc={t.facilities.item["3"].description}
            />
          </div>

          {/* WIDE */}
          <div className="col-span-2 md:col-span-2 lg:col-start-1 lg:row-start-2">
            <Facility
              title={t.facilities.item["4"].title}
              desc={t.facilities.item["4"].description}
            />
          </div>

          {/* NORMAL */}
          <div className="lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <Facility
              title={t.facilities.item["5"].title}
              desc={t.facilities.item["5"].description}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

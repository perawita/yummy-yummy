"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dictionary } from "@/lib/i18n";

type Props = {
  t: Dictionary;
};

export default function Header({ t }: Props) {
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1];
  const otherLocale = currentLocale === "en" ? "id" : "en";
  const otherLocalePath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Language Switcher */}
          <div className="flex items-center gap-3 rounded-full">
            <span className="text-sm text-neutral-600 font-body">
              {currentLocale.toUpperCase()}
            </span>
            <div className="w-px h-6 bg-neutral-300"></div>
            <Link
              href={otherLocalePath}
              className="text-sm font-body text-white/90 hover:text-primary-burgundy transition duration-300"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
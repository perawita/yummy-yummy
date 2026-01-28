import id from "@/locales/id.json";
import en from "@/locales/en.json";

export const dictionaries = {
  id,
  en,
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof id;

export const defaultLocale: Locale = "en";

export function getDictionary(lang: string): Dictionary {
  if (lang in dictionaries) {
    return dictionaries[lang as Locale];
  }

  return dictionaries[defaultLocale];
}

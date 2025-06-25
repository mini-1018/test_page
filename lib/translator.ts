export type Locale = "ko" | "en";

export function createTranslator(translations: any, locale: Locale = "ko") {
  return {
    t: (key: string): string => {
      const keys = key.split(".");
      let value: any = translations[locale];

      for (const k of keys) {
        value = value?.[k];
      }

      return value || key;
    },
  };
}

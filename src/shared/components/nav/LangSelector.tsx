"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@lib/translator";

export default function LangSelector({ shouldShowDarkTheme = true }: { shouldShowDarkTheme?: boolean } = {}) {
  const params = useParams();
  const pathname = usePathname();
  const locale = (params?.locale as Locale) || "ko";

  const createLanguageLink = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(ko|en)/, "") || "/";
    return `/${newLocale}${pathWithoutLocale}`;
  };

  const buttonStyles = (targetLocale: string) => {
    const baseStyles = "w-[57px] w-[23px] text-[16px] rounded-xl transition-colors flex items-center justify-center";

    if (locale === targetLocale) {
      if (shouldShowDarkTheme) {
        return `${baseStyles} text-gray-600 border border-gray-600`;
      }
      return `${baseStyles} text-white border border-white`;
    }

    if (shouldShowDarkTheme) {
      return `${baseStyles} text-gray-600 hover:text-blue-500`;
    }

    return `${baseStyles} text-white hover:text-blue-300`;
  };

  return (
    <div className="flex items-center">
      <div className={buttonStyles("ko")}>
        <Link href={createLanguageLink("ko")}>KO</Link>
      </div>
      <div className={buttonStyles("en")}>
        <Link href={createLanguageLink("en")}>EN</Link>
      </div>
    </div>
  );
}

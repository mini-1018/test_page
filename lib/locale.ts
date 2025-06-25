import { headers } from "next/headers";
import type { Locale } from "./translator.js";

export async function getLocale(): Promise<Locale> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/ko")) return "ko";

  const acceptLanguage = headersList.get("accept-language");
  if (acceptLanguage?.includes("en")) return "en";

  return "ko";
}

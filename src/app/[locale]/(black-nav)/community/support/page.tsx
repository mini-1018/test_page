import Support from "./support";
import { Translation } from "@src/types/translation.type";
import { getSupportTranslations } from "@lib/translations/support.trans";
import { Metadata } from "next";
import { Locale } from "@lib/translator";

interface SupportPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function SupportPage({ params }: { params: Promise<Translation> }) {
  const { locale } = await params;
  const { t } = getSupportTranslations(locale);

  return (
    <div className="max-w-6xl mx-auto pb-32 pt-32">
      <h1 className="sr-only">{t("title")}</h1>
      <Support locale={locale} />
    </div>
  );
}

export async function generateMetadata({ params }: SupportPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getSupportTranslations(locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}/support`,
      languages: {
        ko: "/ko/support",
        en: "/en/support",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}/support`,
      siteName: t("metaData.openGraph.siteName"),
      images: [
        {
          url: t("metaData.image"),
          width: 1200,
          height: 630,
          alt: t("metaData.title"),
        },
      ],
      locale: t("metaData.openGraph.locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaData.title"),
      description: t("metaData.description"),
      images: [t("metaData.image")],
    },
  };
}

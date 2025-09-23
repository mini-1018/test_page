import Downloads, { DownloadPost } from "./Downloads";
import type { Locale } from "@lib/translator";
import { getDownloadsTranslations } from "@lib/translations/downloads.trans";
import { Metadata } from "next";

interface DownloadsPageProps {
  params: Promise<{ locale: Locale }>;
}

const downloadsPosts: DownloadPost[] = [
  {
    id: 1,
    title: "코다 환경제품 카다로그",
    author: "코다",
    date: "2025-05-25",
    fileSize: "24.8MB",
    downloadCount: 89,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
];

export default async function DownloadsPage({ params }: DownloadsPageProps) {
  const { locale } = await params;
  const { t } = getDownloadsTranslations(locale);

  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <h1 className="sr-only">{t("title")}</h1>
      <Downloads posts={downloadsPosts} locale={locale} />
    </main>
  );
}

export async function generateMetadata({ params }: DownloadsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getDownloadsTranslations(locale as Locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}/downloads`,
      languages: {
        ko: "/ko/downloads",
        en: "/en/downloads",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}/downloads`,
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

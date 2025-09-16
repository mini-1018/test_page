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
    title: "무인회수기(압축) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-25",
    fileSize: "2.4MB",
    downloadCount: 89,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 2,
    title: "무인회수기(파쇄) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-24",
    fileSize: "15.7MB",
    downloadCount: 67,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 3,
    title: "무인회수기(압축) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-22",
    fileSize: "1.8MB",
    downloadCount: 124,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 4,
    title: "차량용 RFID 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-20",
    fileSize: "8.3MB",
    downloadCount: 45,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 5,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 6,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 7,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 8,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "/images/brand/coda_brand_s1.webp",
  },
  {
    id: 9,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
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

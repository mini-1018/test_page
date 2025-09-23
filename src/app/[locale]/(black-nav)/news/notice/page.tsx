import Notice, { NoticeType } from "./Notice";
import type { Locale } from "@lib/translator";
import { getNoticeTranslations } from "@lib/translations/notice.trans";
import type { Metadata } from "next";

interface NoticePageProps {
  params: Promise<{ locale: Locale }>;
}

const noticePosts: NoticeType[] = [
];

export default async function NoticePage({ params }: NoticePageProps) {
  const { locale } = await params;
  const { t } = getNoticeTranslations(locale);

  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <h1 className="sr-only">{t("title")}</h1>
      <Notice notices={noticePosts} locale={locale} />
    </main>
  );
}

export async function generateMetadata({ params }: NoticePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getNoticeTranslations(locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}/notice`,
      languages: {
        ko: "/ko/notice",
        en: "/en/notice",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}/notice`,
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

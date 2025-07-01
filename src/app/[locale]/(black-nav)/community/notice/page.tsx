import Notice, { NoticeType } from "./Notice";
import type { Locale } from "@lib/translator";
import { getNoticeTranslations } from "@lib/translations/notice.trans";
import type { Metadata } from "next";

interface NoticePageProps {
  params: Promise<{ locale: Locale }>;
}

const noticePosts: NoticeType[] = [
  {
    id: 1,
    title: "이벤트",
    author: "코다",
    date: "2025-05-25",
    category: "이벤트",
    content: "",
  },
  {
    id: 2,
    title: "전시회 안내",
    author: "코다",
    date: "2025-05-24",
    category: "전시회",
    content: "",
  },
  {
    id: 3,
    title: "시스템 점검 안내",
    author: "코다",
    date: "2025-05-22",
    category: "시스템 점검",
    content: "",
  },
  {
    id: 4,
    title: "코다 어플리케이션 출시",
    author: "코다",
    date: "2025-05-20",
    category: "출시",
    content: "",
  },
  {
    id: 5,
    title: "고객센터 운영시간 변경 안내",
    author: "코다",
    date: "2025-05-18",
    category: "변경",
    content: "",
  },
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

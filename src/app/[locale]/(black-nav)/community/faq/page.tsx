import FAQ, { FaqPost } from "./FAQ";
import type { Locale } from "@lib/translator";
import { getFaqTranslations } from "@lib/translations/faq.trans";
import type { Metadata } from "next";

interface FaqPageProps {
  params: Promise<{ locale: Locale }>;
}

const faqPosts: FaqPost[] = [
  {
    id: 1,
    title: "제품 매뉴얼과 카탈로그는 어디에서 확인할 수 있나요?",
    category: "다운로드",
    content: "상단 메뉴의 다운로드에서 제품 매뉴얼과 카탈로그를 확인하실 수 있습니다.",
  },
  {
    id: 2,
    title: "제품 구매 문의는 어떻게 해야 하나요?",
    category: "구매문의",
    content: "031-852-4070으로 전화 주시거나, 상단 메뉴의 고객문의에서 1:1 문의를 남겨주세요.",
  },
  {
    id: 3,
    title: "제품 고장 관련 문의는 어떻게 하면 되나요?",
    category: "A/S",
    content: "고장 증상과 사진을 첨부하여 고객문의를 작성 해주시면 빠르게 답변 드리겠습니다.",
  },
  {
    id: 4,
    title: "무인 회수기의 1인 1일 투입 제한은 어떻게 되나요?",
    category: "이용문의",
    content: "지자체 정책에 따라 다르며 일반적으로 30개 ~ 100개까지 투입이 가능합니다.",
  },
  {
    id: 5,
    title: "음식물 종량기에서 카드 인식이 되지 않습니다.",
    category: "음식물 종량기",
    content: "031-852-4070으로 전화 주시거나, 상단 메뉴의 고객문의에서 1:1 문의를 남겨주세요.",
  },
  {
    id: 6,
    title: "차량용 RFID 음식물 회수 결제 시스템 가입이 되지 않았습니다.",
    category: "차량용 RFID\n음식물 회수 결제 시스템",
    content: "031-852-4070으로 전화 주시거나, 상단 메뉴의 고객문의에서 1:1 문의를 남겨주세요.",
  },
  {
    id: 7,
    title: "차량용 RFID 음식물 회수 결제 시스템에 카드 등록이 되지 않았습니다.",
    category: "차량용 RFID\n음식물 회수 결제 시스템",
    content: "031-852-4070으로 전화 주시거나, 상단 메뉴의 고객문의에서 1:1 문의를 남겨주세요.",
  },
];

export default async function FAQPage({ params }: FaqPageProps) {
  const { locale } = await params;
  const { t } = getFaqTranslations(locale);
  return (
    <div>
      <h1 className="sr-only">{t("title")}</h1>
      <FAQ posts={faqPosts} locale={locale} />
    </div>
  );
}

export async function generateMetadata({ params }: FaqPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getFaqTranslations(locale as Locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}/community/faq`,
      languages: {
        ko: "/ko/community/faq",
        en: "/en/community/faq",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}/community/faq`,
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

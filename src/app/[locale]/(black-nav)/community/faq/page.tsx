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
    title: "회원가입은 어떻게 하나요?",
    category: "회원/로그인",
    content: "홈페이지 우측 상단의 회원가입 버튼을 클릭 후 안내에 따라 정보를 입력하시면 됩니다.",
  },
  {
    id: 2,
    title: "비밀번호를 잊어버렸어요.",
    category: "회원/로그인",
    content: "로그인 페이지에서 '비밀번호 찾기'를 클릭해 안내에 따라 비밀번호를 재설정하세요.",
  },
  {
    id: 3,
    title: "다운로드 파일은 어떻게 다운로드하나요?",
    category: "다운로드",
    content: "다운로드 게시판에서 원하는 파일을 클릭하면 다운로드가 시작됩니다.",
  },
  {
    id: 4,
    title: "문의는 어디서 할 수 있나요?",
    category: "고객지원",
    content: "고객문의 메뉴에서 1:1 문의를 남기실 수 있습니다.",
  },
  {
    id: 5,
    title: "이벤트 당첨자 발표는 어디서 확인하나요?",
    category: "이벤트",
    content: "공지사항 게시판에서 이벤트 당첨자 발표를 확인하실 수 있습니다.",
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

import { createTranslator, Locale } from "@lib/translator";
import metaData from "@src/shared/metaData/metaData";

export const faqTranslations = {
  ko: {
    title: "자주 묻는 질문",
    // 헤더 섹션
    header: {
      logoAlt: "코다(CODA) 고래 로고",
      title: "자주 묻는 질문",
      description: "궁금한 점을 빠르게 해결하세요",
    },

    // 검색 섹션
    search: {
      placeholder: "검색어를 입력하세요...",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "검색결과가 없습니다",
      description: "다른 검색어로 다시 시도해보세요",
    },

    // 1:1 문의 섹션
    support: {
      text: "원하시는 답변이 없으신가요?",
      linkText: "[1:1 고객문의]",
    },

    metaData: {
      title: "코다(CODA) 자주 묻는 질문",
      description: "코다(CODA)의 자주 묻는 질문을 확인하세요.",
      keywords: "코다, CODA, 자주 묻는 질문, FAQ",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "Frequently Asked Questions",
    // 헤더 섹션
    header: {
      logoAlt: "CODA Whale Logo",
      title: "Frequently Asked Questions",
      description: "Quickly resolve your questions",
    },

    // 검색 섹션
    search: {
      placeholder: "Enter search terms...",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "No search results found",
      description: "Please try again with different search terms",
    },

    // 1:1 문의 섹션
    support: {
      text: "Can't find the answer you're looking for?",
      linkText: "[1:1 Customer Support]",
    },

    metaData: {
      title: "CODA Frequently Asked Questions",
      description: "Check out frequently asked questions about CODA. Find quick answers to common questions about our reverse vending machines and food waste meters.",
      keywords: "CODA, FAQ, frequently asked questions, customer support, help, troubleshooting",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getFaqTranslations(locale: Locale = "ko") {
  return createTranslator(faqTranslations, locale);
}

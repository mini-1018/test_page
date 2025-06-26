// lib/translations/news.ts
import { createTranslator, Locale } from "@lib/translator";

export const newsTranslations = {
  ko: {
    // 헤더 섹션
    header: {
      logoAlt: "코다(CODA) 고래 로고",
      title: "소식",
      description: "코다(CODA)의 최신 소식을 확인하세요",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "등록된 소식이 없습니다",
      description: "새로운 소식이 등록되면 여기에 표시됩니다",
    },
  },
  en: {
    // 헤더 섹션
    header: {
      logoAlt: "CODA Whale Logo",
      title: "News",
      description: "Check out the latest news from CODA",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "No news registered",
      description: "New news will be displayed here when registered",
    },
  },
} as const;

export function getNewsTranslations(locale: Locale = "ko") {
  return createTranslator(newsTranslations, locale);
}

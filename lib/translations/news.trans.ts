// lib/translations/news.ts
import { createTranslator, Locale } from "@lib/translator";
import metaData from "@src/shared/metaData/metaData";

export const newsTranslations = {
  ko: {
    title: "코다(CODA) 소식",
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
    metaData: {
      title: "코다(CODA) 소식",
      description: "코다(CODA)의 소식을 확인하세요.",
      keywords: "코다, CODA, 소식, 뉴스, 무인회수기, 음식물 종량기",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "CODA News",
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
    metaData: {
      title: "CODA News",
      description: "Check out information about CODA's news.",
      keywords: "CODA, news, reverse vending machine, food waste billing system, events, updates",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getNewsTranslations(locale: Locale = "ko") {
  return createTranslator(newsTranslations, locale);
}

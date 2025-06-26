// lib/translations/downloads.ts
import { createTranslator, Locale } from "@lib/translator";

export const downloadsTranslations = {
  ko: {
    // 헤더 섹션
    header: {
      logoAlt: "코다(CODA) 고래 로고",
      title: "다운로드",
      description: "코다(CODA) 제품 카탈로그를 다운로드 하세요",
    },

    // 검색 섹션
    search: {
      placeholder: "검색어를 입력하세요...",
    },

    // 파일 정보
    file: {
      downloads: "다운로드",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "검색결과가 없습니다",
      description: "다른 검색어로 다시 시도해보세요",
    },
  },
  en: {
    // 헤더 섹션
    header: {
      logoAlt: "CODA Whale Logo",
      title: "Downloads",
      description: "Download CODA product catalogs",
    },

    // 검색 섹션
    search: {
      placeholder: "Enter search terms...",
    },

    // 파일 정보
    file: {
      downloads: "Downloads",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "No search results found",
      description: "Please try again with different search terms",
    },
  },
} as const;

export function getDownloadsTranslations(locale: Locale = "ko") {
  return createTranslator(downloadsTranslations, locale);
}

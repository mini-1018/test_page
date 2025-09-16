// lib/translations/downloads.ts
import { createTranslator, Locale } from "@lib/translator";

export const downloadsTranslations = {
  ko: {
    title: "코다(CODA) 다운로드",
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

    metaData: {
      title: "코다(CODA) 다운로드",
      description: "코다(CODA) 제품 카탈로그와 매뉴얼을 다운로드 하세요.",
      keywords: "코다, CODA, 다운로드, 카탈로그, 제품 정보, 매뉴얼",
      image: "/images/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "CODA Downloads",
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

    metaData: {
      title: "CODA Downloads",
      description: "Download CODA product catalogs and manuals. Get comprehensive information about reverse vending machines and food waste billing system.",
      keywords: "CODA, downloads, catalog, product information, manual, brochure, specifications",
      image: "/images/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getDownloadsTranslations(locale: Locale = "ko") {
  return createTranslator(downloadsTranslations, locale);
}

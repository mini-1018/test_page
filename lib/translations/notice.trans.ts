// lib/translations/notice.ts
import { createTranslator, Locale } from "@lib/translator";

export const noticeTranslations = {
  ko: {
    title: "코다(CODA) 공지사항",
    // 헤더 섹션
    header: {
      logoAlt: "코다(CODA) 고래 로고",
      title: "공지사항",
      description: "중요한 공지사항과 이벤트를 확인하세요",
    },

    // 검색 섹션
    search: {
      placeholder: "검색어를 입력하세요...",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "공지사항이 없습니다",
    },

    metaData: {
      title: "코다(CODA) 공지사항",
      description: "코다(CODA)의 무인회수기, 음식물 종량기 등 다양한 제품에 대한 공지사항과 이벤트 소식을 확인하세요.",
      keywords: "코다, CODA, 공지사항, 이벤트, 무인회수기, 음식물 종량기",
      image: "/images/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "CODA Notice",
    // 헤더 섹션
    header: {
      logoAlt: "CODA Whale Logo",
      title: "Notice",
      description: "Check important notices and events",
    },

    // 검색 섹션
    search: {
      placeholder: "Enter search terms...",
    },

    // 빈 상태 메시지
    emptyState: {
      title: "No notices available",
      description: "New notices will be displayed here when registered",
    },

    metaData: {
      title: "CODA Notice",
      description: "Check out important notices and event information about CODA's various products including reverse vending machines and food waste billing system.",
      keywords: "CODA, notice, announcement, events, reverse vending machine, food waste billing system",
      image: "/images/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getNoticeTranslations(locale: Locale = "ko") {
  return createTranslator(noticeTranslations, locale);
}

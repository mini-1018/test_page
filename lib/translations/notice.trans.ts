// lib/translations/notice.ts
import { createTranslator, Locale } from "@lib/translator";

export const noticeTranslations = {
  ko: {
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
      description: "새로운 공지사항이 등록되면 여기에 표시됩니다",
    },
  },
  en: {
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
  },
} as const;

export function getNoticeTranslations(locale: Locale = "ko") {
  return createTranslator(noticeTranslations, locale);
}

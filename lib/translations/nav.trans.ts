import { createTranslator, Locale } from "@lib/translator";

export const navigationTranslations = {
  ko: {
    brand: "브랜드",
    products: "제품",
    news: "소식",
    community: "커뮤니티",
    subMenu: {
      brand: "브랜드",
      ReverseVendingMachine: "무인회수기",
      rfid: "음식물 수거 차량\nRFID 결제 시스템",
      FoodWasteBillingSystem: "음식물종량기",
      news: "코다뉴스",
      notice: "공지사항",
      faq: "FAQ",
      support: "고객문의",
      downloads: "다운로드",
    },
  },
  en: {
    brand: "Brand",
    products: "Products",
    news: "News",
    community: "Community",
    subMenu: {
      brand: "Brand",
      ReverseVendingMachine: "Reverse Vending Machine",
      rfid: "Vehicle food waste billing system",
      FoodWasteBillingSystem: "Food waste billing system",
      news: "News",
      notice: "Notice",
      faq: "FAQ",
      support: "Support",
      downloads: "Downloads",
    },
  },
} as const;

export function getNavigationTranslations(locale: Locale = "ko") {
  return createTranslator(navigationTranslations, locale);
}

import { createTranslator, Locale } from "@lib/translator";

export const footerTranslations = {
  ko: {
    logo: {
      alt: "코다(CODA) 로고 화이트",
    },
    links: {
      brandIntro: "브랜드소개",
      terms: "서비스 이용약관",
      privacy: "개인정보 처리방침",
    },
    company: {
      address: "경기도 의정부시 산단로 68번길 29 | 031-852-4070",
      copyright: "© CODA. ALL RIGHTS RESERVED",
    },
    contact: {
      title: "담당자 연락처",
      manager: "장대웅 팀장 : 010-9282-4070",
    },
    social: {
      youtube: "지테크인터내셔날 유튜브",
      instagram: "지테크인터내셔날 인스타그램",
      blog: "지테크인터내셔날 네이버 블로그",
      phone: "담당자 연락처",
      email: "담당자 이메일",
    },
    sitemap: {
      brand: {
        title: "브랜드",
        items: [{ name: "브랜드", link: "/brand" }],
      },
      products: {
        title: "제품",
        items: [
          { name: "무인회수기", link: "/products/recycle-machines" },
          { name: "차량용RFID", link: "/products/rfid" },
          { name: "음식물종량기", link: "/products/food-waste-disposal" },
        ],
      },
      news: {
        title: "소식",
        items: [{ name: "소식", link: "/news" }],
      },
      community: {
        title: "커뮤니티",
        items: [
          { name: "공지사항", link: "/community/notice" },
          { name: "FAQ", link: "/community/faq" },
          { name: "고객문의", link: "/community/support" },
          { name: "다운로드", link: "/community/downloads" },
        ],
      },
    },
  },
  en: {
    logo: {
      alt: "CODA Logo White",
    },
    links: {
      brandIntro: "Brand Introduction",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
    company: {
      address: "29, Sandan-ro 68beon-gil, Uijeongbu-si, Gyeonggi-do | 031-852-4070",
      copyright: "© CODA. ALL RIGHTS RESERVED",
    },
    contact: {
      title: "Contact Information",
      manager: "Team Leader Jang Dae-woong : 010-9282-4070",
    },
    social: {
      youtube: "Gtech International YouTube",
      instagram: "Gtech International Instagram",
      blog: "Gtech International Naver Blog",
      phone: "Contact Phone",
      email: "Contact Email",
    },
    sitemap: {
      brand: {
        title: "Brand",
        items: [{ name: "Brand", link: "/brand" }],
      },
      products: {
        title: "Products",
        items: [
          { name: "Recycle Machines", link: "/products/recycle-machines" },
          { name: "Vehicle RFID", link: "/products/rfid" },
          { name: "Food Waste Scale", link: "/products/food-waste-disposal" },
        ],
      },
      news: {
        title: "News",
        items: [{ name: "News", link: "/news" }],
      },
      community: {
        title: "Community",
        items: [
          { name: "Notice", link: "/community/notice" },
          { name: "FAQ", link: "/community/faq" },
          { name: "Support", link: "/community/support" },
          { name: "Downloads", link: "/community/downloads" },
        ],
      },
    },
  },
} as const;

export function getFooterTranslations(locale: Locale = "ko") {
  return createTranslator(footerTranslations, locale);
}

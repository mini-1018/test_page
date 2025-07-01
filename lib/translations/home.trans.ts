import { createTranslator, Locale } from "@lib/translator";

export const homeTranslations = {
  ko: {
    title: "코다(CODA) 메인페이지",
    mainImage: "코다(CODA) 메인 이미지",
    logoAlt: "코다(CODA) 로고",
    section2: {
      subtitle: "바다 속 향유고래 지킴이",
      title: "자원순환 CAN+PET 무인회수기",
    },
    section3: {
      block1: {
        number: "01",
        title: "지구를 지키는 작은 시작\nCODA의 순환 이야기",
        description: "매일 버려지는 페트병과 캔을 깨끗한\n자원으로 만드는 선별/수집 시스템과 물류 인프라를\n구축하여 여러분의 작은 습관으로 지구를\n지키는데 함께 합니다.",
        imageAlt: "코다(CODA) 지구를 지키는 작은 시작",
      },
      block2: {
        number: "02",
        title: "건강한 지구를 위한 활동\nCODA와 함께 해주세요.",
        description: "버려지는 페트병에 바다생물이\n아프지 않도록 나아가 다음 세대들의\n건강한 삶을 지킬 수 있도록\nCODA와 함께 해주세요.",
        imageAlt: "코다(CODA) 건강한 지구를 위한 활동",
      },
    },
    section4: {
      subtitle: "제품소개",
      title: "CODA와 함께\n환경을 지켜주세요.",
      products: {
        ReverseVendingMachine: "무인회수기",
        rfid: "차량용RFID",
        FoodWasteBillingSystem: "음식물종량기",
        learnMore: "CODA 더 알아보기",
      },
    },
    metaData: {
      title: "코다(CODA)",
      description: "코다(CODA)의 무인회수기로 재활용을 더 쉽게, RFID 기술 기반 음식물종량기로 폐기물을 스마트하게 관리하세요. 개인, 기업, 공공기관 모두를 위한 맞춤형 친환경 파트너로 지속가능한 미래를 함께 만들어갑니다.",
      keywords: "코다, CODA, 재활용, 친환경, 무인회수기, 음식물종량기, RFID",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "CODA Main Page",
    mainImage: "CODA Main Image",
    logoAlt: "CODA Logo",
    section2: {
      subtitle: "Ocean Sperm Whale Guardian",
      title: "Resource Circulation CAN+PET Reverse Vending Machine",
    },
    section3: {
      block1: {
        number: "01",
        title: "A Small Start to Save Earth\nCODA's Circulation Story",
        description: "Building sorting/collection systems and logistics infrastructure\nthat turn daily discarded PET bottles and cans into clean resources,\njoining together to protect the earth\nthrough your small habits.",
        imageAlt: "CODA A Small Start to Save Earth",
      },
      block2: {
        number: "02",
        title: "Activities for a Healthy Earth\nPlease join us with CODA.",
        description: "To prevent marine life from being harmed\nby discarded PET bottles and to protect\nthe healthy lives of future generations,\nplease join us with CODA.",
        imageAlt: "CODA Activities for a Healthy Earth",
      },
    },
    section4: {
      subtitle: "Product Introduction",
      title: "Together with CODA\nLet's protect the environment.",
      products: {
        ReverseVendingMachine: "Reverse Vending Machine",
        rfid: "Vehicle food waste billing system",
        FoodWasteBillingSystem: "Food waste billing system",
        learnMore: "Learn More About CODA",
      },
    },

    metaData: {
      title: "CODA",
      description: "Make recycling easier with CODA's reverse vending machines and smartly manage waste with RFID-based food waste meters. As a customized eco-friendly partner for individuals, businesses, and public institutions, we create a sustainable future together.",
      keywords: "CODA, recycling, eco-friendly, reverse vending machine, food waste meter, RFID, sustainability",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getHomeTranslations(locale: Locale = "ko") {
  return createTranslator(homeTranslations, locale);
}

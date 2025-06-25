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
        recycleMachines: "무인회수기",
        rfid: "차량용RFID",
        foodWasteDisposal: "음식물종량기",
        learnMore: "CODA 더 알아보기",
      },
    },
  },
  en: {
    title: "CODA Main Page",
    mainImage: "CODA Main Image",
    logoAlt: "CODA Logo",
    section2: {
      subtitle: "Ocean Sperm Whale Guardian",
      title: "Resource Circulation CAN+PET Unmanned Collection Machine",
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
        recycleMachines: "Unmanned Collection Machine",
        rfid: "Vehicle RFID",
        foodWasteDisposal: "Food Waste Scale",
        learnMore: "Learn More About CODA",
      },
    },
  },
} as const;

export function getHomeTranslations(locale: Locale = "ko") {
  return createTranslator(homeTranslations, locale);
}

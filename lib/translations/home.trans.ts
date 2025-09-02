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
      products: [
        {
          title: "재활용품 무인회수기",
          description: "CODA만의 독자적인 인공지능을 통한\n자원 순환 회수 프로세스",
        },
        {
          title: "재활용품 무인회수기\n(ESG전용)",
          description: "탄소 배출 감축 전용",
        },
        {
          title: "음식물 종량기",
          description: "RFID를 이용해 ID를 식별하여\n배출량에 따라 요금을 부과",
        },
        {
          title: "음식물 수거 차량\n RFID 결제 시스템",
          description: "RFID를 이용해 업소에서 발생하는\n배출량에 따라 결제되는 선·후불 시스템",
        },
        {
          title: "재활용 IoT 저울",
          description: "품목별 무게를 측정하고 실시간으로 서버에\n전송·저장할 수 있는 지능형 계측기",
        },
      ],
      brandButton: "CODA 더 알아보기",
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
      subtitle: "The Guardian of Sperm Whale",
      title: "Resource Circulation CAN+PET Reverse Vending Machine",
    },
    section3: {
      block1: {
        number: "01",
        title: "A Small Start to Save Earth\nCODA's Circulation Story",
        description: "Building sorting/collection systems and logistics infrastructure\nthat turn daily discarded PET bottles and CAN into clean resources,\njoining together to protect the earth\nthrough your small habits.",
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
      products: [
        {
          title: "Reverse Vending Machine",
          description: "Resource circulation collection process\nthrough CODA's unique artificial intelligence",
        },
        {
          title: "Reverse Vending Machine\n(ESG)",
          description: "Dedicated to carbon emission reduction",
        },
        {
          title: "Food Waste Billing System",
          description: "Using RFID to identify ID and charge\naccording to discharge amount",
        },
        {
          title: "Vehicle Food Waste\nRFID Payment System",
          description: "Pre/post payment system charged according\nto discharge amount from businesses using RFID",
        },
        {
          title: "IoT Recycling Scale",
          description: "Intelligent measuring device that can measure weight by item and transmit/store to server in real time",
        },
      ],
      brandButton: "Learn More About CODA",
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

import { createTranslator, Locale } from "@lib/translator";
import metaData from "@src/shared/metaData/metaData";

export const foodWasteBillingSystemTranslations = {
  ko: {
    title: "코다(CODA) RFID 음식물 종량기",
    description: "우수 발명품 선정 및 조달청 우수제품으로 선정된 코다(CODA) RFID 음식물 종량기입니다. 고장 진단 기능과 신용카드 선불제를 지원합니다.",

    // 헤더 이미지
    header: {
      mainAlt: "우수 발명품 및 조달청 우수제품 선정 음식물 종량기",
      creditCardAlt: "신용카드 사용가능 선불제 장비 - 최초인증 음식물 종량기",
      finalAlt: "코다(CODA) 음식물 종량기 - RFID기반",
    },

    animation: {
      title1: "전국 지자체가 선택한",
      title2: "검증된 음식물 종량기",
    },

    // RFID 기반 섹션
    rfidBased: {
      iconAlt: "코다(CODA) 음식물 종량기 이미지",
      title1: "RFID 기반",
      title2: "음식물 종량기",
      description: "우수 발명품 선정, 우선 구매 추천\n무선주파수를 이용해 ID 식별하는 시스템으로\n배출량에 따라 요금 부과 방식",
    },

    // 고장 진단 기능 섹션
    faultDiagnosis: {
      title: "고장 진단 기능 구비한\n음식물류폐기물 종량관리 시스템",
      subtitle: "특허 제 10-150711호 성능인증 제 15-1354호 (중소기업청 인증)",
      bottomText: "배출수수료 누락방지 시스템 적용 / 손끼임 방지 / 오물 투척 예방 제품",
      alt: "고장 진단 기능 구비한 음식물류폐기물 종량관리 시스템",
    },

    // 우수제품 지정증서 섹션
    certificate: {
      alt: "코다(CODA) 음식물 종량기 우수제품지정증서, 우수발명품 우선구매추천 확인서",
    },

    // 제품 특징 섹션들
    features: {
      canopyDisplay: {
        title: "캐노피 내부, 눈높이 디스플레이 적용",
        subtitle: "인체 공학 고려한 키패드가 비와 음식물이 묻지 않고 청결 유지",
        description: "오염, 연분, 동계 결로 현상 대비한 사용편리성",
        alt: "코다(CODA) 음식물 종량기 - 편리한 디스플레이",
      },
      inHouseDisplay: {
        title: "자사 디스플레이 128 x 64 그래픽 적용",
        subtitle: "한글 8줄 그래픽 및 백라이팅 기능 추가된 선명한 대형 LCD",
        description: "직관적인 UI 디자인으로 사용자 편의 우선 주의",
        alt: "코다(CODA) 음식물 종량기 - 직관적인 디스플레이",
      },
      stainlessMaterial: {
        title: "스테인레스 재질 적용으로 보다 편한 물 청소",
        subtitle: "음식물 염분과 가스로부터 발생하는 부식 방지",
        description: "부식 방지 및 물 청소를 통해 청결 관리 가능",
        alt: "코다(CODA) 음식물 종량기 - 스테인레스 재질 적용으로 편한 물 청소",
      },
      installationCases: {
        title: "다양한 설치 장소 및 사례",
        description: "지자체별 로고 및 시트 디자인, 현수막 등 맞춤 제공",
        alt: "코다(CODA) 음식물 종량기 - 다양한 설치 장소 및 사례",
      },
    },
    metaData: {
      title: "코다(CODA) RFID 기반 음식물 종량기",
      description: "우수 발명품 선정 및 조달청 우수제품으로 선정된 코다(CODA) RFID 음식물 종량기입니다. 고장 진단 기능과 신용카드 선불제를 지원합니다.",
      keywords: "코다, CODA, 음식물 종량기, 우수발명품, 우수제품, RFID",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s1.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "CODA RFID Food Waste Billing System",
    description: "CODA RFID Food Waste Billing System selected as excellent invention and Public Procurement Service excellent product. Supports fault diagnosis function and credit card prepaid system.",

    // 헤더 이미지
    header: {
      mainAlt: "Excellent Invention and Public Procurement Service Excellent Product Selected Food Waste Billing System",
      creditCardAlt: "Credit Card Available Prepaid Equipment - First Certified Food waste billing system",
      finalAlt: "CODA Food waste billing system - RFID Based",
    },

    animation: {
      title1: "Chosen by Local Governments Nationwide",
      title2: "Verified Food waste billing system",
    },

    // RFID 기반 섹션
    rfidBased: {
      iconAlt: "CODA Food waste billing system Image",
      title1: "RFID Based",
      title2: "Food waste billing system",
      description: "Selected as excellent invention, priority purchase recommendation\nSystem that identifies ID using radio frequency\nFee charging method according to discharge amount",
    },

    // 고장 진단 기능 섹션
    faultDiagnosis: {
      title: "Food Waste Volume Management System\nwith Fault Diagnosis Function",
      subtitle: "Patent No. 10-150711 Performance Certification No. 15-1354 (Small and Medium Business Administration Certification)",
      bottomText: "Discharge fee omission prevention system applied / Hand pinch prevention / Contamination throwing prevention product",
      alt: "Food Waste Volume Management System with Fault Diagnosis Function",
    },

    // 우수제품 지정증서 섹션
    certificate: {
      alt: "CODA Food waste billing system Excellent Product Designation Certificate, Excellent Invention Priority Purchase Recommendation Certificate",
    },

    // 제품 특징 섹션들
    features: {
      canopyDisplay: {
        title: "Canopy Interior, Eye-Level Display Application",
        subtitle: "Ergonomic keypad keeps clean without rain and food contamination",
        description: "User convenience considering contamination, dust, and winter condensation",
        alt: "CODA Food waste billing system - Convenient Display",
      },
      inHouseDisplay: {
        title: "In-house Display 128 x 64 Graphics Applied",
        subtitle: "Clear large LCD with 8-line Korean graphics and backlighting function",
        description: "User convenience priority with intuitive UI design",
        alt: "CODA Food waste billing system - Intuitive Display",
      },
      stainlessMaterial: {
        title: "Easier Water Cleaning with Stainless Steel Material",
        subtitle: "Corrosion prevention from food salt and gas",
        description: "Corrosion prevention and cleanliness management through water cleaning",
        alt: "CODA Food waste billing system - Easy Water Cleaning with Stainless Steel Material",
      },
      installationCases: {
        title: "Various Installation Locations and Cases",
        description: "Customized provision of local government logos, sheet designs, banners, etc.",
        alt: "CODA Food waste billing system - Various Installation Locations and Cases",
      },
    },
    metaData: {
      title: "CODA RFID Food Waste Billing System",
      description: "CODA RFID Food Waste Billing System selected as excellent invention and Public Procurement Service excellent product. Features fault diagnosis function and credit card prepaid system.",
      keywords: "CODA, food waste billing system, excellent invention, RFID, government procurement, volume-based billing, credit card payment",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s1.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getFoodWasteBillingSystemTranslations(locale: Locale = "ko") {
  return createTranslator(foodWasteBillingSystemTranslations, locale);
}

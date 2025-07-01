import { createTranslator, Locale } from "@lib/translator";

export const esgTranslations = {
  ko: {
    // 메타데이터
    title: "코다(CODA) ESG 무인회수기",
    description: "탄소중립 실천을 위한 코다(CODA) ESG 무인회수기입니다. CO2 감축과 자원순환을 통한 지속가능한 환경경영을 실현합니다.",

    // 헤더 이미지
    header: {
      mainAlt: "코다(CODA) ESG 무인회수기 메인이미지",
      subAlt: "코다(CODA) ESG 서브이미지",
      finalAlt: "코다(CODA) ESG 서브이미지",
    },

    // 인트로 섹션
    intro: {
      subtitle: "탄소중립 실천모델",
      title: "재활용품 무인회수기",
      description: "자연 보전을 위한 우리의 실천\n투명 페트병, 캔 자원을 아끼고 모으는 것 부터 시작합니다.\nCO2 감축을 위한 ESG 경영 전용 모델",
      alt: "코다(CODA) ESG 이미지",
    },

    // CO2 저감 섹션
    co2Reduction: {
      title: "이산화탄소 저감을 위한 활동\n기업의 선택이 아닌 필수",
      description: "산업폐기물과 생산과정의 오염물질로 인한 온실가스의 피해는\n현재 세대와 더불어 다음 세대에까지 전과됩니다.",
      bottomText: "이산화탄소 저감을 위한 기업들의 실천 방안으로 재활용품 무인회수기를 제안합니다.",
      alt: "코다(CODA) ESG 이미지",
    },

    // 기능 섹션
    features: {
      mainTitle: "모으고\n줄이고\n보존하고",
      mainDescription: "'무인회수기에 CAN, PET 투입하면\n압축기가 부피를 줄이며 선별 저장, 자원 순환률을 높여\n폐기물 저감 및 자연환경을 보전합니다.'",
      alt: "코다(CODA) ESG 모으고 줄이고 보존하고",
    },

    // 섹션 1: 차별화 기능
    section1: {
      title: "차별화 기능",
      description: "'인공지능 센싱기술로 회수 가능 자원(CAN, PET) & 불가능 자원을 선별하여\n반환(배출) 및 압축을 통한 저장으로 자원 순환률을 높입니다.'",
      aiIconAlt: "코다(CODA) 무인회수기 AI",
      features: [
        {
          title: "회수가능자원 1차 판독 / 선별",
          description: "AI 센싱기술 & 고효율 압축성능",
          alt: "코다(CODA) ESG AI 센싱기술",
        },
        {
          title: "회수가능자원 2차 판독 / 자동 배출",
          description: "첨단 로보틱스 활용한 배출구 반환 기능",
          alt: "코다(CODA) ESG 첨단 로보틱스",
        },
        {
          title: "타사 대비 월등한 처리 속도",
          description: "정확한 자원 판단 설계와 고도화된 구조 기반 장비의 최적 성능 구현",
          alt: "코다(CODA) ESG 처리 속도",
        },
      ],
    },

    // 섹션 2: 사용방법
    section2: {
      title: "사용방법",
      usageAlt: "코다(CODA) ESG 사용방법",
      convenienceAlt: "코다(CODA) ESG 사용편의성",
      safetyAlt: "코다(CODA) ESG 안전기능",
      step1: {
        title: "보다 사용하기 쉽게, 더 빠르게 CO2 감축량 확인!",
        description: "초기화면 시작하기 터치 / 번호 입력 / 투입자원 포인트 바로 확인\n전용 어플 설치 시 모바일 연동 / 사용 편의성 고려한 다양한 안전 시스템 적용",
      },
      step2: {
        title: "타사 대비 다양한 센서 적용!",
        description: "사용자 감지 센서 및 투입 감지 센서로 안전한 사용\n포인트, 지역화폐, 캐시비 등 다양한 방식의 적립",
      },
    },

    // 섹션 3: ESG 전용 APP 연동
    section3: {
      title: "ESG 전용 APP 연동",
      appTitle: "직관적인 어플 UI & 자원 수거량 표시",
      appDescription: "모바일, 무인회수기, 관제시스템 - 기기간 실시간 정보 연동",
      alt: "코다(CODA) ESG 앱 연동",
    },

    // 섹션 4: CO2 감축 관제시스템
    section4: {
      title: "CO2 감축\n관제시스템",
      systemTitle: "보다 이해하기 쉬운 CO2 감축량 그래프\n총량 / 월별 / 장비별 확인 가능",
      systemDescription: "PC 관제 시스템 - ESG 전용 대시보드",
      qrTitle: "ESG 기업용 APP 검색 (QR)",
      systemAlt: "코다(CODA) ESG CO2 감축 관제시스템",
      qrAlt: "코다(CODA) ESG QR 코드",
    },

    // 캐노피 옵션
    canopy: {
      title: "외부 설치 시, 캐노피 옵션 사양 가능",
      description: "사용자 맞춤 그래픽 적용 (지자체/기업)",
      alt: "코다(CODA) ESG 캐노피",
    },

    metaData: {
      title: "코다(CODA) 무인회수기 | ESG",
      description: "코다(CODA) ESG 무인회수기는 탄소중립 실천을 위한 CO2 감축과 자원순환을 통해 지속가능한 환경경영을 실현합니다.",
      keywords: "코다, CODA, ESG, 무인회수기, 탄소중립, CO2 감축, 자원순환, 환경경영",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    // 메타데이터
    title: "CODA ESG Reverse Vending Machine",
    description: "CODA ESG Reverse Vending Machine for carbon neutral practice. Realize sustainable environmental management through CO2 reduction and resource circulation.",

    // 헤더 이미지
    header: {
      mainAlt: "CODA ESG Reverse Vending Machine Main Image",
      subAlt: "CODA ESG Sub Image",
      finalAlt: "CODA ESG Sub Image",
    },

    // 인트로 섹션
    intro: {
      subtitle: "Carbon Neutral Practice Model",
      title: "Reverse Vending Machine",
      description: "Our practice for nature conservation\nStarts with saving and collecting transparent PET bottles and can resources.\nESG management dedicated model for CO2 reduction",
      alt: "CODA ESG Image",
    },

    // CO2 저감 섹션
    co2Reduction: {
      title: "Activities for Carbon Dioxide Reduction\nNot a Corporate Choice but a Necessity",
      description: "Greenhouse gas damage from industrial waste and pollutants in the production process\naffects not only the current generation but also the next generation.",
      bottomText: "We propose Reverse Vending Machines for recyclables as a practical solution for companies to reduce carbon dioxide.",
      alt: "CODA ESG Image",
    },

    // 기능 섹션
    features: {
      mainTitle: "Collect\nReduce\nPreserve",
      mainDescription: "'When CAN and PET are inserted into the Reverse Vending Machine,\nthe compressor reduces volume and stores selectively, increasing resource circulation rate\nto reduce waste and preserve the natural environment.'",
      alt: "CODA ESG Collect Reduce Preserve",
    },

    // 섹션 1: 차별화 기능
    section1: {
      title: "Differentiated Features",
      description: "'AI sensing technology sorts recoverable resources (CAN, PET) & non-recoverable resources\nto increase resource circulation rate through return (discharge) and compression storage.'",
      aiIconAlt: "CODA Reverse Vending Machine AI",
      features: [
        {
          title: "1st Reading / Sorting for Recoverable Resources",
          description: "AI sensing technology & high-efficiency compression performance",
          alt: "CODA ESG AI Sensing Technology",
        },
        {
          title: "2nd Reading / Auto Discharge for Recoverable Resources",
          description: "Discharge outlet return function using advanced robotics",
          alt: "CODA ESG Advanced Robotics",
        },
        {
          title: "Superior Processing Speed Compared to Competitors",
          description: "Optimal equipment performance based on precise resource judgment and advanced structure",
          alt: "CODA ESG Processing Speed",
        },
      ],
    },

    // 섹션 2: 사용방법
    section2: {
      title: "How to Use",
      usageAlt: "CODA ESG Usage Instructions",
      convenienceAlt: "CODA ESG Convenience",
      safetyAlt: "CODA ESG Safety Features",
      step1: {
        title: "Easier to Use, Faster CO2 Reduction Check!",
        description: "Touch start screen / Enter number / Check input resource points immediately\nMobile connection when dedicated app is installed / Various safety systems considering usage convenience",
      },
      step2: {
        title: "Various Sensors Applied Compared to Competitors!",
        description: "Safe use with user detection sensor and input detection sensor\nVarious accumulation methods such as points, cash and so on",
      },
    },

    // 섹션 3: ESG 전용 APP 연동
    section3: {
      title: "ESG Dedicated APP Integration",
      appTitle: "Intuitive App UI & Resource Collection Display",
      appDescription: "Mobile, Reverse Vending Machine, control system - Real-time information integration between devices",
      alt: "CODA ESG App Integration",
    },

    // 섹션 4: CO2 감축 관제시스템
    section4: {
      title: "CO2 Reduction\nControl System",
      systemTitle: "Easy-to-understand CO2 reduction graph\nTotal / Monthly / Equipment-specific verification available",
      systemDescription: "PC Control System - ESG Dedicated Dashboard",
      qrTitle: "ESG Corporate APP Search (QR)",
      systemAlt: "CODA ESG CO2 Reduction Control System",
      qrAlt: "CODA ESG QR Code",
    },

    // 캐노피 옵션
    canopy: {
      title: "Canopy Option Specifications Available for Outdoor Installation",
      description: "Customized graphics application (local government/company)",
      alt: "CODA ESG Canopy",
    },

    // 영어 메타데이터 추가
    metaData: {
      title: "CODA Reverse Vending Machine | ESG",
      description: "CODA ESG Reverse Vending Machine realizes sustainable environmental management through CO2 reduction and resource circulation for carbon neutral practice.",
      keywords: "CODA, ESG, reverse vending machine, carbon neutral, CO2 reduction, resource circulation, environmental management, sustainability",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getEsgTranslations(locale: Locale = "ko") {
  return createTranslator(esgTranslations, locale);
}

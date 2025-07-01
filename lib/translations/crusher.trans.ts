// lib/translations/crusher.ts
import { createTranslator, Locale } from "@lib/translator";

export const crusherTranslations = {
  ko: {
    title: "코다(CODA) 무인회수기 파쇄기",
    description: "코다(CODA), 캔과 페트 재활용으로 포인트가 쌓이는 스마트 무인회수기. 손쉬운 재활용으로 더 나은 환경을 만들어갑니다.",
    header: {
      mainAlt: "코다(CODA) 무인회수기 파쇄기 메인이미지",
      subAlt: "코다(CODA) 무인회수기 서브이미지",
      finalAlt: "코다(CODA) 무인회수기 서브이미지",
    },

    intro: {
      subtitle: "향유고래 지킴이",
      title: "재활용품 무인회수기",
      description: "'코다'는 향유고래를 비롯한 해양동물이 안전하게 살아갈 수 있도록\n재활용 자원을 모으고 보상 받는 '자원 선순환 브랜드'입니다.",
      alt: "코다(CODA) 페트 이미지",
    },

    features: {
      mainTitle: "모으고\n살리고\n보상받고",
      mainDescription: "'무인회수기에 CAN, PET 투입하면\n파쇄기가 부피를 줄이며 선별 저장, 자원 순환률을 높여\n해양동물을 비롯한 환경을 회복합니다.'",
      alt: "코다(CODA) 무인회수기 메인설명",
    },

    section1: {
      title: "자원 선순환\n프로세스",
      subtitle: "캔, 페트병 선별 / 수거 운반 / 재활용자원 순환시스템",
      description: "투명PET, CAN 회수로 폐플라스틱 소재화 및 폐기물 발생량 체계적 저감",
      alt: "코다(CODA) 무인회수기 자원 선순환 프로세스",
    },

    section2: {
      title: "차별화 기능",
      description: "'인공지능 센싱기술로 회수 가능 자원(CAN, PET) & 불가능 자원을 선별하여\n반환(배출) 및 압축을 통한 저장으로 자원 순환률을 높입니다.'",
      aiIconAlt: "코다(CODA) 무인회수기 AI",
      costComparison: {
        title: "압축기 / 파쇄기 운송비용 비교",
        description: "가득찬 수거통 회수 시, 운송비 절감",
        alt: "코다(CODA) 무인회수기 운송비용 비교",
      },
      loadComparison: {
        description: "동일한 500ml PET 500개 기준\n압축기와 파쇄기 적재량 비교",
        alt: "코다(CODA) 무인회수기 적재량 비교",
      },
      features: [
        {
          title: "회수가능자원 1차 판독 / 선별",
          description: "AI 센싱기술 & 고효율 압축성능",
          alt: "코다(CODA) 무인회수기 AI 센싱기술",
        },
        {
          title: "회수가능자원 2차 판독 / 자동 배출",
          description: "첨단 로보틱스 활용한 배출구 반환 기능",
          alt: "코다(CODA) 무인회수기 첨단 로보틱스",
        },
        {
          title: "자원 투입 시, 투입구 센서 자동 인식",
          description: "투입시 LED 표시, 음성 안내 등의 사용 안전성",
          alt: "코다(CODA) 무인회수기 투입구 센서 자동 인식",
        },
      ],
    },

    section3: {
      title: "사용방법",
      usageAlt: "코다(CODA) 무인회수기 사용설명",
      convenienceAlt: "코다(CODA) 무인회수기 사용편의성",
      safetyAlt: "코다(CODA) 무인회수기 안전기능",
      step1: {
        title: "보다 사용하기 쉽게, 더 빠르게 확인!",
        description: "초기화면 시작하기 터치 / 번호 입력 / 투입자원 포인트 바로 확인\n전용 어플 설치 시 모바일 연동 / 사용 편의성 고려한 다양한 안전 시스템 적용",
      },
      step2: {
        title: "타사 대비 다양한 센서 적용!",
        description: "사용자 감지 센서 및 투입 감지 센서로 안전한 사용\n포인트, 지역화폐, 캐시비 등 다양한 방식의 적립",
      },
    },

    section4: {
      title: "회수자원\n보상체계",
      rewardText: "투입량 만큼 사용자 맞춤 보상 -",
      rewardTypes: "현금/교통카드/지역화폐",
      rewardAlt: "코다(CODA) 무인회수기 회수자원 보상체계",
      appTitle: "코다 전용앱 사용 방법",
      appSlogan: "'가장 손쉽고 빠르게'",
      appDescription: "직관적인 포인트 적립과 송금 시스템 제공",
      appAlt: "코다(CODA) 무인회수기 전용앱 사용방법",
      qrTitle: "CODA 검색 (QR)",
      qrAlt: "코다(CODA) 무인회수기 QR 코드",
    },

    section5: {
      title: "무인회수기\n파쇄기모델",
      alt: "코다(CODA) 무인회수기 파쇄기",
    },

    canopy: {
      title: "외부 설치 시, 캐노피 옵션 사양",
      description: "사용자 맞춤 그래픽 적용 (지자체/기업)",
      alt: "코다(CODA) 무인회수기 캐노피",
    },

    download: {
      text: "무인회수기 온라인기술서",
    },

    metaData: {
      title: "코다(CODA) 무인회수기 | 파쇄기",
      description: "코다(CODA), 캔과 페트 재활용으로 포인트가 쌓이는 스마트 무인회수기. 손쉬운 재활용으로 더 나은 환경을 만들어갑니다.",
      keywords: "코다, CODA, 무인회수기, 파쇄기, 페트(PET), 캔(CAN), 재활용, 환경보호, 스마트 회수기, 포인트 적립, 자원순환",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_crush/coda_crush_s3.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "CODA Reverse Vending Machine Crusher",
    description: "Introducing the CODA Reverse Vending Machine crusher with AI sensing technology and high-efficiency crushing performance.",

    // 헤더 이미지
    header: {
      mainAlt: "CODA Reverse Vending Machine Crusher Main Image",
      subAlt: "CODA Reverse Vending Machine Sub Image",
      finalAlt: "CODA Reverse Vending Machine Sub Image",
    },

    // 인트로 섹션
    intro: {
      subtitle: "Sperm Whale Guardian",
      title: "Reverse Vending Machine",
      description: "'CODA' is a 'brand of resource circulation' that collects recycling resources and receives rewards so that sperm whales and other marine animals can live safely.",
      alt: "CODA PET Image",
    },

    // 기능 섹션
    features: {
      mainTitle: "Collect\nSave\nGet Rewarded",
      mainDescription: "'When CAN and PET are inserted into the Reverse Vending Machine,\nthe crusher reduces volume and stores selectively, increasing resource circulation rate\nto restore the environment including marine animals.'",
      alt: "CODA Reverse Vending Machine Main Description",
    },

    // 섹션 1: 자원 선순환 프로세스
    section1: {
      title: "The Process of Resource Circulation",
      subtitle: "Can, PET bottle sorting / Collection and transport / Circulation system of recyclable resource",
      description: "Systematic reduction of waste generation and plastic materialization through transparent PET and CAN recovery",
      alt: "CODA Reverse Vending Machine Resource Circulation Process",
    },

    // 섹션 2: 차별화 기능
    section2: {
      title: "Differentiated Features",
      description: "'AI sensing technology sorts recoverable resources (CAN, PET) & non-recoverable resources\nto increase resource circulation rate through return (discharge) and compression storage.'",
      aiIconAlt: "CODA Reverse Vending Machine AI",
      costComparison: {
        title: "Compressor / Crusher Transportation Cost Comparison",
        description: "Transportation cost reduction When the bin is full",
        alt: "CODA Reverse Vending Machine Transportation Cost Comparison",
      },
      loadComparison: {
        description: "Based on 500 identical 500ml PET bottles\nCompressor and crusher loading capacity comparison",
        alt: "CODA Reverse Vending Machine Loading Capacity Comparison",
      },
      features: [
        {
          title: "1st Reading / Sorting for Recoverable Resources",
          description: "AI sensing technology & high-efficiency compression performance",
          alt: "CODA Reverse Vending Machine AI Sensing Technology",
        },
        {
          title: "2nd Reading / Auto Discharge for Recoverable Resources",
          description: "Discharge outlet return function using advanced robotics",
          alt: "CODA Reverse Vending Machine Advanced Robotics",
        },
        {
          title: "Auto Recognition of inlet Sensor When Resources are Input",
          description: "Usage safety with LED display and voice guidance during input",
          alt: "CODA Reverse Vending Machine Input Sensor Auto Recognition",
        },
      ],
    },

    // 섹션 3: 사용방법
    section3: {
      title: "How to Use",
      usageAlt: "CODA Reverse Vending Machine Usage Instructions",
      convenienceAlt: "CODA Reverse Vending Machine Convenience",
      safetyAlt: "CODA Reverse Vending Machine Safety Features",
      step1: {
        title: "Easier to Use, Faster to Check!",
        description: "Touch start screen / Enter number / Check input resource points immediately\nMobile connection when dedicated app is installed / Various safety systems considering usage convenience",
      },
      step2: {
        title: "Various Sensors Applied Compared to Competitors!",
        description: "Safe use with user detection sensor and input detection sensor\nVarious accumulation methods such as points, cash and so on",
      },
    },

    // 섹션 4: 회수자원 보상체계
    section4: {
      title: "Resource Recovery\nReward System",
      rewardText: "Customized user rewards according to input amount -",
      rewardTypes: "Points/Cash and so on",
      rewardAlt: "CODA Reverse Vending Machine Resource Recovery Reward System",
      appTitle: "How to Use CODA Dedicated App",
      appSlogan: "'Easiest and Fastest'",
      appDescription: "Intuitive point accumulation and remittance system provided",
      appAlt: "CODA Reverse Vending Machine App Usage",
      qrTitle: "Search CODA (QR)",
      qrAlt: "CODA Reverse Vending Machine QR Code",
    },

    // 섹션 5: 파쇄기 모델
    section5: {
      title: "Reverse Vending Machine\nCrusher Model",
      alt: "CODA Reverse Vending Machine Crusher",
    },

    // 캐노피 옵션
    canopy: {
      title: "Canopy Option Specifications for Outdoor Installation",
      description: "Customized graphics application (local government/company)",
      alt: "CODA Reverse Vending Machine Canopy",
    },

    // 다운로드
    download: {
      text: "Online Technical Manual of Reverse Vending Machine",
    },

    metaData: {
      title: "CODA Reverse Vending Machine | Crusher",
      description: "CODA smart reverse vending machine that accumulates points through can and PET recycling. Creating a better environment through easy recycling with advanced crushing technology.",
      keywords: "CODA, reverse vending machine, crusher, PET bottle, CAN, recycling, environmental protection, smart recycling, point reward, resource circulation",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_crush/coda_crush_s3.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getCrusherTranslations(locale: Locale = "ko") {
  return createTranslator(crusherTranslations, locale);
}

import { createTranslator, Locale } from "@lib/translator";

export const machinesTranslations = {
  ko: {
    title: "코다(CODA) 제품 라인업",
    recycleMachines: {
      title: "무인회수기 제품 안내",
      subtitle: "국내 기술 30년 융복합 측정기술 노하우를 바탕으로 한 최적의 자원 선순환 솔루션",
      products: {
        compressor: {
          title: "압축기",
          subtitle: "PET / CAN / 공용",
          alt: "코다(CODA) 무인회수기, 압축기(PET,CAN,공용)",
        },
        crusher: {
          title: "파쇄기",
          subtitle: "PET 전용",
          alt: "코다(CODA) 무인회수기, 파쇄기(PET)",
        },
        esg: {
          title: "ESG",
          subtitle: "탄소저감형",
          alt: "코다(CODA) 무인회수기, ESG(탄소저감형)",
        },
      },
    },
    products: {
      recycleMachine: {
        title: "압축기",
        subtitle: "PET / CAN / 공용",
        alt: "코다(CODA) 무인회수기, 압축기(PET,CAN,공용)",
      },
      rfid: {
        title: "차량용RFID",
        subtitle: "차량용RFID",
        alt: "차량용RFID",
      },
      foodWaste: {
        title: "음식물 종량기",
        subtitle: "음식물 종량기",
        alt: "음식물 종량기",
      },
    },
  },
  en: {
    title: "CODA Product Lineup",
    recycleMachines: {
      title: "Reverse Vending Machine Product Guide",
      subtitle: "Optimal resource circulation solution based on 30 years of domestic technology convergence measurement technology know-how",
      products: {
        compressor: {
          title: "Compressor",
          subtitle: "PET / CAN / Universal",
          alt: "CODA Reverse Vending Machine, Compressor (PET, CAN, Universal)",
        },
        crusher: {
          title: "Crusher",
          subtitle: "PET Only",
          alt: "CODA Reverse Vending Machine, Crusher (PET)",
        },
        esg: {
          title: "ESG",
          subtitle: "Carbon Reduction Type",
          alt: "CODA Reverse Vending Machine, ESG (Carbon Reduction Type)",
        },
      },
    },
    products: {
      recycleMachine: {
        title: "Compressor",
        subtitle: "PET / CAN / Universal",
        alt: "CODA Reverse Vending Machine, Compressor (PET, CAN, Universal)",
      },
      rfid: {
        title: "Vehicle billing system for food waste",
        subtitle: "Vehicle billing system for food waste",
        alt: "Vehicle billing system for food waste",
      },
      foodWaste: {
        title: "Billing system for food waste",
        subtitle: "Billing system for food waste",
        alt: "Billing system for food waste",
      },
    },
  },
} as const;

export function getMachinesTranslations(locale: Locale = "ko") {
  return createTranslator(machinesTranslations, locale);
}

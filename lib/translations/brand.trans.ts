// lib/translations/brand.ts
import { createTranslator, Locale } from "@lib/translator";

export const brandTranslations = {
  ko: {
    title: "브랜드",
    description: "코다(CODA) 브랜드 소개",
    section1: {
      title: "자원 선순환 플랫폼",
      description: "바다를 자유롭게 헤엄치며 서로 대화하는 향유고래만의 언어인 코다를 모티브로 삼은 '자원 순환 브랜드'입니다",
      imageAlt: "코다(CODA) 자원 선순환 플랫폼",
    },
    section2: {
      imageAlt: "코다(CODA) 바다환경변화 이야기",
    },
    section3: {
      title: "향유고래\n자연보전",
      blocks: {
        block1: {
          title: "하와이 섬, 해변에서 발견된 향유고래",
          description: "[세계자연보전연맹 IUCN, 적색목록 '취약']",
          imageAlt: "코다(CODA) 해변에서 발견된 향유고래",
        },
        block2: {
          title: "전세계 해양쓰레기로 인한 피해",
          description: "[플라스틱 용기와 페트병 쓰레기의 사전 예방 필요성 증가]",
          imageAlt: "코다(CODA) 전세계 해양쓰레기로 인한 피해",
        },
        block3: {
          title: "넘치는 페트병, 캔 폐기물",
          description: "[유엔환경계획 UNEP, 매년 800만톤 '해양쓰레기 발생']",
          imageAlt: "코다(CODA) 넘치는 페트병, 캔 폐기물",
        },
        block4: {
          title: "탄소 중립 시대\n공기 중의 이산화탄소 농도 줄이기",
          description: "[RE100 - 온실가스 배출 저감 위한 대처방안]",
          imageAlt: "코다(CODA) 탄소 중립 시대",
        },
      },
    },
    section4: {
      title: "재활용자원\n모아주세요",
      subtitle: "'자원을 아끼며 보살필 때, 자연 환경을 회복합니다.'",
      imageAlt: "코다(CODA) 재활용자원 모아주세요",
    },
    section5: {
      imageAlt: "코다(CODA) 포트폴리오",
    },
    metaData: {
      title: "코다(CODA) 브랜드 | 자원 선순환 플랫폼",
      description: "향유고래의 언어 '코다'에서 영감을 받은 자원 순환 브랜드. 30년 노하우로 재활용 무인회수기와 음식물 종량기를 개발하여 지속가능한 미래를 만들어갑니다.",
      keywords: "코다, CODA, 브랜드, 자원순환, 환경보호, 향유고래, 무인회수기, 음식물종량기, 재활용, 탄소중립, ESG",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s3.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "Brand",
    description: "CODA Brand Introduction",
    section1: {
      title: "Resource Circulation Platform",
      description: "A 'resource circulation brand' inspired by coda, the unique language of sperm whales that swim freely in the ocean and communicate with each other",
      imageAlt: "CODA Resource Circulation Platform",
    },
    section2: {
      imageAlt: "CODA Ocean Environment Change Story",
    },
    section3: {
      title: "Sperm Whale\nNature Conservation",
      blocks: {
        block1: {
          title: "Sperm Whale Found on Hawaiian Island Beach",
          description: "[IUCN Red List 'Vulnerable']",
          imageAlt: "CODA Sperm Whale Found on Beach",
        },
        block2: {
          title: "Global Marine Waste Damage",
          description: "[Increasing need for prevention of plastic containers and PET bottle waste]",
          imageAlt: "CODA Global Marine Waste Damage",
        },
        block3: {
          title: "Overflowing PET Bottles and Can Waste",
          description: "[UNEP, 8 million tons of marine waste generated annually]",
          imageAlt: "CODA Overflowing PET Bottles and Can Waste",
        },
        block4: {
          title: "Carbon Neutral Era\nReducing CO2 Concentration in Air",
          description: "[RE100 - Countermeasures for reducing greenhouse gas emissions]",
          imageAlt: "CODA Carbon Neutral Era",
        },
      },
    },
    section4: {
      title: "Please Collect\nRecyclable Resources",
      subtitle: "'When we conserve and care for resources, we restore the natural environment.'",
      imageAlt: "CODA Please Collect Recyclable Resources",
    },
    section5: {
      imageAlt: "CODA Portfolio",
    },
    metaData: {
      title: "CODA Brand | Resource Circulation Platform",
      description: "A resource circulation brand inspired by 'coda', the language of sperm whales. Creating a sustainable future with 30 years of expertise in recycling collection machines and food waste meters.",
      keywords: "CODA, brand, resource circulation, environmental protection, sperm whale, recycling machine, food waste meter, recycling, carbon neutral, ESG",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s3.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getBrandTranslations(locale: Locale = "ko") {
  return createTranslator(brandTranslations, locale);
}

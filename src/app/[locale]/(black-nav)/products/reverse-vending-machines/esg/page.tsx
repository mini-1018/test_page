import NumberedSection from "../NumberedSection";
import FeatureSection from "../FeatureSection";
import FeatureItem from "../FeatureItem";
import Image from "next/image";
import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import { getEsgTranslations } from "@lib/translations/esg.trans";
import type { Locale } from "@lib/translator";

interface ESGPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ESGPage({ params }: ESGPageProps) {
  const { locale } = await params;
  const { t } = getEsgTranslations(locale);

  return (
    <div className="w-full">
      <div className="max-w-full flex flex-col text-center">
        {/* 헤더 섹션 */}
        <div className="w-full">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s1.webp" alt={t("header.mainAlt")} className="w-full h-auto pt-[64px] md:pt-[80px]" width={1920} height={800} priority={true} />
        </div>

        {/* 인트로 섹션 */}
        <FadeUpOnView>
          <div className="w-full py-[75px] md:py-[150px]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-[30px]">
                <Image className="mx-auto w-[80px] md:w-[160px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s2.webp" alt={t("intro.alt")} width={160} height={180} />
              </div>
              <div>
                <h3 className="font-normal text-[#565656]">{t("intro.subtitle")}</h3>
                <h3 className="font-bold text-[#141a46] mb-4">{t("intro.title")}</h3>
                <p className="text-[14px] md:text-[20px] text-[#868686] whitespace-pre-line">{t("intro.description")}</p>
              </div>
            </div>
          </div>
        </FadeUpOnView>

        {/* 서브 이미지 */}
        <FadeUpOnView>
          <div className="w-full">
            <Image className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s3.webp" alt={t("header.subAlt")} width={1920} height={800} />
          </div>
        </FadeUpOnView>

        {/* 이산화탄소 저감 섹션 */}
        <FadeUpOnView>
          <FeatureSection bgColor="bg-[#f5f6f9]" title={t("co2Reduction.title")} description={t("co2Reduction.description")}>
            <div className="max-w-[840px] bg-[#f5f6f9] flex flex-col items-center">
              <Image className="mb-5 w-full" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s4.webp" alt={t("co2Reduction.alt")} width={840} height={800} />
              <div className="w-full bg-[#131f6b] text-[#ededed] text-[14px] md:text-[20px] p-4">{t("co2Reduction.bottomText")}</div>
            </div>
          </FeatureSection>
        </FadeUpOnView>

        {/* 모으고 줄이고 보존하고 섹션 */}
        <FadeUpOnView>
          <FeatureSection title={t("features.mainTitle")} description={t("features.mainDescription")}>
            <Image className="mx-auto sm:w-[60%] min-w-[300px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s5.webp" alt={t("features.alt")} width={800} height={800} />
          </FeatureSection>
        </FadeUpOnView>

        {/* 서브 이미지 2 */}
        <FadeUpOnView>
          <div className="w-full">
            <Image className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6.webp" alt={t("header.subAlt")} width={1920} height={800} />
          </div>
        </FadeUpOnView>

        {/* 차별화 기능 섹션 */}
        <NumberedSection number="1" title={t("section1.title")} bgColor="bg-[#f5f6f9]">
          <div className="w-full bg-[#f5f6f9]">
            <div className="py-[20px] px-4 mx-auto">
              <FadeUpOnView>
                <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/icon_ai.webp" alt={t("section1.aiIconAlt")} className="mb-[50px] m-auto" width={80} height={60} />
                <div className="text-[14px] md:text-[20px] font-light text-[#656565] mb-[100px] whitespace-pre-line">{t("section1.description")}</div>
              </FadeUpOnView>

              <FadeUpOnView>
                <FeatureItem title={t("section1.features.0.title")} description={t("section1.features.0.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_coda_s9_1.webp" alt={t("section1.features.0.alt")} />
              </FadeUpOnView>

              <FadeUpOnView>
                <FeatureItem title={t("section1.features.1.title")} description={t("section1.features.1.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_coda_s9_2.webp" alt={t("section1.features.1.alt")} />
              </FadeUpOnView>

              <FadeUpOnView>
                <FeatureItem title={t("section1.features.2.title")} description={t("section1.features.2.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_6.webp" alt={t("section1.features.2.alt")} />
              </FadeUpOnView>
            </div>
          </div>
        </NumberedSection>

        {/* 사용방법 섹션 */}
        <FadeUpOnView>
          <NumberedSection number="2" title={t("section2.title")}>
            <Image className="w-[700px] h-auto mx-auto pt-[30px] pb-[30px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_1.webp" alt={t("section2.usageAlt")} width={700} height={500} />
            <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[10px]">{t("section2.step1.title")}</div>
            <div className="text-[14px] md:text-[20px] font-light text-[#010101] mb-[75px] md:mb-[150px] whitespace-pre-line">{t("section2.step1.description")}</div>

            <Image className="pt-[30px] pb-[30px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6_2.webp" alt={t("section2.convenienceAlt")} width={400} height={300} />
            <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[20px]">{t("section2.step2.title")}</div>
            <div className="text-[14px] md:text-[20px] font-light text-[#010101] mb-[75px] md:mb-[150px] whitespace-pre-line">{t("section2.step2.description")}</div>

            <Image className="m-auto pt-[30px] pb-[80px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6_3.webp" alt={t("section2.safetyAlt")} width={800} height={600} />
          </NumberedSection>
        </FadeUpOnView>

        {/* ESG 전용 APP 연동 섹션 */}
        <FadeUpOnView>
          <NumberedSection number="3" title={t("section3.title")} bgColor="bg-[#f5f6f9]">
            <div className="w-full bg-[#f5f6f9]">
              <div className="py-[20px] px-4 max-w-7xl mx-auto">
                <Image className="mx-auto pt-[30px] pb-[30px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_3.webp" alt={t("section3.alt")} width={500} height={400} />
                <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[10px]">{t("section3.appTitle")}</div>
                <div className="text-[14px] md:text-[20px] font-light text-[#010101] mb-[75px] md:mb-[150px]">{t("section3.appDescription")}</div>
              </div>
            </div>
          </NumberedSection>
        </FadeUpOnView>

        {/* CO2 감축 관제시스템 섹션 */}
        <FadeUpOnView>
          <NumberedSection number="4" title={t("section4.title")}>
            <Image className="w-[500px] h-auto mx-auto pt-[30px] pb-[30px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_4.webp" alt={t("section4.systemAlt")} width={500} height={400} />
            <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[10px] whitespace-pre-line">{t("section4.systemTitle")}</div>
            <div className="text-[14px] md:text-[20px] font-light text-[#010101] mb-[75px] md:mb-[150px]">{t("section4.systemDescription")}</div>
            <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[10px]">{t("section4.qrTitle")}</div>
            <Image className="pb-[10px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_5.webp" alt={t("section4.qrAlt")} width={100} height={100} />
          </NumberedSection>
        </FadeUpOnView>

        {/* 캐노피 옵션 섹션 */}
        <FadeUpOnView>
          <div className="w-full bg-[#f5f6f9]">
            <div className="py-[150px] px-4 pb-[30px] max-w-7xl mx-auto">
              <FeatureItem title={t("canopy.title")} description={t("canopy.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_8.webp" alt={t("canopy.alt")} />
            </div>
          </div>
        </FadeUpOnView>

        {/* 서브 이미지 3 */}
        <FadeUpOnView>
          <div className="w-full">
            <Image className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s8.webp" alt={t("header.finalAlt")} width={1920} height={800} />
          </div>
        </FadeUpOnView>
      </div>
    </div>
  );
}

// 메타데이터 생성 함수
export async function generateMetadata({ params }: ESGPageProps) {
  const { locale } = await params;
  const { t } = getEsgTranslations(locale);

  return {
    title: t("title"),
    description: t("description"),
    keywords: locale === "ko" ? "코다, CODA, ESG, 무인회수기, 탄소중립, CO2감축, 지속가능경영, 환경경영" : "CODA, ESG, Reverse Vending Machine, carbon neutral, CO2 reduction, sustainable management, environmental management",
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
}

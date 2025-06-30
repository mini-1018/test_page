import NumberedSection from "../NumberedSection";
import FeatureSection from "../FeatureSection";
import FeatureItem from "../FeatureItem";
import Image from "next/image";
import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import { getCompressorTranslations } from "@lib/translations/compressor.trans";
import type { Locale } from "@lib/translator";

interface CompressorPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function CompressorPage({ params }: CompressorPageProps) {
  const { locale } = await params;
  const { t } = getCompressorTranslations(locale);

  return (
    <div className="w-full">
      <div className="max-w-full mx-auto text-center">
        {/* 헤더 섹션 */}
        <div className="w-full">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s1.webp" alt={t("header.mainAlt")} className="w-full h-auto pt-[64px] md:pt-[80px]" width={1920} height={800} priority={true} />
        </div>

        {/* 인트로 섹션 */}
        <FadeUpOnView>
          <div className="w-full py-[75px] md:py-[150px]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-[30px]">
                <Image className="mx-auto w-[80px] md:w-[160px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s2.webp" alt={t("intro.alt")} width={160} height={180} />
              </div>
              <div>
                <h3 className="font-normal text-[#565656]">{t("intro.subtitle")}</h3>
                <h3 className="font-bold text-[#141a46] mb-4">{t("intro.title")}</h3>
                <p className="text-[14px] md:text-[20px] text-[#818181] whitespace-pre-line">{t("intro.description")}</p>
              </div>
            </div>
          </div>
        </FadeUpOnView>

        {/* 서브 이미지 */}
        <FadeUpOnView>
          <div className="w-full">
            <Image className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s3.webp" alt={t("header.subAlt")} width={1920} height={800} />
          </div>
        </FadeUpOnView>

        {/* 모으고 살리고 보상받고 섹션 */}
        <FadeUpOnView>
          <FeatureSection bgColor="bg-[#f5f6f9]" title={t("features.mainTitle")} description={t("features.mainDescription")}>
            <Image className="mx-auto sm:w-[60%] min-w-[300px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s4.webp" alt={t("features.alt")} width={800} height={800} />
          </FeatureSection>
        </FadeUpOnView>

        {/* 자원 선순환 프로세스 섹션 */}
        <FadeUpOnView>
          <NumberedSection number="1" title={t("section1.title")}>
            <Image className="pt-[30px] pb-[80px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s5.webp" alt={t("section1.alt")} width={750} height={600} />
            <div className="text-[18px] md:text-[26px] font-bold text-secondary mb-[10px]">{t("section1.subtitle")}</div>
            <div className="text-[14px] md:text-[20px] text-[#818181]">{t("section1.description")}</div>
          </NumberedSection>
        </FadeUpOnView>

        {/* 차별화 기능 섹션 */}
        <NumberedSection number="2" title={t("section2.title")} bgColor="bg-[#f5f6f9]">
          <div className="w-full bg-[#f5f6f9]">
            <div className="py-[20px] px-4 mx-auto">
              <FadeUpOnView>
                <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/icon_ai.webp" alt={t("section2.aiIconAlt")} className="mb-[50px] m-auto" width={80} height={60} />
                <div className="text-[14px] md:text-[20px] font-light text-[#656565] mb-[100px] whitespace-pre-line">{t("section2.description")}</div>
              </FadeUpOnView>

              <FadeUpOnView>
                <FeatureItem title={t("section2.features.0.title")} description={t("section2.features.0.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_1.webp" alt={t("section2.features.0.alt")} />
              </FadeUpOnView>

              <FadeUpOnView>
                <FeatureItem title={t("section2.features.1.title")} description={t("section2.features.1.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_2.webp" alt={t("section2.features.1.alt")} />
              </FadeUpOnView>

              <FadeUpOnView>
                <FeatureItem title={t("section2.features.2.title")} description={t("section2.features.2.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_6.webp" alt={t("section2.features.2.alt")} />
              </FadeUpOnView>

              <FadeUpOnView>
                <FeatureItem title={t("section2.features.3.title")} description={t("section2.features.3.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_4.webp" alt={t("section2.features.3.alt")} />
              </FadeUpOnView>
            </div>
          </div>
        </NumberedSection>

        {/* 사용방법 섹션 */}
        <FadeUpOnView>
          <NumberedSection number="3" title={t("section3.title")}>
            <Image className="pt-[30px] pb-[40px] md:pb-[80px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s6_1.webp" alt={t("section3.usageAlt")} width={1000} height={800} />
            <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[20px]">{t("section3.step1.title")}</div>
            <div className="text-[14px] md:text-[20px] text-[#010101] mb-[75px] md:mb-[150px] whitespace-pre-line">{t("section3.step1.description")}</div>

            <Image className="mx-auto pt-[30px] pb-[80px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s6_2.webp" alt={t("section3.convenienceAlt")} width={400} height={300} />
            <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[20px]">{t("section3.step2.title")}</div>
            <div className="text-[14px] md:text-[20px] font-light text-[#010101] mb-[75px] md:mb-[150px] whitespace-pre-line">{t("section3.step2.description")}</div>

            <Image className="m-auto pt-[30px] pb-[80px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s6_3.webp" alt={t("section3.safetyAlt")} width={800} height={600} />
          </NumberedSection>
        </FadeUpOnView>

        {/* 회수자원 보상체계 섹션 */}
        <FadeUpOnView>
          <NumberedSection number="4" title={t("section4.title")} bgColor="bg-[#f5f6f9]">
            <div className="w-full bg-[#f5f6f9]">
              <div className="py-[20px] px-4 max-w-7xl mx-auto">
                <div className="text-center">
                  <span className="text-[18px] md:text-[26px] text-[#818181] inline-block">{t("section4.rewardText")}</span>
                  <span className="text-[18px] md:text-[26px] text-[#0095d3] inline-block">{t("section4.rewardTypes")}</span>
                </div>
                <Image className="pt-[30px] mb-[100px] md:mb-[200px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s7_1.webp" alt={t("section4.rewardAlt")} width={800} height={600} />
                <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[20px]">{t("section4.appTitle")}</div>
                <div className="text-[24px] md:text-[36px] text-[#0095d3] mb-[10px]">{t("section4.appSlogan")}</div>
                <div className="text-[14px] md:text-[20px] font-light text-[#7f809b] mb-[30px] md:mb-[50px]">{t("section4.appDescription")}</div>
                <Image className="pt-[30px] pb-[120px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s7_2.webp" alt={t("section4.appAlt")} width={800} height={600} />
                <div className="text-[18px] md:text-[26px] font-bold text-[#0095d3] mb-[10px]">{t("section4.qrTitle")}</div>
                <Image className="pt-[30px] pb-[10px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s7_3.webp" alt={t("section4.qrAlt")} width={100} height={100} />
              </div>
            </div>
          </NumberedSection>
        </FadeUpOnView>

        {/* 무인회수기 압축기모델 섹션 */}
        <FadeUpOnView>
          <NumberedSection number="5" title={t("section5.title")}>
            <Image className="pt-[30px] m-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s8.webp" alt={t("section5.alt")} width={700} height={600} />
          </NumberedSection>
        </FadeUpOnView>

        {/* 캐노피 옵션 섹션 */}
        <FadeUpOnView>
          <div className="w-full bg-[#f5f6f9]">
            <div className="py-[150px] px-4 pb-[30px] max-w-7xl mx-auto">
              <FeatureItem title={t("canopy.title")} description={t("canopy.description")} imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_5.webp" alt={t("canopy.alt")} />
            </div>
          </div>
        </FadeUpOnView>

        {/* 다운로드 링크 */}
        <FadeUpOnView>
          <div className="w-full bg-[#f5f6f9] flex justify-center items-center pb-[150px]">
            <div className="border border-black rounded-[45px] px-[10px] py-[10px]">
              <div className="text-[20px]">
                <a href="http://112.217.212.250:10780/tmp/coda_online.pdf#zoom=200" download="" className="font-light flex items-center">
                  {t("download.text")}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M3 13.5V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V13.5" stroke="currentColor" strokeWidth="2"></path>
                    <path d="M7.5 10.5L12 15L16.5 10.5" stroke="currentColor" strokeWidth="2"></path>
                    <path d="M12 15L12 3" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeUpOnView>

        {/* 서브 이미지 3 */}
        <FadeUpOnView>
          <div className="w-full">
            <Image className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s11.webp" alt={t("header.finalAlt")} width={1920} height={800} />
          </div>
        </FadeUpOnView>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: CompressorPageProps) {
  const { locale } = await params;
  const { t } = getCompressorTranslations(locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}/products/reverse-vending-machines/compressor`,
      languages: {
        ko: "/ko/products/reverse-vending-machines/compressor",
        en: "/en/products/reverse-vending-machines/compressor",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}/reverse-vending-machines/compressor`,
      siteName: t("metaData.openGraph.siteName"),
      images: [
        {
          url: t("metaData.image"),
          width: 1200,
          height: 630,
          alt: t("metaData.title"),
        },
      ],
      locale: t("metaData.openGraph.locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaData.title"),
      description: t("metaData.description"),
      images: [t("metaData.image")],
    },
  };
}

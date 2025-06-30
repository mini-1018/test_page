import Image from "next/image";
import AnimationFWD from "./AnimationFWD";
import { getFoodWasteScaleTranslations } from "@lib/translations/foodWasteScale.trans";
import type { Locale } from "@lib/translator";

interface FoodWasteScalePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function FoodWasteScalePage({ params }: FoodWasteScalePageProps) {
  const { locale } = await params;
  const { t } = getFoodWasteScaleTranslations(locale);

  return (
    <>
      <main className="w-full mt-[80px] mb-0 text-center">
        {/* 메인 비주얼 섹션 */}
        <section className="w-full">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s1.webp" width={1920} height={1080} className="w-full h-auto" alt={t("header.mainAlt")} priority={true} />
        </section>

        <section className="text-center mb-16 px-4 space-y-1 md:space-y-2 py-[75px] md:py-[150px]">
          <h2 className="font-bold text-third">{t("animation.title1")}</h2>
          <h2 className="font-bold text-third">{t("animation.title2")}</h2>
          <AnimationFWD />
        </section>

        {/* RFID 기반 음식물 종량기 섹션 */}
        <section className="w-full mt-[75px] mb-[75px] md:mt-[150px] md:mb-[150px]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s2.webp" width={800} height={600} alt={t("rfidBased.iconAlt")} className="w-[50px] md:w-[100px] mx-auto" />
            </div>
            <div>
              <h2 className="text-5xl font-normal text-third mb-2">{t("rfidBased.title1")}</h2>
              <h3 className="text-5xl font-bold text-third mb-6">{t("rfidBased.title2")}</h3>
              <p className="text-[14px] md:text-[20px] text-#565656 leading-relaxed whitespace-pre-line">{t("rfidBased.description")}</p>
            </div>
          </div>
        </section>

        {/* 신용카드 선불제 섹션 */}
        <section className="w-full">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s3.webp" width={1920} height={1080} alt={t("header.creditCardAlt")} className="w-full h-auto" />
        </section>

        {/* 고장 진단 기능 섹션 */}
        <section className="w-full py-36">
          <div className="flex flex-col justify-center items-center px-4">
            <h2 className="font-bold text-third leading-tight mb-4 whitespace-pre-line">{t("faultDiagnosis.title")}</h2>
            <p className="text-[14px] md:text-[20px] text-#565656 mb-12">{t("faultDiagnosis.subtitle")}</p>
            <div className="max-w-[840px]">
              <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s4.webp" width={700} height={500} alt={t("faultDiagnosis.alt")} className="w-full h-auto mb-5" />
              <div className="flex justify-center">
                <p className="w-full bg-third text-[#ededed] text-[14px] md:text-[20px] p-4">{t("faultDiagnosis.bottomText")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 우수제품 지정증서 섹션 */}
        <section className="w-full bg-gray-50 py-[75px] md:py-[150px]">
          <div className="max-w-6xl mx-auto px-4">
            <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s5.webp" width={700} height={500} alt={t("certificate.alt")} className="w-full max-w-2xl h-auto mx-auto" />
          </div>
        </section>

        {/* 제품 특징 섹션들 */}
        <section className="w-full py-[75px] md:py-[150px]">
          <div className="flex flex-col justify-center items-center gap-[75px] md:gap-[150px] px-4">
            {/* 캐노피 내부 디스플레이 */}
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-third mb-2">{t("features.canopyDisplay.title")}</h3>
              <h4 className="text-third mb-4">{t("features.canopyDisplay.subtitle")}</h4>
              <p className="text-[14px] md:text-[20px] text-#565656 mb-8">{t("features.canopyDisplay.description")}</p>
              <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s6.webp" width={1200} height={800} alt={t("features.canopyDisplay.alt")} className="w-[400px] h-auto" />
            </div>

            {/* 자사 디스플레이 */}
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-third mb-2">{t("features.inHouseDisplay.title")}</h3>
              <h4 className="font-bold text-third mb-4">{t("features.inHouseDisplay.subtitle")}</h4>
              <p className="text-[14px] md:text-[20px] text-#565656 mb-8">{t("features.inHouseDisplay.description")}</p>
              <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s7.webp" width={1200} height={800} alt={t("features.inHouseDisplay.alt")} className="w-[400px] h-auto" />
            </div>

            {/* 스테인레스 재질 */}
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-third mb-2">{t("features.stainlessMaterial.title")}</h3>
              <h4 className="font-bold text-third mb-4">{t("features.stainlessMaterial.subtitle")}</h4>
              <p className="text-[14px] md:text-[20px] text-#565656 mb-8">{t("features.stainlessMaterial.description")}</p>
              <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s8.webp" width={1200} height={800} alt={t("features.stainlessMaterial.alt")} className="w-[400px] h-auto" />
            </div>

            {/* 다양한 설치 장소 */}
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-third mb-2">{t("features.installationCases.title")}</h3>
              <p className="text-[14px] md:text-[20px] text-#565656 mb-8">{t("features.installationCases.description")}</p>
              <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s9.webp" width={1200} height={800} alt={t("features.installationCases.alt")} className="w-[400px] h-auto" />
            </div>
          </div>
        </section>

        {/* RFID 기반 마지막 섹션 */}
        <section className="w-full">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s11.webp" width={1920} height={1080} alt={t("header.finalAlt")} className="w-full h-auto" />
        </section>
      </main>
    </>
  );
}

// 메타데이터 생성 함수
export async function generateMetadata({ params }: FoodWasteScalePageProps) {
  const { locale } = await params;
  const { t } = getFoodWasteScaleTranslations(locale);

  return {
    title: t("title"),
    description: t("description"),
    keywords: locale === "ko" ? "코다, CODA, 음식물종량기, RFID, 특허, 우수제품, 조달청, 고장진단, 신용카드, 선불제" : "CODA, Food waste billing system, RFID, patent, excellent product, public procurement, fault diagnosis, credit card, prepaid",
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

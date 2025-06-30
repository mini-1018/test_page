import Image from "next/image";
import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import AnimationRfid from "./AnimationRfid";
import { getRfidTranslations } from "@lib/translations/rfid.trans";
import type { Locale } from "@lib/translator";

interface RFIDPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function RFIDPage({ params }: RFIDPageProps) {
  const { locale } = await params;
  const { t } = getRfidTranslations(locale);

  return (
    <div className="w-full">
      <div className="max-w-full mx-auto">
        {/* 헤더 섹션 */}
        <div className="w-full">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s1_text.webp" alt={t("header.mainAlt")} width={1920} height={600} className="w-full h-auto mt-[80px]" priority={true} />
        </div>

        {/* RFID 검증 섹션 */}
        <div className="flex flex-col items-center py-[75px] md:py-[150px] mt-[75px] px-4 gap-4 text-center">
          <h3 className="text-third">{t("verified.title")}</h3>
          <p className="text-[14px] md:text-[20px] text-[#868686] mb-0">
            {t("verified.description")}
            <br />
            <span
              className="inline"
              style={{
                background: "linear-gradient(transparent 40%, #f8e0af 60%)",
              }}
            >
              {t("verified.highlight")}
            </span>
          </p>
          <AnimationRfid />
        </div>

        {/* 인트로 섹션 */}
        <FadeUpOnView>
          <div className="w-full mt-[120px] mb-[120px] md:mt-[240px] md:mb-[240px]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-[20px] md:mb-[30px] flex justify-center">
                <Image className="w-[20%] h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s2.webp" alt={t("intro.iconAlt")} width={400} height={200} />
              </div>
              <div className="text-center">
                <h3 className="text-[45px] font-normal text-[#565656]">{t("intro.title1")}</h3>
                <h3 className="text-[45px] font-bold text-third mb-[20px] md:mb-[30px]">{t("intro.title2")}</h3>
                <p className="text-[14px] md:text-[20px] text-[#868686] mb-0 whitespace-pre-line">{t("intro.description1")}</p>
                <p className="text-[14px] md:text-[20px] text-[#868686] mt-0 text-center">
                  <span
                    className="inline"
                    style={{
                      background: "linear-gradient(transparent 40%, #f8e0af 60%)",
                    }}
                  >
                    {t("intro.description2")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </FadeUpOnView>

        {/* 서브 이미지 */}
        <FadeUpOnView>
          <div className="w-full">
            <Image className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s3.webp" alt={t("header.subAlt")} width={1920} height={600} />
          </div>
        </FadeUpOnView>

        {/* 무게 기반 실시간 선불 결제시스템 섹션 */}
        <FadeUpOnView>
          <div className="flex flex-col justify-center w-full bg-[#f5f6f9]">
            <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
              <h3 className="font-bold text-[#141a46] leading-tight mb-6 whitespace-pre-line">{t("realtimePayment.title")}</h3>
              <p className="text-[14px] md:text-[20px] font-light text-[#565656] mb-[100px] whitespace-pre-line">{t("realtimePayment.description")}</p>
              <div className="max-w-[840px] mx-auto">
                <Image className="w-full h-auto mb-5" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s4.webp" alt={t("realtimePayment.alt")} width={1200} height={600} />
                <p className="w-full bg-third text-[#ededed] text-[14px] md:text-[20px] p-4">{t("realtimePayment.bottomText")}</p>
              </div>
            </div>
          </div>
        </FadeUpOnView>

        {/* 신속/정확 & 안전/편안 섹션 */}
        <div className="w-full mb-[100px]">
          <FadeUpOnView delay={100}>
            <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
              <h3 className="font-bold text-third mb-[10px]">{t("quickAccurate.title")}</h3>
              <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">{t("quickAccurate.subtitle")}</p>
              <p className="text-[14px] md:text-[20px] font-light text-[#565656] mb-[30px] whitespace-pre-line">{t("quickAccurate.description")}</p>
              <Image className="w-[470px] h-auto mb-5 mx-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s5.webp" alt={t("quickAccurate.alt")} width={1200} height={600} />
            </div>
          </FadeUpOnView>

          <FadeUpOnView delay={100}>
            <div className="py-[75px] px-4 max-w-7xl mx-auto text-center">
              <h3 className="font-bold text-third mb-[10px]">{t("safeComfortable.title")}</h3>
              <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">{t("safeComfortable.subtitle")}</p>
              <p className="text-[14px] md:text-[20px] font-light text-[#565656] mb-[30px] whitespace-pre-line">{t("safeComfortable.description")}</p>
              <Image className="w-[470px] h-auto mb-5 mx-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s6.webp" alt={t("safeComfortable.alt")} width={1200} height={600} />
            </div>
          </FadeUpOnView>
        </div>

        {/* 업소방문 수거방법 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
            <p className="text-[45px] font-bold text-[#141a46] leading-tight pb-[20px] whitespace-pre-line">{t("collectionMethod.title")}</p>

            {/* 첫 번째 항목 */}
            <FadeUpOnView>
              <div className="flex flex-col md:flex-row my-10">
                <div className="md:w-1/2 flex items-center justify-end md:pr-[50px]">
                  <div className="text-right">
                    <Image width={50} height={50} className="inline-block mb-[10px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num1.webp" alt={t("collectionMethod.steps.0.numAlt")} />
                    <p className="text-right text-[24px] font-bold text-[#0095d3]">{t("collectionMethod.steps.0.title")}</p>
                    <p className="text-right text-[16px] text-[#010101]">{t("collectionMethod.steps.0.description")}</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image width={600} height={400} className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_1.webp" alt={t("collectionMethod.steps.0.alt")} />
                </div>
              </div>
            </FadeUpOnView>

            {/* 두 번째 항목 */}
            <FadeUpOnView delay={100}>
              <div className="flex flex-col md:flex-row-reverse my-10">
                <div className="md:w-1/2 flex items-center justify-start md:pl-[50px]">
                  <div className="text-left">
                    <Image width={50} height={50} className="inline-block mb-[10px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num2.webp" alt={t("collectionMethod.steps.1.numAlt")} />
                    <p className="text-left text-[24px] font-bold text-[#0095d3]">{t("collectionMethod.steps.1.title")}</p>
                    <p className="text-left text-[16px] text-[#010101]">{t("collectionMethod.steps.1.description")}</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image width={600} height={400} className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_2.webp" alt={t("collectionMethod.steps.1.alt")} />
                </div>
              </div>
            </FadeUpOnView>

            {/* 세 번째 항목 */}
            <FadeUpOnView delay={200}>
              <div className="flex flex-col md:flex-row my-10">
                <div className="md:w-1/2 flex items-center justify-end md:pr-[50px]">
                  <div className="text-right">
                    <Image width={50} height={50} className="inline-block mb-[10px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num3.webp" alt={t("collectionMethod.steps.2.numAlt")} />
                    <p className="text-right text-[24px] font-bold text-[#0095d3]">{t("collectionMethod.steps.2.title")}</p>
                    <p className="text-right text-[16px] text-[#010101]">{t("collectionMethod.steps.2.description")}</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image width={600} height={400} className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_3.webp" alt={t("collectionMethod.steps.2.alt")} />
                </div>
              </div>
            </FadeUpOnView>

            {/* 네 번째 항목 */}
            <FadeUpOnView delay={300}>
              <div className="flex flex-col md:flex-row-reverse my-10">
                <div className="md:w-1/2 flex items-center justify-start md:pl-[50px]">
                  <div className="text-left">
                    <Image width={50} height={50} className="inline-block mb-[10px]" src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num4.webp" alt={t("collectionMethod.steps.3.numAlt")} />
                    <p className="text-left text-[24px] font-bold text-[#0095d3] whitespace-pre-line">{t("collectionMethod.steps.3.title")}</p>
                    <p className="text-left text-[16px] text-[#010101]">{t("collectionMethod.steps.3.description")}</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image width={600} height={400} className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_4.webp" alt={t("collectionMethod.steps.3.alt")} />
                </div>
              </div>
            </FadeUpOnView>
          </div>
        </div>

        {/* 결제시스템 구성도 섹션 */}
        <div className="w-full">
          <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
            <h3 className="font-bold text-third leading-tight">{t("systemDiagram.title")}</h3>
            <Image className="w-[470px] h-auto py-[30px] mx-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s9.webp" alt={t("systemDiagram.diagramAlt")} width={1200} height={600} />
            <h3 className="font-bold text-third mb-[10px]">{t("systemDiagram.systemTitle")}</h3>
            <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">{t("systemDiagram.systemSubtitle")}</p>
            <p className="text-[14px] md:text-[20px] font-light text-[#656565] mb-[75px] md:mb-[150px] whitespace-pre-line">{t("systemDiagram.systemDescription")}</p>

            <Image className="w-[470px] h-auto py-[30px] mx-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s10.webp" alt={t("systemDiagram.indicatorAlt")} width={1200} height={600} />
            <h3 className="font-bold text-third mb-[10px]">{t("systemDiagram.scaleTitle")}</h3>
            <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">{t("systemDiagram.scaleSubtitle")}</p>
            <p className="text-[14px] md:text-[20px] font-light mb-[10px]">{t("systemDiagram.scaleSpecs")}</p>
          </div>
        </div>

        {/* 푸터 이미지 */}
        <div className="w-full">
          <Image className="w-full h-auto" src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s11.webp" alt={t("header.finalAlt")} width={1920} height={600} />
        </div>
      </div>
    </div>
  );
}

// 메타데이터 생성 함수
export async function generateMetadata({ params }: RFIDPageProps) {
  const { locale } = await params;
  const { t } = getRfidTranslations(locale);

  return {
    title: t("title"),
    description: t("description"),
    keywords: locale === "ko" ? "코다, CODA, RFID, 음식물회수, 결제시스템, 선불, 후불, F&B, 업소, 차량용저울" : "CODA, RFID, food waste collection, payment system, prepaid, postpaid, F&B, business",
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

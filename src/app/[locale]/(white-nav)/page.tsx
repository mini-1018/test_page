import { getHomeTranslations } from "@lib/translations/home.trans";
import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";
import { Translation } from "@src/types/translation.type";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Locale } from "@lib/translator";
import AnimationHome from "./AnimationHome";
import PopUpUseClient from "@src/shared/components/popup/PopUpUseClient";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: { params: Promise<Translation> }) {
  const { locale } = await params;
  const { t } = getHomeTranslations(locale);

  return (
    <>
      <main className="bg-bg-gray">
        <PopUpUseClient
          imageUrl="images/popup/notice.jpg"
          imageAlt="명의도용 주의팝업"
          popupId="main_notice_popup"
        />
        {/* 메인 비주얼 섹션 */}
        <section className="w-full">
          <h1 className="sr-only">{t("title")}</h1>
          <div className="relative mt-[64px] md:mt-0">
            {/* <Image src="/images/brand/coda_main_s1.jpg" width={1920} height={1080} className="w-full h-auto" alt={t("mainImage")} priority={true} /> */}
            <img src="/images/brand/coda_main_s1.jpg" className="w-full" />
            {/* 텍스트 추가 */}
            <div className="absolute top-[25%] left-[30%] text-white font-bold leading-[1.5]" style={{ fontSize: "4vw" }}>
              <p>모으고</p>
              <p>살리고</p>
              <p>줄이고</p>
              <p>보상받기</p>
            </div>
          </div>
        </section>

        <ResponsivePadding>
          {/* 섹션 02 */}
          <section className="py-[150px] text-center">
            <div className="w-[1100px] max-w-[95%] mx-auto">
              <FadeUpOnView>
                <Image src="/images/common/logo.png" width={200} height={80} alt={t("logoAlt")} className="mx-auto mb-[30px] w-[120px] md:w-[150px]" />
              </FadeUpOnView>
              <FadeUpOnView delay={200}>
                <h2 className="mb-[50px]">
                  {t("section2.subtitle")}
                  <br />
                  {t("section2.title")}
                </h2>
              </FadeUpOnView>
            </div>
          </section>

          {/* 섹션 03 */}
          <section className="pb-[150px]">
            <div className="w-[1100px] max-w-[95%] mx-auto">
              {/* 첫 번째 콘텐츠 블록 */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                <div className="w-full md:w-[40%] order-2 md:order-1">
                  <FadeUpOnView>
                    <p className="text-[32px] bg-gradient-to-r from-[#4b8cca] to-white text-white pl-[10px] mr-[100px] font-light">{t("section3.block1.number")}</p>
                    <h3 className="my-[20px] font-bold whitespace-pre-line">{t("section3.block1.title")}</h3>
                  </FadeUpOnView>
                  <FadeUpOnView delay={200}>
                    <p className="text-[18px] xl:text-[22px] leading-[1.5] whitespace-pre-line">{t("section3.block1.description")}</p>
                  </FadeUpOnView>
                </div>
                <div className="w-full md:w-[47%] overflow-hidden rounded-[30px] order-1 md:order-2">
                  <FadeUpOnView>
                    <Image src="/images/main/main_sec02_1.jpg" width={600} height={400} alt={t("section3.block1.imageAlt")} className="w-full h-auto transition-transform hover:scale-105" />
                  </FadeUpOnView>
                </div>
              </div>

              {/* 두 번째 콘텐츠 블록 */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mt-[150px]">
                <div className="w-full md:w-[47%] overflow-hidden rounded-[30px]">
                  <FadeUpOnView>
                    <Image src="/images/main/main_sec02_2.jpg" width={600} height={400} alt={t("section3.block2.imageAlt")} className="w-full h-auto transition-transform hover:scale-105" />
                  </FadeUpOnView>
                </div>
                <div className="w-full md:w-[40%]">
                  <FadeUpOnView>
                    <p className="text-[32px] text-[#4b8cca] bg-gradient-to-r from-[#4b8cca] to-white text-white pl-[10px] mr-[100px] font-light">{t("section3.block2.number")}</p>
                    <h3 className="text-[42px] leading-[1.3] my-[20px] font-bold whitespace-pre-line">{t("section3.block2.title")}</h3>
                  </FadeUpOnView>
                  <FadeUpOnView delay={200}>
                    <p className="text-[18px] xl:text-[22px] leading-[1.5] whitespace-pre-line">{t("section3.block2.description")}</p>
                  </FadeUpOnView>
                </div>
              </div>
            </div>
          </section>

          {/* 섹션 04 */}
          <section className="pt-[150px] pb-[150px]">
            <div className="w-[1100px] max-w-[95%] mx-auto">
              <div className="mb-[50px] flex flex-col items-center">
                <FadeUpOnView>
                  <Image src="/images/main/main_sec03_logo.png" width={110} height={110} alt={t("logoAlt")} className="mx-auto mb-[30px] w-[110px] md:w-[110px]" />
                  <h3>CODA PRODUCT LINE-UP</h3>
                </FadeUpOnView>
              </div>
              <FadeUpOnView delay={200}>
                <AnimationHome locale={locale} />
              </FadeUpOnView>
            </div>
          </section>
        </ResponsivePadding>
      </main>
    </>
  );
}

// 홈페이지 generateMetadata
export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getHomeTranslations(locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: "/ko",
        en: "/en",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}`,
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

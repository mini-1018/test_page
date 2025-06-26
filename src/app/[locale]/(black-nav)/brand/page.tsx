import Image from "next/image";
import metaData from "@shared/metaData/metaData";
import Typewriter from "@shared/components/common/TyperwriterText";
import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import { getBrandTranslations } from "@lib/translations/brand.trans";
import type { Locale } from "@lib/translator";

interface BrandPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { locale } = await params;
  const { t } = getBrandTranslations(locale);

  return (
    <main className="w-full">
      {/* 자원 선순환 플랫폼 섹션 */}
      <section className="w-full mt-40 mb-60 md:mt-60 md:mb-80">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2.5 flex justify-center">
            <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s2.webp" width={300} height={300} alt={t("section1.imageAlt")} className="rounded-none w-[150px] md:w-[250px]" priority={true} />
          </div>
          <div className="text-center">
            <Typewriter className="text-4xl font-bold text-secondary mt-12 mb-8">{t("section1.title")}</Typewriter>
            <FadeUpOnView delay={locale == "ko" ? 1000 : 2500}>
              <p className="text-xl font-light text-gray-500">{t("section1.description")}</p>
            </FadeUpOnView>
          </div>
        </div>
      </section>

      {/* 바다환경변화 이야기 섹션 */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4">
          <FadeUpOnView>
            <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s3_text.webp" width={1200} height={600} alt={t("section2.imageAlt")} className="w-full h-auto" />
          </FadeUpOnView>
        </div>
      </section>

      {/* 향유고래 자연보전 섹션 */}
      <section className="w-full bg-gray-50 py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <FadeUpOnView>
              <h2 className="text-5xl font-bold text-third leading-tight whitespace-pre-line">{t("section3.title")}</h2>
            </FadeUpOnView>
          </div>

          {/* 컨텐츠 블록들 */}
          <div className="space-y-24">
            {/* 첫 번째 블록 */}
            <FadeUpOnView>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* 텍스트 */}
                <div className="w-full lg:w-1/2 text-right lg:pr-12 order-1">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num1.webp" width={50} height={50} alt="코다(CODA) 1번 컨텐츠" className="inline-block mb-2.5" />
                  <h3 className="!text-2xl font-bold text-secondary mb-2">{t("section3.blocks.block1.title")}</h3>
                  <p className="text-base text-black">{t("section3.blocks.block1.description")}</p>
                </div>
                {/* 이미지 */}
                <div className="w-full lg:w-1/2 order-2">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_1.webp" width={600} height={400} alt={t("section3.blocks.block1.imageAlt")} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </FadeUpOnView>

            {/* 두 번째 블록 */}
            <FadeUpOnView>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* 텍스트 */}
                <div className="w-full lg:w-1/2 text-left lg:pl-12 order-1 sm:order-2">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num2.webp" width={50} height={50} alt="코다(CODA) 2번 컨텐츠" className="inline-block mb-2.5" />
                  <h3 className="!text-2xl font-bold text-secondary mb-2">{t("section3.blocks.block2.title")}</h3>
                  <p className="text-base text-black">{t("section3.blocks.block2.description")}</p>
                </div>
                {/* 이미지 */}
                <div className="w-full lg:w-1/2 order-2 sm:order-1">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_2.webp" width={600} height={400} alt={t("section3.blocks.block2.imageAlt")} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </FadeUpOnView>

            {/* 세 번째 블록 */}
            <FadeUpOnView>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* 텍스트 */}
                <div className="w-full lg:w-1/2 text-right lg:pr-12 order-1">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num3.webp" width={50} height={50} alt="코다(CODA) 3번 컨텐츠" className="inline-block mb-2.5" />
                  <h3 className="!text-2xl font-bold text-secondary mb-2">{t("section3.blocks.block3.title")}</h3>
                  <p className="text-base text-black">{t("section3.blocks.block3.description")}</p>
                </div>
                {/* 이미지 */}
                <div className="w-full lg:w-1/2 order-2">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_3.webp" width={600} height={400} alt={t("section3.blocks.block3.imageAlt")} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </FadeUpOnView>

            {/* 네 번째 블록 */}
            <FadeUpOnView>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* 텍스트 */}
                <div className="w-full lg:w-1/2 text-left lg:pl-12 order-1 sm:order-2">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num4.webp" width={50} height={50} alt="코다(CODA) 4번 컨텐츠" className="inline-block mb-2.5" />
                  <h3 className="!text-2xl font-bold text-secondary mb-2 whitespace-pre-line">{t("section3.blocks.block4.title")}</h3>
                  <p className="text-base text-black">{t("section3.blocks.block4.description")}</p>
                </div>
                {/* 이미지 */}
                <div className="w-full lg:w-1/2 order-2 sm:order-1">
                  <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_4.webp" width={600} height={400} alt={t("section3.blocks.block4.imageAlt")} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </FadeUpOnView>
          </div>
        </div>
      </section>

      {/* 재활용자원 모아주세요 섹션 */}
      <FadeUpOnView>
        <section className="w-full py-40">
          <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold text-third leading-tight mb-8 whitespace-pre-line">{t("section4.title")}</h2>
            <p className="text-3xl font-light text-gray-600 mb-24">{t("section4.subtitle")}</p>
            <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s5.webp" width={1200} height={600} alt={t("section4.imageAlt")} className="w-[70%] h-auto" />
          </div>
        </section>
      </FadeUpOnView>

      {/* 포트폴리오 섹션 */}
      <section
        className="w-full py-48 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s7_bg.webp')",
        }}
      >
        <div className="w-[95%] mx-auto px-4 text-center">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s7_text.webp" width={1980} height={1000} alt={t("section5.imageAlt")} className="w-full h-auto" />
        </div>
      </section>
    </main>
  );
}

// 메타데이터 생성 함수 (다국어 지원)
export async function generateMetadata({ params }: BrandPageProps) {
  const { locale } = await params;
  const { t } = getBrandTranslations(locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: metaData.brand.alternates.canonical,
    },
    keywords: metaData.brand.keywords,
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

import { getHomeTranslations } from "@lib/translations/home.trans";
import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";
import { Translation } from "@src/types/translation.type";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "코다(CODA) 메인페이지",
  description: "코다(CODA) 메인페이지",
};
export default async function HomePage({ params }: { params: Promise<Translation> }) {
  const { locale } = await params;
  const { t } = getHomeTranslations(locale);

  return (
    <>
      <main>
        {/* 메인 비주얼 섹션 */}
        <section className="w-full">
          <h1 className="sr-only">{t("title")}</h1>
          <div className="relative mt-[64px] md:mt-0">
            <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp" width={1920} height={1080} className="w-full h-auto" alt={t("mainImage")} priority={true} />
          </div>
        </section>

        <ResponsivePadding>
          {/* 섹션 02 */}
          <section className="py-[150px] text-center">
            <div className="w-[1100px] max-w-[95%] mx-auto">
              <FadeUpOnView>
                <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.webp" width={200} height={80} alt={t("logoAlt")} className="mx-auto mb-[30px] w-[120px] md:w-[180px]" />
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
          <section className="pb-[150px] bg-gradient-to-b from-transparent to-[#f9fafb]">
            <div className="w-[1100px] max-w-[95%] mx-auto">
              {/* 첫 번째 콘텐츠 블록 */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                <div className="w-full md:w-[40%] order-2 md:order-1">
                  <FadeUpOnView>
                    <p className="text-[32px] text-[#4b8cca] bg-gradient-to-r from-[#4b8cca] to-white text-white pl-[10px] mr-[100px] font-light">{t("section3.block1.number")}</p>
                    <h3 className="my-[20px] font-bold whitespace-pre-line">{t("section3.block1.title")}</h3>
                  </FadeUpOnView>
                  <FadeUpOnView delay={200}>
                    <p className="text-[18px] xl:text-[22px] leading-[1.5] whitespace-pre-line">{t("section3.block1.description")}</p>
                  </FadeUpOnView>
                </div>
                <div className="w-full md:w-[47%] overflow-hidden rounded-[30px] order-1 md:order-2">
                  <FadeUpOnView>
                    <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_1.webp" width={600} height={400} alt={t("section3.block1.imageAlt")} className="w-full h-auto transition-transform hover:scale-105" />
                  </FadeUpOnView>
                </div>
              </div>

              {/* 두 번째 콘텐츠 블록 */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mt-[150px]">
                <div className="w-full md:w-[47%] overflow-hidden rounded-[30px]">
                  <FadeUpOnView>
                    <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_2.webp" width={600} height={400} alt={t("section3.block2.imageAlt")} className="w-full h-auto transition-transform hover:scale-105" />
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
              <div className="mb-[50px]">
                <FadeUpOnView>
                  <h2 className="text-[20px] text-[#4b8cca] font-bold">{t("section4.subtitle")}</h2>
                </FadeUpOnView>
                <FadeUpOnView delay={200}>
                  <h3 className="text-[42px] leading-[1.3] mt-[20px] font-bold whitespace-pre-line">{t("section4.title")}</h3>
                </FadeUpOnView>
              </div>
              <FadeUpOnView delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  {[
                    {
                      title: t("section4.products.ReverseVendingMachine"),
                      link: "products/reverse-vending-machines",
                      img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_1.webp",
                    },
                    {
                      title: t("section4.products.rfid"),
                      link: "products/vehicle-food-waste-billing-system",
                      img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_2.webp",
                    },
                    {
                      title: t("section4.products.Food waste billing system"),
                      link: "products/food-waste-billing-system",
                      img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_4.webp",
                    },
                    {
                      title: t("section4.products.learnMore"),
                      link: "brand",
                      img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_5.webp",
                    },
                  ].map((item, index) => (
                    <Link href={`/${locale}/${item.link}`} key={index} className="relative overflow-hidden rounded-[20px] group">
                      <Image src={item.img} width={600} height={400} alt={item.title} className="w-full h-auto transition-transform group-hover:scale-105" />
                      <h5 className="absolute bottom-[30px] left-[30px] text-[22px] sm:text-[24px] md:text-[22px] xl:text-[30px] text-[#565656] font-light">{item.title}</h5>
                    </Link>
                  ))}
                </div>
              </FadeUpOnView>
            </div>
          </section>
        </ResponsivePadding>
      </main>
    </>
  );
}

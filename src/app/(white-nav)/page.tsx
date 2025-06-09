import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "코다(CODA) 메인페이지",
  description: "코다(CODA) 메인페이지",
};

export default function HomePage() {
  return (
    <>
      <main>
        {/* 메인 비주얼 섹션 */}
        <section className="w-full">
          <h1 className="sr-only">코다(CODA) 메인페이지</h1>
          <div className="relative mt-[64px] md:mt-0">
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp"
              width={1920}
              height={1080}
              className="w-full h-auto"
              alt="코다(CODA) 메인 이미지"
              priority
            />
          </div>
        </section>

        <ResponsivePadding>
        {/* 섹션 02 */}
        <section className="py-[150px] text-center">
          <div className="w-[1100px] max-w-[95%] mx-auto">
            <FadeUpOnView>
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.webp"
              width={200}
              height={80}
              alt="코다(CODA) 로고"
              className="mx-auto mb-[30px] w-[120px] md:w-[180px]"
            />
            </FadeUpOnView>
            <FadeUpOnView delay={200}>
            <h2 className="mb-[50px]">
              바다 속 향유고래 지킴이
              <br />
              자원순환 CAN+PET 무인회수기
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
                <p className="text-[32px] text-[#4b8cca] bg-gradient-to-r from-[#4b8cca] to-white text-white pl-[10px] mr-[100px] font-light">
                  01
                </p>
                <h3 className="my-[20px] font-bold">
                  지구를 지키는 작은 시작
                  <br />
                  CODA의 순환 이야기
                </h3>
                </FadeUpOnView>
                <FadeUpOnView delay={200}>
                <p className="text-[18px] xl:text-[22px] leading-[1.5]">
                  매일 버려지는 페트병과 캔을 깨끗한{" "}
                  <br className="hidden md:block" />
                  자원으로 만드는 선별/수집 시스템과 물류 인프라를{" "}
                  <br className="hidden md:block" />
                  구축하여 여러분의 작은 습관으로 지구를{" "}
                  <br className="hidden md:block" />
                  지키는데 함께 합니다.
                </p>
                </FadeUpOnView>
              </div>
              <div className="w-full md:w-[47%] overflow-hidden rounded-[30px] order-1 md:order-2">
                <FadeUpOnView>
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_1.webp"
                  width={600}
                  height={400}
                  alt="코다(CODA) 지구를 지키는 작은 시작"
                  className="w-full h-auto transition-transform hover:scale-105"
                />
                </FadeUpOnView>
              </div>
            </div>

            {/* 두 번째 콘텐츠 블록 */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mt-[150px]">
              <div className="w-full md:w-[47%] overflow-hidden rounded-[30px]">
                <FadeUpOnView>
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_2.webp"
                  width={600}
                  height={400}
                  alt="코다(CODA) 건강한 지구를 위한 활동"
                  className="w-full h-auto transition-transform hover:scale-105"
                />
                </FadeUpOnView>
              </div>
              <div className="w-full md:w-[40%]">
                <FadeUpOnView>
                <p className="text-[32px] text-[#4b8cca] bg-gradient-to-r from-[#4b8cca] to-white text-white pl-[10px] mr-[100px] font-light">
                  02
                </p>
                <h3 className="text-[42px] leading-[1.3] my-[20px] font-bold">
                  건강한 지구를 위한 활동
                  <br />
                  CODA와 함께 해주세요.
                </h3>
                </FadeUpOnView>
                <FadeUpOnView delay={200}>
                <p className="text-[18px] xl:text-[22px] leading-[1.5]">
                  버려지는 페트병에 바다생물이{" "}
                  <br className="hidden md:block" />
                  아프지 않도록 나아가 다음 세대들의{" "}
                  <br className="hidden md:block" />
                  건강한 삶을 지킬 수 있도록 <br className="hidden md:block" />
                  CODA와 함께 해주세요.
                </p>
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
              <h2 className="text-[20px] text-[#4b8cca] font-bold">제품소개</h2>
              </FadeUpOnView>
              <FadeUpOnView delay={200}>
              <h3 className="text-[42px] leading-[1.3] mt-[20px] font-bold">
                CODA와 함께
                <br />
                환경을 지켜주세요.
              </h3>
              </FadeUpOnView>
            </div>
            <FadeUpOnView delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {[
                {
                  title: "무인회수기",
                  link: "products/recycle-machines",
                  img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_1.webp",
                },
                {
                  title: "차량용RFID",
                  link: "products/rfid",
                  img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_2.webp",
                },
                {
                  title: "음식물종량기",
                  link: "products/food-waste-disposal",
                  img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_4.webp",
                },
                {
                  title: "CODA 더 알아보기",
                  link: "brand",
                  img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_5.webp",
                },
              ].map((item, index) => (
                <Link
                  href={`/${item.link}`}
                  key={index}
                  className="relative overflow-hidden rounded-[20px] group"
                >
                  <Image
                    src={item.img}
                    width={600}
                    height={400}
                    alt={item.title}
                    className="w-full h-auto transition-transform group-hover:scale-105"
                  />
                  <h5 className="absolute bottom-[30px] left-[30px] text-[22px] sm:text-[24px] md:text-[22px] xl:text-[30px] text-[#565656] font-light">
                    {item.title}{" "}
                  </h5>
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

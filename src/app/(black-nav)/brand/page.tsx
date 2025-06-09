import Image from "next/image";
import metaData from "@shared/metaData/metaData";

const title = metaData.brand.title;
const description = metaData.brand.description;
const keywords = metaData.brand.keywords;
const canonical = metaData.brand.alternates.canonical;

export const metadata = {
  title,
  description,
  alternates: {
    canonical: canonical,
  },
  keywords,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};

export default function BrandPage() {
  return (
    <main className="w-full">
      {/* 자원 선순환 플랫폼 섹션 */}
      <section className="w-full mt-44 mb-80">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-2.5 flex justify-center">
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s2.webp"
              width={300}
              height={300}
              alt="코다(CODA) 자원 선순환 플랫폼"
              className="rounded-none"
            />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-500 mt-12 mb-8">
              자원 선순환 플랫폼
            </h2>
            <p className="text-xl font-light text-gray-500">
              바다를 자유롭게 헤엄치며 서로 대화하는 향유고래만의 언어인 코다를
              모티브로 삼은 '자원 순환 브랜드'입니다
            </p>
          </div>
        </div>
      </section>

      {/* 바다환경변화 이야기 섹션 */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4">
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s3_text.webp"
            width={1200}
            height={600}
            alt="코다(CODA) 바다환경변화 이야기"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* 향유고래 자연보전 섹션 */}
      <section className="w-full bg-gray-50 py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-indigo-900 leading-tight">
              향유고래
              <br />
              자연보전
            </h2>
          </div>

          {/* 컨텐츠 블록들 */}
          <div className="space-y-24">
            {/* 첫 번째 블록 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 text-right lg:pr-12">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num1.webp"
                  width={50}
                  height={50}
                  alt="코다(CODA) 1번 컨텐츠"
                  className="inline-block mb-2.5"
                />
                <h3 className="text-2xl font-bold text-blue-500 mb-2">
                  하와이 섬, 해변에서 발견된 향유고래
                </h3>
                <p className="text-base text-black">
                  [세계자연보전연맹 IUCN, 적색목록 '취약']
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_1.webp"
                  width={600}
                  height={400}
                  alt="코다(CODA) 해변에서 발견된 향유고래"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* 두 번째 블록 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_2.webp"
                  width={600}
                  height={400}
                  alt="코다(CODA) 전세계 해양쓰레기로 인한 피해"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 text-left lg:pl-12">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num2.webp"
                  width={50}
                  height={50}
                  alt="코다(CODA) 2번 컨텐츠"
                  className="inline-block mb-2.5"
                />
                <h3 className="text-2xl font-bold text-blue-500 mb-2">
                  전세계 해양쓰레기로 인한 피해
                </h3>
                <p className="text-base text-black">
                  [플라스틱 용기와 페트병 쓰레기의 사전 예방 필요성 증가]
                </p>
              </div>
            </div>

            {/* 세 번째 블록 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 text-right lg:pr-12">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num3.webp"
                  width={50}
                  height={50}
                  alt="코다(CODA) 3번 컨텐츠"
                  className="inline-block mb-2.5"
                />
                <h3 className="text-2xl font-bold text-blue-500 mb-2">
                  넘치는 페트병, 캔 폐기물
                </h3>
                <p className="text-base text-black">
                  [유엔환경계획 UNEP, 매년 800만톤 '해양쓰레기 발생']
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_3.webp"
                  width={600}
                  height={400}
                  alt="코다(CODA) 넘치는 페트병, 캔 폐기물"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* 네 번째 블록 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s4_4.webp"
                  width={600}
                  height={400}
                  alt="코다(CODA) 탄소 중립 시대"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 text-left lg:pl-12">
                <Image
                  src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num4.webp"
                  width={50}
                  height={50}
                  alt="코다(CODA) 4번 컨텐츠"
                  className="inline-block mb-2.5"
                />
                <h3 className="text-2xl font-bold text-blue-500 mb-2">
                  탄소 중립 시대
                  <br />
                  공기 중의 이산화탄소 농도 줄이기
                </h3>
                <p className="text-base text-black">
                  [RE100 - 온실가스 배출 저감 위한 대처방안]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 재활용자원 모아주세요 섹션 */}
      <section className="w-full py-40">
        <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-5xl font-bold text-indigo-900 leading-tight mb-8">
            재활용자원
            <br />
            모아주세요
          </h2>
          <p className="text-3xl font-light text-gray-600 mb-24">
            '자원을 아끼며 보살필 때, 자연 환경을 회복합니다.'
          </p>
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s5.webp"
            width={1200}
            height={600}
            alt="코다(CODA) 재활용자원 모아주세요"
            className="w-[70%] h-auto"
          />
        </div>
      </section>

      {/* 포트폴리오 섹션 */}
      <section
        className="w-full py-48 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s7_bg.webp')",
        }}
      >
        <div className="w-[95%] mx-auto px-4 text-center">
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s7_text.webp"
            width={1980}
            height={1000}
            alt="코다(CODA) 포트폴리오"
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}

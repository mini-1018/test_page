import Image from "next/image";
import AnimationFWD from "./animationFWD";

export default function CodaFoodPage() {
  return (
    <>
      <main className="w-full mb-0">
        {/* 메인 비주얼 섹션 */}
        <section className="w-full">
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s1.webp"
            width={1920}
            height={1080}
            className="w-full h-auto"
            alt="우수 발명품 및 조달청 우수제품 선정 음식물 종량기"
            priority
          />
        </section>

        <AnimationFWD />

        {/* RFID 기반 음식물 종량기 섹션 */}
        <section className="w-full mt-44 mb-80">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="mb-8">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s2.webp"
                width={800}
                height={600}
                alt="코다(CODA) 음식물 종량기 이미지"
                className="w-[100px] h-auto mx-auto"
              />
            </div>
            <div>
              <h2 className="text-5xl font-normal text-gray-600 mb-2">
                RFID 기반
              </h2>
              <h3 className="text-5xl font-bold text-indigo-900 mb-6">
                음식물 종량기
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed">
                우수 발명품 선정, 우선 구매 추천
                <br />
                무선주파수를 이용해 ID 식별하는 시스템으로
                <br />
                배출량에 따라 요금 부과 방식
              </p>
            </div>
          </div>
        </section>

        {/* 신용카드 선불제 섹션 */}
        <section className="w-full">
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s3.webp"
            width={1920}
            height={1080}
            alt="신용카드 사용가능 선불제 장비 - 최초인증 음식물 종량기"
            className="w-full h-auto"
          />
        </section>

        {/* 고장 진단 기능 섹션 */}
        <section className="w-full py-36">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-indigo-900 leading-tight mb-4">
              고장 진단 기능 구비한 <br />
              음식물류폐기물 종량관리 시스템
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12">
              특허 제 10-150711호 성능인증 제 15-1354호 (중소기업청 인증)
            </p>
            <div className="mb-5">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s4.webp"
                width={700}
                height={500}
                alt="고장 진단 기능 구비한 음식물류폐기물 종량관리 시스템"
                className="w-full max-w-2xl h-auto mx-auto"
              />
            </div>
            <div className="flex justify-center">
              <div className="bg-indigo-900 text-gray-200 text-lg font-light px-32 py-1">
                배출수수료 누락방지 시스템 적용 / 손끼임 방지 / 오물 투척 예방
                제품
              </div>
            </div>
          </div>
        </section>

        {/* 우수제품 지정증서 섹션 */}
        <section className="w-full bg-gray-50 py-36">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s5.webp"
              width={700}
              height={500}
              alt="코다(CODA) 음식물 종량기 우수제품지정증서, 우수발명품 우선구매추천 확인서"
              className="w-full max-w-2xl h-auto mx-auto"
            />
          </div>
        </section>

        {/* 제품 특징 섹션들 */}
        <section className="w-full py-24">
          <div className="max-w-6xl mx-auto px-4">
            {/* 캐노피 내부 디스플레이 */}
            <div className="pb-24 mt-24 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-indigo-900 mb-2">
                캐노피 내부, 눈높이 디스플레이 적용
              </h3>
              <h4 className="text-2xl text-indigo-900 mb-2">
                인체 공학 고려한 키패드가 비와 음식물이 묻지 않고 청결 유지
              </h4>
              <p className="text-lg font-light text-gray-600 mb-8">
                오염, 연분, 동계 결로 현상 대비한 사용편리성
              </p>
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s6.webp"
                width={1200}
                height={800}
                alt="코다(CODA) 음식물 종량기 - 편리한 디스플레이"
                className="w-[400px] h-auto"
              />
            </div>

            {/* 자사 디스플레이 */}
            <div className="pb-24 mt-24 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-indigo-900 mb-2">
                자사 디스플레이 128 x 64 그래픽 적용
              </h3>
              <h4 className="text-2xl font-bold text-indigo-900 mb-2">
                한글 8줄 그래픽 및 백라이팅 기능 추가된 선명한 대형 LCD
              </h4>
              <p className="text-lg font-light text-gray-600 mb-8">
                직관적인 UI 디자인으로 사용자 편의 우선 주의
              </p>
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s7.webp"
                width={1200}
                height={800}
                alt="코다(CODA) 음식물 종량기 - 직관적인 디스플레이"
                className="w-[400px] h-auto"
              />
            </div>

            {/* 스테인레스 재질 */}
            <div className="pb-24 mt-24 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-indigo-900 mb-2">
                스테인레스 재질 적용으로 보다 편한 물 청소
              </h3>
              <h4 className="text-2xl font-bold text-indigo-900 mb-2">
                음식물 염분과 가스로부터 발생하는 부식 방지
              </h4>
              <p className="text-lg font-light text-gray-600 mb-8">
                부식 방지 및 물 청소를 통해 청결 관리 가능
              </p>
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s8.webp"
                width={1200}
                height={800}
                alt="코다(CODA) 음식물 종량기 - 스테인레스 재질 적용으로 편한 물 청소"
                className="w-[400px] h-auto"
              />
            </div>

            {/* 다양한 설치 장소 */}
            <div className="pb-24 mt-24 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-indigo-900 mb-2">
                다양한 설치 장소 및 사례
              </h3>
              <h4 className="text-2xl font-bold text-indigo-900 mb-8">
                지자체별 로고 및 시트 디자인, 현수막 등 맞춤 제공
              </h4>
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s9.webp"
                width={1200}
                height={800}
                alt="코다(CODA) 음식물 종량기 - 다양한 설치 장소 및 사례"
                className="w-[400px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* RFID 기반 마지막 섹션 */}
        <section className="w-full mt-48">
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_food/coda_food_s11.webp"
            width={1920}
            height={1080}
            alt="코다(CODA) 음식물 종량기 - RFID기반"
            className="w-full h-auto"
          />
        </section>
      </main>
    </>
  );
}

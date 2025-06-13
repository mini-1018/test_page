import Image from "next/image";

export default function AnimationFWD() {
  return (
    <>
      {/* 스크롤링 섹션 1 */}
      <section className="w-full py-[75px] md:py-[150px] flex flex-col items-center mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="font-bold text-third inline">
            전국 지자체가 선택한 검증된 음식물 종량기
          </h2>
        </div>
        <div className="w-full overflow-hidden relative flex flex-col">
          {/* 왼쪽으로 스크롤하는 첫 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-left whitespace-nowrap">
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
          </div>
          
          {/* 오른쪽으로 스크롤하는 두 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-right whitespace-nowrap">
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
          </div>

          {/* 세 번째 그룹 */}
          <div className="flex carousell-scroll-left whitespace-nowrap">
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
            <Image
              src="/img/coda_fwd_01.webp"
              width={1980}
              height={400}
              alt="스크롤 이미지"
              className="flex-shrink-0 w-[1024px] lg:w-[1980px] h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
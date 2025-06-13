import Image from "next/image";

export default function AnimationFWD() {
  return (
    <>
      <section className="w-full py-[75px] md:py-[150px] flex flex-col items-center mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="font-bold text-third inline">
            전국 지자체가 선택한 검증된 음식물 종량기
          </h2>
        </div>
        
        <div className="w-full overflow-hidden relative flex flex-col gap-4 md:gap-6">
          {/* 왼쪽으로 스크롤하는 첫 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-left">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_01.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px]"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_01.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px]"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_01.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px]"
              />
            </div>
          </div>
          
          {/* 오른쪽으로 스크롤하는 두 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-right">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_02.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-auto"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_02.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-auto"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_02.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* 세 번째 그룹 */}
          <div className="flex carousell-scroll-left">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_03.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px]"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_03.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px]"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="/img/coda_fwd_03.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
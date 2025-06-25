import Image from "next/image";

export default function AnimationFWD() {
  return (
    <>
      <section className="w-full py-[75px] md:py-[150px] flex flex-col items-center mx-auto">
        <div className="text-center mb-16 px-4 space-y-1 md:space-y-2">
          <h2 className="font-bold text-third">
            전국 지자체가 선택한
          </h2>
          <h2 className="font-bold text-third">
            검증된 음식물 종량기
          </h2>
        </div>
        
        <div className="w-full overflow-hidden relative flex flex-col gap-4 md:gap-10">
          {/* 왼쪽으로 스크롤하는 첫 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-left">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_01.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_01.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_01.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
          </div>
          
          {/* 오른쪽으로 스크롤하는 두 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-right_40s">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_02.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_02.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
            <div className="flex-shrink-0 h-[31.72px] md:h-[61.36px] w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_02.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
          </div>
          
          {/* 세 번째 그룹 */}
          <div className="flex carousell-scroll-left_40s">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_03.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_03.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/coda_fwd_03.webp"
                width={1980}
                height={61}
                alt="스크롤 이미지"
                className="w-full h-[31.72px] md:h-[61.36px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
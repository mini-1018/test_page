import Image from "next/image";

export default function AnimationFWD() {
  return (
    <>
      <div className="w-full pt-20 md:pt-40 flex flex-col items-center mx-auto">
        <div className="w-full overflow-hidden relative flex flex-col gap-4 md:gap-10">
          {/* 왼쪽으로 스크롤하는 첫 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-left">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_01.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_01.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_01.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
          </div>

          {/* 오른쪽으로 스크롤하는 두 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-right_40s">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_02.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_02.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
            <div className="flex-shrink-0 h-[31.72px] md:h-[61.36px] w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_02.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
          </div>

          {/* 세 번째 그룹 */}
          <div className="flex carousell-scroll-left_40s">
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_03.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_03.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
            <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]">
              <Image src="/images/coda_fwd_03.webp" width={1980} height={61} alt="스크롤 이미지" className="w-full h-[31.72px] md:h-[61.36px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

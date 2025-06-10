import Image from "next/image";

export default function AnimationFWD() {
  return (
    <>
      {/* 스크롤링 섹션 1 */}
      <section className="w-full py-[75px] md:py-[150px] flex flex-col items-center">
        <div className="text-center mb-12 px-4">
          <h2 className="font-bold text-third inline">
            전국 지자체가 선택한 검증된 음식물 종량기
          </h2>
        </div>
        <div className="w-[80%] overflow-hidden relative">
          {/* 왼쪽으로 스크롤하는 첫 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-left whitespace-nowrap">
            <div className="flex min-w-full">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/etc1.png"
                width={1980}
                height={400}
                alt="스크롤 이미지"
                className="h-auto pt-16 inline-block"
              />
            </div>
            <div className="flex min-w-full">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/etc1.png"
                width={1980}
                height={400}
                alt="스크롤 이미지"
                className="h-auto pt-16 inline-block"
              />
            </div>
          </div>
          {/* 왼쪽으로 스크롤하는 첫 번째 이미지 그룹 */}
          <div className="flex carousell-scroll-right whitespace-nowrap">
            <div className="flex min-w-full">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/etc1.png"
                width={1980}
                height={400}
                alt="스크롤 이미지"
                className="h-auto pt-16 inline-block"
              />
            </div>
            <div className="flex min-w-full">
              <Image
                src="https://do40f6yw4fd7i.cloudfront.net/img13/etc1.png"
                width={1980}
                height={400}
                alt="스크롤 이미지"
                className="h-auto pt-16 inline-block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

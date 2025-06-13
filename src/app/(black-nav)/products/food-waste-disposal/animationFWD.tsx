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
  
  {/* 컨테이너에 추가 클래스 적용 */}
  <div className="w-full overflow-hidden relative flex flex-col" style={{ lineHeight: 0, fontSize: 0 }}>
    {/* 왼쪽으로 스크롤하는 첫 번째 이미지 그룹 */}
    <div className="flex carousell-scroll-left" style={{ lineHeight: 0 }}>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
    </div>
    
    {/* 오른쪽으로 스크롤하는 두 번째 이미지 그룹 */}
    <div className="flex carousell-scroll-right" style={{ lineHeight: 0 }}>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
    </div>
    
    {/* 세 번째 그룹 */}
    <div className="flex carousell-scroll-left" style={{ lineHeight: 0 }}>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
      <div className="flex-shrink-0 w-[1024px] lg:w-[1980px]" style={{ lineHeight: 0 }}>
        <img
          src="/img/coda_fwd_01.webp"
          width={1980}
          height={400}
          alt="스크롤 이미지"
          className="w-full h-auto object-cover"
          style={{ display: 'block', lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
    </div>
  </div>
</section>
    </>
  );
}
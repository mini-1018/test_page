import CarouselRender from "@shared/components/carousel/Carousel.render";
import Image from "next/image";

export default function Test2() {
  return (
    <div className="w-screen h-screen flex-col justify-center items-center relative">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">제품소개</h2>
        <h4 className="text-3xl font-bold text-white mb-4">
          코다(CODA)와 함께 환경을 지켜주세요.
        </h4>
      </div>
      <Image
        src={
          "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_5.webp"
        }
        fill
        alt="바다 배경"
      />
      <div className="absolute top-50 left-20">
        <h2 className="text-3xl font-bold text-white mb-4">제품소개</h2>
        <h4 className="text-3xl font-bold text-white mb-4">
          코다(CODA)와 함께 환경을 지켜주세요.
        </h4>
      </div>
      <div className="flex justify-center items-center">
        <CarouselRender />
      </div>
    </div>
  );
}

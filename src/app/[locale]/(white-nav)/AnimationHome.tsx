"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const data = [
  {
    title: "재활용품 무인회수기",
    description: "CODA만의 독자적인 인공지능을 통한\n자원 순환 회수 프로세스",
    src: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_1.png",
    link: "products/reverse-vending-machines/crusher",
  },
  {
    title: "재활용품 무인회수기\n(ESG전용)",
    description: "탄소 배출 감축 전용",
    src: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_2.png",
    link: "products/reverse-vending-machines/esg",
  },
  {
    title: "음식물 종량기",
    description: "RFID를 이용해 ID를 식별하여\n배출량에 따라 요금을 부과",
    src: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_3.png",
    link: "products/food-waste-billing-system",
  },
  {
    title: "음식물 수거 차량\n RFID 결제 시스템",
    description: "RFID를 이용해 업소에서 발생하는\n배출량에 따라 결제되는 선·후불 시스템",
    src: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_4.png",
    link: "products/vehicle-food-waste-billing-system",
  },
  {
    title: "재활용 IoT 저울",
    description: "품목별 무게를 측정하고 실시간으로 서버에\n전송·저장할 수 있는 지능형 계측기",
    src: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_5.png",
    link: "/products/iot-recycling-scale",
  },
];

export default function AnimationHome() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      breakpoints: {
        "(max-width: 768px)": {
          slidesToScroll: 1,
        },
        "(min-width: 769px)": {
          slidesToScroll: 1,
        },
      },
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
      }),
    ]
  );

  const handleToastClick = () => {
    toast("COMING SOON", {
      description: "준비중입니다.",
      style: {
        background: "white",
        color: "#434343",
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    });
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-[560px]">
          {data.map((item, index) => (
            <div key={index} className="min-w-0 flex-shrink-0 flex-grow-0 basis-1/3 px-2" style={{ flexBasis: "calc(100% / 3)" }}>
              {item.title === "재활용 IoT 저울" ? (
                <div className="w-full h-[530px] bg-white rounded-2xl pt-[50px] pb-[57px] shadow-lg flex flex-col items-center justify-between border-1 cursor-pointer" onClick={handleToastClick}>
                  <div className="flex flex-col items-center">
                    {/* 제목 */}
                    <p className="text-[30px] font-bold text-secondary text-center whitespace-pre-line leading-[36px]">{item.title}</p>

                    <div className="w-[34px] border-1 border-text mt-4 mb-4" />

                    {/* 설명 */}
                    <p className="text-[16px] text-text text-center whitespace-pre-line leading-[19px]">{item.description}</p>
                  </div>
                  {/* 이미지 */}
                  <div className="flex items-center justify-center">
                    <Image src={item.src} alt={item.title} width={0} height={0} sizes="100vw" className="w-auto h-auto rounded-lg" unoptimized />
                  </div>
                </div>
              ) : (
                <Link href={item.link} className="block w-full h-[530px]">
                  <div className="w-full h-full bg-white rounded-2xl pt-[50px] pb-[57px] shadow-lg flex flex-col items-center justify-between border-1 cursor-pointer">
                    <div className="flex flex-col items-center">
                      {/* 제목 */}
                      <p className="text-[30px] font-bold text-secondary text-center whitespace-pre-line leading-[36px]">{item.title}</p>

                      <div className="w-[34px] border-1 border-text mt-4 mb-4" />

                      {/* 설명 */}
                      <p className="text-[16px] text-text text-center whitespace-pre-line leading-[19px]">{item.description}</p>
                    </div>
                    {/* 이미지 */}
                    <div className="flex items-center justify-center">
                      <Image src={item.src} alt={item.title} width={0} height={0} sizes="100vw" className="w-auto h-auto rounded-lg" unoptimized />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <Link href="/brand" className="block relative w-full h-[330px] rounded-[30px] overflow-hidden mt-[50px] cursor-pointer">
        <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec04_1.jpg" fill alt="재활용품 IoT 저울" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[340px] h-[80px] border-2 border-white rounded-[100px] flex items-center justify-center">
            <p className="text-white text-[30px] font-extrabold">CODA 더 알아보기</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

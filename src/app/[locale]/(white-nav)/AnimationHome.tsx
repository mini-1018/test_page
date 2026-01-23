"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { getHomeTranslations, homeTranslations } from "@lib/translations/home.trans";

interface AnimationHomeProps {
  locale: string;
}

export default function AnimationHome({ locale }: AnimationHomeProps) {
  const { t } = getHomeTranslations(locale as "ko" | "en");

  const products = homeTranslations[locale as "ko" | "en"].section4.products;

  const staticData = [
    {
      src: "/images/main/main_sec03_1.png",
      link: `/${locale}/products/reverse-vending-machines/crusher`,
    },
    {
      src: "/images/main/main_sec03_2.png",
      link: `/${locale}/products/reverse-vending-machines/esg`,
    },
    {
      src: "/images/main/main_sec03_3.png",
      link: `/${locale}/products/food-waste-billing-system`,
    },
    {
      src: "/images/main/main_sec03_4.png",
      link: `/${locale}/products/vehicle-food-waste-billing-system`,
    },
    {
      src: "/images/main/main_sec03_5.png",
      link: `/${locale}/products/iot-recycling-scale`,
    },
  ];

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

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-[560px]">
          {products.map((item: any, index: number) => (
            <div key={index} className="min-w-0 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2">
              <Link href={staticData[index].link} className="block w-full h-[530px]">
                <div className="w-full h-full bg-white rounded-2xl pt-[50px] pb-[57px] shadow-lg flex flex-col items-center justify-between border-1 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <p className="text-[30px] font-bold text-secondary text-center whitespace-pre-line leading-[32px]">{item.title}</p>
                    <div className="w-[34px] border-1 border-text mt-4 mb-4" />
                    <p className="text-[16px] text-text text-center whitespace-pre-line leading-[19px] px-3">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image src={staticData[index].src} alt={item.title} width={0} height={0} sizes="100vw" className="w-auto h-auto" unoptimized />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link href={`/${locale}/brand`} className="block relative w-full h-[330px] rounded-[30px] overflow-hidden mt-[50px] cursor-pointer">
        <Image src="/images/main/main_sec04_1.jpg" fill alt="코다 더 알아보기" className="object-cover object-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="min-w-[320px] px-[20px] h-[80px] border-2 border-white rounded-[100px] flex items-center justify-center">
            <p className="text-white text-[30px] font-extrabold">{t("section4.brandButton")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

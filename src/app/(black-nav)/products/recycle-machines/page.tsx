import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import Image from "next/image";
import Link from "next/link";

export default function machinesLineup() {
  const products = [
    {
      id: "coda",
      href: "/products/recycle-machines/compressor",
      image:
        "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda.webp",
      title: "압축기",
      subtitle: "PET / CAN / 공용",
      alt: "코다(CODA) 무인회수기, 압축기(PET,CAN,공용)",
      delay: 0,
    },
    {
      id: "crush",
      href: "/products/recycle-machines/crusher",
      image:
        "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda_crush.webp",
      title: "파쇄기",
      subtitle: "PET 전용",
      alt: "코다(CODA) 무인회수기, 파쇄기(PET)",
      delay: 200,
    },
    {
      id: "esg",
      href: "/products/recycle-machines/esg",
      image:
        "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda_esg.webp",
      title: "ESG",
      subtitle: "탄소저감형",
      alt: "코다(CODA) 무인회수기, ESG(탄소저감형)",
      delay: 400,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full mx-auto px-4">
        <div className="container mx-auto mt-[100px] mb-[100px] md:mt-[200px] md:mb-[160px]">
          <div className="flex flex-col items-center mb-20 gap-[20px]">
          <h1 className="font-bold text-third pt-8">
            무인회수기 제품 안내
          </h1>
          <h3 className="!text-lg md:!text-2xl !font-normal text-#656565 text-center">
            국내 기술 30년 융복합 측정기술 노하우를 바탕으로 한 최적의 자원 선순환 솔루션
          </h3>
          </div>
          <ul className="flex flex-wrap justify-center items-center gap-16">
            {products.map((product) => (
              <FadeUpOnView key={product.id} delay={product.delay}>
              <li key={product.id} className="flex flex-col items-center p-[80px] border-gray-800 border-1 rounded-md">
                <Link
                  href={product.href}
                  className="group text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      width={256}
                      height={320}
                      alt={product.alt}
                      className="w-[140px] h-auto object-cover transition-opacity duration-300 group-hover:opacity-75"
                      priority
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-semibold mb-2 transition-colors duration-300 text-gray-800 group-hover:text-blue-600">
                      {product.title}
                    </p>
                    <p className="text-base font-light transition-colors duration-300 text-gray-600 group-hover:text-blue-500">
                      {product.subtitle}
                    </p>
                  </div>
                </Link>
              </li>
              </FadeUpOnView>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

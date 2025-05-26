import Image from "next/image";
import Link from "next/link";

export default function MachineLineup() {
  const products = [
    {
      id: "coda",
      href: "/product/recycle-machine/compressor",
      image:
        "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda.webp",
      title: "압축기",
      subtitle: "PET / CAN / 공용",
      alt: "코다(CODA) 무인회수기, 압축기(PET,CAN,공용)",
    },
    {
      id: "crush",
      href: "/product/recycle-machine/crush",
      image:
        "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda_crush.webp",
      title: "파쇄기",
      subtitle: "PET 전용",
      alt: "코다(CODA) 무인회수기, 파쇄기(PET)",
    },
    {
      id: "esg",
      href: "/product/recycle-machine/esg",
      image:
        "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda_esg.webp",
      title: "ESG",
      subtitle: "탄소저감형",
      alt: "코다(CODA) 무인회수기, ESG(탄소저감형)",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[1280px] mx-auto px-4">
        <div className="container mx-auto mt-[250px] mb-[150px]">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-[100px] pt-8">
            무인회수기 라인업
          </h1>

          <ul className="flex flex-wrap justify-between items-center gap-8">
            {products.map((product) => (
              <li key={product.id} className="flex flex-col items-center">
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function ProductLineup() {
  const products = [
    {
      id: "coda",
      href: "/product/recycle-machine",
      image:
        "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda.webp",
      title: "압축기",
      subtitle: "PET / CAN / 공용",
      alt: "코다(CODA) 무인회수기, 압축기(PET,CAN,공용)",
    },
    {
      id: "crush",
      href: "/product/rfid",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item/item_rfid.webp",
      title: "차량용RFID",
      subtitle: "차량용RFID",
      alt: "차량용RFID",
    },
    {
      id: "esg",
      href: "/product/food-waste-disposal",
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item/item_food.webp",
      title: "음식물 종량기",
      subtitle: "음식물 종량기",
      alt: "음식물 종량기",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[1280px] mx-auto px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 pt-8">
            코다(CODA) 제품 라인업
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

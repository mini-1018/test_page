import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import Image from "next/image";
import Link from "next/link";
import { getMachinesTranslations } from "@lib/translations/machines.trans";
import type { Locale } from "@lib/translator";

interface MachinesLineupProps {
  params: Promise<{ locale: Locale }>;
}

export default async function MachinesLineup({ params }: MachinesLineupProps) {
  const { locale } = await params;
  const { t } = getMachinesTranslations(locale);

  const products = [
    {
      id: "coda",
      href: `/${locale}/products/reverse-vending-machines/compressor`,
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda.webp",
      title: t("ReverseVendingMachine.products.compressor.title"),
      subtitle: t("ReverseVendingMachine.products.compressor.subtitle"),
      alt: t("ReverseVendingMachine.products.compressor.alt"),
      delay: 0,
    },
    {
      id: "crush",
      href: `/${locale}/products/reverse-vending-machines/crusher`,
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda_crush.webp",
      title: t("ReverseVendingMachine.products.crusher.title"),
      subtitle: t("ReverseVendingMachine.products.crusher.subtitle"),
      alt: t("ReverseVendingMachine.products.crusher.alt"),
      delay: 200,
    },
    {
      id: "esg",
      href: `/${locale}/products/reverse-vending-machines/esg`,
      image: "https://do40f6yw4fd7i.cloudfront.net/img13/item_list_coda/item_coda_esg.webp",
      title: t("ReverseVendingMachine.products.esg.title"),
      subtitle: t("ReverseVendingMachine.products.esg.subtitle"),
      alt: t("ReverseVendingMachine.products.esg.alt"),
      delay: 400,
    },
  ];

  return (
    <div className="w-full">
      <h1 className="sr-only">{t("title")}</h1>
      <div className="w-full mx-auto px-4">
        <div className="container mx-auto mt-[100px] mb-[100px] md:mt-[200px] md:mb-[160px]">
          <div className="flex flex-col items-center mb-20 gap-[20px]">
            <h1 className="font-bold text-third pt-8">{t("ReverseVendingMachine.title")}</h1>
            <h3 className="!text-lg md:!text-2xl !font-normal text-gray-600 text-center max-w-4xl">{t("ReverseVendingMachine.subtitle")}</h3>
          </div>

          <ul className="flex flex-wrap justify-center items-center gap-16">
            {products.map((product) => (
              <FadeUpOnView key={product.id} delay={product.delay}>
                <li className="flex flex-col items-center p-[80px] border-gray-800 border-1 rounded-md">
                  <Link href={product.href} className="group text-center transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center mb-4 overflow-hidden rounded-lg">
                      <Image src={product.image} width={256} height={320} alt={product.alt} className="w-[140px] h-auto object-cover transition-opacity duration-300 group-hover:opacity-75" priority={true} />
                    </div>

                    <div className="text-center">
                      <p className="text-xl font-semibold mb-2 transition-colors duration-300 text-gray-800 group-hover:text-blue-600">{product.title}</p>
                      <p className="text-base font-light transition-colors duration-300 text-gray-600 group-hover:text-blue-500">{product.subtitle}</p>
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

export async function generateMetadata({ params }: MachinesLineupProps) {
  const { locale } = await params;
  const { t } = getMachinesTranslations(locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}/products`,
      languages: {
        ko: "/ko/products",
        en: "/en/products",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}/products`,
      siteName: t("metaData.openGraph.siteName"),
      images: [
        {
          url: t("metaData.image"),
          width: 1200,
          height: 630,
          alt: t("metaData.title"),
        },
      ],
      locale: t("metaData.openGraph.locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaData.title"),
      description: t("metaData.description"),
      images: [t("metaData.image")],
    },
  };
}

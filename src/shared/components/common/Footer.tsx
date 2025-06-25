"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faNeos } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import { getFooterTranslations } from "@lib/translations/footer.trans";
import type { Locale } from "@lib/translator";

export default function Footer() {
  // 현재 언어 가져오기
  const params = useParams();
  const locale = (params?.locale as Locale) || "ko";
  const { t } = getFooterTranslations(locale);

  const sitemapMenus = [
    {
      title: t("sitemap.brand.title"),
      subMenu: [{ name: t("sitemap.brand.items.0.name"), link: `/${locale}${t("sitemap.brand.items.0.link")}` }],
    },
    {
      title: t("sitemap.products.title"),
      subMenu: [
        { name: t("sitemap.products.items.0.name"), link: `/${locale}${t("sitemap.products.items.0.link")}` },
        { name: t("sitemap.products.items.1.name"), link: `/${locale}${t("sitemap.products.items.1.link")}` },
        { name: t("sitemap.products.items.2.name"), link: `/${locale}${t("sitemap.products.items.2.link")}` },
      ],
    },
    {
      title: t("sitemap.news.title"),
      subMenu: [{ name: t("sitemap.news.items.0.name"), link: `/${locale}${t("sitemap.news.items.0.link")}` }],
    },
    {
      title: t("sitemap.community.title"),
      subMenu: [
        { name: t("sitemap.community.items.0.name"), link: `/${locale}${t("sitemap.community.items.0.link")}` },
        { name: t("sitemap.community.items.1.name"), link: `/${locale}${t("sitemap.community.items.1.link")}` },
        { name: t("sitemap.community.items.2.name"), link: `/${locale}${t("sitemap.community.items.2.link")}` },
        { name: t("sitemap.community.items.3.name"), link: `/${locale}${t("sitemap.community.items.3.link")}` },
      ],
    },
  ];

  return (
    <footer className="bg-[#111] py-[50px]">
      <div className="flex flex-col-reverse md:flex-row justify-between w-[1300px] max-w-[90%] mx-auto">
        {/* 왼쪽 영역 */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo_white.webp" alt={t("logo.alt")} width={100} height={40} className="h-[15%] w-auto" />

          <ul className="flex mt-[25px] mb-[20px]">
            <li className="mr-[15px]">
              <Link href={`/${locale}/brand`} className="text-white text-base">
                {t("links.brandIntro")}
              </Link>
            </li>
            <li className="mr-[15px]">
              <Link href="https://sites.google.com/view/coda-service-terms-of-use/%ED%99%88" className="text-white text-base">
                {t("links.terms")}
              </Link>
            </li>
            <li>
              <Link href="https://sites.google.com/view/coda-privacy/%ED%99%88" className="text-white text-base">
                {t("links.privacy")}
              </Link>
            </li>
          </ul>

          <div className="text-white">
            <p className="text-xs leading-[1.5] mb-[5px]">{t("company.address")}</p>
            <p className="text-xs leading-[1.5] mb-[5px]">{t("company.copyright")}</p>
          </div>

          <ul className="text-white mt-[20px]">
            <li className="text-[15px]">{t("contact.title")}</li>
            <li className="text-xs">{t("contact.manager")}</li>
          </ul>

          <ul className="flex mt-[20px] gap-4">
            <li>
              <Link href="https://www.youtube.com/@Gtech-international" title={t("social.youtube")} className="text-white">
                <FontAwesomeIcon icon={faYoutube} className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/gtech__official?igsh=bmZuMDZnbG45eG8=" title={t("social.instagram")} className="text-white">
                <FontAwesomeIcon icon={faInstagram} className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
              </Link>
            </li>
            <li>
              <Link href="https://blog.naver.com/gtech324" title={t("social.blog")} className="text-white">
                <FontAwesomeIcon icon={faNeos} className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
              </Link>
            </li>
            <li>
              <Link href="tel:010-9282-4070" title={t("social.phone")} className="text-white">
                <FontAwesomeIcon icon={faPhone} className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
              </Link>
            </li>
            <li>
              <Link href="mailto:stmo11@gtech21.net" title={t("social.email")} className="text-white">
                <FontAwesomeIcon icon={faEnvelope} className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
              </Link>
            </li>
          </ul>
        </div>

        {/* 오른쪽 영역 - 사이트맵 */}
        <div className="w-full md:w-1/2">
          <nav>
            <ul className="flex justify-between md:justify-end">
              {sitemapMenus.map((menu, index) => (
                <li key={index} className="md:ml-[15%] md:first:ml-0">
                  <p className="block text-white text-[12px] md:text-[16px] font-bold mb-[30px]">{menu.title}</p>
                  <ul>
                    {menu.subMenu.map((sub, subIndex) => (
                      <li key={subIndex} className="mb-[20px]">
                        <Link href={sub.link} className="text-[12px] sm:text-[14px] md:text-[12px] xl:text-[14px] text-[#666] hover:text-white transition-colors">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

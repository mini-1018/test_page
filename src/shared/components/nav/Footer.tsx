"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getFooterTranslations } from "@lib/translations/footer.trans";
import { getNavigationTranslations } from "@lib/translations/nav.trans";
import type { Locale } from "@lib/translator";
import { getMenuItems } from "./menuItems";

export default function Footer() {
  // 현재 언어 가져오기
  const params = useParams();
  const locale = (params?.locale as Locale) || "ko";
  const { t } = getFooterTranslations(locale);
  const { t: navT } = getNavigationTranslations(locale);

  const menuItems = getMenuItems(locale, navT);

  return (
    <footer className="py-[50px]">
      <div className="flex flex-col-reverse md:flex-row justify-between w-[1300px] max-w-[90%] mx-auto">
        {/* 왼쪽 영역 */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/images/common/logo.png" alt={t("logo.alt")} width={100} height={40} className="h-[15%] w-auto" />

          <ul className="flex mt-[25px] mb-[20px]">
            <li className="mr-[15px]">
              <Link href={`/${locale}/brand`} className="text-text text-base">
                {t("links.brandIntro")}
              </Link>
            </li>
            <li className="mr-[15px]">
              <Link href="https://sites.google.com/view/coda-service-terms-of-use/%ED%99%88" className="text-text text-base">
                {t("links.terms")}
              </Link>
            </li>
            <li>
              <Link href="https://sites.google.com/view/coda-privacy/%ED%99%88" className="text-text text-base">
                {t("links.privacy")}
              </Link>
            </li>
          </ul>

          <div className="text-text">
            <p className="text-xs leading-[1.5] mb-[5px]">{t("company.address")}</p>
            <p className="text-xs leading-[1.5] mb-[5px]">{t("company.copyright")}</p>
          </div>

          <ul className="text-text mt-[20px]">
            <li className="text-[15px]">{t("contact.title")}</li>
            <li className="text-xs">{t("contact.manager")}</li>
          </ul>

          <ul className="flex mt-[20px] gap-[25px]">
            <li>
              <Link href="https://blog.naver.com/gtech_official" title={t("social.blog")} className="text-text" target="_blank" rel="noopener noreferrer">
                <Image src={"/images/icons/blog.svg"} alt="Naver Blog" width={30} height={30} className="w-[24px] h-[24px]" />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@Gtech-international" title={t("social.youtube")} className="text-text" target="_blank" rel="noopener noreferrer">
                <Image src={"/images/icons/youtube.svg"} alt="YouTube" width={30} height={30} className="w-[24px] h-[24px]" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/coda_recycle" title={t("social.instagram")} className="text-text" target="_blank" rel="noopener noreferrer">
                <Image src={"/images/icons/insta.svg"} alt="Instagram" width={30} height={30} className="w-[24px] h-[24px]" />
              </Link>
            </li>
            <li>
              <Link href="tel:010-9282-4070" title={t("social.phone")} className="text-text">
                <Image src={"/images/icons/phone.svg"} alt="Phone" width={30} height={30} className="w-[24px] h-[24px]" />
              </Link>
            </li>
            <li>
              <Link href="mailto:stmo11@gtech21.net" title={t("social.email")} className="text-text">
                <Image src={"/images/icons/email.svg"} alt="Email" width={30} height={30} className="w-[24px] h-[24px]" />
              </Link>
            </li>
          </ul>
        </div>

        {/* 오른쪽 영역 - 사이트맵 */}
        <div className="w-full md:w-1/2">
          <nav>
            <ul className="flex justify-between md:justify-end">
              {menuItems.map((menu, index) => (
                <li key={index} className="md:ml-[15%] md:first:ml-0">
                  <p className="block text-text text-[12px] md:text-[16px] font-bold mb-[30px]">{menu.name}</p>
                  <ul>
                    {menu.subMenu.map((sub, subIndex) => (
                      <li key={subIndex} className="mb-[20px]">
                        <Link href={sub.link} className="text-[12px] sm:text-[14px] md:text-[12px] xl:text-[14px] text-[#666] hover:text-text transition-colors whitespace-pre-line">
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

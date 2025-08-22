"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { getNavigationTranslations } from "@lib/translations/nav.trans";
import type { Locale } from "@lib/translator";
import LangSelector from "./LangSelector";

export default function WhiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);

  const params = useParams();
  const pathname = usePathname();
  const locale = (params?.locale as Locale) || "ko";
  const { t } = getNavigationTranslations(locale);

  const createLanguageLink = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(ko|en)/, "") || "/";
    return `/${newLocale}${pathWithoutLocale}`;
  };

  const menuItems = [
    {
      name: t("brand"),
      subMenu: [{ name: t("subMenu.brand"), link: `/${locale}/brand` }],
    },
    {
      name: t("products"),
      subMenu: [
        { name: t("subMenu.ReverseVendingMachine"), link: `/${locale}/products/reverse-vending-machines` },
        { name: t("subMenu.rfid"), link: `/${locale}/products/vehicle-food-waste-billing-system` },
        { name: t("subMenu.FoodWasteBillingSystem"), link: `/${locale}/products/food-waste-billing-system` },
      ],
    },
    {
      name: t("news"),
      subMenu: [{ name: t("subMenu.news"), link: `/${locale}/news` }],
    },
    // {
    //   name: t("community"),
    //   subMenu: [
    //     { name: t("subMenu.notice"), link: `/${locale}/community/notice` },
    //     { name: t("subMenu.faq"), link: `/${locale}/community/faq` },
    //     { name: t("subMenu.support"), link: `/${locale}/community/support` },
    //     { name: t("subMenu.downloads"), link: `/${locale}/community/downloads` },
    //   ],
    // },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 스크롤하거나 호버하면 다크 테마
  const shouldShowDarkTheme = isScrolled || isHovered;

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${shouldShowDarkTheme ? "bg-white border-b-1 border-gray-200" : "bg-transparent"}`}
      style={{
        height: isHovered ? "280px" : "80px",
        transition: "height 0.3s ease-in-out, background-color 0.3s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="relative flex items-center justify-between w-[1100px] mx-auto max-w-[90%] h-20">
        <div className="flex items-center">
          <Link href={`/${locale}`}>
            <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo_white.webp" alt="코다(CODA)" width={100} height={40} className={`transition-all ${shouldShowDarkTheme ? "hidden" : "block"}`} />
            <Image src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.png" alt="코다(CODA)" width={100} height={40} className={`transition-all ${shouldShowDarkTheme ? "block" : "hidden"}`} />
          </Link>
        </div>

        {/* 네비게이션 */}
        <nav className="relative">
          <ul className="flex items-center space-x-1 lg:space-x-10 text-center">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative group w-[120px]">
                {/* 메인 메뉴 */}
                <a className={`transition-colors text-nomal font-light hover:text-gray-800 relative ${shouldShowDarkTheme ? "text-black" : "text-white"}`}>
                  {menu.name}
                  <span className={`absolute bottom-[-4px] left-[50%] translate-x-[-50%] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%] ${hoveredSubmenu === menu.name ? "w-full" : ""}`} />
                </a>

                {/* 서브메뉴 */}
                <div className={`absolute top-[76px] w-[120px] transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"}`} onMouseEnter={() => setHoveredSubmenu(menu.name)} onMouseLeave={() => setHoveredSubmenu(null)}>
                  {menu.subMenu.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.link} className="block text-sm text-gray-600 hover:text-blue-500 transition-colors mt-3 first:mt-0">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <LangSelector shouldShowDarkTheme={shouldShowDarkTheme} />
      </div>

      {/* 서브메뉴 배경 */}
      <div className={`w-full bg-white transition-all duration-300 overflow-hidden ${isHovered ? "opacity-100 h-[200px]" : "opacity-0 h-0"}`} />
    </header>
  );
}

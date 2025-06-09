"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    name: "브랜드",
    link: "/brand",
    subMenu: [{ name: "브랜드", link: "/brand" }],
  },
  {
    name: "제품",
    link: "/products",
    subMenu: [
      { name: "무인회수기", link: "/products/recycle-machines" },
      { name: "차량용RFID", link: "/products/rfid" },
      { name: "음식물종량기", link: "/products/food-waste-disposal" },
    ],
  },
  {
    name: "소식",
    link: "/news",
    subMenu: [{ name: "소식", link: "/news" }],
  },
  {
    name: "커뮤니티",
    link: "/community",
    subMenu: [
      { name: "공지사항", link: "/community/notice" },
      { name: "FAQ", link: "/community/faq" },
      { name: "고객문의", link: "/community/support" },
      { name: "다운로드", link: "/community/downloads" },
    ],
  },
];

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // 메뉴가 열릴 때 모든 서브메뉴 닫기
      setOpenSubmenu(null);
    }
  };

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  return (
    <>
      {/* 모바일 상단 헤더 */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white z-50 h-16 flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.webp"
              alt="코다(CODA)"
              width={100}
              height={40}
            />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-12 h-12"
        >
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/common/mobile_menu.webp"
            alt="코다(CODA) 메뉴 버튼"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* 모바일 메뉴 사이드바 */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full max-w-sm h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* 메뉴 헤더 */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" onClick={toggleMenu}>
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.webp"
              alt="코다(CODA)"
              width={100}
              height={40}
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-12 h-12"
          >
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/mobile_menu_close.webp"
              alt="코다(CODA) 메뉴 닫기 버튼"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* 메뉴 내비게이션 */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-2">
            {menuItems.map((menu, index) => (
              <li key={index} className="border-b border-gray-100">
                {/* 메인 메뉴 */}
                <button
                  onClick={() => toggleSubmenu(menu.name)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium">{menu.name}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openSubmenu === menu.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* 서브메뉴 */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSubmenu === menu.name ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="bg-gray-50">
                    {menu.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.link}
                          onClick={toggleMenu}
                          className="block px-8 py-3 text-gray-600 hover:text-blue-500 hover:bg-white transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

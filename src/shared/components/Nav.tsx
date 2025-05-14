"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const menuItems = [
  {
    name: "브랜드",
    link: "brand.php",
    subMenu: [{ name: "브랜드", link: "brand.php" }],
  },
  {
    name: "제품",
    link: "item.php",
    subMenu: [
      { name: "무인회수기", link: "item_list_coda.php" },
      { name: "차량용RFID", link: "item_rfid.php" },
      { name: "음식물종량기", link: "item_food.php" },
    ],
  },
  {
    name: "소식",
    link: "news.php",
    subMenu: [{ name: "소식", link: "news.php" }],
  },
  {
    name: "커뮤니티",
    link: "community-temp.php",
    subMenu: [{ name: "커뮤니티", link: "community-temp.php" }],
  },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isHovered ? "bg-white" : "bg-transparent"
      }`}
      style={{
        height: isHovered ? "280px" : "80px",
        transition:
          "height 0.3s ease-in-out, background-color 0.3s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-between w-[1100px] mx-auto max-w-[90%] h-20">
        <div className="flex items-center">
          <a href="index.php">
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo_white.webp"
              alt="코다(CODA)"
              width={100}
              height={40}
              className={`transition-all ${
                isScrolled || isHovered ? "hidden" : "block"
              }`}
            />
            <Image
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.webp"
              alt="코다(CODA)"
              width={100}
              height={40}
              className={`transition-all ${
                isScrolled || isHovered ? "block" : "hidden"
              }`}
            />
          </a>
        </div>

        {/* 네비게이션 */}
        <nav className="relative">
          <ul className="flex items-center space-x-10 text-center">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative group w-[100px]">
                {/* 메인 메뉴 */}
                <a
                  href={menu.link}
                  className={`transition-colors text-sm font-light hover:text-gray-800 relative ${
                    isScrolled || isHovered ? "text-black" : "text-white"
                  }`}
                >
                  {menu.name}
                  <span
                    className={`absolute bottom-[-4px] left-[50%] translate-x-[-50%] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%] ${
                      hoveredSubmenu === menu.name ? "w-full" : ""
                    }`}
                  />
                </a>

                {/* 서브메뉴 */}
                {isHovered && (
                  <div
                    className="absolute top-[76px] w-[100px]"
                    onMouseEnter={() => setHoveredSubmenu(menu.name)}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    {menu.subMenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block text-sm text-gray-600 hover:text-blue-500 transition-colors mt-3 first:mt-0"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 서브메뉴 배경 */}
      <div
        className={`w-full bg-white transition-all duration-300 overflow-hidden ${
          isHovered ? "opacity-100 h-[200px]" : "opacity-0 h-0"
        }`}
      />
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faNeos,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-[50px]">
      <div className="flex flex-col-reverse md:flex-row justify-between w-[1300px] max-w-[95%] mx-auto">
        {/* 왼쪽 영역 */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo_white.webp"
            alt="코다(CODA) 로고 화이트"
            width={100}
            height={40}
            className="h-[15%] w-auto"
          />

          <ul className="flex mt-[25px] mb-[20px]">
            <li className="mr-[15px]">
              <Link href="/brand" className="text-white text-base">
                브랜드소개
              </Link>
            </li>
            <li className="mr-[15px]">
              <Link
                href="https://sites.google.com/view/coda-service-terms-of-use/%ED%99%88"
                className="text-white text-base"
              >
                서비스 이용약관
              </Link>
            </li>
            <li>
              <Link
                href="https://sites.google.com/view/coda-privacy/%ED%99%88"
                className="text-white text-base"
              >
                개인정보 처리방침
              </Link>
            </li>
          </ul>

          <div className="text-white">
            <p className="text-xs leading-[1.5] mb-[5px]">
              경기도 의정부시 산단로 68번길 29 | 031-852-4070
            </p>
            <p className="text-xs leading-[1.5] mb-[5px]">
              © CODA. ALL RIGHTS RESERVED
            </p>
          </div>

          <ul className="text-white mt-[20px]">
            <li className="text-[15px]">담당자 연락처</li>
            <li className="text-xs">장대웅 팀장 : 010-9282-4070</li>
          </ul>

          <ul className="flex mt-[20px] gap-4">
            <li>
              <Link
                href="https://www.youtube.com/@Gtech-international"
                title="지테크인터내셔날 유튜브"
                className="text-white"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/gtech__official?igsh=bmZuMDZnbG45eG8="
                title="지테크인터내셔날 인스타그램"
                className="text-white"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                href="tel:010-9282-4070"
                title="담당자 연락처"
                className="text-white"
              >
                <FontAwesomeIcon icon={faPhone} className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:stmo11@gtech21.net"
                title="담당자 이메일"
                className="text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                href="https://blog.naver.com/gtech324"
                title="지테크인터내셔날 네이버 블로그"
                className="text-white"
              >
                <FontAwesomeIcon icon={faNeos} className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>

        {/* 오른쪽 영역 - 사이트맵 */}
        <div className="w-full md:w-1/2">
          <nav>
            <ul className="flex justify-between md:justify-end">
              {[
                {
                  title: "브랜드",
                  link: "/brand",
                  submenu: [{ name: "브랜드", link: "/brand" }],
                },
                {
                  title: "제품",
                  link: "/item",
                  submenu: [
                    { name: "무인회수기", link: "/item_list_coda" },
                    { name: "차량용RFID", link: "/item_rfid" },
                    { name: "음식물종량기", link: "/item_food" },
                  ],
                },
                {
                  title: "소식",
                  link: "/news",
                  submenu: [{ name: "소식", link: "/news" }],
                },
                {
                  title: "커뮤니티",
                  link: "/community-temp",
                  submenu: [],
                },
              ].map((menu, index) => (
                <li key={index} className="md:ml-[15%] md:first:ml-0">
                  <Link
                    href={menu.link}
                    className="block text-white text-base font-bold mb-[30px]"
                  >
                    {menu.title}
                  </Link>
                  <ul>
                    {menu.submenu.map((sub, subIndex) => (
                      <li key={subIndex} className="mb-[20px]">
                        <Link href={sub.link} className="text-base text-[#666]">
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

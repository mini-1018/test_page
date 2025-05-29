"use client";
import { useEffect, useState } from "react";

export default function FullPageScroll() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: "section1",
      title: "첫 번째 섹션",
      content: "여기는 첫 번째 섹션입니다.",
      bgColor: "bg-gray-500",
    },
    {
      id: "section2",
      title: "두 번째 섹션",
      content: "여기는 두 번째 섹션입니다.",
      bgColor: "bg-gray-800",
    },
    {
      id: "section3",
      title: "세 번째 섹션",
      content: "여기는 세 번째 섹션입니다.",
      bgColor: "bg-black",
    },
    {
      id: "section4",
      title: "네 번째 섹션",
      content: "여기는 네 번째 섹션입니다.",
      bgColor: "bg-blue-900",
    },
    {
      id: "section5",
      title: "다섯 번째 섹션",
      content: "여기는 다섯 번째 섹션입니다.",
      bgColor: "bg-green-900",
    },
  ];

  // 특정 섹션으로 스크롤 이동
  const scrollToSection = (index) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  };

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.round(scrollPosition / windowHeight);

      if (
        newSection !== currentSection &&
        newSection >= 0 &&
        newSection < sections.length
      ) {
        setCurrentSection(newSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, sections.length]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, sections.length]);

  return (
    <div className="relative">
      {/* 네비게이션 도트 */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              currentSection === index
                ? "bg-white"
                : "bg-transparent hover:bg-white hover:bg-opacity-50"
            }`}
            aria-label={`섹션 ${index + 1}로 이동`}
          />
        ))}
      </div>

      {/* 스크롤 컨테이너 */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`
              snap-start snap-always
              h-screen w-full
              flex flex-col items-center justify-center
              text-white text-center
              ${section.bgColor}
              transition-all duration-500
            `}
          >
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                {section.title}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up animation-delay-200">
                {section.content}
              </p>

              {/* 스크롤 힌트 (첫 번째 섹션에만 표시) */}
              {index === 0 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="flex flex-col items-center text-white opacity-70">
                    <span className="text-sm mb-2">스크롤해주세요</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* 커스텀 스타일 */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        /* 스크롤바 숨기기 (선택사항) */
        .snap-y::-webkit-scrollbar {
          display: none;
        }

        .snap-y {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

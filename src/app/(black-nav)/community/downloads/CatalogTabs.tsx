"use client";
import { useRef, useEffect, useState } from "react";

const images = [
  "/img/main/main_sec02_1.webp",
  "/img/main/main_sec02_2.webp",
  "/img/main/main_sec03_1.webp",
  "/img/main/main_sec03_2.webp",
  "/img/main/main_sec03_3.webp",
  "/img/main/main_sec03_4.webp",
  "/img/main/main_sec03_5.webp",
  "/img/main/main_sec03_1.webp",
  "/img/main/main_sec03_1.webp",
  "/img/main/main_sec03_1.webp",
];

export default function CatalogTabs() {
  const [currIndex, setCurrIndex] = useState(Math.floor(images.length / 2));
  const [dimensions, setDimensions] = useState({ width: 340, height: 260 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 반응형 크기 계산
  useEffect(() => {
    function handleResize() {
      const width = Math.max(window.innerWidth * 0.22, 240);
      const height = Math.max(window.innerHeight * 0.45, 180);
      setDimensions({ width, height });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 자동 슬라이드
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  // 이동 함수
  const moveTo = (index: number) => {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    setCurrIndex(index);
    // 자동 슬라이드 리셋
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    // 중앙 카드로 스크롤
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  // 최초 마운트/슬라이드 시 중앙 카드로 스크롤
  useEffect(() => {
    cardRefs.current[currIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currIndex, dimensions.width]);

  return (
    <div className="w-full flex flex-col items-center py-16 min-h-screen bg-white">
      <div className="relative w-full flex justify-center items-center">
        {/* Prev Button */}
        <button
          className="absolute left-[6%] z-20 bg-white/80 hover:bg-blue-100 text-gray-700 border border-gray-300 shadow-md rounded-full p-2 transition"
          onClick={() => moveTo(currIndex - 1)}
          aria-label="이전"
        >
          <svg width={36} height={36} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </button>
        {/* Next Button */}
        <button
          className="absolute right-[6%] z-20 bg-white/80 hover:bg-blue-100 text-gray-700 border border-gray-300 shadow-md rounded-full p-2 transition"
          onClick={() => moveTo(currIndex + 1)}
          aria-label="다음"
        >
          <svg width={36} height={36} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10 6l-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z"
            />
          </svg>
        </button>
        {/* Carousel */}
        <div
          className="relative w-full overflow-x-hidden select-none"
          style={{ height: dimensions.height + 60 }}
        >
          <div
            className="flex items-center justify-center gap-8 min-w-max py-8"
            style={{}}
          >
            {images.map((img, i) => {
              // 3D 효과 각도
              let rotateY = 0;
              if (i < currIndex) rotateY = 40;
              else if (i > currIndex) rotateY = -40;
              // 활성화 여부
              const isActive = i === currIndex;
              return (
                <div
                  key={img + i}
                  ref={el => { cardRefs.current[i] = el; }}
                  className="relative transition-all duration-700"
                  style={{
                    width: dimensions.width,
                    height: dimensions.height,
                    perspective: "1200px",
                    zIndex: isActive ? 20 : 10,
                    flex: "0 0 auto",
                  }}
                  onClick={() => moveTo(i)}
                >
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-xl border-4 transition-all duration-700 shadow-xl bg-white`}
                    style={{
                      transform: isActive
                        ? "perspective(1200px)"
                        : `perspective(1200px) rotateY(${rotateY}deg)`,
                      borderColor: isActive ? "#3b82f6" : "#e5e7eb",
                      boxShadow: isActive
                        ? "0 8px 40px 0 #3b82f633"
                        : "0 2px 20px 0 #0002",
                      cursor: isActive ? "default" : "pointer",
                    }}
                  >
                    {/* 이미지 */}
                    <img
                      src={img}
                      alt={`carousel-${i + 1}`}
                      className={`object-cover rounded-lg transition-all duration-700 ${
                        isActive ? "scale-105" : "opacity-80"
                      }`}
                      style={{
                        width: dimensions.width - 16,
                        height: dimensions.height - 16,
                        userSelect: "none",
                        pointerEvents: "none",
                        background: "#f3f4f6",
                      }}
                      draggable={false}
                    />
                    {/* 번호 */}
                    <span className="absolute left-3 top-3 text-gray-700 text-lg font-bold bg-white/70 px-2 py-1 rounded shadow">
                      {i + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 인디케이터 */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              idx === currIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => moveTo(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
      <div className="text-center text-xs text-gray-400 mt-4">
        이미지를 클릭하거나, 좌우 버튼/아래 점을 눌러 이동하세요
      </div>
    </div>
  );
}
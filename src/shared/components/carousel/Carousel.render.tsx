"use client";
import { useRef, useState } from "react";
import { Carousel, FunctionsRefType } from "./typeCarousel";
import { CarouselData } from "./carousel.consts";

function CarouselRender() {
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const data = CarouselData;
  const onTitleClickHandler = (card: {
    id: string;
    title: string;
    description: string;
    image: string;
    routeTo?: string;
  }) => {
    console.log("clicked", card);
  };
  const carouselRef = useRef<FunctionsRefType>(null);
  const handleNext = () => {
    carouselRef.current && carouselRef.current.nextCardHandler();
  };
  const handlePrev = () => {
    carouselRef.current && carouselRef.current.prevCardHandler();
  };
  return (
    <div className="w-screen h-screen flex relative">
      {/* 왼쪽 태그 영역 */}
      <div className="w-1/2 h-full flex items-center justify-center p-8">
        <div className="flex flex-col font-serif space-y-4">
          {data[selectedCardIdx].tags.map((tag, index) => (
            <p key={index} className="text-5xl text-gray-900 font-bold">
              {tag}
            </p>
          ))}
        </div>
      </div>

      {/* 오른쪽 캐러셀 영역 */}
      <div className="flex-col justify-center items-center w-1/2 h-full">
        <Carousel
          cardsData={data}
          setSelectedCardIdx={setSelectedCardIdx}
          rotation={true}
          rotationDuration={30}
          tilt={false}
          freeRoam={false}
          freeRoamLowerBounds={-180}
          freeRoamUpperBounds={0}
          onTitleClickHandler={onTitleClickHandler}
          startingAnimation={true}
          rotateOnScroll={true}
          drag={true}
          ref={carouselRef}
        />

        {/* 오른쪽 하단 버튼들 */}
        <div className="flex space-x-4 items-center justify-center">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselRender;

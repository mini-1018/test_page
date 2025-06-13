'use client';
import React, { useState, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

interface InfiniteCarouselProps {
  images?: string[];
  slideInterval?: number;
  className?: string;
}

export default function RfidFWD({
  images: customImages,
  slideInterval = 3000,
  className = ''
}: InfiniteCarouselProps) {
  
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 기본 이미지 배열
  const defaultImages: string[] = [
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
    '/img/coda_food_reference_01.png',
  ];

  const images = customImages || defaultImages;

  const getGroupSize = () => {
    if (typeof window === 'undefined') return 20;
    
    if (window.innerWidth < 768) return 9;
    if (window.innerWidth < 1024) return 16;
    return 20;
  };

  const [groupSize, setGroupSize] = useState(20);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleResize = () => {
      setGroupSize(getGroupSize());
    };

    setGroupSize(getGroupSize());
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  // 동적으로 이미지 그룹핑
  const groupedImages: string[][] = [];
  for (let i = 0; i < images.length; i += groupSize) {
    groupedImages.push(images.slice(i, i + groupSize));
  }

  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false
  }

  const [emblaRef] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: slideInterval, stopOnInteraction: false })
  ])

  if (!isMounted) {
    return <div className={`w-full max-w-6xl mx-auto p-4 h-[440px] ${className}`} />;
  }

  return (
    <div className={`w-full max-w-6xl mx-auto p-4 ${className}`}>
      <div className="embla overflow-hidden">
        <div 
          className="embla__viewport h-[300px] md:h-[380px] lg:h-[440px]" 
          ref={emblaRef}
        >
          <div className="embla__container flex h-full">
            {groupedImages.map((slideImages, slideIndex) => (
              <div
                key={`slide-${slideIndex}`}
                className="embla__slide flex-none p-2 md:p-3 lg:p-4"
                style={{ minWidth: '100%' }}
              >
                <div className="grid grid-rows-3 grid-cols-3 md:grid-rows-4 md:grid-cols-4 lg:grid-rows-4 lg:grid-cols-5 h-full gap-1 md:gap-2 lg:gap-3 justify-center">
                  {slideImages.map((src, imageIndex) => (
                    <div
                      key={`${slideIndex}-${imageIndex}`}
                      className="w-full h-full relative overflow-hidden rounded-md"
                    >
                      <Image
                        src={src}
                        alt={`이미지 ${slideIndex}-${imageIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80px, (max-width: 1024px) 80px, 100px"
                        unoptimized={true}
                      />
                    </div>
                  ))}
                  {slideImages.length < groupSize &&
                    Array.from({ length: groupSize - slideImages.length }).map((_, emptyIndex) => (
                      <div
                        key={`empty-${slideIndex}-${emptyIndex}`}
                        className="w-full h-full bg-transparent"
                      />
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
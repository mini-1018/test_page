"use client";
import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  LazyMotion,
  m,
  domAnimation,
  useAnimationControls,
  animate,
} from "framer-motion";
import { MouseEvent, WheelEvent, TouchEvent } from "react";
import { CarouselData } from "./carousel.consts";
import { useWindowSize } from "./carousel.hooks";
import Image from "next/image";
// import Link from "next/link";
export type FunctionsRefType = {
  nextCardHandler: () => void;
  prevCardHandler: () => void;
};
type Props = {
  /**
   * Card data that is passed.
   */
  cardsData?: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  /**
   * `Optional` Enable or disable the starting animation of the carousel.
   * Defaults to `true`.
   */
  startingAnimation?: boolean;
  /**
   * `Optional` Enable or disable the rotating of the carousel on scroll.
   * Defaults to `true`.
   */
  rotateOnScroll?: boolean;
  /**
   * `Optional` Enable or disable the dragging of the carousel.
   * Defaults to `true`.
   */
  drag?: boolean;
  /**
   * `Optional` Enable or disable rotation of the carousel.
   * Defaults to `true` (rotation is enabled).
   */
  rotation?: boolean;
  /**
   * `Optional` time in `seconds` it takes to complete a full rotation.
   * Only applicable when `rotation` is enabled. defaults to `60` seconds.
   */
  rotationDuration?: number;
  /**
   * `Optional` Cool tilt effect on `Carousel` relative to mouse position.
   * defaults to `true`.
   */
  tilt?: boolean;
  /**
   * `Optional` `React state setter` to pass your setState to Carousel.
   * defaults to `undefined`.
   */
  setSelectedCardIdx?: React.Dispatch<React.SetStateAction<number>>;
  /**
   * `Optional` Enables the user to freely rotate and move around the carousel canvas.
   * defaults to `false` enabling this feature will cause the tilt to `disable`.
   */
  freeRoam?: boolean;
  /**
   * `Optional` define the upper bounds of the free roam.
   * defaults to `0`. /- make upper bounds to `360` and lower bounds to `-360` to move in all directions.
   */
  freeRoamUpperBounds?: number;
  /**
   * `Optional` define the lower bounds of the free roam.
   * defaults to `-180`. /- make upper bounds to `360` and lower bounds to `-360` to move in all directions.
   */
  freeRoamLowerBounds?: number;
  /**
   * `Optional` Provide an onclick handler function for title, when it is clicked it will return the clicked card.
   * defaults to `()=>{}`. /- Can be useful if you want to route to another path that you defined in your function.
   */
  onTitleClickHandler?: (card: {
    id: string;
    title: string;
    description: string;
    image: string;
    routeTo?: string;
  }) => void;
};
type Ref = any;
export const Carousel = forwardRef<Ref, Props>(
  (
    {
      cardsData = CarouselData,
      startingAnimation = true,
      rotateOnScroll = true,
      drag = true,
      setSelectedCardIdx = undefined,
      rotation = true, // infinite rotation
      rotationDuration = 60, //time it takes to complete a full rotation
      tilt = true,
      freeRoam = false,
      freeRoamUpperBounds = 0,
      freeRoamLowerBounds = -180,
      onTitleClickHandler = () => {},
    },
    ref
  ) => {
    const { width } = useWindowSize();
    const [dummyState, setDummyState] = useState(false);

    const numberOfCards = cardsData.length;
    const cardGaps =
      numberOfCards *
      (width <= 412 ? 25 : width <= 767 ? 25 : width <= 1500 ? 30 : 40);

    function createRefs(ref: any, col: any, idx: number) {
      if (!ref.current) return;
      ref.current[idx] = col;
    }

    const rootRef = useRef<HTMLDivElement>(null);
    const ospin = useRef(null);
    const odrag = useRef(null);
    const ground = useRef(null);
    const cardsRef = useRef([]);
    //using let to not cause react rerenders
    let startX = 0;
    let startY = 0;
    let expand = true;
    let pointerDown = false;

    // horizontal rotation
    const dragTy = useMotionValue(0);
    const dragTySpring = useSpring(dragTy, { damping: 200, stiffness: 400 });

    // vertical rotation
    const dragTx = useMotionValue(-0);
    const dragTxSpring = useSpring(dragTx, { damping: 200, stiffness: 400 });

    //rotate
    const rotate = useMotionValue(0);
    // const rotateSpring = useSpring(rotate);

    const controls = useAnimationControls();
    // const [scope, animate] = useAnimate();

    //   setting animation on first render for the images if infinite animation is needed
    useEffect(() => {
      if (rotation) {
        controls.start({
          rotateY: 360,
          transition: {
            duration: rotationDuration,
            repeat: Infinity,
            ease: "linear",
          },
        });
      }
    }, []);
    const handleMouseWheel = (e: WheelEvent) => {
      if (!rotateOnScroll) return;
      const d = +e.deltaY / 20;
      // setting minimum radius to 360
      if (expand && d > 0) {
        // scroll down
        // radiusMotion.set(radiusMotion.get() + d);
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (expand && d < 0) {
        // scroll up
        // radiusMotion.set(radiusMotion.get() - d);
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (!expand && d > 0) {
        // scroll down
        // radiusMotion.set(radiusMotion.get() - d);
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (!expand && d < 0) {
        // scroll up
        // radiusMotion.set(radiusMotion.get() + d);
        dragTy.set(dragTy.get() + d * 0.6);
      }
    };

    // camera drag
    const pointerDownHandler = (e: MouseEvent) => {
      if (!drag) return;
      e.preventDefault();
      pointerDown = true;
      startX = e.clientX; // 추가
      startY = e.clientY; // 추가
      if (rotation) {
        controls.stop(); // stop the the initial animation
      }
      controls.stop(); // stop the the initial animation
    };
    const pointerUpHandler = () => {
      if (!drag) return;
      pointerDown = false;
      //for starting initial animation
      if (rotation) {
        controls.start({
          rotateY: 360,
          transition: {
            duration: rotationDuration,
            repeat: Infinity,
            ease: "linear",
          },
        });
      }
    };
    const mouseLeaveHandler = () => {
      if (!drag) return;
      pointerDown = false;
    };

    // 수정된 pointerMoveHandler
    const pointerMoveHandler = (e: MouseEvent) => {
      if (!drag) return;
      if (!pointerDown) return;
      e.preventDefault();

      const rotationSensitivity = 0.4;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      // 현재 위치를 다음 계산을 위해 업데이트
      startX = e.clientX;
      startY = e.clientY;

      if (Math.abs(deltaY) > 100) return; // deltaY 체크 개선

      // 수직 회전 (freeRoam이 활성화된 경우에만)
      if (
        freeRoam &&
        dragTx.get() - deltaY * rotationSensitivity <= freeRoamUpperBounds &&
        dragTx.get() - deltaY * rotationSensitivity >= freeRoamLowerBounds
      ) {
        dragTx.set(dragTx.get() - deltaY * rotationSensitivity);
      }

      // 수평 회전 (항상 활성화)
      dragTy.set(dragTy.get() + deltaX * rotationSensitivity);
    };

    let touchStartX = 0;
    let deltaX = 0;

    const touchStartHandler = (e: TouchEvent) => {
      if (!drag) return;
      touchStartX = e.touches[0].pageX;
    };
    const touchMoveHandler = (e: TouchEvent) => {
      if (!drag) return;
      deltaX = touchStartX - e.touches[0].pageX;
      touchStartX = e.touches[0].pageX;
      dragTy.set(dragTy.get() - deltaX * 0.6);
    };

    const caseSelectHandler = (idx: number) => {
      if (pointerDown) return;
      if (!setSelectedCardIdx) {
        //usefull for dragging x it resets the drag values
        setDummyState(!dummyState);
        return;
      }
      setSelectedCardIdx(idx);
    };

    useEffect(() => {
      if (!tilt || freeRoam) return;
      const root = rootRef.current;
      const container = odrag.current;
      // Mouse Tracking animation
      const onMouseMove = (e: MouseEvent) => {
        if (!root || !container) return;
        const { clientX, clientY } = e;
        const { width: clientWidth, height: clientHeight } =
          root.getBoundingClientRect();
        const rotateXVal = (clientY - clientHeight / 2) * 0.06;
        const rotateYVal = (clientWidth / 2 - clientX) * 0.01;

        rotate.set(rotateYVal);
        dragTx.set(rotateXVal);
      };
      document.addEventListener(
        "mousemove",
        onMouseMove as unknown as EventListener
      );
      return () => {
        document.removeEventListener(
          "mousemove",
          onMouseMove as unknown as EventListener
        );
      };
    }, []);

    useEffect(() => {
      cardsRef.current.map(async (card, idx) => {
        await animate(
          card,
          {
            transform: `rotateY(${
              (idx + 1) * (360 / cardsData.length)
            }deg) translateZ(${cardGaps}px)`,
          },
          {
            ease: "easeOut",
            delay: idx * 0.2,
            duration: 0.8,
          }
        );
      });
    }, [width]);

    const carouselVarients = {
      infiniteRotatation: ({
        idx,
        cardGaps,
      }: {
        idx: number;
        cardGaps: number;
      }) => ({
        transform: `rotateY(${
          (idx + 1) * (360 / numberOfCards)
        }deg) translateZ(${cardGaps}px)`,
        transition: {
          delay: 0.2 * (idx + 1),
          duration: 0.9,
        },
      }),
      inifineRotationInitial: {
        transform: `rotateY(0deg) translateZ(0px)`,
      },
    };
    useImperativeHandle(ref, () => ({
      nextCardHandler() {
        dragTy.set(dragTy.get() - 360 / numberOfCards);
      },

      prevCardHandler() {
        dragTy.set(dragTy.get() + 360 / numberOfCards);
      },
    }));

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          onWheel={handleMouseWheel}
          onMouseDown={pointerDownHandler}
          onMouseUp={pointerUpHandler}
          onPointerMove={pointerMoveHandler}
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onMouseLeave={mouseLeaveHandler}
          ref={rootRef}
          className="flex h-[70%] w-full items-center justify-center active:cursor-grab text-white relative"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1300px",
          }}
        >
          <m.div
            ref={odrag}
            className="relative flex m-auto"
            style={{
              rotateX: dragTxSpring,
              rotateY: dragTySpring,
              rotate: rotate,
              transformStyle: "preserve-3d",
            }}
          >
            <m.div
              ref={ospin}
              className="w-[150px] sm:w-[180px] md:w-[200px] 2xl:w-[250px] min-[1500px]:w-[250px] relative flex m-auto"
              style={{
                transformStyle: "preserve-3d",
                aspectRatio: "0.67",
              }}
              animate={controls}
            >
              {cardsData &&
                cardsData.map((card, idx: number) => (
                  <m.div
                    key={idx + 1}
                    ref={(e) => createRefs(cardsRef, e, idx)}
                    onMouseEnter={() => caseSelectHandler(idx)}
                    className="absolute left-0 top-0 w-full h-full rounded-lg bg-gray-200 flex-col items-center justify-center"
                  >
                    <div className="flex items-center w-full h-[75%] justify-center">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={180}
                        height={180}
                        className="rounded-lg"
                        // sizes="(max-width: 768px) 220px, (max-width: 1200px) 320px, 320px"
                        // sizes="(max-width: 200px) 100px, (max-width: 200px) 100px, 100px"
                        priority={idx < 2}
                      />
                    </div>

                    <div className="flex flex-col p-3 gap-y-3 z-20 select-none">
                      {/* <p className="2xl:max-w-[18rem] max-w-[8.5rem] text-[9px] lg:max-w-[12rem] 2xl:text-lg xl:text-[11px]">
                        {card.description}
                      </p> */}
                      <h3
                        onClick={() => onTitleClickHandler(card)}
                        className="text-[0.8rem] lg:text-[1.2rem] 2xl:text-[1.2rem] 2xl:max-w-[18rem] max-w-[12rem] transition-all duration-300 cursor-pointer leading-6 min-[1500px]:leading-8 text-gray-800"
                      >
                        {card.title}
                      </h3>
                      <div className="flex items-center justify-end group cursor-pointer hover:translate-x-2 transition-transform duration-300 ease-out">
                        <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          알아보기
                        </span>
                        <svg
                          className="w-4 h-4 ml-2 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-300"
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
                      </div>
                    </div>
                  </m.div>
                ))}
            </m.div>

            <div
              ref={ground}
              className="w-[900px] h-[900px] absolute top-full left-1/2"
              style={{
                transform: "translate(-50%, -50%) rotateX(90deg)",
                background:
                  "radial-gradient(center center, farthest-side, rgba(174, 171, 171, 0.353), transparent)",
              }}
            />
          </m.div>
        </m.div>
      </LazyMotion>
    );
  }
);

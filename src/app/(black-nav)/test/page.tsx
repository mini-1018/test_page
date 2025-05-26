"use client";
export default function SwimmingWhale() {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-blue-400 to-blue-800 min-h-screen overflow-hidden relative">
      {/* 배경 물결 효과 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-0 w-full h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 left-0 w-full h-1 bg-white rounded-full animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-32 left-0 w-full h-1 bg-white rounded-full animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* 메인 컨테이너 */}
      <div className="flex items-center justify-center min-h-screen relative">
        {/* 고래 SVG */}
        <div className="relative animate-[swim_4s_ease-in-out_infinite,float_6s_ease-in-out_infinite]">
          <svg
            width="500"
            height="250"
            viewBox="0 0 500 250"
            className="drop-shadow-2xl"
          >
            {/* 그라데이션 정의 */}
            <defs>
              <linearGradient
                id="whaleBodyGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="30%" stopColor="#3b82f6" />
                <stop offset="70%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>

              <linearGradient
                id="whaleBellyGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>

              <linearGradient
                id="tailGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>

              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="2"
                  dy="4"
                  stdDeviation="3"
                  floodColor="#0c4a6e"
                  floodOpacity="0.3"
                />
              </filter>
            </defs>

            {/* 고래 메인 몸체 */}
            <ellipse
              cx="200"
              cy="125"
              rx="150"
              ry="60"
              fill="url(#whaleBodyGradient)"
              filter="url(#shadow)"
            />

            {/* 고래 머리 부분 (더 둥글게) */}
            <ellipse
              cx="80"
              cy="125"
              rx="70"
              ry="55"
              fill="url(#whaleBodyGradient)"
              filter="url(#shadow)"
            />

            {/* 고래 배 부분 */}
            <ellipse
              cx="180"
              cy="160"
              rx="130"
              ry="35"
              fill="url(#whaleBellyGradient)"
            />

            {/* 배의 세로 주름들 */}
            <g stroke="#94a3b8" strokeWidth="1.5" fill="none" opacity="0.8">
              <path d="M 70 150 Q 180 140 290 150" />
              <path d="M 75 160 Q 180 150 285 160" />
              <path d="M 80 170 Q 180 160 280 170" />
              <path d="M 85 180 Q 180 170 275 180" />
              <path d="M 90 190 Q 180 180 270 190" />
            </g>

            {/* 고래 꼬리 (더 우아하게) */}
            <g className="animate-[tailWag_2s_ease-in-out_infinite] [transform-origin:85%_50%]">
              <path
                d="M 350 105 Q 400 80 450 70 Q 480 75 490 95 Q 470 110 450 115 Q 420 120 390 125 Q 420 130 450 135 Q 480 140 490 160 Q 470 145 450 140 Q 400 135 350 145 Q 365 125 350 105 Z"
                fill="url(#tailGradient)"
                filter="url(#shadow)"
              />
              {/* 꼬리 디테일 라인 */}
              <path
                d="M 365 115 Q 420 95 470 85"
                stroke="#1e3a8a"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 365 135 Q 420 145 470 155"
                stroke="#1e3a8a"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </g>

            {/* 고래 가슴지느러미 (더 자연스럽게) */}
            <ellipse
              cx="120"
              cy="155"
              rx="35"
              ry="12"
              fill="url(#whaleBodyGradient)"
              transform="rotate(-25 120 155)"
              filter="url(#shadow)"
            />

            {/* 고래 등지느러미 */}
            <path
              d="M 220 80 Q 235 55 250 80 Q 235 95 220 80"
              fill="url(#whaleBodyGradient)"
              filter="url(#shadow)"
            />

            {/* 고래 눈 (더 생동감 있게) */}
            <ellipse cx="65" cy="110" rx="12" ry="15" fill="#1f2937" />
            <ellipse cx="68" cy="107" rx="6" ry="8" fill="white" />
            <circle cx="70" cy="105" r="3" fill="#1f2937" />
            <circle cx="71" cy="104" r="1" fill="white" />

            {/* 고래 입 */}
            <path
              d="M 25 135 Q 50 145 25 155 Q 40 150 45 145"
              stroke="#1f2937"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* 물 분사구 (숨구멍) */}
            <ellipse cx="120" cy="85" rx="8" ry="4" fill="#1f2937" />
            <ellipse cx="140" cy="80" rx="6" ry="3" fill="#1f2937" />

            {/* 몸체 디테일 라인들 */}
            <path
              d="M 50 100 Q 200 95 340 105"
              stroke="#1e3a8a"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M 60 140 Q 200 135 330 145"
              stroke="#3b82f6"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* 물거품들 (더 다양하게) */}
        <div className="absolute top-1/3 left-1/4">
          <div className="w-3 h-3 bg-white rounded-full opacity-70 animate-[bubble_3s_ease-in-out_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50 ml-3 mt-2 animate-[bubble_3s_ease-in-out_infinite] [animation-delay:0.3s]"></div>
          <div className="w-4 h-4 bg-white rounded-full opacity-60 ml-1 mt-3 animate-[bubble_3s_ease-in-out_infinite] [animation-delay:0.6s]"></div>
          <div className="w-1 h-1 bg-white rounded-full opacity-80 ml-4 mt-1 animate-[bubble_3s_ease-in-out_infinite] [animation-delay:0.9s]"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-40 ml-2 mt-4 animate-[bubble_3s_ease-in-out_infinite] [animation-delay:1.2s]"></div>
        </div>

        {/* 물분사 효과 */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-8">
          <div className="w-1 h-8 bg-white rounded-full opacity-60 animate-[waterSpray_2s_ease-in-out_infinite]"></div>
          <div className="w-1 h-6 bg-white rounded-full opacity-40 ml-1 animate-[waterSpray_2s_ease-in-out_infinite] [animation-delay:0.2s]"></div>
          <div className="w-1 h-10 bg-white rounded-full opacity-50 ml-2 animate-[waterSpray_2s_ease-in-out_infinite] [animation-delay:0.4s]"></div>
        </div>
      </div>

      {/* 햇빛 효과 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      {/* 바닥 효과 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-800 via-stone-600 to-transparent opacity-60"></div>

      {/* 해초들 */}
      <div className="absolute bottom-0 left-16 w-3 h-40 bg-gradient-to-t from-green-800 to-green-400 rounded-t-full opacity-70 animate-[seaweed_3s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-32 w-2 h-32 bg-gradient-to-t from-green-700 to-green-500 rounded-t-full opacity-60 animate-[seaweed_3s_ease-in-out_infinite] [animation-delay:0.5s]"></div>
      <div className="absolute bottom-0 right-20 w-4 h-36 bg-gradient-to-t from-green-800 to-green-400 rounded-t-full opacity-75 animate-[seaweed_3s_ease-in-out_infinite] [animation-delay:1s]"></div>

      <style jsx>{`
        @keyframes swim {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(-1deg);
          }
          50% {
            transform: translateY(-8px) rotate(0deg);
          }
          75% {
            transform: translateY(8px) rotate(1deg);
          }
        }

        @keyframes tailWag {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-12deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(25px);
          }
        }

        @keyframes bubble {
          0% {
            transform: translateY(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-150px) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes waterSpray {
          0% {
            transform: translateY(0px) scaleY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: scaleY(1);
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-30px) scaleY(0.5);
            opacity: 0;
          }
        }

        @keyframes seaweed {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}

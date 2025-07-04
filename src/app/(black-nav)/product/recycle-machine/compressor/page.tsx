import NumberedSection from "../NumberedSection";
import FeatureSection from "../FeatureSection";
import FeatureItem from "../FeatureItem";

export default function CodaPage() {
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto">
        {/* 헤더 섹션 */}
        <div className="w-full">
          <img
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s1.webp"
            alt="코다(CODA) 무인회수기 메인이미지"
            className="w-full h-auto"
          />
        </div>

        {/* 인트로 섹션 */}
        <div className="w-full mt-[250px] mb-[360px]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-[30px]">
              <img
                className="w-full h-auto"
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s2.webp"
                alt="코다(CODA) 페트 이미지"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[45px] font-normal text-[#565656]">
                향유고래 지킴이
              </h3>
              <h3 className="text-[45px] font-bold text-[#141a46]">
                재활용품 무인회수기
              </h3>
              <p className="text-[20px] text-[#818181]">
                '코다'는 향유고래를 비롯한 해양동물이 안전하게 살아갈 수 있도록
                <br />
                재활용 자원을 모으고 보상 받는 '자원 선순환 브랜드'입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 서브 이미지 */}
        <div className="w-full">
          <img
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s3.webp"
            alt="코다(CODA) 무인회수기 서브이미지"
          />
        </div>

        {/* 모으고 살리고 보상받고 섹션 */}
        <FeatureSection
          bgColor="bg-[#f5f6f9]"
          title="모으고\n살리고\n보상받고"
          description="'무인회수기에 CAN, PET 투입하면\n압축기가 부피를 줄이며 선별 저장, 자원 순환률을 높여\n해양동물을 비롯한 환경을 회복합니다.'"
        >
          <img
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s4.webp"
            alt="코다(CODA) 무인회수기 메인설명"
          />
        </FeatureSection>

        {/* 자원 선순환 프로세스 섹션 */}
        <NumberedSection number="1" title="자원 선순환\n프로세스">
          <img
            className="w-full h-auto pt-[30px] pb-[80px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s5.webp"
            alt="코다(CODA) 무인회수기 자원 선순환 프로세스"
          />
          <div className="text-[26px] font-bold text-[#0095d3] mb-[10px]">
            캔, 페트병 선별 / 수거 운반 / 재활용자원 순환시스템
          </div>
          <div className="text-[18px] font-light text-[#010101]">
            투명PET, CAN 회수로 폐플라스틱 소재화 및 폐기물 발생량 체계적 저감
          </div>
        </NumberedSection>

        {/* 차별화 기능 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[150px] px-4 max-w-7xl mx-auto">
            <img
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num_big2.webp"
              alt="코다(CODA) 2번 설명"
              className="mb-5"
            />
            <div className="text-[45px] font-bold text-[#141a46] mb-8">
              차별화 기능
            </div>
            <img
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/icon_ai.webp"
              alt="코다(CODA) 무인회수기 AI"
              className="mb-[50px]"
            />
            <div className="text-[26px] font-light text-[#656565] mb-[200px]">
              '인공지능 센싱기술로 회수 가능 자원(CAN, PET) & 불가능 자원을
              선별하여
              <br />
              반환(배출) 및 압축을 통한 저장으로 자원 순환률을 높입니다.'
            </div>

            <FeatureItem
              title="회수가능자원 1차 판독 / 선별"
              description="AI 센싱기술 & 고효율 압축성능"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_1.webp"
              alt="코다(CODA) 무인회수기 AI 센싱기술"
            />

            <FeatureItem
              title="회수가능자원 2차 판독 / 자동 배출"
              description="첨단 로보틱스 활용한 배출구 반환 기능"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_2.webp"
              alt="코다(CODA) 무인회수기 첨단 로보틱스"
            />

            <FeatureItem
              title="타사 대비 월등한 처리 속도"
              description="정확한 자원 판단 설계와 고도화된 구조 기반 장비의 최적 성능 구현"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_6.webp"
              alt="코다(CODA) 무인회수기 처리 속도"
            />

            <FeatureItem
              title="자원 투입 시, 투입구 센서 자동 인식"
              description="투입시 LED 표시, 음성 안내 등의 사용 안전성"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_4.webp"
              alt="코다(CODA) 무인회수기 투입구 센서 자동 인식"
            />
          </div>
        </div>

        {/* 사용방법 섹션 */}
        <NumberedSection number="3" title="사용방법">
          <img
            className="w-full h-auto pt-[30px] pb-[80px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s6_1.webp"
            alt="코다(CODA) 무인회수기 사용설명"
          />
          <div className="text-[26px] font-bold text-[#0095d3] mb-[20px]">
            보다 사용하기 쉽게, 더 빠르게 확인!
          </div>
          <div className="text-[18px] font-light text-[#010101] mb-[150px]">
            초기화면 시작하기 터치 / 번호 입력 / 투입자원 포인트 바로 확인
            <br />
            전용 어플 설치 시 모바일 연동 / 사용 편의성 고려한 다양한 안전
            시스템 적용
          </div>

          <img
            className="w-[500px] h-auto mx-auto pt-[30px] pb-[80px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s6_2.webp"
            alt="코다(CODA) 무인회수기 사용편의성"
          />
          <div className="text-[26px] font-bold text-[#0095d3] mb-[20px]">
            타사 대비 다양한 센서 적용!
          </div>
          <div className="text-[18px] font-light text-[#010101] mb-[100px]">
            사용자 감지 센서 및 투입 감지 센서로 안전한 사용
            <br />
            포인트, 지역화폐, 캐시비 등 다양한 방식의 적립
          </div>

          <img
            className="w-full h-auto pt-[30px] pb-[80px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s6_3.webp"
            alt="코다(CODA) 무인회수기 안전기능"
          />
        </NumberedSection>

        {/* 회수자원 보상체계 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[150px] px-4 max-w-7xl mx-auto">
            <img
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num_big4.webp"
              alt="코다(CODA) 4번 설명"
              className="mb-5"
            />
            <div className="text-[45px] font-bold text-[#141a46] leading-tight mb-8">
              회수자원
              <br />
              보상체계
            </div>
            <div className="text-center">
              <span className="text-[26px] font-light text-[#818181] inline-block">
                투입량 만큼 사용자 맞춤 보상 -
              </span>
              <span className="text-[26px] font-light text-[#0095d3] inline-block">
                현금/교통카드/지역화폐
              </span>
            </div>
            <img
              className="w-full h-auto pt-[30px] mb-[200px]"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s7_1.webp"
              alt="코다(CODA) 무인회수기 회수자원 보상체계"
            />
            <div className="text-[26px] font-bold text-[#0095d3] mb-[20px]">
              코다 전용앱 사용 방법
            </div>
            <div className="text-[36px] font-light text-[#0095d3] mb-[10px]">
              '가장 손쉽고 빠르게'
            </div>
            <div className="text-[24px] font-light text-[#7f809b] mb-[50px]">
              직관적인 포인트 적립과 송금 시스템 제공
            </div>
            <img
              className="w-full h-auto pt-[30px] pb-[120px]"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s7_2.webp"
              alt="코다(CODA) 무인회수기 전용앱 사용방법"
            />
            <div className="text-[26px] font-bold text-[#0095d3] mb-[10px]">
              CODA 검색 (QR)
            </div>
            <img
              className="w-full h-auto pt-[30px] pb-[10px]"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s7_3.webp"
              alt="코다(CODA) 무인회수기 QR 코드"
            />
          </div>
        </div>

        {/* 무인회수기 압축기모델 섹션 */}
        <NumberedSection number="5" title="무인회수기\n압축기모델">
          <img
            className="w-full h-auto pt-[30px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s8.webp"
            alt="코다(CODA) 무인회수기 압축기"
          />
        </NumberedSection>

        {/* 캐노피 옵션 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[150px] px-4 pb-[30px] max-w-7xl mx-auto">
            <FeatureItem
              title="외부 설치 시, 캐노피 옵션 사양"
              description="사용자 맞춤 그래픽 적용 (지자체/기업)"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_5.webp"
              alt="코다(CODA) 무인회수기 캐노피"
            />
          </div>
        </div>

        {/* 다운로드 링크 */}
        <div className="w-full bg-[#f5f6f9] flex justify-center items-center pb-[150px]">
          <div className="border border-black rounded-[45px] px-[10px] py-[10px]">
            <div className="text-[20px]">
              <a
                href="http://112.217.212.250:10780/tmp/coda_online.pdf#zoom=200"
                download=""
                className="font-light flex items-center"
              >
                무인회수기 온라인기술서
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M3 13.5V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V13.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M7.5 10.5L12 15L16.5 10.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M12 15L12 3"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 서브 이미지 3 */}
        <div className="w-full">
          <img
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s11.webp"
            alt="코다(CODA) 무인회수기 서브이미지"
          />
        </div>
      </div>
    </div>
  );
}

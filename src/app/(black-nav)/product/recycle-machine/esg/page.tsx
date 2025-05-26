import NumberedSection from "../NumberedSection";
import FeatureSection from "../FeatureSection";
import FeatureItem from "../FeatureItem";

export default function ESGPage() {
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto">
        {/* 헤더 섹션 */}
        <div className="w-full">
          <img
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s1.webp"
            alt="코다(CODA) ESG 무인회수기 메인이미지"
            className="w-full h-auto"
          />
        </div>

        {/* 인트로 섹션 */}
        <div className="w-full mt-[250px] mb-[360px]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-[30px]">
              <img
                className="w-full h-auto"
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s2.webp"
                alt="코다(CODA) ESG 이미지"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[45px] font-normal text-[#565656]">
                탄소중립 실천모델
              </h3>
              <h3 className="text-[45px] font-bold text-[#141a46]">
                재활용품 무인회수기
              </h3>
              <p className="text-[20px] text-[#868686]">
                자연 보전을 위한 우리의 실천
                <br />
                투명 페트병, 캔 자원을 아끼고 모으는 것 부터 시작합니다.
                <br />
                CO2 감축을 위한 ESG 경영 전용 모델
              </p>
            </div>
          </div>
        </div>

        {/* 서브 이미지 */}
        <div className="w-full">
          <img
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s3.webp"
            alt="코다(CODA) ESG 서브이미지"
          />
        </div>

        {/* 이산화탄소 저감 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[150px] px-4 max-w-7xl mx-auto">
            <div className="text-[38px] font-bold text-[#141a46] leading-tight mb-6">
              이산화탄소 저감을 위한 활동
              <br />
              기업의 선택이 아닌 필수
            </div>
            <div className="text-[26px] font-light text-[#565656] mb-[100px]">
              산업폐기물과 생산과정의 오염물질로 인한 온실가스의 피해는
              <br />
              현재 세대와 더불어 다음 세대에까지 전과됩니다.
            </div>
            <img
              className="w-full h-auto mb-5"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s4.webp"
              alt="코다(CODA) ESG 이미지"
            />
            <div className="flex justify-center items-center">
              <div className="w-fit bg-[#131f6b] text-[#ededed] font-light py-[5px] px-[170px]">
                이산화탄소 저감을 위한 기업들의 실천 방안으로 재활용품
                무인회수기를 제안합니다.
              </div>
            </div>
          </div>
        </div>

        {/* 모으고 줄이고 보존하고 섹션 */}
        <FeatureSection
          title="모으고\n줄이고\n보존하고"
          description="'무인회수기에 CAN, PET 투입하면\n압축기가 부피를 줄이며 선별 저장, 자원 순환률을 높여\n폐기물 저감 및 자연환경을 보전합니다.'"
        >
          <img
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s5.webp"
            alt="코다(CODA) ESG 모으고 줄이고 보존하고"
          />
        </FeatureSection>

        {/* 서브 이미지 2 */}
        <div className="w-full">
          <img
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6.webp"
            alt="코다(CODA) ESG 서브이미지"
          />
        </div>

        {/* 차별화 기능 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[150px] px-4 max-w-7xl mx-auto">
            <img
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num_big1.webp"
              alt="코다(CODA) 1번 설명"
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
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_coda_s9_1.webp"
              alt="코다(CODA) ESG AI 센싱기술"
            />

            <FeatureItem
              title="회수가능자원 2차 판독 / 자동 배출"
              description="첨단 로보틱스 활용한 배출구 반환 기능"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_coda_s9_2.webp"
              alt="코다(CODA) ESG 첨단 로보틱스"
            />

            <FeatureItem
              title="타사 대비 월등한 처리 속도"
              description="정확한 자원 판단 설계와 고도화된 구조 기반 장비의 최적 성능 구현"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_coda/coda_coda_s9_6.webp"
              alt="코다(CODA) ESG 처리 속도"
            />
          </div>
        </div>

        {/* 사용방법 섹션 */}
        <NumberedSection number="2" title="사용방법">
          <img
            className="w-[700px] h-auto mx-auto pt-[30px] pb-[30px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_1.webp"
            alt="코다(CODA) ESG 사용방법"
          />
          <div className="text-[26px] font-bold text-[#0095d3] mb-[10px]">
            보다 사용하기 쉽게, 더 빠르게 CO2 감축량 확인!
          </div>
          <div className="text-[18px] font-light text-[#010101] mb-[150px]">
            초기화면 시작하기 터치 / 번호 입력 / 투입자원 포인트 바로 확인
            <br />
            전용 어플 설치 시 모바일 연동 / 사용 편의성 고려한 다양한 안전
            시스템 적용
          </div>

          <img
            className="w-full h-auto pt-[30px] pb-[30px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6_2.webp"
            alt="코다(CODA) ESG 사용편의성"
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
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s6_3.webp"
            alt="코다(CODA) ESG 안전기능"
          />
        </NumberedSection>

        {/* ESG 전용 APP 연동 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[150px] px-4 max-w-7xl mx-auto">
            <img
              src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num_big3.webp"
              alt="코다(CODA) 3번 설명"
              className="mb-5"
            />
            <div className="text-[45px] font-bold text-[#141a46] mb-8">
              ESG 전용 APP 연동
            </div>
            <img
              className="w-[500px] h-auto mx-auto pt-[30px] pb-[30px]"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_3.webp"
              alt="코다(CODA) ESG 앱 연동"
            />
            <div className="text-[26px] font-bold text-[#0095d3] mb-[10px]">
              직관적인 어플 UI & 자원 수거량 표시
            </div>
            <div className="text-[18px] font-light text-[#010101]">
              모바일, 무인회수기, 관제시스템 - 기기간 실시간 정보 연동
            </div>
          </div>
        </div>

        {/* CO2 감축 관제시스템 섹션 */}
        <NumberedSection number="4" title="CO2 감축\n관제시스템">
          <img
            className="w-[500px] h-auto mx-auto pt-[30px] pb-[30px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_4.webp"
            alt="코다(CODA) ESG CO2 감축 관제시스템"
          />
          <div className="text-[26px] font-bold text-[#0095d3] mb-[10px]">
            보다 이해하기 쉬운 CO2 감축량 그래프
            <br />
            총량 / 월별 / 장비별 확인 가능
          </div>
          <div className="text-[18px] font-light text-[#010101] mb-[150px]">
            PC 관제 시스템 - ESG 전용 대시보드
          </div>
          <div className="text-[26px] font-bold text-[#0095d3] mb-[10px]">
            ESG 기업용 APP 검색 (QR)
          </div>
          <img
            className="w-full h-auto pb-[10px]"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_5.webp"
            alt="코다(CODA) ESG QR 코드"
          />
        </NumberedSection>

        {/* 캐노피 옵션 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[150px] px-4 max-w-7xl mx-auto">
            <FeatureItem
              title="외부 설치 시, 캐노피 옵션 사양 가능"
              description="사용자 맞춤 그래픽 적용 (지자체/기업)"
              imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s7_8.webp"
              alt="코다(CODA) ESG 캐노피"
            />
          </div>
        </div>

        {/* 서브 이미지 3 */}
        <div className="w-full">
          <img
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_coda_esg/coda_esg_s8.webp"
            alt="코다(CODA) ESG 서브이미지"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import FadeUpOnView from "@/shared/components/common/FadeUpOnView";
import AnimationRfid from "./AnimationRfid";

export default function RFIDPage() {
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto">
        {/* 헤더 섹션 */}
        <div className="w-full">
          <Image
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s1_text.webp"
            alt="코다(CODA) RFID 음식물회수 결제시스템 - 음식점 4000개 업소 운영"
            width={1920}
            height={600}
            className="w-full h-auto mt-[80px]"
            priority={true}
          />
        </div>

        {/* RFID FWD 섹션 */}
          <div className="flex flex-col items-center py-[75px] md:py-[150px] mt-[75px] px-4 gap-4 text-center">
            <h3 className="text-third">검증된 관리 솔루션</h3>
            <p className="text-[14px] md:text-[20px] text-[#868686] mb-0">
                4000여개 F&B 업소가 신뢰하는
                <br />
                <span
                  className="inline"
                  style={{
                    background: "linear-gradient(transparent 40%, #f8e0af 60%)",
                  }}
                >
                  신속하고 정확한 수거량 측정 및 결제 시스템
                </span>
              </p>
            <AnimationRfid />
          </div>

        {/* 인트로 섹션 */}
        <FadeUpOnView>
        <div className="w-full mt-[120px] mb-[120px] md:mt-[240px] md:mb-[240px]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-[20px] md:mb-[30px] flex justify-center">
              <Image
                className="w-[20%] h-auto"
                src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s2.webp"
                alt="코다(CODA) RFID 음식물회수 결제시스템 - 회수 이미지"
                width={400}
                height={200}
              />
            </div>
            <div className="text-center">
              <h3 className="text-[45px] font-normal text-[#565656]">
                차량용RFID 업소용 음식물 회수
              </h3>
              <h3 className="text-[45px] font-bold text-third mb-[20px] md:mb-[30px]">
                선불/후불 결제시스템
              </h3>
              <p className="text-[14px] md:text-[20px] text-[#868686] mb-0">
                혹독한 환경에서도 사용 가능한 고정밀 특수 저울을 통해
                <br />
                정확하고 신속한 수거량 무게 측정 및 결제 시스템
              </p>
              <p className="text-[14px] md:text-[20px] text-[#868686] mt-0 text-center">
                <span
                  className="inline"
                  style={{
                    background: "linear-gradient(transparent 40%, #f8e0af 60%)",
                  }}
                >
                  업소에서 발생되는 수거량에 따라 결제하는 선불/후불 시스템
                </span>
              </p>
            </div>
          </div>
        </div>
        </FadeUpOnView>

        {/* 서브 이미지 */}
        <FadeUpOnView>
        <div className="w-full">
          <Image
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s3.webp"
            alt="코다(CODA) RFID 음식물회수 결제시스템 - 업소방문 원스탑 음식물회수 솔루션"
            width={1920}
            height={600}
          />
        </div>
        </FadeUpOnView>

        {/* 무게 기반 실시간 선불 결제시스템 섹션 */}
        <FadeUpOnView>
        <div className="flex flex-col justify-center w-full bg-[#f5f6f9]">
          <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
            <h3 className="font-bold text-[#141a46] leading-tight mb-6">
              매일 버려지는 음식물 쓰레기
              <br />
              무게 기반 실시간 선불 결제시스템
            </h3>
            <p className="text-[14px] md:text-[20px] font-light text-[#565656] mb-[100px]">
              기존 후불결제시스템과 더불어 2024년 선불 시스템의 신규 방식을
              <br className="hidden sm:block" />
              접목한 제주시를 비롯하여 전국에 서비스를 할 예정입니다.
            </p>
            <div className="max-w-[840px]">
            <Image
              className="w-full h-auto mb-5"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s4.webp"
              alt="코다(CODA) RFID 음식물회수 결제시스템 - 무게 기반 실시간 선불 결제 시스템"
              width={1200}
              height={600}
            />
              <p className="w-full bg-third text-[#ededed] text-[14px] md:text-[20px]">
                음식점을 순환하는 전용 회수차량으로 신속한 결제 및 회수가
                이루어집니다.
              </p>
            </div>
          </div>
        </div>
        </FadeUpOnView>

        {/* 신속/정확 & 안전/편안 섹션 */}
        
        <div className="w-full mb-[100px]">
          <FadeUpOnView delay={100}>
          <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
            <h3 className="font-bold text-third mb-[10px]">
              신속하게, 더 정확하게
            </h3>
            <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">
              고정밀 저울로 수거통 무게 측정 시, 서버 연동 및 즉시 결제시스템
            </p>
            <p className="text-[14px] md:text-[20px] font-light text-[#565656] mb-[30px]">
              특수 제작된 음식물 회수 전용 차량이 수시로 순회하며 중량 측정
              <br className="hidden sm:block" />
              전용 어플 설치 시, 모바일 연동 / 사용 편의성 향상
            </p>
            <Image
              className="w-[470px] h-auto mb-5 mx-auto"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s5.webp"
              alt="코다(CODA) RFID 음식물회수 결제시스템 - 신속하고 정확한 즉시 결제시스템"
              width={1200}
              height={600}
            />
          </div>
          </FadeUpOnView>

          <FadeUpOnView delay={100}>
          <div className="py-[75px] px-4 max-w-7xl mx-auto text-center">
            <h3 className="font-bold text-third mb-[10px]">
              안전하게, 그리고 편안하게
            </h3>
            <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">
              특수 설계로 어떠한 환경에서도 사용 가능한 안정적 시스템
            </p>
            <p className="text-[14px] md:text-[20px] font-light text-[#565656] mb-[30px]">
              음식물 부식 / 방수 / 충격 방지 등을 적용하여 <br />
              고장 없이 오래 사용할 수 있도록 특수 설계
            </p>
            <Image
              className="w-[470px] h-auto mb-5 mx-auto"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s6.webp"
              alt="코다(CODA) RFID 음식물회수 결제시스템 - 안전하고 편리한 시스템"
              width={1200}
              height={600}
            />
          </div>
          </FadeUpOnView>
        </div>


        {/* 업소방문 수거방법 섹션 */}
        <div className="w-full bg-[#f5f6f9]">
          <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
            <p className="text-[45px] font-bold text-[#141a46] leading-tight pb-[20px]">
              업소방문
              <br />
              수거방법
            </p>

            {/* 첫 번째 항목 */}
            <FadeUpOnView>
              <div className="flex flex-col md:flex-row my-10">
                <div className="md:w-1/2 flex items-center justify-end md:pr-[50px]">
                  <div className="text-right">
                    <Image
                      width={50}
                      height={50}
                      className="inline-block mb-[10px]"
                      src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num1.webp"
                      alt="코다(CODA) RFID 음식물회수 결제시스템 - 업소방문 수거방법 1번"
                    />
                    <p className="text-right text-[24px] font-bold text-[#0095d3]">
                      특허 인증 받은 차량용 고정밀 저울
                    </p>
                    <p className="text-right text-[16px] text-[#010101]">
                      [차량용 RFID 저울, 특허 제 10-2582620]
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_1.webp"
                    alt="코다(CODA) RFID 음식물회수 결제시스템 업소방문 수거방법 - 특허 인증 받은 차량용 고정밀 저울"
                  />
                </div>
              </div>
            </FadeUpOnView>

            {/* 두 번째 항목 */}
            <FadeUpOnView delay={100}>
              <div className="flex flex-col md:flex-row-reverse my-10">
                <div className="md:w-1/2 flex items-center justify-start md:pl-[50px]">
                  <div className="text-left">
                    <Image
                      width={50}
                      height={50}
                      className="inline-block mb-[10px]"
                      src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num2.webp"
                      alt="코다(CODA) RFID 음식물회수 결제시스템 - 업소방문 수거방법 2번"
                    />
                    <p className="text-left text-[24px] font-bold text-[#0095d3]">
                      방수기능 무게 측정기와 수거통 연결
                    </p>
                    <p className="text-left text-[16px] text-[#010101]">
                      [차량 리프트 결착 시 개별 인식카드를 RF 리더기로 식별]
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_2.webp"
                    alt="코다(CODA) RFID 음식물회수 결제시스템 업소방문 수거방법 - 방수기능 무게 측정기와 수거통 연결"
                  />
                </div>
              </div>
            </FadeUpOnView>

            {/* 세 번째 항목 */}
            <FadeUpOnView delay={200}>
              <div className="flex flex-col md:flex-row my-10">
                <div className="md:w-1/2 flex items-center justify-end md:pr-[50px]">
                  <div className="text-right">
                    <Image
                      width={50}
                      height={50}
                      className="inline-block mb-[10px]"
                      src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num3.webp"
                      alt="코다(CODA) RFID 음식물회수 결제시스템 - 업소방문 수거방법 3번"
                    />
                    <p className="text-right text-[24px] font-bold text-[#0095d3]">
                      인디게이터로 수거량 즉각 확인
                    </p>
                    <p className="text-right text-[16px] text-[#010101]">
                      [업소별 음식물 쓰레기 무게 측정 결과값 인디게이터 표시]
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_3.webp"
                    alt="코다(CODA) RFID 음식물회수 결제시스템 업소방문 수거방법 - 인디게이터로 수거량 즉각 확인"
                  />
                </div>
              </div>
            </FadeUpOnView>

            {/* 네 번째 항목 */}
            <FadeUpOnView delay={300}>
              <div className="flex flex-col md:flex-row-reverse my-10">
                <div className="md:w-1/2 flex items-center justify-start md:pl-[50px]">
                  <div className="text-left">
                    <Image
                      width={50}
                      height={50}
                      className="inline-block mb-[10px]"
                      src="https://do40f6yw4fd7i.cloudfront.net/img13/common/num4.webp"
                      alt="코다(CODA) RFID 음식물회수 결제시스템 - 업소방문 수거방법 4번"
                    />
                    <p className="text-left text-[24px] font-bold text-[#0095d3]">
                      서버 연동, 산정 수수료에 대한
                      <br />
                      선불 결제시스템 전송 / 관리
                    </p>
                    <p className="text-left text-[16px] text-[#010101]">
                      [차량, 서버 간 실시간 통신으로 과금 데이터 집계 및 결제]
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s8_4.webp"
                    alt="코다(CODA) RFID 음식물회수 결제시스템 업소방문 수거방법 - 서버 연동, 선불 결제시스템 전송/관리"
                  />
                </div>
              </div>
            </FadeUpOnView>
          </div>
        </div>

        {/* 결제시스템 구성도 섹션 */}
        <div className="w-full">
          <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto text-center">
            <h3 className="font-bold text-third leading-tight">
              수거 차량 RFID 결제시스템 구성도
            </h3>
            <Image
              className="w-[470px] h-auto py-[30px] mx-auto"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s9.webp"
              alt="코다(CODA) RFID 음식물회수 결제시스템 - 수거 차량 RFID 결제시스템 구성도"
              width={1200}
              height={600}
            />
            <h3 className="font-bold text-third mb-[10px]">
              RFID 결제시스템 배출완료 후 실시간 정보 전송
            </h3>
            <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">
              기존 제품 대비, 핵심 부품 중량계량부 내구성 향상 및 시스템 최적화
            </p>
            <p className="text-[14px] md:text-[20px] font-light text-[#656565] mb-[75px] md:mb-[150px]">
              스프링 플레이트 및 장시간 사용 가능한 로드셀 내구성 확보
              <br />
              보다 가벼운 고정밀저울 적용으로 설치 시, 최소 인원 1인 가능
            </p>

            <Image
              className="w-[470px] h-auto py-[30px] mx-auto"
              src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s10.webp"
              alt="코다(CODA) RFID 음식물회수 결제시스템 - 선불 결제시스템 인디게이터"
              width={1200}
              height={600}
            />
            <h3 className="font-bold text-third mb-[10px]">
              특허 기능을 장착한 저울
            </h3>
            <p className="text-[16px] md:text-[20px] font-bold text-third mb-[10px]">
              선불 결제시스템 인디게이터 (측정데이터 무선통신시스템)
            </p>
            <p className="text-[14px] md:text-[20px] font-light mb-[10px]">
              최대하중 200kg / RFID 카드 전용 단말기 내장형
            </p>
          </div>
        </div>

        {/* 푸터 이미지 */}
        <div className="w-full">
          <Image
            className="w-full h-auto"
            src="https://do40f6yw4fd7i.cloudfront.net/img13/item_rfid/coda_rfid_s11.webp"
            alt="코다(CODA) RFID 음식물회수 결제시스템 - 원스탑 업소방문 음식회수 솔루션"
            width={1920}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

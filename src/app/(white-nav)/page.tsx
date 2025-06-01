import { Metadata } from "next";
import PageSection from "@shared/components/section/PageSection";
import CarouselRender from "@/shared/components/carousel/Carousel.render";
import {
  ContentBlock,
  ContentBlocksSection,
  LogoTitleSection,
  MainVisualSection,
  ProductGridSection,
  ProductItem,
} from "./HomeSections";

export const metadata = {
  title: "코다(CODA) 메인페이지",
  description: "코다(CODA) 메인페이지",
};

const contentBlocks: ContentBlock[] = [
  {
    number: "01",
    title: "지구를 지키는 작은 시작<br />CODA의 순환 이야기",
    description: `매일 버려지는 페트병과 캔을 깨끗한 <br class="hidden md:block" />
        자원으로 만드는 선별/수집 시스템과 물류 인프라를 <br class="hidden md:block" />
        구축하여 여러분의 작은 습관으로 지구를 <br class="hidden md:block" />
        지키는데 함께 합니다.`,
    imageSrc:
      "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_1.webp",
    imageAlt: "코다(CODA) 지구를 지키는 작은 시작",
    imagePosition: "right",
  },
  {
    number: "02",
    title: "건강한 지구를 위한 활동<br />CODA와 함께 해주세요.",
    description: `버려지는 페트병에 바다생물이 <br class="hidden md:block" />
        아프지 않도록 나아가 다음 세대들의 <br class="hidden md:block" />
        건강한 삶을 지킬 수 있도록 <br class="hidden md:block" />
        CODA와 함께 해주세요.`,
    imageSrc:
      "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_2.webp",
    imageAlt: "코다(CODA) 건강한 지구를 위한 활동",
    imagePosition: "left",
  },
];

// 제품 데이터
const products: ProductItem[] = [
  {
    title: "무인회수기",
    link: "item_list_coda",
    imageSrc:
      "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_1.webp",
  },
  {
    title: "차량용RFID",
    link: "item_rfid",
    imageSrc:
      "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_2.webp",
  },
  {
    title: "음식물종량기",
    link: "item_food",
    imageSrc:
      "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_4.webp",
  },
  {
    title: "CODA 더 알아보기",
    link: "brand",
    imageSrc:
      "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_5.webp",
  },
];

export default function Page() {
  const sections = [
    {
      id: "carousel-section",
      component: (
        <MainVisualSection
          imageSrc="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp"
          title="코다(CODA) 메인페이지"
          alt="코다(CODA) 메인 이미지"
        />
      ),
      bgColor: "bg-gradient-to-br from-slate-900 to-slate-700",
      title: "코다(CODA)",
      description: "우리의 주요 프로젝트들을 확인해보세요.",
    },
    {
      id: "hero-section",
      component: <CarouselRender />,
      bgColor: "bg-gradient-to-br from-blue-900 to-purple-900",
      title: "회사 소개",
      description: "혁신적인 솔루션을 제공하는 회사입니다.",
      subSections: [
        {
          id: "brand-section",
          title: "브랜드",
          component: (
            <LogoTitleSection
              logoSrc="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.webp"
              logoAlt="코다(CODA) 로고"
              title="바다 속 향유고래 지킴이<br />자원순환 CAN+PET 무인회수기"
            />
          ),
        },
        {
          id: "philosophy-section",
          title: "경영이념",
          component: <ContentBlocksSection blocks={contentBlocks} />,
        },
        {
          id: "history-section",
          title: "연혁",
          component: (
            <ProductGridSection
              sectionTitle="제품소개"
              sectionSubtitle="CODA와 함께<br />환경을 지켜주세요."
              products={products}
            />
          ),
        },
      ],
    },
    {
      id: "features-section",
      component: <CarouselRender />,
      bgColor: "bg-gradient-to-br from-emerald-900 to-teal-900",
      title: "주요 제품",
      description: "우리 서비스의 핵심 기능들을 소개합니다.",
    },
  ];

  return (
    <>
      {/* 크롤링 페이지 따로 */}
      <div className="sr-only">
        <h1>메인 페이지</h1>
        {sections.map((section) => (
          <section key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </section>
        ))}
      </div>

      {/* 실제 표시되는 클라이언트 컴포넌트 */}
      <PageSection sections={sections} />
    </>
  );
}

// export default function HomePage() {
//   return (
//     <>
//       <main>
//         {/* 메인 비주얼 섹션 */}
//         <section className="w-full">
//           <h1 className="sr-only">코다(CODA) 메인페이지</h1>
//           <div className="relative">
//             <Image
//               src="https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp"
//               width={1920}
//               height={1080}
//               className="w-full h-auto"
//               alt="코다(CODA) 메인 이미지"
//               priority
//             />
//           </div>
//         </section>

//         {/* 섹션 02 */}
//         <section className="py-[150px] text-center">
//           <div className="w-[1100px] max-w-[95%] mx-auto">
//             <Image
//               src="https://do40f6yw4fd7i.cloudfront.net/img13/common/logo.webp"
//               width={200}
//               height={80}
//               alt="코다(CODA) 로고"
//               className="mx-auto mb-[30px]"
//             />
//             <h2 className="text-[40px] leading-[1.3] mb-[50px] font-bold">
//               바다 속 향유고래 지킴이
//               <br />
//               자원순환 CAN+PET 무인회수기
//             </h2>
//           </div>
//         </section>

//         {/* 섹션 03 */}
//         <section className="pb-[150px] bg-gradient-to-b from-transparent to-[#f9fafb]">
//           <div className="w-[1100px] max-w-[95%] mx-auto">
//             {/* 첫 번째 콘텐츠 블록 */}
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
//               <div className="w-full md:w-[40%] order-2 md:order-1">
//                 <h3 className="text-[32px] text-[#4b8cca] bg-gradient-to-r from-[#4b8cca] to-white text-white pl-[10px] mr-[100px] font-light">
//                   01
//                 </h3>
//                 <h4 className="text-[42px] leading-[1.3] my-[20px] font-bold">
//                   지구를 지키는 작은 시작
//                   <br />
//                   CODA의 순환 이야기
//                 </h4>
//                 <p className="text-[22px] leading-[1.5]">
//                   매일 버려지는 페트병과 캔을 깨끗한{" "}
//                   <br className="hidden md:block" />
//                   자원으로 만드는 선별/수집 시스템과 물류 인프라를{" "}
//                   <br className="hidden md:block" />
//                   구축하여 여러분의 작은 습관으로 지구를{" "}
//                   <br className="hidden md:block" />
//                   지키는데 함께 합니다.
//                 </p>
//               </div>
//               <div className="w-full md:w-[47%] overflow-hidden rounded-[30px] order-1 md:order-2">
//                 <Image
//                   src="https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_1.webp"
//                   width={600}
//                   height={400}
//                   alt="코다(CODA) 지구를 지키는 작은 시작"
//                   className="w-full h-auto transition-transform hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* 두 번째 콘텐츠 블록 */}
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mt-[150px]">
//               <div className="w-full md:w-[47%] overflow-hidden rounded-[30px]">
//                 <Image
//                   src="https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec02_2.webp"
//                   width={600}
//                   height={400}
//                   alt="코다(CODA) 건강한 지구를 위한 활동"
//                   className="w-full h-auto transition-transform hover:scale-105"
//                 />
//               </div>
//               <div className="w-full md:w-[40%]">
//                 <h3 className="text-[32px] text-[#4b8cca] bg-gradient-to-r from-[#4b8cca] to-white text-white pl-[10px] mr-[100px] font-light">
//                   02
//                 </h3>
//                 <h4 className="text-[42px] leading-[1.3] my-[20px] font-bold">
//                   건강한 지구를 위한 활동
//                   <br />
//                   CODA와 함께 해주세요.
//                 </h4>
//                 <p className="text-[22px] leading-[1.5]">
//                   버려지는 페트병에 바다생물이{" "}
//                   <br className="hidden md:block" />
//                   아프지 않도록 나아가 다음 세대들의{" "}
//                   <br className="hidden md:block" />
//                   건강한 삶을 지킬 수 있도록 <br className="hidden md:block" />
//                   CODA와 함께 해주세요.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 섹션 04 */}
//         <section className="pt-[150px] pb-[150px]">
//           <div className="w-[1100px] max-w-[95%] mx-auto">
//             <div className="mb-[50px]">
//               <h3 className="text-[20px] text-[#4b8cca] font-bold">제품소개</h3>
//               <h4 className="text-[42px] leading-[1.3] mt-[20px] font-bold">
//                 CODA와 함께
//                 <br />
//                 환경을 지켜주세요.
//               </h4>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
//               {[
//                 {
//                   title: "무인회수기",
//                   link: "item_list_coda",
//                   img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_1.webp",
//                 },
//                 {
//                   title: "차량용RFID",
//                   link: "item_rfid",
//                   img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_2.webp",
//                 },
//                 {
//                   title: "음식물종량기",
//                   link: "item_food",
//                   img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_4.webp",
//                 },
//                 {
//                   title: "CODA 더 알아보기",
//                   link: "brand",
//                   img: "https://do40f6yw4fd7i.cloudfront.net/img13/main/main_sec03_5.webp",
//                 },
//               ].map((item, index) => (
//                 <Link
//                   href={`/${item.link}`}
//                   key={index}
//                   className="relative overflow-hidden rounded-[20px] group"
//                 >
//                   <Image
//                     src={item.img}
//                     width={600}
//                     height={400}
//                     alt={item.title}
//                     className="w-full h-auto transition-transform group-hover:scale-105"
//                   />
//                   <h5 className="absolute bottom-[30px] left-[30px] text-[30px] text-[#565656] font-light">
//                     {item.title}{" "}
//                   </h5>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

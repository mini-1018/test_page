import { Metadata } from "next";
import PageSection from "../../../shared/components/section/PageSection";
import CarouselRender from "@/shared/components/carousel/Carousel.render";

export const metadata: Metadata = {
  title: "메인 페이지 | 회사명",
  description:
    "우리 회사의 메인 페이지입니다. 캐러셀, 히어로 섹션, 기능 소개 등을 확인하세요.",
  keywords: ["회사", "서비스", "제품"],
  openGraph: {
    title: "메인 페이지",
    description: "우리 회사의 메인 페이지입니다.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  const sections = [
    {
      id: "carousel-section",
      component: <CarouselRender />,
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
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-6xl font-bold mb-6">우리 브랜드</h1>
              <p className="text-xl opacity-90">브랜드 스토리를 소개합니다.</p>
            </div>
          ),
        },
        {
          id: "philosophy-section",
          title: "경영이념",
          component: (
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-6xl font-bold mb-6">경영이념</h1>
              <p className="text-xl opacity-90">
                우리의 핵심 가치를 소개합니다.
              </p>
            </div>
          ),
        },
        {
          id: "history-section",
          title: "연혁",
          component: (
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-6xl font-bold mb-6">회사 연혁</h1>
              <p className="text-xl opacity-90">
                지금까지의 여정을 소개합니다.
              </p>
            </div>
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

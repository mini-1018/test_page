import { ReactNode } from "react";

interface SubSection {
  id: string;
  title: string;
  component: ReactNode;
}

interface Section {
  id: string;
  component?: ReactNode;
  bgColor?: string;
  title: string;
  description?: string;
  subSections?: SubSection[];
}

interface PageSectionProps {
  sections: Section[];
}

interface FlatSection {
  id: string;
  title: string;
  component: ReactNode;
  bgColor?: string;
  parentTitle: string | null;
}

export default function PageSection({ sections }: PageSectionProps) {
  // 섹션을 평면화하여 렌더링용 배열 생성
  const flatSections: FlatSection[] = sections.flatMap((section) => {
    if (section.subSections && section.subSections.length > 0) {
      return section.subSections.map(
        (subSection): FlatSection => ({
          id: subSection.id,
          title: subSection.title,
          component: subSection.component,
          bgColor: section.bgColor,
          parentTitle: section.title,
        })
      );
    }
    return [
      {
        id: section.id,
        title: section.title,
        component: section.component!,
        bgColor: section.bgColor,
        parentTitle: null,
      },
    ];
  });

  return (
    <div className="relative">
      {/* 순수 CSS 네비게이션 - 현재 섹션 하이라이트 포함 */}
      <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((section) => (
          <div key={section.id} className="space-y-1">
            {/* 메인 섹션 (하위 섹션이 없는 경우) */}
            {!section.subSections ? (
              <a
                href={`#${section.id}`}
                data-target={section.id}
                className="nav-link flex items-center space-x-3 text-white/70 hover:text-white transition-all duration-500 group focus:text-white focus:outline-none"
              >
                <div className="nav-indicator w-6 h-0.5 bg-white/50 group-hover:w-8 group-hover:bg-white group-focus:w-8 group-focus:bg-white transition-all duration-500" />
                <span className="text-lg font-semibold whitespace-nowrap transition-all duration-500">
                  {section.title}
                </span>
              </a>
            ) : (
              <>
                {/* 부모 섹션 제목 */}
                <div className="flex items-center space-x-3 text-white/80">
                  <div className="w-8 h-0.5 bg-white/60" />
                  <span className="text-xl font-bold whitespace-nowrap">
                    {section.title}
                  </span>
                </div>

                {/* 하위 섹션들 */}
                {section.subSections.map((subSection) => (
                  <a
                    key={subSection.id}
                    href={`#${subSection.id}`}
                    data-target={subSection.id}
                    className="nav-link flex items-center space-x-3 text-white/50 hover:text-white/80 transition-all duration-500 group pl-2 focus:text-white/80 focus:outline-none"
                  >
                    <div className="nav-indicator w-4 h-0.5 bg-white/30 group-hover:w-6 group-hover:bg-white/50 group-focus:w-6 group-focus:bg-white/50 transition-all duration-500" />
                    <span className="text-base whitespace-nowrap transition-all duration-500">
                      {subSection.title}
                    </span>
                  </a>
                ))}
              </>
            )}
          </div>
        ))}
      </nav>

      {/* 스크롤 컨테이너 - 순수 CSS 스크롤 스냅 */}
      <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide">
        {flatSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`
              target-section
              h-screen w-full
              snap-start snap-always
              flex items-center justify-center
              ${section.bgColor || "bg-gray-100"}
              relative
            `}
          >
            <div className="w-full h-full flex items-center justify-center">
              {section.component}
            </div>

            {/* 첫 번째 섹션에만 스크롤 힌트 */}
            {index === 0 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div className="flex flex-col items-center text-white/70">
                  <span className="text-sm mb-2 font-medium">
                    스크롤해주세요
                  </span>
                  <svg
                    className="w-6 h-6 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

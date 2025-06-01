import Image from "next/image";
import Link from "next/link";

// 타입 정의
export interface MainVisualSectionProps {
  imageSrc: string;
  title: string;
  alt: string;
  priority?: boolean;
}

export interface LogoTitleSectionProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  className?: string;
}

export interface ContentBlock {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export interface ContentBlocksSectionProps {
  blocks: ContentBlock[];
  className?: string;
  backgroundColor?: string;
}

export interface ProductItem {
  title: string;
  link: string;
  imageSrc: string;
}

export interface ProductGridSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  products: ProductItem[];
  className?: string;
}

// 메인 비주얼 섹션 - PageSection용으로 수정
export function MainVisualSection({
  imageSrc,
  alt,
  priority = true,
}: MainVisualSectionProps) {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Image
        src={imageSrc}
        fill
        className="object-cover"
        alt={alt}
        priority={priority}
      />
    </div>
  );
}

// 로고 및 타이틀 섹션 - PageSection용으로 수정
export function LogoTitleSection({
  logoSrc,
  logoAlt,
  title,
  className = "",
}: LogoTitleSectionProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center text-center ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <Image
          src={logoSrc}
          width={200}
          height={80}
          alt={logoAlt}
          className="mx-auto mb-8"
        />
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
}

// 콘텐츠 블록 섹션 - PageSection용으로 수정
export function ContentBlocksSection({
  blocks,
  className = "",
}: ContentBlocksSectionProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <div className="w-[1100px] max-w-[95%] mx-auto">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 ${
              index > 0 ? "mt-24" : ""
            }`}
          >
            {/* 텍스트 콘텐츠 */}
            <div
              className={`w-full lg:w-[45%] text-white ${
                block.imagePosition === "left"
                  ? "order-2 lg:order-1"
                  : "order-1 lg:order-2"
              }`}
            >
              <h3 className="text-2xl md:text-3xl text-blue-400 font-light mb-4">
                {block.number}
              </h3>
              <h4
                className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: block.title }}
              />
              <p
                className="text-lg md:text-xl leading-relaxed opacity-90"
                dangerouslySetInnerHTML={{ __html: block.description }}
              />
            </div>

            {/* 이미지 */}
            <div
              className={`w-full lg:w-[45%] overflow-hidden rounded-3xl ${
                block.imagePosition === "left"
                  ? "order-1 lg:order-2"
                  : "order-2 lg:order-1"
              }`}
            >
              <Image
                src={block.imageSrc}
                width={600}
                height={400}
                alt={block.imageAlt}
                className="w-full h-auto transition-transform hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 제품 그리드 섹션 - PageSection용으로 수정
export function ProductGridSection({
  sectionTitle,
  sectionSubtitle,
  products,
  className = "",
}: ProductGridSectionProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <div className="w-[1100px] max-w-[95%] mx-auto text-white">
        <div className="mb-12 text-center">
          <h3 className="text-xl md:text-2xl text-blue-400 font-bold mb-4">
            {sectionTitle}
          </h3>
          <h4
            className="text-3xl md:text-5xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: sectionSubtitle }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((item, index) => (
            <Link
              href={`/${item.link}`}
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <Image
                src={item.imageSrc}
                width={600}
                height={400}
                alt={item.title}
                className="w-full h-auto transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h5 className="absolute bottom-6 left-6 text-2xl md:text-3xl text-white font-medium">
                {item.title}
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

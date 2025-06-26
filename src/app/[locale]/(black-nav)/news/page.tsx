import News, { NewsPost } from "./News";
import type { Locale } from "@lib/translator";

interface NewsPageProps {
  params: Promise<{ locale: Locale }>;
}

const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "코다, 우수조달 제품 등록",
    date: "2025-05-25",
    tag: "우수제품",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 2,
    title: "무인회수기 출시",
    date: "2025-05-20",
    tag: "신제품",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 3,
    title: "음식물 종량기 출시",
    date: "2025-05-15",
    tag: "신제품",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
];

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <News posts={newsPosts} locale={locale} />
    </main>
  );
}

export async function generateMetadata({ params }: NewsPageProps) {
  const { locale } = await params;

  return {
    title: locale === "ko" ? "코다(CODA) 소식" : "CODA News",
    description: locale === "ko" ? "코다(CODA)의 최신 소식과 업데이트를 확인하세요" : "Check out the latest news and updates from CODA",
    keywords: locale === "ko" ? "코다, CODA, 소식, 뉴스, 업데이트, 공지사항" : "CODA, news, updates, announcements, latest",
    openGraph: {
      title: locale === "ko" ? "코다(CODA) 소식" : "CODA News",
      description: locale === "ko" ? "코다(CODA)의 최신 소식과 업데이트를 확인하세요" : "Check out the latest news and updates from CODA",
    },
  };
}

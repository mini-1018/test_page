import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsPost } from "../News";
import type { Locale } from "@lib/translator";

interface NewsDetailPageProps {
  params: Promise<{
    locale: Locale;
    id: string;
  }>;
}

const newsPosts: NewsPost[] = [
  {
    id: 3,
    title: "BEXCO 기후산업국제박람회",
    date: "2024-09-04",
    tag: "전시회",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2409_bexco/news_2409_bexco_01.webp",
    content: `
      <div style="display: flex; justify-content: center;">
        <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2409_bexco/news_2409_bexco_01.webp" style="width:800px; border-radius:15px;" alt="BEXCO 기후산업국제박람회 전시 부스">
      </div>
      <br><br>

      <p style="font-size: 18px; text-align: center;">
        일회용품을 수거하는 CODA가 왜 기후박람회에 참가하였을까요?<br>
        무시무시하게 쌓이고 있는 플라스틱이 기후 환경에도 영향을 끼친다는 것을 아시나요?<br>
        환경을 생각하는 사람들이 모인 자리에서 재활용 선순환을 꿈꾸는 CODA를 소개하고 왔습니다!<br><br><br>
      </p>

      <div style="display: flex; justify-content: center;">
        <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2409_bexco/news_2409_bexco_02.webp" style="width:800px; border-radius:15px;" alt="CODA 무인회수기 시연">
      </div>
      <br><br>

      <p style="font-size: 18px; text-align: center;">
        포인트를 환급해주는 일반 포인트형 제품과 <br>
        투입한 페트병을 통한 탄소저감효과를 체감할 수 있는 ESG 모델을 소개하고 왔습니다.
      </p>
    `,
  },
  {
    id: 2,
    title: "음식물 종량기 우수발명품 선정",
    date: "2024-06-28",
    tag: "수상",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_food_good_invention/food_good_invention_01.webp",
    content: `
      <div style="display: flex; justify-content: center;">
        <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_food_good_invention/food_good_invention_01.webp" style="width:800px; border-radius: 15px;" alt="음식물 종량기 우수발명품 인증서">
      </div>
      <br><br>

      <p style="font-size: 18px; text-align: center;">
        CODA의 음식물종량기가 우수발명품으로 선정되었습니다.<br>
        실제 사용하는 사용자의 마음으로 불편한 점을 귀 기울이고<br>
        깨끗한 지구가 되기를 꿈꾸었기에 얻을 수 있는 결과라고 생각합니다.<br><br><br>
      </p>

      <div style="display: flex; justify-content: center;">
        <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_food_good_invention/food_good_invention_02.webp" style="width:800px; border-radius: 15px;" alt="음식물 종량기 제품 이미지">
      </div>
      <br><br>

      <p style="font-size: 18px; text-align: center;">
        저희 제품을 사용해주시는 모든 분들께서 불편함 없이 쾌적한 삶을 영위하도록 <br>
        끝없이 보이지 않는 곳에서 노력하겠습니다.<br>
        항상 감사합니다!
      </p>
    `,
  },
  {
    id: 1,
    title: "COEX ENVEX 2024",
    date: "2024-06-03",
    tag: "전시회",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_coex/news_2406_coex_01.webp",
    content: `
      <div style="display: flex; justify-content: center;">
        <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_coex/news_2406_coex_01.webp" style="width:800px; border-radius: 15px;" alt="COEX ENVEX 2024 전시회 현장">
      </div>
      <br><br>
      <p style="font-size: 18px; text-align: center;">
        일회용품이 환경에 끼치는 영향은 이루 말할 수 없습니다.<br>
        환경을 생각하는 사람들을 위한 CODA, 무인회수기를 국제환경산업기술 & 그린에너지전에 소개하고 왔습니다.<br>
        많은 사람들께서 관심을 보여주셔서 뜻깊은 시간이었습니다.<br><br><br>
      </p>
      <div style="display: flex; justify-content: center;">
        <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_coex/news_2406_coex_02.webp" style="width:800px; border-radius: 15px;" alt="CODA 무인회수기 전시 부스">
      </div>
      <br><br>
      <p style="font-size: 18px; text-align: center;">
        많은 사람들 앞에서 CODA를 소개할 수 있어서 매우 설레고 반가웠습니다. <br>
        앞으로 더 많은 사람들의 일상 생활에 녹아들어서<br>
        모두 함께 환경을 위해 노력하는 사회를 만들도록 노력하겠습니다!
      </p>
    `,
  },
];

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { locale, id } = await params;

  // URL에서 ID 추출하여 해당 뉴스 찾기
  const newsId = parseInt(id, 10);
  const news = newsPosts.find((post) => post.id === newsId);

  // 뉴스를 찾지 못한 경우 404 페이지로 리다이렉트
  if (!news) {
    notFound();
  }

  // 안전한 HTML 렌더링을 위한 함수
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 영역 */}
      <div className="max-w-4xl mx-auto px-6 pt-32">
        {/* 제목 */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{news.title}</h1>

        {/* 서브인포 */}
        <div className="flex items-center gap-4 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">{news.tag}</span>
          <div className="text-sm text-gray-500">
            {new Date(news.date).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US", {
              year: "numeric",
              month: locale === "ko" ? "long" : "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            {/* HTML 콘텐츠 렌더링 */}
            <div className="prose prose-lg prose-gray max-w-none news-content" dangerouslySetInnerHTML={createMarkup(news.content)} />
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-12 flex justify-between items-center">
          <Link href={`/${locale}/news`} className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-blue-600 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:-translate-x-1 shadow-sm hover:shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === "ko" ? "목록으로 돌아가기" : "Back to List"}
          </Link>
        </div>
      </div>
    </main>
  );
}

// 메타데이터 생성
export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { locale, id } = await params;
  const newsId = parseInt(id, 10);
  const news = newsPosts.find((post) => post.id === newsId);

  if (!news) {
    return {
      title: "뉴스를 찾을 수 없습니다",
    };
  }

  return {
    title: `${news.title} | ${locale === "ko" ? "코다(CODA) 소식" : "CODA News"}`,
    description: news.title,
    openGraph: {
      title: news.title,
      description: news.title,
      images: [news.imageUrl],
    },
    twitter: {
      title: news.title,
      description: news.title,
      images: [news.imageUrl],
    },
    alternates: {
      canonical: `/${locale}/news/${news.id}`,
      languages: {
        ko: `/${locale}/news/${news.id}`,
        en: `/${locale}/news/${news.id}`,
      },
    },
  };
}

export async function generateStaticParams() {
  return newsPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

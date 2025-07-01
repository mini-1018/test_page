import News, { NewsPost } from "./News";
import type { Locale } from "@lib/translator";
import { getNewsTranslations } from "@lib/translations/news.trans";
import type { Metadata } from "next";

interface NewsPageProps {
  params: Promise<{ locale: Locale }>;
}

const newsPosts: NewsPost[] = [
  {
    id: 3,
    title: "음식물 종량기 출시",
    date: "2024-09-04",
    tag: "신제품",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2409_bexco/news_2409_bexco_01.webp",
    content: `<h1 class="head_title" style="margin: 0px;">BEXCO 기후산업국제박람회</h1>
        <p style="font-size: 16px;  color: gray; margin-bottom: 50px;">
            2024.9.4 ~ 2024.9.6
        </p>
        <div style="display: flex; justify-content: center;">
          <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2409_bexco/news_2409_bexco_01.webp" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            일회용품을 수거하는 CODA가 왜 기후박람회에 참가하였을까요?<br>
            무시무시하게 쌓이고 있는 플라스틱이 기후 환경에도 영향을 끼친다는 것을 아시나요?<br>
            환경을 생각하는 사람들이 모인 자리에서 재활용 선순환을 꿈꾸는 CODA를 소개하고 왔습니다!<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2409_bexco/news_2409_bexco_02.webp" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            포인트를 환급해주는 일반 포인트형 제품과 <br>
            투입한 페트병을 통한 탄소저감효과를 체감할 수 있는 ESG 모델을 소개하고 왔습니다.
        </p>`,
  },
  {
    id: 2,
    title: "음식물 종량기 우수발명품 선정",
    date: "2025-06-28",
    tag: "수상",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_food_good_invention/food_good_invention_01.webp",
    content: `        <h1 class="head_title" style="margin: 0px;">음식물 종량기 우수발명품 선정</h1>
        <p style="font-size: 16px; color: gray; margin-bottom: 50px;">
            2024.6.28
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_food_good_invention/food_good_invention_01.webp" style="width:800px; border-radius: 15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;"">
            CODA의 음식물종량기가 우수발명품으로 선정되었습니다.<br>
            실제 사용하는 사용자의 마음으로 불편함 점을 귀 기울이고<br>
            깨끗한 지구가 되기를 꿈꾸었기에 얻을 수 있는 결과라고 생각합니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_food_good_invention/food_good_invention_02.webp" style="width:800px; border-radius: 15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;"">
            저희 제품을 사용해주시는 모든 분들께서 불편함 없이 쾌적한 삶을 영위하도록 <br>
            끝없이 보이지 않는 곳에서 노력하겠습니다.<br>
            항상 감사합니다!
        </p>`,
  },
  {
    id: 1,
    title: "COEX ENVEX 2024",
    date: "2025-06-03",
    tag: "전시회",
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_coex/news_2406_coex_01.webp",
    content: `<h1 class="head_title" style="margin: 0px;">COEX ENVEX 2024</h1>
        <p style="font-size: 16px; color: gray; margin-bottom: 50px;">
            2024.6.3 ~ 2024.6.5
        </p>
        <div style="display: flex; justify-content: center;">
          <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_coex/news_2406_coex_01.webp" style="width:800px; border-radius: 15px;" alt="">
        </div>
        <br><br>
        <p style="font-size: 18px; text-align: center;">
            일회용품이 환경에 끼치는 영향은 이루 말할 수 없습니다.<br>
            환경을 생각하는 사람들을 위한 CODA, 무인회수기를 국제환경산업기술 & 그린에너지전에 소개하고 왔습니다.<br>
            많은 사람들께서 관심을 보여주셔서 뜻깊은 시간이었습니다.<br><br><br>
        </p>
        <div style="display: flex; justify-content: center;">
          <img src="https://do40f6yw4fd7i.cloudfront.net/img13/news/news_2406_coex/news_2406_coex_02.webp" style="width:800px; border-radius: 15px;" alt="">
        </div>
        <br><br>
        <p style="font-size: 18px; text-align: center;">
            많은 사람들 앞에서 CODA를 소개할 수 있어서 매우 설레고 반가웠습니다. <br>
            앞으로 더 많은 사람들의 일상 생활에 녹아들어서<br>
            모두 함께 환경을 위해 노력하는 사회를 만들도록 노력하겠습니다!
        </p>`,
  },
];

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  const { t } = getNewsTranslations(locale);
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32 min-h-[100vh]">
      <h1 className="sr-only">{t("title")}</h1>
      <News posts={newsPosts} locale={locale} />
    </main>
  );
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getNewsTranslations(locale);

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    keywords: t("metaData.keywords"),
    alternates: {
      canonical: `/${locale}/news`,
      languages: {
        ko: "/ko/news",
        en: "/en/news",
      },
    },
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: `/${locale}/news`,
      siteName: t("metaData.openGraph.siteName"),
      images: [
        {
          url: t("metaData.image"),
          width: 1200,
          height: 630,
          alt: t("metaData.title"),
        },
      ],
      locale: t("metaData.openGraph.locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaData.title"),
      description: t("metaData.description"),
      images: [t("metaData.image")],
    },
  };
}

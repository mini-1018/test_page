import News, { NewsPost } from "./News";
import type { Locale } from "@lib/translator";
import { getNewsTranslations } from "@lib/translations/news.trans";
import type { Metadata } from "next";

interface NewsPageProps {
  params: Promise<{ locale: Locale }>;
}

const newsPosts: NewsPost[] = [
  {
    id: 6,
    title: "울산고래축제 속 코다의 녹색체험",
    date: "2025-09-28",
    tag: "축제",
    imageUrl: "/images/news/news_2509_ulsan_whale/07.jpg",
    content: `
        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2509_ulsan_whale/01.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <h1 class="head_title" style="margin: 0px; text-align: center;">울산고래축제 속 코다의 녹색체험</h1>
        <p style="font-size: 24px; color: gray; margin-bottom: 50px; text-align: center;">
            고래의 도시에서 코다가 전한 녹색 메세지
        </p>

        <p style="font-size: 18px; text-align: center;">
            지난 9월 25일(목)부터 9월 28일(일)까지<br>
            울산 장생포 고래문화특구 일원에서 열린<br>
            제 29회 울산고래축제가 많은 시민과 관광객들의<br>
            참여 속에 성황리에 막을 내렸습니다.<br><br>
            저희 지테크인터내셔날의 친환경 자원 순환 브랜드<br>
            CODA(코다)도 참여를 하였는데요.<br>
            짧게나마 그 소식을 전해드리겠습니다.<br><br><br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2509_ulsan_whale/02.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br>

        <p style="font-size: 18px; text-align: center;">
            울산 고래 축제는 수천년 전 선시시대부터<br>
            이어져 온 고래문화를 기념하는<br>
            울산을 대표하는 축제인데요.<br><br>
            근대 포경산업의 중심지였던 장생포를<br>
            기반으로 1995년부터 매년 개최되고 있습니다.<br><br>
            올해 축제는 고래의 선물(Gift from a whale)을<br>
            주제로 생태와 예술, 기술과 체험이 어우러진<br>
            미래형 콘텐츠를 선보이며<br>
            울산의 바다와 고래문화를 새롭게 조명했습니다.<br><br><br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2509_ulsan_whale/03.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br>

        <p style="font-size: 18px; text-align: center;">
            이번 축제에는 울산 남구청 환경자원과와 함께<br>
            저희 코다도 동참했는데요.<br><br>
            투명페트병과 캔을 직접 무인회수기에 투입해<br>
            포인트로 적립하는 체험 프로그램을 운영하여<br>
            시민들이 자원 순환의 가치를<br>
            직접 경험 할 수 있도록 했습니다.<br><br><br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2509_ulsan_whale/04.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br>

        <p style="font-size: 18px; text-align: center;">
            특히, 코다의 로고가 향유고래를 모티브로<br>
            디자인 되어 있어 울산 고래 축제의 상징성과도<br>
            자연스럽게 맞닿아 있었습니다.<br><br>
            고래를 사랑하는 도시, 울산에서<br>
            코다의 친환경 메세지가<br>
            더욱 뜻깊게 전달된 자리였습니다.<br><br><br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2509_ulsan_whale/05.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br>

        <p style="font-size: 18px; text-align: center;">
            코다는 앞으로도 환경과 문화를<br>
            함께 지키는 지속 가능한 축제 참여와<br>
            친환경 활동을 이어갈 예정입니다.<br><br>
            시민과 함께 만드는 깨끗한 자원 순환 사회를<br>
            위해 꾸준히 노력하겠습니다.
        </p>`,
  },
  {
    id: 5,
    title: "2025 RETECH 전시회 참가",
    date: "2025-08-29",
    tag: "전시회",
    imageUrl: "/images/news/news_2508_retech/01.jpg",
    content: `<h1 class="head_title" style="margin: 0px;">2025 RETECH 폐기물·자원순환 산업전 참가</h1>
        <p style="font-size: 16px; color: gray; margin-bottom: 50px;">
            2025.8.27 ~ 2025.8.29
        </p>
        
        <p style="font-size: 18px; text-align: center;">
            지난 8월 27일부터 29일까지 개최된<br>
            폐기물 · 자원순환 산업전에 참가하여<br>
            자사 브랜드 '코다(CODA)'를 선보였습니다.<br><br>
            올해 2025 리텍전시회는<br>
            더욱 확대된 규모로 개최가 되었는데요.<br><br>
            폐기물 관리, 재활용 기술, 자원회수 및 에너지 전환<br>
            관련 최신 기술 및 장비들이 전시되어 있어<br>
            흥미로웠습니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/02.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            CODA(코다)는<br>
            생활 속 다양한 자원순환 솔루션을<br>
            제공하는 통합 브랜드로 이번 전시회에서<br><br>
            ✅ 재활용품 무인회수기<br>
            ✅ 재활용품 IOT 전자저울<br>
            ✅ 폐식용유 회수기<br>
            ✅ 음식물 종량기<br>
            ✅ RFID 기반 음식물 수거차량 결제 시스템<br>
            등을 선보였는데요.<br><br>
            자세히 알아볼까요?<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/03.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            전시회 입구에 들어서면 바로 보이는 위치!<br>
            G-TECH의 새로운 CI가 적용된 부스입니다.<br>
            멀리서 봐도 시선에 확 들어오는데요.<br><br>
            지테크인터내셔날은 이번 전시회에서<br>
            재활용품 무인회수기 분야<br>
            국내최초, 국내유일 우수조달을<br>
            받은 점을 강조하였습니다.<br><br>
            지테크인터내셔날 CI가 적용된<br>
            하늘색 단체복을 입고있었는데 보셨을까요? 😊<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/04.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            코다 재활용품 무인회수기는<br>
            투명 페트병과 캔 압축은 물론<br>
            파쇄 기능을 갖춘 제품까지 함께 전시되어<br>
            관람객들로부터 큰 주목을 받았습니다.<br><br>
            출시된 제품 모두는 일관된 디자인을 적용하여<br>
            지테크인터내셔날의 아이덴티티를 보여드렸습니다.<br><br>
            추가로 설명드리면<br>
            오렌지는 음식물 종량기<br>
            브라운은 폐식용유 회수기<br>
            블루는 재활용품 무인회수기<br>
            그린은 재활용품 무인회수기(ESG전용) 입니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/05.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            재활용품 무인회수기는<br>
            관제 사이트, 어플로 연동이 되며<br>
            탄소감축을 위한 ESG 전용 모델로도 가능합니다.<br><br>
            직접 장비를 구동해볼 수 있게 준비하여<br>
            방문객들이 자원 순환 과정을<br>
            직접 체험해 볼수 있도록 하였습니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/06.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            현재 제주시 전역에서 운용하고 있는<br>
            음식물 수거차량 RFID 결제 시스템도<br>
            관제 사이트와 연동하여<br>
            직접 보실수 있도록 선보였습니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/07.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            특히 이번 전시회에서<br>
            재활용품 IOT 저울이<br>
            높은 관심을 이끌어내며<br>
            향후 재활용센터의 활용성을 입증하였습니다.<br><br>
            재활용품 IOT 저울은 사용자가 쉽게 조작하여<br>
            품목별 무게를 측정하고 실시간으로 서버에<br>
            전송 및 저장을 할 수 있는 지능형 계측기입니다.<br>
            음성안내 기능도 있다는 사실!<br>
            지테크인터내셔날만의 혁신기술이 적용되었습니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/08.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            재활용센터에 설치시<br>
            업무 효율성 향상, 재활용 자원 유통 체계 고도화,<br>
            행정처리 간소화, 작업 편의성 극대화,<br>
            데이터 정확성 및 신뢰도 향상 등<br>
            다양한 이점을 가지고 있습니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/09.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            지테크인터내셔날은<br>
            앞으로도 코다 브랜드를 통해<br>
            친환경 기술과 제품을 선보이며<br>
            지속 가능한 자원순환 사회를 만드는데<br>
            앞장서겠습니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2508_retech/10.jpg" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            RETECH과 같은 행사가 지속적으로 개최되어<br>
            더 많은 사람들이 환경보호와 지속가능한 발전의<br>
            중요성을 알고 실천할수 있기를 바랍니다.
        </p>`,
  },
  {
    id: 4,
    title: "재활용품 무인회수기 우수제품 지정",
    date: "2025-04-28",
    tag: "수상",
    imageUrl: "/images/news/img1.png",
    content: `<h1 class="head_title" style="margin: 0px;">재활용품 무인회수기 우수제품 지정</h1>
        <p style="font-size: 16px;  color: gray; margin-bottom: 50px;">
            2025.4.28
        </p>
        <div style="display: flex; justify-content: center;">
          <img src="/images/news/img1.png" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
        CODA의 재활용품 무인회수기가 우수제품으로 지정되었습니다!<br>
        오랫동안 환경을 위해 고민하고 연구해온 저희의 노력이 결실을 맺는 순간이었어요.<br>
        사용자 편의성과 환경 보호라는 두 마리 토끼를 모두 잡으려 노력한 결과라고 생각합니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/img2.png" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
          이번 우수제품 지정은 단순한 상이 아닌, 더 많은 사람들에게 CODA를 알릴 수 있는 소중한 기회가 되었습니다.<br>
          PET와 캔을 투입하면 포인트를 적립해주는 기본 모델부터,<br>
          탄소 저감에 기여하는 ESG 모델까지.<br>
          다양한 방식으로 사람들의 재활용 참여를 이끌어내고 있어요.<br><br>
          앞으로도 더 많은 곳에서 CODA를 만나보실 수 있을 겁니다.<br>많은 관심과 사랑 부탁드립니다!
        </p>`,
  },
  {
    id: 3,
    title: "음식물 종량기 출시",
    date: "2024-09-04",
    tag: "신제품",
    imageUrl: "/images/news/news_2409_bexco/news_2409_bexco_01.webp",
    content: `<h1 class="head_title" style="margin: 0px;">BEXCO 기후산업국제박람회</h1>
        <p style="font-size: 16px;  color: gray; margin-bottom: 50px;">
            2024.9.4 ~ 2024.9.6
        </p>
        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2409_bexco/news_2409_bexco_01.webp" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            일회용품을 수거하는 CODA가 왜 기후박람회에 참가하였을까요?<br>
            무시무시하게 쌓이고 있는 플라스틱이 기후 환경에도 영향을 끼친다는 것을 아시나요?<br>
            환경을 생각하는 사람들이 모인 자리에서 재활용 선순환을 꿈꾸는 CODA를 소개하고 왔습니다!<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2409_bexco/news_2409_bexco_02.webp" style="width:800px; border-radius:15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;">
            포인트를 환급해주는 일반 포인트형 제품과 <br>
            투입한 페트병을 통한 탄소저감효과를 체감할 수 있는 ESG 모델을 소개하고 왔습니다.
        </p>`,
  },
  {
    id: 2,
    title: "음식물 종량기 우수제품 지정",
    date: "2024-06-28",
    tag: "수상",
    imageUrl: "/images/news/news_2406_food_good_invention/food_good_invention_01.webp",
    content: `        <h1 class="head_title" style="margin: 0px;">음식물 종량기 우수발명품 선정</h1>
        <p style="font-size: 16px; color: gray; margin-bottom: 50px;">
            2024.6.28
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2406_food_good_invention/food_good_invention_01.webp" style="width:800px; border-radius: 15px;" alt="">
        </div>
        <br><br>

        <p style="font-size: 18px; text-align: center;"">
            CODA의 음식물종량기가 우수발명품으로 선정되었습니다.<br>
            실제 사용하는 사용자의 마음으로 불편함 점을 귀 기울이고<br>
            깨끗한 지구가 되기를 꿈꾸었기에 얻을 수 있는 결과라고 생각합니다.<br><br><br>
        </p>

        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2406_food_good_invention/food_good_invention_02.webp" style="width:800px; border-radius: 15px;" alt="">
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
    title: "2024 ENVEX 전시회 참가",
    date: "2024-06-03",
    tag: "전시회",
    imageUrl: "/images/news/news_2406_coex/news_2406_coex_01.webp",
    content: `<h1 class="head_title" style="margin: 0px;">2024 ENVEX 전시회 참가</h1>
        <p style="font-size: 16px; color: gray; margin-bottom: 50px;">
            2024.6.3 ~ 2024.6.5
        </p>
        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2406_coex/news_2406_coex_01.webp" style="width:800px; border-radius: 15px;" alt="">
        </div>
        <br><br>
        <p style="font-size: 18px; text-align: center;">
            일회용품이 환경에 끼치는 영향은 이루 말할 수 없습니다.<br>
            환경을 생각하는 사람들을 위한 CODA, 무인회수기를 국제환경산업기술 & 그린에너지전에 소개하고 왔습니다.<br>
            많은 사람들께서 관심을 보여주셔서 뜻깊은 시간이었습니다.<br><br><br>
        </p>
        <div style="display: flex; justify-content: center;">
          <img src="/images/news/news_2406_coex/news_2406_coex_02.webp" style="width:800px; border-radius: 15px;" alt="">
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

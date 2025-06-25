import News, { NewsPost } from "./News";

const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "코다, 우수조달 제품 등록",
    date: "2025-05-25",
    tag: "우수제품",
    imageUrl:
      "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 2,
    title: "무인회수기 출시",
    date: "2025-05-20",
    tag: "신제품",
    imageUrl:
      "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 3,
    title: "음식물 종량기 출시",
    date: "2025-05-15",
    tag: "신제품",
    imageUrl:
      "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
];

export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <News posts={newsPosts} />
    </main>
  );
}

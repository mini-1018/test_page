import Notice, { Post } from "./Notice";

const noticePosts: Post[] = [
  {
    id: 1,
    title: "이벤트",
    author: "코다",
    date: "2025-05-25",
    views: 245,
    isPinned: true,
  },
  {
    id: 2,
    title: "전시회 안내",
    author: "코다",
    date: "2025-05-24",
    views: 189,
    isPinned: true,
  },
  {
    id: 3,
    title: "시스템 점검 안내",
    author: "코다",
    date: "2025-05-22",
    views: 156,
  },
  {
    id: 4,
    title: "코다 어플리케이션 출시",
    author: "코다",
    date: "2025-05-20",
    views: 134,
  },
  {
    id: 5,
    title: "고객센터 운영시간 변경 안내",
    author: "코다",
    date: "2025-05-18",
    views: 98,
  },
];

export default function NoticePage() {
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <Notice posts={noticePosts} />
    </main>
  );
}

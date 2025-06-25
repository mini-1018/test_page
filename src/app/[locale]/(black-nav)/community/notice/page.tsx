import Notice, { NoticeType } from "./Notice";

const noticePosts: NoticeType[] = [
  {
    id: 1,
    title: "이벤트",
    author: "코다",
    date: "2025-05-25",
    category: "이벤트",
    content: "",
  },
  {
    id: 2,
    title: "전시회 안내",
    author: "코다",
    date: "2025-05-24",
    category: "전시회",
    content: "",
  },
  {
    id: 3,
    title: "시스템 점검 안내",
    author: "코다",
    date: "2025-05-22",
    category: "시스템 점검",
    content: "",
  },
  {
    id: 4,
    title: "코다 어플리케이션 출시",
    author: "코다",
    date: "2025-05-20",
    category: "출시",
    content: "",
  },
  {
    id: 5,
    title: "고객센터 운영시간 변경 안내",
    author: "코다",
    date: "2025-05-18",
    category: "변경",
    content: "",
  },
];

export default function NoticePage() {
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <Notice notices={noticePosts} />
    </main>
  );
}

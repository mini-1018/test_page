import Board, { SupportPost } from "./support";

const SupportPosts: SupportPost[] = [
  {
    id: 1,
    title: "무인회수기 이용 후기",
    author: "김후기",
    date: "2025-05-27",
    comments: [],
    category: "후기",
    content: "",
  },
  {
    id: 2,
    title: "무인회수기 기능건의",
    author: "김불만",
    date: "2025-05-26",
    content: "",
    comments: [],
    category: "건의",
  },
  {
    id: 3,
    title: "차량용RFID 사용 팁",
    author: "김개꿀",
    date: "2025-05-25",
    content: "",
    comments: [],
    category: "팁",
  },
  {
    id: 4,
    title: "음식물 종량기 이용후기",
    author: "김음식",
    date: "2025-05-24",
    content: "",
    comments: [],
    category: "후기",
  },
  {
    id: 5,
    title: "종량기 추천",
    author: "김추천",
    date: "2025-05-23",
    content: "",
    comments: [],
    category: "추천",
  },
];

export default function CommunityPage() {
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <Board posts={SupportPosts} />
    </main>
  );
}

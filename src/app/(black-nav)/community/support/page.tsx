import Support, { SupportPost } from "./support";

export const SupportPosts: SupportPost[] = [
  {
    id: 1,
    title: "무인회수기 이용 문의",
    author: "김문의",
    date: "2025-05-27",
    answer: "고객센터로 문의부탁드립니다.",
    password: "1234",
    category: "이용문의",
    content: "무인회수기 이용",
  },
  {
    id: 2,
    title: "무인회수기 기능건의",
    author: "김불만",
    date: "2025-05-26",
    content: "",
    answer: "고객센터로 문의부탁드립니다.",
    password: "1234",
    category: "건의",
  },
  {
    id: 3,
    title: "차량용RFID 이용 문의",
    author: "김문의",
    date: "2025-05-25",
    content: "",
    answer: "",
    password: "1234",
    category: "이용문의",
  },
  {
    id: 4,
    title: "음식물 종량기 고장문의",
    author: "김음식",
    date: "2025-05-24",
    content: "",
    answer: "",
    password: "1234",
    category: "고장문의",
  },
  {
    id: 5,
    title: "종량기 사용법 문의",
    author: "김사용",
    date: "2025-05-23",
    content: "",
    answer: "",
    password: "1234",
    category: "이용문의",
  },
];

export default function CommunityPage() {
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <Support posts={SupportPosts} />
    </main>
  );
}

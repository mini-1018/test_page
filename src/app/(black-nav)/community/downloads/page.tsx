import Downloads, { DownloadPost } from "./Downloads";

const downloadsPosts: DownloadPost[] = [
  {
    id: 1,
    title: "무인회수기(압축) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-25",
    views: 156,
    fileSize: "2.4MB",
    downloadCount: 89,
  },
  {
    id: 2,
    title: "무인회수기(파쇄) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-24",
    views: 234,
    fileSize: "15.7MB",
    downloadCount: 67,
  },
  {
    id: 3,
    title: "무인회수기(압축) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-22",
    views: 189,
    fileSize: "1.8MB",
    downloadCount: 124,
  },
  {
    id: 4,
    title: "차량용 RFID 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-20",
    views: 178,
    fileSize: "8.3MB",
    downloadCount: 45,
  },
  {
    id: 5,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    views: 123,
    fileSize: "856KB",
    downloadCount: 78,
  },
];

export default function DownloadsPage() {
  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <Downloads posts={downloadsPosts} />
    </main>
  );
}

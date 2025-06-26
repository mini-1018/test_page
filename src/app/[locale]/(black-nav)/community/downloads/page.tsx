import Downloads, { DownloadPost } from "./Downloads";
import type { Locale } from "@lib/translator";

interface DownloadsPageProps {
  params: Promise<{ locale: Locale }>;
}

const downloadsPosts: DownloadPost[] = [
  {
    id: 1,
    title: "무인회수기(압축) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-25",
    fileSize: "2.4MB",
    downloadCount: 89,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 2,
    title: "무인회수기(파쇄) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-24",
    fileSize: "15.7MB",
    downloadCount: 67,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 3,
    title: "무인회수기(압축) 카탈로그.pdf",
    author: "코다",
    date: "2025-05-22",
    fileSize: "1.8MB",
    downloadCount: 124,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 4,
    title: "차량용 RFID 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-20",
    fileSize: "8.3MB",
    downloadCount: 45,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 5,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 6,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 7,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 8,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
  {
    id: 9,
    title: "음식물 종량기 매뉴얼.pdf",
    author: "코다",
    date: "2025-05-18",
    fileSize: "856KB",
    downloadCount: 78,
    imageUrl: "https://do40f6yw4fd7i.cloudfront.net/img13/brand/coda_brand_s1.webp",
  },
];

export default async function DownloadsPage({ params }: DownloadsPageProps) {
  const { locale } = await params;

  return (
    <main className="max-w-6xl mx-auto pb-32 pt-32">
      <Downloads posts={downloadsPosts} locale={locale} />
    </main>
  );
}

export async function generateMetadata({ params }: DownloadsPageProps) {
  const { locale } = await params;

  return {
    title: locale === "ko" ? "코다(CODA) 자료실" : "CODA Downloads",
    description: locale === "ko" ? "코다(CODA) 제품 카탈로그, 매뉴얼, 기술 자료를 다운로드하세요" : "Download CODA product catalogs, manuals, and technical materials",
    keywords: locale === "ko" ? "코다, CODA, 자료실, 다운로드, 카탈로그, 매뉴얼, PDF" : "CODA, downloads, catalog, manual, PDF, technical materials",
    openGraph: {
      title: locale === "ko" ? "코다(CODA) 자료실" : "CODA Downloads",
      description: locale === "ko" ? "코다(CODA) 제품 카탈로그, 매뉴얼, 기술 자료를 다운로드하세요" : "Download CODA product catalogs, manuals, and technical materials",
    },
  };
}

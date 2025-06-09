import Link from "next/link";

const post = {
  id: 1,
  title: "무인회수기 이용 문의",
  author: "김문의",
  date: "2025-05-27",
  content: `무인회수기 이용문의 드립니다.`,
  answer: "고객센터로 문의바랍니다.",
  category: "이용문의",
};

export default function SupportDetailPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 영역 */}
      <div className="max-w-4xl mx-auto px-6 pt-32">
        {/* 제목 */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* 서브인포 */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {post.category}
          </span>
          <div className="font-medium text-gray-900">{post.author}</div>
          <div className="text-sm text-gray-500">{post.date}</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="prose prose-lg prose-gray max-w-none">
              {/* 실제 프로젝트에서는 마크다운 파서 사용 */}
              <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>
        </div>

        {/* 답변 섹션 */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* 답변 헤더 */}
            <div className="border-b border-gray-200 p-6">
              <h3 className="!text-lg text-gray-900">답변입니다.</h3>
            </div>
            {/* 답변 */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.answer}
              </p>
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-12 flex justify-between items-center">
          <Link href="/community/support">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors transition-transform duration-200 hover:-translate-x-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              목록으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

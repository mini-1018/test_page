"use client";
import { useState } from "react";

const post = {
  id: 1,
  title: "게시글 제목",
  author: "작성자",
  date: "2025-05-27",
  content: `지구를 지키는 작은 시작
CODA의 순환 이야기
매일 버려지는 페트병과 캔을 깨끗한
자원으로 만드는 선별/수집 시스템과 물류 인프라를
구축하여 여러분의 작은 습관으로 지구를
지키는데 함께 합니다.
건강한 지구를 위한 활동
CODA와 함께 해주세요.
버려지는 페트병에 바다생물이
아프지 않도록 나아가 다음 세대들의
건강한 삶을 지킬 수 있도록
CODA와 함께 해주세요.`,
  comments: [
    {
      id: 1,
      author: "댓글1",
      date: "2025-05-28",
      content: "좋은 글 감사합니다",
    },
    {
      id: 2,
      author: "댓글2",
      date: "2025-05-28",
      content: "감사합니다",
    },
  ],
  category: "후기",
};

export default function BoardDetailPage() {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log("새 댓글:", newComment);
      setNewComment("");
    }
  };

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

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg prose-gray max-w-none">
              {/* 실제 프로젝트에서는 마크다운 파서 사용 */}
              <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>
        </div>

        {/* 댓글 섹션 */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* 댓글 헤더 */}
            <div className="border-b border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                댓글 {post.comments.length}개
              </h3>
            </div>

            {/* 댓글 작성 */}
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 작성해주세요..."
                  className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    댓글 작성
                  </button>
                </div>
              </form>
            </div>

            {/* 댓글 목록 */}
            <div className="divide-y divide-gray-200">
              {post.comments.map((comment) => (
                <div key={comment.id} className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-900">
                          {comment.author}
                        </span>
                        <span className="text-sm text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-12 flex justify-between items-center">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
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
        </div>
      </div>
    </main>
  );
}

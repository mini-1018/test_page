import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

export interface NewsPost {
  id: number;
  title: string;
  date: string;
  tag: string;
  imageUrl: string;
}

interface NewsProps {
  posts: NewsPost[];
}

const News: React.FC<NewsProps> = ({ posts }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* 헤더 */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 flex items-center justify-center relative">
            <Image
              src={"/img/common/logo_whale.webp"}
              fill
              alt="코다(CODA) 고래 로고"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">소식</h1>
            <p className="text-gray-600 text-lg">
              코다(CODA)의 최신 소식을 확인하세요
            </p>
          </div>
        </div>
      </div>

      {/* 게시글 목록 - 카드 그리드 레이아웃 */}
      {posts.length === 0 ? (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
          <div className="px-8 py-20 text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xl font-semibold mb-2 text-slate-700">
              등록된 소식이 없습니다
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="group relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                {/* 이미지 미리보기 영역 - 70% */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* 텍스트 정보 영역 - 30% */}
                <div className="p-6 space-y-4">
                  {/* 태그 배지 */}
                  <div className="">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {post.tag}
                    </span>
                  </div>
                  {/* 제목 */}
                  <h3 className="text-slate-900 font-semibold text-lg leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* 날짜 정보 */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>
                      {new Date(post.date).toLocaleDateString("ko-KR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;

"use client";
import React, { useState } from "react";
import { Calendar, User, Search, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";

interface SupportPost {
  id: number;
  title: string;
  author: string;
  date: string;
  answer: string;
  category: string;
  content: string;
  password: string;
}

interface SupportProps {
  posts: SupportPost[];
}

const Support: React.FC<SupportProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ResponsivePadding>
    <div className="max-w-5xl mx-auto">
      {/* 헤더 */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative flex-shrink-0">
            <Image
              src={"/img/common/logo_whale.webp"}
              fill
              alt="코다(CODA) 고래 로고"
              className="rounded-full"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">고객문의</h1>
            <p className="text-gray-600 text-base md:text-lg">문의사항을 남겨주세요</p>
          </div>
        </div>
      </div>

      {/* 검색 및 작성 버튼 */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="flex-1">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5 group-focus-within:text-gray-600 transition-colors" />
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300/50 focus:border-gray-300 transition-all duration-200 placeholder-gray-400 text-slate-700 shadow-sm text-sm md:text-base"
              />
            </div>
          </div>
        </div>
        <Link href="/community/support/write" className="sm:flex-shrink-0">
          <button className="w-full sm:w-auto px-4 md:px-6 py-3 md:py-4 bg-blue-500 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-1 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base">
            문의하기
          </button>
        </Link>
      </div>

      {/* 게시글 목록 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
        {filteredPosts.length === 0 ? (
          <div className="px-4 md:px-8 py-12 md:py-20 text-center text-gray-500">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
              <FileText className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            </div>
            <p className="text-lg md:text-xl font-semibold mb-2 text-slate-700">
              검색결과가 없습니다
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100/60">
            {filteredPosts.map((post) => (
              <div key={post.id} className="group relative">
                <Link href={`/community/support/${post.id}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative px-4 md:px-8 py-4 md:py-6 border-b border-gray-100/80 hover:border-gray-200/60 transition-all duration-200 cursor-pointer">
                    <div className="space-y-3">
                      {/* 모바일: 세로 배치, md 이상: 기존 가로 배치 */}
                      <div className="md:flex md:items-start md:justify-between">
                        <div className="flex-1 min-w-0 space-y-2 md:space-y-3">
                          {/* 모바일: 카테고리와 상태를 위아래로, md 이상: 기존 레이아웃 */}
                          <div className="md:flex md:items-center md:gap-4">
                            <div className="flex items-center justify-between md:justify-start md:gap-4 mb-2 md:mb-0">
                              <span className="inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-gray-100/80 text-gray-600 border border-gray-200/50">
                                {post.category}
                              </span>
                              <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs md:text-sm font-medium md:order-last">
                                {post.answer ? "답변완료" : "답변대기"}
                              </span>
                            </div>
                            {/* md 이상에서는 제목이 카테고리와 같은 줄에 */}
                            <h3 className="text-slate-900 font-semibold !text-base md:!text-lg leading-tight group-hover:text-slate-700 transition-colors duration-200 line-clamp-2 md:line-clamp-1 md:flex-1 md:min-w-0">
                              {post.title}
                            </h3>
                          </div>
                          
                          {/* 작성자와 날짜 */}
                          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
                            <div className="flex items-center gap-1 md:gap-2">
                              <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-100 rounded-full flex items-center justify-center">
                                <User className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-600" />
                              </div>
                              <span className="font-medium truncate max-w-[80px] md:max-w-none">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                              <span className="whitespace-nowrap">
                                {new Date(post.date).toLocaleDateString("ko-KR")}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* 화살표 아이콘 - md 이상에서만 표시 */}
                        <div className="hidden md:block ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </ResponsivePadding>
  );
};

export default Support;

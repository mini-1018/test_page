"use client";
import React, { useState } from "react";
import {
  Calendar,
  User,
  Eye,
  Plus,
  Search,
  FileText,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export interface BoardPost {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  category: string;
}

interface BoardProps {
  posts: BoardPost[];
}

const Board: React.FC<BoardProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h1 className="text-3xl font-bold text-slate-900 mb-1">
              자유게시판
            </h1>
            <p className="text-gray-600 text-lg">
              자유롭게 의견을 나누고 소통하세요
            </p>
          </div>
        </div>
      </div>

      {/* 검색 및 작성 버튼 */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-gray-600 transition-colors" />
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300/50 focus:border-gray-300 transition-all duration-200 placeholder-gray-400 text-slate-700 shadow-sm"
              />
            </div>
          </div>
        </div>
        <button className="px-6 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-900 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-3 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <Plus className="w-5 h-5" />글 작성
        </button>
      </div>

      {/* 게시글 목록 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
        {filteredPosts.length === 0 ? (
          <div className="px-8 py-20 text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xl font-semibold mb-2 text-slate-700">
              게시글이 없습니다
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100/60">
            {filteredPosts.map((post) => (
              <div key={post.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-8 py-6 border-b border-gray-100/80 hover:border-gray-200/60 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100/80 text-gray-600 border border-gray-200/50">
                          {post.category}
                        </span>
                        <h3 className="text-slate-900 font-semibold text-lg leading-tight group-hover:text-slate-700 transition-colors duration-200 truncate">
                          {post.title}
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-sm font-medium">
                          {post.comments}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-gray-600" />
                          </div>
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>
                            {new Date(post.date).toLocaleDateString("ko-KR")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-gray-400" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;

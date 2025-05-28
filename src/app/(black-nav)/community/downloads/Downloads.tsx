"use client";
import React, { useState } from "react";
import {
  Calendar,
  User,
  Eye,
  Search,
  FileText,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export interface DownloadPost {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  fileSize: string;
  downloadCount: number;
}

interface BoardDownloadsProps {
  posts: DownloadPost[];
}

const Downloads: React.FC<BoardDownloadsProps> = ({ posts }) => {
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
            <h1 className="text-3xl font-bold text-slate-900 mb-1">자료실</h1>
            <p className="text-gray-600 text-lg">
              코다(CODA) 제품 카탈로그를 다운로드 하세요
            </p>
          </div>
        </div>
      </div>

      {/* 검색 및 업로드 버튼 */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-blue-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-gray-600 transition-colors" />
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-gray-300 transition-all duration-200 placeholder-gray-400 text-slate-700 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 게시글 목록 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
        {filteredPosts.length === 0 ? (
          <div className="px-8 py-20 text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xl font-semibold mb-2 text-slate-700">
              자료가 없습니다
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100/60">
            {filteredPosts.map((post) => (
              <div key={post.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"></div>
                <div className="relative px-8 py-6 border-b border-gray-100/80 hover:border-gray-200/60 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex items-center gap-4">
                        <h3 className="text-slate-900 font-semibold text-lg leading-tight group-hover:text-slate-700 transition-colors duration-200 truncate">
                          {post.title}
                        </h3>
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
                        <div className="w-px h-4 bg-gray-200"></div>
                        <span className="text-gray-600 font-medium">
                          {post.fileSize}
                        </span>
                        <span className="text-gray-500">
                          다운로드 {post.downloadCount}회
                        </span>
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

export default Downloads;

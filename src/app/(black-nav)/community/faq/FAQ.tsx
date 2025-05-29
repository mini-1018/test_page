"use client";
import React, { useState } from "react";
import { Calendar, Search, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import Link from "next/link";

export interface FaqPost {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
}

interface FaqProps {
  posts: FaqPost[];
}

const FAQ: React.FC<FaqProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openPost, setOpenPost] = useState<FaqPost | null>(null);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
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
              자주 묻는 질문
            </h1>
          </div>
        </div>
      </div>

      {/* 검색 */}
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
      </div>

      {/* 목록 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
        {filteredPosts.length === 0 ? (
          <div className="px-8 py-20 text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xl font-semibold mb-2 text-slate-700">
              검색 결과가 없습니다
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100/60">
            {filteredPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setOpenPost(post)}
                className="group relative w-full text-left focus:outline-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-8 py-6 border-b border-gray-100/80 hover:border-gray-200/60 transition-all duration-200 cursor-pointer flex items-start justify-between">
                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100/80 text-gray-600 border border-gray-200/50">
                        {post.category}
                      </span>
                      <h3 className="text-slate-900 font-semibold text-lg leading-tight group-hover:text-slate-700 transition-colors duration-200 truncate">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>
                          {new Date(post.date).toLocaleDateString("ko-KR")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FAQ 모달 */}
      <Dialog open={!!openPost} onOpenChange={() => setOpenPost(null)}>
        <DialogContent>
          {openPost && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100/80 text-gray-600 border border-gray-200/50">
                    {openPost.category}
                  </span>
                  <span>{openPost.title}</span>
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 mt-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(openPost.date).toLocaleDateString("ko-KR")}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 text-slate-700 whitespace-pre-line">
                {openPost.content}
              </div>
              <div className="mt-8 flex justify-center items-center gap-3">
                <span>원하시는 답변이 없으신가요?</span>
                <Link href={"/community/support"}>[1:1 고객문의]</Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FAQ;

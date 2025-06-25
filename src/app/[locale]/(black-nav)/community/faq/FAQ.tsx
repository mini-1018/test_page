"use client";
import React, { useState } from "react";
import { Search, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shared/components/ui/accordion";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";

export interface FaqPost {
  id: number;
  title: string;
  category: string;
  content: string;
}

interface FaqProps {
  posts: FaqPost[];
}

const FAQ: React.FC<FaqProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <ResponsivePadding>
      <div className="max-w-5xl mx-auto py-32">
        {/* 헤더 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center relative">
              <Image src={"/img/common/logo_whale.webp"} fill alt="코다(CODA) 고래 로고" className="rounded-full" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">자주 묻는 질문</h1>
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
                <input type="text" placeholder="검색어를 입력하세요..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300/50 focus:border-gray-300 transition-all duration-200 placeholder-gray-400 text-slate-700 shadow-sm" />
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
              <p className="text-xl font-semibold mb-2 text-slate-700">검색결과가 없습니다</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="divide-y divide-gray-100/60">
              {filteredPosts.map((post) => (
                <AccordionItem key={post.id} value={String(post.id)}>
                  <AccordionTrigger className="px-2 sm:px-8 py-6 hover:bg-gray-50 transition-all flex items-start justify-between gap-4 cursor-pointer">
                    <div className="flex-1 min-w-0 space-y-3 text-left">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex flex-shrink-0 whitespace-nowrap items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100/80 text-gray-600 border border-gray-200/50">{post.category}</span>
                        <h3 className="text-slate-900 font-semibold !text-[16px] sm:!text-lg leading-tight">{post.title}</h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-8 py-16 text-slate-700 text-[14px] sm:text-base">
                    {post.content}
                    <div className="mt-8 flex justify-center items-center gap-3">
                      <span>원하시는 답변이 없으신가요?</span>
                      <Link href={"/community/support"} className="text-blue-600 underline">
                        [1:1 고객문의]
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </ResponsivePadding>
  );
};

export default FAQ;

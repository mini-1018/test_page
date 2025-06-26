"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, FileText, User, Calendar, Download } from "lucide-react";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";
import { getDownloadsTranslations } from "@lib/translations/downloads.trans";
import type { Locale } from "@lib/translator";

export interface DownloadPost {
  id: number;
  title: string;
  author: string;
  date: string;
  fileSize: string;
  downloadCount: number;
  imageUrl: string;
}

interface BoardDownloadsProps {
  posts: DownloadPost[];
  locale: Locale;
}

const Downloads: React.FC<BoardDownloadsProps> = ({ posts, locale }) => {
  const { t } = getDownloadsTranslations(locale);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.author.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <ResponsivePadding>
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center relative">
              <Image src={"https://do40f6yw4fd7i.cloudfront.net/img13/common/logo_whale.webp"} fill alt={t("header.logoAlt")} className="rounded-full" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">{t("header.title")}</h1>
              <p className="text-gray-600 text-lg">{t("header.description")}</p>
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
                <input type="text" placeholder={t("search.placeholder")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-gray-300 transition-all duration-200 placeholder-gray-400 text-slate-700 shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* 게시글 목록 - 카드 그리드 레이아웃 */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
            <div className="px-8 py-20 text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl font-semibold mb-2 text-slate-700">{t("emptyState.title")}</p>
              <p className="text-gray-500">{t("emptyState.description")}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="group relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  {/* 이미지 미리보기 영역 - 70% */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
                    <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    {/* 다운로드 버튼 오버레이 */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                        <Download className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                    {/* 파일 크기 배지 */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-sm font-medium rounded-full">{post.fileSize}</span>
                    </div>
                  </div>

                  {/* 텍스트 정보 영역 - 30% */}
                  <div className="p-6 space-y-4">
                    {/* 제목 */}
                    <div className="flex items-center gap-4">
                      <h3 className="text-slate-900 font-semibold !text-lg leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 flex-1">{post.title}</h3>
                    </div>

                    {/* 메타 정보 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="font-medium">{post.author}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>
                            {new Date(post.date).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US", {
                              year: "numeric",
                              month: locale === "ko" ? "long" : "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2"></div>
                      </div>

                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-gray-500 text-sm">
                          {t("file.downloads")} {post.downloadCount}
                          {locale === "ko" ? "회" : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ResponsivePadding>
  );
};

export default Downloads;

"use client";
import React, { useState } from "react";
import { Calendar, User, Search, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";
import { getNoticeTranslations } from "@lib/translations/notice.trans";
import type { Locale } from "@lib/translator";

export interface NoticeType {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
}

interface NoticeProps {
  notices: NoticeType[];
  locale: Locale;
}

const Notice: React.FC<NoticeProps> = ({ notices, locale }) => {
  const { t } = getNoticeTranslations(locale);
  const [searchTerm, setSearchTerm] = useState("");

  const filterednotices = notices.filter((notice) => notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || notice.author.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <ResponsivePadding>
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center relative">
              <Image src={"/images/common/logo_whale.webp"} fill alt={t("header.logoAlt")} className="rounded-full" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">{t("header.title")}</h1>
              <p className="text-gray-600 text-lg">{t("header.description")}</p>
            </div>
          </div>
        </div>

        {/* 검색 */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-blue-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-gray-600 transition-colors" />
                <input type="text" placeholder={t("search.placeholder")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-gray-300 transition-all duration-200 placeholder-gray-400 text-slate-700 shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* 게시글 목록 */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
          {filterednotices.length === 0 ? (
            <div className="px-8 py-20 text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl font-semibold mb-2 text-slate-700">{t("emptyState.title")}</p>
              <p className="text-gray-500">{t("emptyState.description")}</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100/60">
              {filterednotices.map((notice) => (
                <Link key={notice.id} href={`/${locale}/community/notice/${notice.id}`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"></div>
                    <div className="relative px-4 sm:px-8 py-6 border-b border-gray-100/80 hover:border-gray-200/60 transition-all duration-200 cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0 space-y-3">
                          <div className="flex items-center gap-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100/80 text-gray-600 border border-gray-200/50">{notice.category}</span>
                            <h3 className="text-slate-900 font-semibold !text-[16px] sm:!text-lg leading-tight truncate">{notice.title}</h3>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                                <User className="w-3 h-3 text-gray-600" />
                              </div>
                              <span className="font-medium text-[12px] sm:text-[14px]">{notice.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-[12px] sm:text-[14px]">
                                {new Date(notice.date).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US", {
                                  year: "numeric",
                                  month: locale === "ko" ? "long" : "short",
                                  day: "numeric",
                                })}
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
              ))}
            </div>
          )}
        </div>
      </div>
    </ResponsivePadding>
  );
};

export default Notice;

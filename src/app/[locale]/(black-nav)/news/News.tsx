import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";
import { getNewsTranslations } from "@lib/translations/news.trans";
import type { Locale } from "@lib/translator";
import Link from "next/link";

export interface NewsPost {
  id: number;
  title: string;
  date: string;
  tag: string;
  imageUrl: string;
  content: string;
}

interface NewsProps {
  posts: NewsPost[];
  locale: Locale;
}

const News: React.FC<NewsProps> = ({ posts, locale }) => {
  const { t } = getNewsTranslations(locale);

  console.log(posts);

  return (
    <ResponsivePadding>
      <div className="max-w-5xl mx-auto">
        <h1 className="sr-only">{t("title")}</h1>
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

        {/* 게시글 목록 - 카드 그리드 레이아웃 */}
        {posts.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
            <div className="px-8 py-20 text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl font-semibold mb-2 text-slate-700">{t("emptyState.title")}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link href={`/news/${post.id}`} key={post.id} className="no-underline">
                <div key={post.id} className="group relative">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    {/* 이미지 미리보기 영역 - 70% */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
                      <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>

                    {/* 텍스트 정보 영역 - 30% */}
                    <div className="p-6 space-y-4">
                      {/* 태그 배지 */}
                      <div className="">
                        <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">{post.tag}</span>
                      </div>

                      {/* 제목 */}
                      <h3 className="text-slate-900 font-semibold !text-lg leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">{post.title}</h3>

                      {/* 날짜 정보 */}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>
                          {new Date(post.date).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US", {
                            year: "numeric",
                            month: locale === "ko" ? "long" : "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </ResponsivePadding>
  );
};

export default News;

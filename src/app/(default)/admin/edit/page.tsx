"use client";
import React, { useState } from "react";

interface PageRoute {
  name: string;
  path: string;
  adminPath: string;
  description: string;
  icon: string;
}

const EditPageSelector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("all");

  // 사이트 경로 목록
  const routes: PageRoute[] = [
    {
      name: "홈페이지",
      path: "/",
      adminPath: "/admin/edit/index",
      description: "메인 홈페이지 콘텐츠 편집",
      icon: "🏠",
    },
    {
      name: "브랜드 소개",
      path: "/brand",
      adminPath: "/admin/edit/brand",
      description: "코다 브랜드 스토리 및 소개 페이지",
      icon: "🌱",
    },
    {
      name: "무인회수기",
      path: "/item_list_coda",
      adminPath: "/admin/edit/item_list_coda",
      description: "무인회수기 제품 목록 및 소개",
      icon: "♻️",
    },
    {
      name: "차량용 RFID",
      path: "/item_rfid",
      adminPath: "/admin/edit/item_rfid",
      description: "차량용 RFID 제품 정보",
      icon: "🚗",
    },
    {
      name: "음식물종량기",
      path: "/item_food",
      adminPath: "/admin/edit/item_food",
      description: "음식물종량기 제품 정보",
      icon: "🍽️",
    },
    {
      name: "공지사항",
      path: "/notice",
      adminPath: "/admin/edit/notice",
      description: "공지사항 게시판 관리",
      icon: "📢",
    },
    {
      name: "문의하기",
      path: "/contact",
      adminPath: "/admin/edit/contact",
      description: "문의 양식 및 연락처 정보",
      icon: "📝",
    },
    {
      name: "설치사례",
      path: "/case",
      adminPath: "/admin/edit/case",
      description: "제품 설치 사례 및 레퍼런스",
      icon: "📷",
    },
    {
      name: "회사소개",
      path: "/about",
      adminPath: "/admin/edit/about",
      description: "회사 연혁 및 소개 정보",
      icon: "🏢",
    },
  ];

  // 경로 카테고리 분류
  const sections = [
    { id: "all", name: "전체", icon: "📋" },
    { id: "main", name: "메인", icon: "🏠" },
    { id: "products", name: "제품", icon: "🛒" },
    { id: "info", name: "정보", icon: "ℹ️" },
  ];

  // 카테고리별 필터링
  const getFilteredRoutes = (): PageRoute[] => {
    let filtered = routes;

    // 카테고리 필터링
    if (activeSection === "main") {
      filtered = routes.filter((route) =>
        ["/", "/brand", "/about"].includes(route.path)
      );
    } else if (activeSection === "products") {
      filtered = routes.filter((route) =>
        ["/item_list_coda", "/item_rfid", "/item_food"].includes(route.path)
      );
    } else if (activeSection === "info") {
      filtered = routes.filter((route) =>
        ["/notice", "/contact", "/case"].includes(route.path)
      );
    }

    // 검색어 필터링
    if (searchTerm) {
      filtered = filtered.filter(
        (route) =>
          route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  // 페이지 이동 함수
  const navigateTo = (adminPath: string): void => {
    window.location.href = adminPath;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            페이지 수정
          </h1>
          <p className="text-gray-600">
            편집할 페이지를 선택하세요. 각 페이지의 콘텐츠를 쉽게 수정할 수
            있습니다.
          </p>
        </header>

        {/* 검색 및 필터 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* 검색창 */}
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="페이지 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* 필터 버튼 */}
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-1 ${
                    activeSection === section.id
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <span>{section.icon}</span>
                  <span>{section.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 페이지 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFilteredRoutes().map((route) => (
            <div
              key={route.path}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-2xl">
                    {route.icon}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      {route.path}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {route.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {route.description}
                </p>
                <button
                  onClick={() => navigateTo(route.adminPath)}
                  className="w-full mt-2 flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg
                    className="h-4 w-4 mr-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  편집하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 결과 없음 표시 */}
        {getFilteredRoutes().length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              검색 결과가 없습니다
            </h3>
            <p className="text-gray-600">다른 검색어나 필터를 사용해보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPageSelector;

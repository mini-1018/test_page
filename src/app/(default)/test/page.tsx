"use client";

import MobileNav from "@shared/components/nav/MobileNav";

export default function TestPage() {
  return (
    <>
      <MobileNav />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">테스트 페이지</h1>
      </div>
    </>
  );
}

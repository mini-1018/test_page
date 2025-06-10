"use client";
import React, { useRef, useState } from "react";
import { Button } from "@shared/components/ui/button";
import { Input } from "@shared/components/ui/input";
import { Textarea } from "@shared/components/ui/textarea";
import { X } from "lucide-react";

export default function InquiryWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미지 업로드 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    // 최대 5개 제한
    const newImages = [...images, ...files].slice(0, 5);
    setImages(newImages);
    // input value 초기화 (동일 파일 재첨부 가능)
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemoveImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("제출되었습니다!");
  };

  return (
    <form
      className="w-[96%] sm:w-[90%] mx-auto mt-10 bg-white rounded-xl shadow-lg p-4 sm:p-8 flex flex-col gap-8 max-w-2xl text-gray-800"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold mb-2">1:1 문의하기</h2>
      {/* 제목 */}
      <div>
        <label className="block text-base font-semibold mb-2" htmlFor="title">
          문의 제목
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className="text-lg focus-visible:!border-blue-500 focus:!border-blue-500 visible:!ring-0 focus:!ring-0"
          maxLength={100}
          required
        />
      </div>
      {/* 내용 */}
      <div>
        <label className="block text-base font-semibold mb-2" htmlFor="content">
          문의 내용
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="문의하실 내용을 입력하세요"
          className="min-h-[250px] text-base resize-none focus-visible:!border-blue-500 focus:!border-blue-500 visible:!ring-0 focus:!ring-0"
          maxLength={2000}
          required
        />
      </div>
      {/* 이미지 첨부 */}
      <div>
        <label className="block text-base font-semibold mb-2">
          이미지 첨부 (최대 5장)
        </label>
        <div className="flex flex-wrap gap-4 mb-2">
          {images.map((file, idx) => (
            <div key={idx} className="relative w-24 h-24 rounded overflow-hidden border">
              <img
                src={URL.createObjectURL(file)}
                alt={`첨부이미지${idx + 1}`}
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-white/80 rounded-full p-1 hover:bg-red-100"
                onClick={() => handleRemoveImage(idx)}
                aria-label="이미지 삭제"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          {images.length < 5 && (
            <label className="w-24 h-24 flex items-center justify-center border rounded cursor-pointer hover:bg-gray-50">
              <span className="text-gray-400 text-2xl">+</span>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
        <div className="text-xs text-gray-500">* 10MB 이하의 이미지만 첨부 가능합니다.</div>
      </div>
      {/* 제출 버튼 */}
      <Button type="submit" className="w-full text-lg mt-4 !bg-blue-500 hover:!bg-blue-600">
        문의 등록
      </Button>
    </form>
  );
}
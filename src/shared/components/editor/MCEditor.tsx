"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import "./content.css";
import "./skin.min.css";

// Editor를 SSR 없이 동적 import
const Editor = dynamic(
  async () => {
    await import("tinymce/tinymce");
    await import("tinymce/icons/default");
    await import("tinymce/themes/silver");
    await import("tinymce/models/dom");
    await import("tinymce/plugins/image");
    await import("tinymce/plugins/link");
    await import("tinymce/plugins/media");
    await import("tinymce/plugins/wordcount");
    await import("tinymce/plugins/importcss");
    const mod = await import("@tinymce/tinymce-react");
    return mod.Editor;
  },
  { ssr: false }
);

export default function MCEditor({ buttonText }: { buttonText: string }) {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <>
      <div className="w-[96%] sm:w-[90%] mx-auto mt-10 bg-white rounded-xl shadow-lg p-4 sm:p-8 flex flex-col gap-8">
        <div className="mb-4">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="제목을 입력하세요"
            className="text-xl sm:text-2xl md:text-3xl border-b-2 border-[#EEEEEE] focus:border-blue-500 transition duration-200 focus:outline-none w-full sm:w-[70%] md:w-[50%] pb-3"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-8">
          {/* 에디터 영역 */}
          <div className="w-full xl:w-1/2">
            <Editor
              onInit={(_, editor) => (editorRef.current = editor)}
              onEditorChange={(newContent) => setContent(newContent)}
              init={{
                height: 700,
                menubar: false,
                language: "ko_KR",
                language_url: "/tinymce/langs/ko_KR.js",
                skin: false,
                content_css: "/tinymce/content.css",
                plugins: [
                  "image",
                  "link",
                  "media",
                  "wordcount",
                  "importcss",
                ],
                toolbar: false,
                branding: false,
                statusbar: false,
                images_upload_url: "/api/upload",
                automatic_uploads: true,
                images_reuse_filename: true,
                image_caption: true,
                image_title: true,
                image_advtab: true,
                imagetools_cors_hosts: ["localhost"],
                images_upload_handler: async (blobInfo, progress) => {
                  const formData = new FormData();
                  formData.append("file", blobInfo.blob(), blobInfo.filename());
                  const res = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                  });
                  const data = await res.json();
                  if (!data.url) throw new Error("이미지 업로드 실패");
                  return data.url;
                },
                content_style: `
                  body { font-family: 'Inter', 'Noto Sans KR', sans-serif; background: #fff; }
                  .mce-content-body { min-height: 500px; }
                  img { border-radius: 0.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin: 1.5rem auto; display: block; max-width: 100%; height: auto; }
                `,
              }}
            />
            <div className="mt-8">
              <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-md w-full sm:w-auto">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

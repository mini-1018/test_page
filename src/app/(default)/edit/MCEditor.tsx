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
    await import("tinymce/plugins/advlist");
    await import("tinymce/plugins/autolink");
    await import("tinymce/plugins/lists");
    await import("tinymce/plugins/link");
    await import("tinymce/plugins/image");
    await import("tinymce/plugins/charmap");
    await import("tinymce/plugins/preview");
    await import("tinymce/plugins/anchor");
    await import("tinymce/plugins/searchreplace");
    await import("tinymce/plugins/visualblocks");
    await import("tinymce/plugins/code");
    await import("tinymce/plugins/fullscreen");
    await import("tinymce/plugins/insertdatetime");
    await import("tinymce/plugins/media");
    await import("tinymce/plugins/table");
    await import("tinymce/plugins/wordcount");
    await import("tinymce/plugins/importcss");
    const mod = await import("@tinymce/tinymce-react");
    return mod.Editor;
  },
  { ssr: false }
);

export default function MCEditor() {
  const editorRef = useRef<any>(null);
  const [content, setContent] = useState<string>("");

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8 flex gap-8">
      {/* 에디터 영역 */}
      <div className="w-1/2">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">게시글</h2>
        </div>
        <Editor
          onInit={(_, editor) => (editorRef.current = editor)}
          onEditorChange={(newContent) => setContent(newContent)}
          init={{
            height: 700,
            menubar: false,
            language: "ko_KR",
            language_url: "tinymce/langs/ko_KR.js", // public 폴더 기준 경로
            skin: false,
            content_css: "/tinymce/content.css",
            importcss_append: true,
            importcss_selector_filter: ".tailwind-", // 예: tailwind- 접두사만
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "wordcount",
              "importcss",
            ],
            toolbar:
              "undo redo | blocks | bold italic underline | link image media | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | removeformat | code",
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
              figure.image { display: inline-block; margin: 0 1rem 1rem 0; }
              .tox-toolbar__primary { background: #f9fafb; border-radius: 0.75rem; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
              .tox .tox-tbtn:hover { background: #e5e7eb !important; transition: background 0.15s; }
              .tox .tox-tbtn--enabled, .tox .tox-tbtn:focus { background: #e5e7eb !important; }
              .tox .tox-toolbar__group { margin-right: 0.5rem; }
              .tox .tox-tbtn svg { width: 1.25rem; height: 1.25rem; }
            `,
            branding: false,
            block_formats: "제목 1=h2;제목 2=h3;본문=p;인용문=blockquote",
            table_toolbar:
              "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
            resize: true,
            image_dimensions: true,
            image_class_list: [
              { title: "기본", value: "" },
              { title: "왼쪽 정렬", value: "align-left" },
              { title: "오른쪽 정렬", value: "align-right" },
              { title: "가운데 정렬", value: "align-center" },
            ],
          }}
        />
        <div className="mt-8">
          <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-md">
            게시글 등록
          </button>
        </div>
      </div>
      {/* 미리보기 영역 */}
      <div className="w-1/2 border-l pl-8">
        <h3 className="text-xl font-semibold mb-4">미리보기</h3>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}

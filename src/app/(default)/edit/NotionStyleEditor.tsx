"use client";

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/ko.js";

export default function NotionStyleEditor() {
  const [data, setData] = useState("");

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">게시글 작성</h2>
      </div>
      <CKEditor
        editor={ClassicEditor as any}
        config={
          {
            language: "ko",
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "link",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "blockQuote",
              "insertTable",
              "|",
              "imageUpload",
              "mediaEmbed",
              "|",
              "undo",
              "redo",
            ],
            image: {
              toolbar: [
                "imageStyle:alignLeft",
                "imageStyle:full",
                "imageStyle:alignRight",
                "|",
                "imageTextAlternative",
                "|",
                "resizeImage",
              ],
              resizeUnit: "px",
              styles: ["alignLeft", "full", "alignRight"],
            },
            table: {
              contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
          } as any
        }
        data={data}
        onChange={(_, editor) => setData(editor.getData())}
      />
      <div className="mt-8">
        <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-md">
          게시글 등록
        </button>
      </div>
      <style jsx global>{`
        .ck.ck-toolbar {
          @apply rounded-lg bg-gray-50 border border-gray-200 shadow-sm;
        }
        .ck.ck-toolbar .ck-button {
          @apply hover:bg-gray-200 transition-colors duration-150;
        }
        .ck.ck-content {
          @apply min-h-[300px] prose prose-lg max-w-none bg-white rounded-lg p-4;
        }
        .ck.ck-content img {
          @apply rounded-lg shadow-md mx-auto;
        }
      `}</style>
    </div>
  );
}

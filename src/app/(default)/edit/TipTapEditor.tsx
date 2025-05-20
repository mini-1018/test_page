"use client";
import React, { useState } from "react";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import CodeBlock from "@tiptap/extension-code-block";
import Heading from "@tiptap/extension-heading";

// 툴바 아이콘 컴포넌트
const ToolbarButton = ({
  icon,
  isActive = false,
  onClick,
}: {
  icon: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 mx-1 rounded-md transition-all duration-200 ${
        isActive
          ? "bg-gray-200 text-black"
          : "text-gray-600 hover:bg-gray-100 hover:text-black"
      }`}
    >
      {icon}
    </button>
  );
};

// 헤더 드롭다운 컴포넌트
const HeadingDropdown = ({ editor }: { editor: Editor | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      label: "일반 텍스트",
      onClick: () => editor?.chain().focus().setParagraph().run(),
    },
    {
      label: "제목 1",
      onClick: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "제목 2",
      onClick: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "제목 3",
      onClick: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
    },
  ];

  const getCurrentHeading = () => {
    if (editor?.isActive("heading", { level: 1 })) return "제목 1";
    if (editor?.isActive("heading", { level: 2 })) return "제목 2";
    if (editor?.isActive("heading", { level: 3 })) return "제목 3";
    return "일반 텍스트";
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition-all duration-200"
      >
        <span>{getCurrentHeading()}</span>
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
          {options.map((option, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200"
              onClick={() => {
                option.onClick();
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// 툴바 컴포넌트
const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 mb-4 py-2 flex flex-wrap items-center">
      <HeadingDropdown editor={editor} />

      <div className="mx-2 h-6 w-px bg-gray-200" />

      <ToolbarButton
        icon={<span className="font-bold">B</span>}
        isActive={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />

      <ToolbarButton
        icon={<span className="italic">I</span>}
        isActive={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />

      <ToolbarButton
        icon={<span className="underline">U</span>}
        isActive={editor.isActive("underline")}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />

      <ToolbarButton
        icon={<span className="line-through">S</span>}
        isActive={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />

      <div className="mx-2 h-6 w-px bg-gray-200" />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        }
        isActive={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h10M7 16h10M3 8h2M3 12h2M3 16h2"
            />
          </svg>
        }
        isActive={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      />

      <div className="mx-2 h-6 w-px bg-gray-200" />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        }
        onClick={() => {
          const url = window.prompt("이미지 URL을 입력하세요");
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
      />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        }
        isActive={editor.isActive("link")}
        onClick={() => {
          const url = window.prompt("링크 URL을 입력하세요");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          } else {
            editor.chain().focus().unsetLink().run();
          }
        }}
      />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        }
        isActive={editor.isActive("codeBlock")}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      />

      <div className="mx-2 h-6 w-px bg-gray-200" />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        }
        isActive={editor.isActive({ textAlign: "left" })}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        }
        isActive={editor.isActive({ textAlign: "center" })}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      />

      <ToolbarButton
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M8 12h12M4 18h16"
            />
          </svg>
        }
        isActive={editor.isActive({ textAlign: "right" })}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      />
    </div>
  );
};

// 메인 에디터 컴포넌트
export default function TipTapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "제목 없음",
      }),
      Image,
      Link,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      CodeBlock,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: "<h1>제목을 입력하세요</h1><p>여기서부터 내용을 작성하세요...</p>",
  });

  const [title, setTitle] = useState("제목 없음");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-4 flex justify-end space-x-2">
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200">
          취소
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200">
          게시하기
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 pt-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-3xl font-bold outline-none mb-4"
            placeholder="제목 없음"
          />

          <Toolbar editor={editor} />
        </div>

        <div className="px-6 py-8 min-h-[500px]">
          <EditorContent
            editor={editor}
            className="prose max-w-none outline-none"
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        마지막 저장: {new Date().toLocaleString("ko-KR")}
      </div>
    </div>
  );
}

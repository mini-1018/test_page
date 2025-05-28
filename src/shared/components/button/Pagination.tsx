import React from "react";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize = 10,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const groupSize = 5;
  const groupStart = Math.floor((currentPage - 1) / groupSize) * groupSize + 1;
  const groupEnd = Math.min(groupStart + groupSize - 1, totalPages);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/60 p-2 shadow-lg">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-slate-800 hover:bg-gray-50 rounded-lg transition-all duration-200"
          onClick={() => onPageChange(Math.max(1, groupStart - 1))}
          disabled={groupStart === 1}
        >
          이전
        </button>
        {Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => {
          const page = groupStart + i;
          return (
            <button
              key={page}
              className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md ${
                currentPage === page
                  ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white"
                  : "text-gray-600 hover:text-slate-800 hover:bg-gray-50"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-slate-800 hover:bg-gray-50 rounded-lg transition-all duration-200"
          onClick={() => onPageChange(Math.min(totalPages, groupEnd + 1))}
          disabled={groupEnd === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Pagination;

// import Pagination from "./Pagination";
// // ...생략...

// const [currentPage, setCurrentPage] = useState(1);
// const pageSize = 10;
// const filteredPosts = posts.filter(...);
// const pagedPosts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

// // ...생략...
// {pagedPosts.map(...)}
// <Pagination
//   currentPage={currentPage}
//   totalCount={filteredPosts.length}
//   pageSize={pageSize}
//   onPageChange={setCurrentPage}
// />

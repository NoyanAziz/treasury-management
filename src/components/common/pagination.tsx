"use client";

import { usePathname } from "next/navigation";

import { TABLE_LIMIT } from "~/helpers/constants";

const TablePagination = ({
  searchParams,
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  searchParams: URLSearchParams;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}) => {
  const pathname = usePathname();

  const handlePageChange = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", newPage.toString());

    window.history.pushState({}, "", `${pathname}?${newSearchParams}`);
    setCurrentPage(newPage);
  };

  return (
    <nav
      className="flex-column flex flex-wrap items-center justify-between pt-4 md:flex-row"
      aria-label="Table navigation"
    >
      <span className="mb-4 block w-full text-sm font-normal text-gray-500 md:mb-0 md:inline md:w-auto dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {`${Math.floor(currentPage / TABLE_LIMIT) * TABLE_LIMIT + 1} - ${Math.min(
            Math.floor((currentPage + TABLE_LIMIT) / TABLE_LIMIT) * TABLE_LIMIT,
            totalPages,
          )}`}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalPages}
        </span>
      </span>

      <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`ms-0 flex h-8 items-center justify-center rounded-s-lg border px-3 leading-tight ${
              currentPage === 1
                ? "text-gray-300 dark:bg-gray-800 dark:text-gray-600"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            Previous
          </button>
        </li>

        {[...Array(TABLE_LIMIT)].map((_, index) => {
          const pageNumber =
            Math.floor((currentPage - 1) / TABLE_LIMIT) * TABLE_LIMIT +
            index +
            1;

          if (pageNumber > totalPages) {
            return null;
          }

          return (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={`flex h-8 items-center justify-center border px-3 leading-tight ${
                  currentPage === pageNumber
                    ? "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-8 items-center justify-center rounded-e-lg border px-3 leading-tight ${
              currentPage === totalPages
                ? "text-gray-300 dark:bg-gray-800 dark:text-gray-600"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TablePagination;

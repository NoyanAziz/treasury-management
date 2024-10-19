"use client";

const LIMIT = 10;

const TablePagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}) => {
  const handlePageChange = (newPage: number) => {
    window.history.pushState({}, "", `/dashboard?page=${newPage}`);
    setCurrentPage(newPage);
  };

  return (
    <nav
      className="flex-column flex flex-wrap items-center justify-between pt-4 md:flex-row"
      aria-label="Table navigation"
    >
      <span className="text-gray-500 dark:text-gray-400 mb-4 block w-full text-sm font-normal md:mb-0 md:inline md:w-auto">
        Showing{" "}
        <span className="text-gray-900 font-semibold dark:text-white">
          {`${Math.floor(currentPage / LIMIT) * LIMIT + 1} - ${Math.min(
            Math.floor((currentPage + LIMIT) / LIMIT) * LIMIT,
            totalPages,
          )}`}
        </span>{" "}
        of{" "}
        <span className="text-gray-900 font-semibold dark:text-white">
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
                : "text-gray-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            Previous
          </button>
        </li>

        {/* Pagination Range */}
        {[...Array(LIMIT)].map((_, index) => {
          const pageNumber =
            Math.floor((currentPage - 1) / LIMIT) * LIMIT + index + 1;

          if (pageNumber > totalPages) return null; // Don't render pages outside of total pages

          return (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={`flex h-8 items-center justify-center border px-3 leading-tight ${
                  currentPage === pageNumber
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {/* Next Button */}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-8 items-center justify-center rounded-e-lg border px-3 leading-tight ${
              currentPage === totalPages
                ? "text-gray-300 dark:bg-gray-800 dark:text-gray-600"
                : "text-gray-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
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

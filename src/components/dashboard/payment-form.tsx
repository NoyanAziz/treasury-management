"use client";

const PaymentForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div
          id="crud-modal"
          aria-hidden={!isOpen}
          className="bg-gray-800 fixed left-0 right-0 top-0 z-50 h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-opacity-50 md:inset-0"
          onClick={onClose}
          onKeyDown={onClose}
          tabIndex={-1}
        >
          <div className="relative max-h-full w-full max-w-md p-4">
            <div className="dark:bg-gray-700 relative rounded-lg bg-white shadow">
              <div className="dark:border-gray-600 flex items-center justify-between rounded-t border-b p-4 md:p-5">
                <h3 className="text-gray-900 text-lg font-semibold dark:text-white">
                  Create New Product
                </h3>
                <button
                  onClick={onClose}
                  type="button"
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm dark:hover:text-white"
                >
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="p-4 md:p-5">
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white"
                      placeholder="Type product name"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="price"
                      className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white"
                      placeholder="$2999"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      className="text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm dark:text-white"
                      placeholder="Write product description here"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  <svg
                    className="-ms-1 me-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add new product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;

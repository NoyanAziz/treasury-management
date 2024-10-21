import { TABLE_LIMIT } from "~/helpers/constants";

const AccountSkeleton = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <h1 className="mb-6 text-3xl text-white">Bank Balances</h1>
        <button
          type="button"
          disabled={true}
          className="rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-gray-500"
        >
          Send Money
        </button>
      </div>

      <div className="relative animate-pulse overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Account Number
              </th>
              <th scope="col" className="px-6 py-3">
                Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Currency
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: TABLE_LIMIT }).map((_, index) => (
              <tr
                key={index}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  <div className="h-4 w-2/3 rounded bg-gray-600" />
                </th>
                <td className="px-6 py-4">
                  <div className="h-4 w-2/3 rounded bg-gray-600" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-2/3 rounded bg-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AccountSkeleton;

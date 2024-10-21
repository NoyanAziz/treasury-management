import { TABLE_LIMIT } from "~/helpers/constants";

const TransactionSkeleton = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <h1 className="mb-6 text-3xl text-white">Transactions</h1>
      </div>

      <div className="relative animate-pulse overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Sender
              </th>
              <th scope="col" className="px-6 py-3">
                Receiver
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Currency
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: TABLE_LIMIT }).map((_, index) => (
              <tr
                key={index}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="px-6 py-4">
                  <div className="h-4 w-2/3 rounded bg-gray-600" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-2/3 rounded bg-gray-600" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-2/3 rounded bg-gray-600" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-2/3 rounded bg-gray-600" />
                </td>
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

export default TransactionSkeleton;

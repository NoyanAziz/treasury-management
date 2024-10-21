import { MOCK_ACCOUNT_NUMBERS, TABLE_LIMIT } from "~/helpers/constants";

const TransactionSkeleton = ({
  selectedAccount,
}: {
  selectedAccount?: string;
}) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <h1 className="mb-6 text-3xl text-white">Transaction History</h1>

        <div className="col-span-2 sm:col-span-1">
          <select
            id="account"
            name="account"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
            value={selectedAccount ?? ""}
            disabled={true}
          >
            <option value="">Select account</option>
            {MOCK_ACCOUNT_NUMBERS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
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

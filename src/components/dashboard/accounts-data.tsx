"use client";

import { useSearchParams } from "next/navigation";

import { Account } from "~/types";
import TablePagination from "./pagination";
import { useMemo, useState } from "react";

const LIMIT = 10;

const AccountData = ({ accounts }: { accounts: Account[] }) => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "1");
  const [currentPage, setCurrentPage] = useState(page);

  const offset = (currentPage - 1) * LIMIT;

  const paginatedAccounts = useMemo(() => {
    return accounts.slice(offset, offset + LIMIT);
  }, [accounts, currentPage]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="text-gray-500 dark:text-gray-400 w-full text-left text-sm rtl:text-right">
        <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase">
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
          {paginatedAccounts.map((account) => (
            <tr
              key={account.accountNumber}
              className="dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-b bg-white"
            >
              <th
                scope="row"
                className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
              >
                {account.accountNumber}
              </th>
              <td className="px-6 py-4">{account.balance}</td>
              <td className="px-6 py-4">{account.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        totalPages={accounts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AccountData;

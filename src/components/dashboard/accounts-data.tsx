"use client";

import { useSearchParams } from "next/navigation";

import { Account } from "~/types";
import TablePagination from "./pagination";
import { useMemo, useState } from "react";
import PaymentForm from "./payment-form";
import { ACCOUNT_TABLE_LIMIT } from "~/constants";

const AccountData = ({ accounts }: { accounts: Account[] }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  const [currentPage, setCurrentPage] = useState(page);
  const [isOpen, setIsOpen] = useState(false);

  const offset = (currentPage - 1) * ACCOUNT_TABLE_LIMIT;

  const paginatedAccounts = useMemo(() => {
    return accounts.slice(offset, offset + ACCOUNT_TABLE_LIMIT);
  }, [accounts, currentPage]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-6 text-3xl text-white">Bank Balances</h1>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send Money
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            {paginatedAccounts.map((account) => (
              <tr
                key={account.accountNumber}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
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
        <PaymentForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default AccountData;

"use client";

import { useSearchParams } from "next/navigation";

import { Account } from "~/types";
import TablePagination from "./pagination";
import { useMemo, useState } from "react";
import PaymentForm from "./payment-form";

const LIMIT = 10;

const AccountData = ({ accounts }: { accounts: Account[] }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  const [currentPage, setCurrentPage] = useState(page);
  const [isOpen, setIsOpen] = useState(false);

  const offset = (currentPage - 1) * LIMIT;

  const paginatedAccounts = useMemo(() => {
    return accounts.slice(offset, offset + LIMIT);
  }, [accounts, currentPage]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-6 text-3xl text-white">Bank Balances</h1>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
        >
          Send Money
        </button>
      </div>

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
        <PaymentForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default AccountData;

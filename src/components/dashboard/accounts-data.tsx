"use client";

import { notFound, useSearchParams } from "next/navigation";

import { Account } from "~/types";
import TablePagination from "../common/pagination";
import { useMemo, useState } from "react";
import PaymentForm from "./payment-form";
import { TABLE_LIMIT } from "~/helpers/constants";

const AccountData = ({ accounts }: { accounts: Account[] }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  if (page < 1 || page > accounts.length / TABLE_LIMIT) {
    notFound();
  }

  const [currentPage, setCurrentPage] = useState(page);
  const [isOpen, setIsOpen] = useState(false);

  const offset = (currentPage - 1) * TABLE_LIMIT;

  const paginatedAccounts = useMemo(() => {
    return accounts.slice(offset, offset + TABLE_LIMIT);
  }, [accounts, currentPage]);

  return (
    <>
      <div className="flex items-start justify-between">
        <h1 className="mb-6 text-3xl text-white">Bank Balances</h1>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
            {paginatedAccounts.length > 0 ? (
              paginatedAccounts.map((account) => (
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
              ))
            ) : (
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <td colSpan={6} className="px-6 py-4 text-center">
                  No accounts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {accounts.length > TABLE_LIMIT && (
          <TablePagination
            searchParams={searchParams}
            totalPages={accounts.length / TABLE_LIMIT}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <PaymentForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default AccountData;

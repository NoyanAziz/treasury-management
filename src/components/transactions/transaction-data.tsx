"use client";

import { notFound, useRouter, useSearchParams } from "next/navigation";

import { Transaction } from "~/types";
import TablePagination from "../common/pagination";
import { useEffect, useMemo, useRef, useState } from "react";
import { MOCK_ACCOUNT_NUMBERS, TABLE_LIMIT } from "~/helpers/constants";
import { displayTimestamp } from "~/helpers/utils";
import TransactionSkeleton from "./skeleton";
import { toast } from "sonner";

const TransactionsData = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const prevAccountRef = useRef<string | null>(null);

  const page = parseInt(searchParams.get("page") ?? "1");
  const account = searchParams.get("account") ?? "";

  const [loading, setLoading] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<string>(account);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAccountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const account = event.target.value;
    setSelectedAccount(account);
    push(`/transactions?page=1&account=${account}`);
  };

  const fetchTransactions = async (account: string) => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/api/transactions?account=${account}`,
        {
          cache: "no-store",
        },
      );
      if (!res.ok) {
        toast.error("Failed to fetch transactions.");
      }

      const data = await res.json();
      setTransactions(data);
    } catch (error: { message: string } | any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (prevAccountRef.current !== selectedAccount && selectedAccount) {
      fetchTransactions(selectedAccount);
    }

    prevAccountRef.current = selectedAccount;

    if (!selectedAccount) {
      setTransactions([]);
    }
  }, [selectedAccount]);

  if (
    transactions.length > 0 &&
    (page < 1 || page > transactions.length / TABLE_LIMIT)
  ) {
    notFound();
  }

  const [currentPage, setCurrentPage] = useState(page);

  const offset = (currentPage - 1) * TABLE_LIMIT;

  const paginatedTransactions = useMemo(() => {
    return transactions.slice(offset, offset + TABLE_LIMIT);
  }, [transactions, currentPage]);

  return (
    <>
      {loading ? (
        <TransactionSkeleton selectedAccount={selectedAccount} />
      ) : (
        <>
          <div className="flex items-start justify-between">
            <h1 className="mb-6 text-3xl text-white">Transaction History</h1>
            <div className="col-span-2 sm:col-span-1">
              <select
                id="account"
                name="account"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                value={selectedAccount}
                onChange={(event) => handleAccountChange(event)}
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

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                {paginatedTransactions.length > 0 ? (
                  paginatedTransactions.map((transaction) => (
                    <tr
                      key={transaction.transactionId}
                      className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">{transaction.transactionId}</td>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {transaction.payerAccount}
                      </th>
                      <td className="px-6 py-4">{transaction.payeeAccount}</td>
                      <td className="px-6 py-4">{transaction.amount}</td>
                      <td className="px-6 py-4">{transaction.currency}</td>
                      <td className="px-6 py-4">
                        {displayTimestamp(transaction.timestamp)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td colSpan={6} className="px-6 py-4 text-center">
                      No transactions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {transactions.length > TABLE_LIMIT && (
              <TablePagination
                searchParams={searchParams}
                totalPages={transactions.length / TABLE_LIMIT}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TransactionsData;

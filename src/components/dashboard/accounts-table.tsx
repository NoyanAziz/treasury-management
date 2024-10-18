"use client";

import React, { useState, useEffect, useMemo } from "react";
import useDebounce from "~/hooks/useDebounce";

interface Account {
  accountNumber: string;
  balance: number;
  currency: string;
}

interface AccountTableProps {
  accounts: Account[];
}

const AccountTable: React.FC<AccountTableProps> = ({ accounts }) => {
  const [visibleAccounts, setVisibleAccounts] = useState<Account[]>([]);
  const [currentIndex, setCurrentIndex] = useState(20); // Load 20 accounts initially
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounce the search term for performance optimization
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    // Load the initial accounts
    setVisibleAccounts(accounts.slice(0, currentIndex));
  }, [accounts, currentIndex]);

  const loadMoreAccounts = () => {
    if (loading) return; // Prevent multiple loads
    if (currentIndex >= accounts.length) return; // No more accounts to load

    setLoading(true);

    // Simulate loading more accounts with a timeout
    setTimeout(() => {
      const nextIndex = Math.min(currentIndex + 20, accounts.length); // Load 20 more accounts
      setVisibleAccounts((prev) => [
        ...prev,
        ...accounts.slice(currentIndex, nextIndex), // Append the newly loaded accounts
      ]);
      setCurrentIndex(nextIndex);
      setLoading(false);
    }, 1000); // Simulate an API call delay
  };

  // Filtered accounts based on search
  const filteredAccounts = useMemo(() => {
    return visibleAccounts.filter((account) =>
      account.accountNumber.includes(debouncedSearch),
    );
  }, [debouncedSearch, visibleAccounts]);

  // Scroll event handler
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement; // Get scroll properties of the whole document
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      // Near bottom
      loadMoreAccounts();
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by account number"
          className="border-gray-300 rounded border px-4 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {filteredAccounts.length === 0 ? (
          <div className="py-4 text-center text-2xl text-primary">
            No accounts found.
          </div>
        ) : (
          <table className="divide-gray-200 min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="font-large px-6 py-3 text-left text-xs uppercase tracking-wider text-primary">
                  Account Number
                </th>
                <th className="font-large px-6 py-3 text-left text-xs uppercase tracking-wider text-primary">
                  Balance
                </th>
                <th className="font-large px-6 py-3 text-left text-xs uppercase tracking-wider text-primary">
                  Currency
                </th>
              </tr>
            </thead>
            <tbody className="divide-gray-200">
              {filteredAccounts.map((account, index) => (
                <tr
                  className={`${index % 2 === 0 ? "bg-lightgrey" : "bg-white"}`}
                  key={account.accountNumber}
                >
                  <td className="text-gray-900 whitespace-nowrap px-6 py-4 text-sm">
                    {account.accountNumber}
                  </td>
                  <td className="text-gray-900 whitespace-nowrap px-6 py-4 text-sm">
                    {account.balance}
                  </td>
                  <td className="text-gray-900 whitespace-nowrap px-6 py-4 text-sm">
                    {account.currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {loading && (
          <div className="py-4 text-center">Loading more accounts...</div>
        )}
      </div>
    </>
  );
};

export default AccountTable;

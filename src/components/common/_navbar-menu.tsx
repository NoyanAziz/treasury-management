"use client";

import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-transparent">
        <li>
          <a
            href="/dashboard?page=1"
            className={`block rounded px-3 py-2 ${
              pathname === "/dashboard"
                ? "bg-gray-100 text-blue-500 md:bg-transparent md:text-blue-500"
                : "text-gray-900 hover:bg-gray-100 dark:text-white"
            } md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500`}
            aria-current={pathname === "/dashboard" ? "page" : undefined}
          >
            Accounts
          </a>
        </li>
        <li>
          <a
            href="/transactions"
            className={`block rounded px-3 py-2 ${
              pathname === "/transactions"
                ? "bg-gray-100 text-blue-500 md:bg-transparent md:text-blue-500"
                : "text-gray-900 hover:bg-gray-100 dark:text-white"
            } md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500`}
            aria-current={pathname === "/transactions" ? "page" : undefined}
          >
            Transactions
          </a>
        </li>
      </ul>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-50">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Treasury Hub
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mt-4 flex flex-col rounded-lg font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent rtl:space-x-reverse md:dark:bg-transparent">
            <li>
              <a
                href="/dashboard"
                className="text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Accounts
              </a>
            </li>
            <li>
              <a
                href="/transactions"
                className="text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Transactions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

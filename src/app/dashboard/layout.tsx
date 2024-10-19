import Navbar from "~/components/common/nabvar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between">
          <h1 className="mb-6 text-3xl text-white">Bank Balances</h1>
          <button
            type="button"
            className="bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Send Money
          </button>
        </div>
        {children}
      </div>
    </section>
  );
}

import Navbar from "~/components/common/nabvar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div>
        <div className="container mx-auto p-6">
          <div className="flex items-center justify-between">
            <h1 className="mb-6 text-3xl font-bold text-primary">
              Bank Balances
            </h1>
            <button className="rounded bg-secondary px-4 py-2 text-white hover:bg-hover">
              Initiate Payment
            </button>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

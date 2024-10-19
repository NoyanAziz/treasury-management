import Navbar from "~/components/common/nabvar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto p-6">{children}</div>
    </section>
  );
}

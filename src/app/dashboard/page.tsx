import AccountsTable from "~/components/dashboard/accounts-table";

const Dashboard = async () => {
  const res = await fetch("http://localhost:3000/api/accounts/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }

  const accounts = await res.json();

  return <AccountsTable accounts={accounts} />;
};

export default Dashboard;

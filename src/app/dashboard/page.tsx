"use server";

import AccountsData from "~/components/dashboard/accounts-data";

const Dashboard = async () => {
  const res = await fetch("http://localhost:3000/api/accounts/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }

  const accounts = await res.json();
  console.log({ accounts });

  return <AccountsData accounts={accounts} />;
};

export default Dashboard;

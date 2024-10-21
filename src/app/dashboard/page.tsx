import AccountsData from "~/components/dashboard/accounts-data";
import { Account } from "~/types";

const Dashboard = async () => {
  let accounts = [] as Account[];

  try {
    const res = await fetch(`${process.env.NEXT_ROOT_URL}/api/accounts/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch accounts.");
    }

    accounts = await res.json();
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while fetching accounts.",
    );
  }

  return <AccountsData accounts={accounts} />;
};

export default Dashboard;

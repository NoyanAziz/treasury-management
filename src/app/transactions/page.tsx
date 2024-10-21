import { notFound } from "next/navigation";
import AccountsData from "~/components/dashboard/accounts-data";
import TransactionsData from "~/components/transactions/transaction-data";

const Dashboard = async () => {
  return <TransactionsData />;
};

export default Dashboard;

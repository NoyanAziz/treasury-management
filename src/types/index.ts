export interface Account {
  accountNumber: string;
  balance: number;
  currency: string;
}

export interface Transaction {
  transactionId: string;
  payerAccount: string;
  payeeAccount: string;
  amount: number;
  currency: string;
  timestamp: string;
}

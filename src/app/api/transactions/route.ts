import { NextResponse } from "next/server";
import { CURRENCY_OPTIONS, MOCK_ACCOUNT_NUMBERS } from "~/helpers/constants";

const TOTAL_TRANSACTIONS = 50;

function generateAmount(): number {
  return Math.floor(Math.random() * 10000) + 1;
}

function generateTimestamp(): string {
  const now = new Date();
  const pastDate = new Date(now.setFullYear(now.getFullYear() - 1));
  const randomDate = new Date(
    pastDate.getTime() + Math.random() * (Date.now() - pastDate.getTime()),
  );
  return randomDate.toISOString();
}

function* generateAccountNumber() {
  let accountNumber = 4242424242424242;

  while (true) {
    yield accountNumber.toString();
    accountNumber += 1;
  }
}

const accountNumberGenerator = generateAccountNumber();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const account = searchParams.get("account");

  if (!account || MOCK_ACCOUNT_NUMBERS.indexOf(account) === -1) {
    return NextResponse.json(
      { message: "Account is required" },
      { status: 400 },
    );
  }

  const mockTransactions = Array.from({ length: TOTAL_TRANSACTIONS }, () => ({
    transactionId: Math.random().toString(36).substring(2, 15),
    payerAccount: account,
    payeeAccount: accountNumberGenerator.next().value,
    amount: generateAmount(),
    currency:
      CURRENCY_OPTIONS[Math.floor(Math.random() * CURRENCY_OPTIONS.length)],
    timestamp: generateTimestamp(),
  }));

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(mockTransactions);
}

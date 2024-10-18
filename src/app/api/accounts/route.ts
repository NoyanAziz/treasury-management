import { NextResponse } from "next/server";

export async function GET() {
  const accountNumberLength = 7;
  const accountNumberChars = "0123456789";

  function generateAccountNumber(): string {
    let accountNumber = "";
    for (let i = 0; i < accountNumberLength; i++) {
      accountNumber += accountNumberChars.charAt(
        Math.floor(Math.random() * accountNumberChars.length),
      );
    }
    return accountNumber;
  }

  const mockAccounts = Array.from({ length: 1000000 }, () => ({
    accountNumber: generateAccountNumber(),
    balance: Math.floor(Math.random() * 10000),
    currency: "USD",
  }));

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(mockAccounts);
}

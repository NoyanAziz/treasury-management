import { Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <section>
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-1/4 rounded-lg" />{" "}
          {/* Simulating the "Bank Balances" heading */}
          <Skeleton className="h-10 w-32 rounded-lg" />{" "}
          {/* Simulating the "Initiate Payment" button */}
        </div>

        {/* Skeleton for the table content */}
        <div className="mt-6 space-y-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <Skeleton className="col-span-1 h-5 rounded-lg" />{" "}
              {/* Simulating account number */}
              <Skeleton className="col-span-1 h-5 rounded-lg" />{" "}
              {/* Simulating balance */}
              <Skeleton className="col-span-1 h-5 rounded-lg" />{" "}
              {/* Simulating currency */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

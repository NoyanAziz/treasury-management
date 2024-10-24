"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-center text-white">{`ERROR: ${error.message}`}</h2>
      <button
        className="mt-4 rounded-md bg-blue-700 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-500"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}

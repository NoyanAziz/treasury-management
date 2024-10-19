export default function Loading() {
  return (
    <div className="mt-12 flex h-screen animate-pulse flex-col gap-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="bg-gray-500 h-12 w-full"></div>
      ))}
    </div>
  );
}

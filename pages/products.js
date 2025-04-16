import { useRouter } from "next/router";

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;

  const headerText =
    "Curated tools for clarity and momentum. Only what we’d recommend to a close friend. No ads, no pressure, no fluff.";

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 px-4 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          {headerText}
        </h1>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full text-center text-gray-500 dark:text-gray-400 italic">
            Product grid coming soon.
          </div>
        </div>
      </div>
    </div>
  );
}

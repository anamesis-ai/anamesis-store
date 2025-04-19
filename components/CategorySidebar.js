import { useRouter } from "next/router";
import categories from "../data/categories";

export default function CategorySidebar() {
  const router = useRouter();

  return (
    <aside className="fixed top-24 left-0 h-[calc(100vh_-_6rem)] w-48 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 px-4 py-6 space-y-4 text-sm text-gray-800 dark:text-gray-200 overflow-y-auto">
      <nav className="space-y-2 flex flex-col items-center text-center">
        <button
          onClick={() => router.push("/products")}
          className="block w-full text-center whitespace-normal break-words hover:underline hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600 transition"
        >
          All Products
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => router.push(`/products?category=${cat.slug}`)}
            className="block w-full text-center whitespace-normal break-words hover:underline hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600 transition"
          >
            {cat.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}

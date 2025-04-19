import { useRouter } from "next/router";
import products from "../data/products";
import categories from "../data/categories";
import CategorySidebar from "../components/CategorySidebar";

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const categoryLabel = categories.find((c) => c.slug === category)?.name;

  const headerText =
    "Curated tools for clarity and momentum. Only what we’d recommend to a close friend. No ads, no pressure, no fluff.";

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 pt-32 pb-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      
      <div className="flex gap-8 max-w-full mx-auto">
        {/* Sidebar */}
        <div className="hidden md:block w-48 flex-shrink-0">
          <CategorySidebar />
        </div>

        {/* Product Content */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
            {categoryLabel ? categoryLabel : "All Products"}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            {headerText}
          </p>

          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No products available in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="h-48 w-full object-cover rounded mb-4"
                  />
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                  >
                    View Product
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

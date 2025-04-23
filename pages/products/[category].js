import { useRouter } from "next/router";
import Link from "next/link";
import products from "../../data/products";
import categories from "../../data/categories";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const categoryLabel = categories.find((c) => c.slug === category)?.name;

  const headerText =
    "Curated tools for clarity and momentum. Only what we’d recommend to a close friend. No ads, no pressure, no fluff.";

  return (
    <div className="min-h-screen bg-gray-light-100 dark:bg-gray-dark-100 text-gray-light-900 dark:text-gray-dark-100 px-4 pt-32 pb-12 transition-colors duration-300">
      <div className="flex max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
            {categoryLabel ? categoryLabel : "All Products"}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            {headerText}
          </p>

          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-light-600 dark:text-gray-dark-400">
              No products available in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filteredProducts.map((product, index) => (
                <div
                key={product.id}
                className="h-full opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col justify-between h-full border rounded-lg p-4 shadow-sm bg-gray-light-100 dark:bg-gray-dark-200 border-gray-light-300 dark:border-gray-dark-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)]">
                  <div>
                    <div className="h-48 w-full bg-gray-light-200 dark:bg-gray-dark-300 rounded mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover rounded"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/fallback.jpg";
                        }}
                      />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {product.fallbackDescription}
                    </p>
                  </div>
              
                  <div className="mt-auto">
                    <Link
                      href={`/products/product?slug=${product.slug}`}
                      className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm rounded hover:bg-gray-800 dark:hover:bg-gray-dark-100 transition"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

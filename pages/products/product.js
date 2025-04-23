import { useRouter } from "next/router";
import products from "../../data/products";
import Link from "next/link";

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6 text-gray-700 dark:text-gray-300">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Product Not Found</h1>
          <p className="mb-6">
            We couldn’t find the product you’re looking for. It may be under review or temporarily unavailable.
          </p>
          <Link
            href="/products"
            className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 px-6 pt-32 pb-12 transition-colors duration-300 max-w-4xl mx-auto">
      <div className="mb-4">
        <Link
          href={`/products?category=${product.category}`}
          className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200"
        >
          ← Back to {product.category.replace("-", " ")}
        </Link>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover rounded mb-6 shadow"
      />

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{product.fallbackDescription}</p>

      {/* Affiliate Info */}
      {product.affiliateLink && product.affiliateLink !== "#" ? (
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition mb-6"
        >
          View Product
        </a>
      ) : (
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Affiliate link coming soon.
        </div>
      )}

      {/* Affiliate Meta (optional if present) */}
      {(product.affiliateData.price || product.affiliateData.availability) && (
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {product.affiliateData.price && (
            <div><strong>Price:</strong> {product.affiliateData.price}</div>
          )}
          {product.affiliateData.availability && (
            <div><strong>Availability:</strong> {product.affiliateData.availability}</div>
          )}
        </div>
      )}

      {/* AI Insights */}
      {product.aiInsights.summary && (
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-2">AI Insight</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{product.aiInsights.summary}</p>

          {product.aiInsights.useCases.length > 0 && (
            <div className="mb-4">
              <h3 className="font-medium mb-1">Best For:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                {product.aiInsights.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>
          )}

          {product.aiInsights.caution && (
            <div className="text-sm text-yellow-600 dark:text-yellow-400">
              ⚠️ {product.aiInsights.caution}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import { useRouter } from "next/router";
import Link from "next/link";
import products from "../../data/products";
import categories from "../../data/categories";
import { useEffect, useState } from "react";
import { getStoredRef } from "../../utils/tracking";
import { trackEvent } from "../../lib/track";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const [rankedProducts, setRankedProducts] = useState([]);
  const [scrollDepthsTracked, setScrollDepthsTracked] = useState([]);
  const [hoveredCards, setHoveredCards] = useState([]);

  useEffect(() => {
    const ref = getStoredRef();

    const rankProductsByPersona = (ref, filtered) => {
      return filtered;
    };

    if (category) {
      const filtered = products.filter((p) => p.category === category);
      setRankedProducts(rankProductsByPersona(ref, filtered));
    } else {
      setRankedProducts(rankProductsByPersona(ref, products));
    }

    const categoryObj = categories.find((c) => c.slug === category);
    trackEvent("view_category", {
      category: category || "all",
      label: categoryObj?.name || "All Products",
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrolled = Math.round(((scrollTop + windowHeight) / docHeight) * 100);

      const thresholds = [25, 50, 75, 100];
      thresholds.forEach((t) => {
        if (scrolled >= t && !scrollDepthsTracked.includes(t)) {
          trackEvent("scroll_depth", { category: category || "all", depth: `${t}%` });
          setScrollDepthsTracked((prev) => [...prev, t]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [category, scrollDepthsTracked]);

  const handleHover = (productSlug) => {
    if (!hoveredCards.includes(productSlug)) {
      trackEvent("hover_product_card", { category, slug: productSlug });
      setHoveredCards((prev) => [...prev, productSlug]);
    }
  };

  const categoryObj = categories.find((c) => c.slug === category);
  const categoryLabel = categoryObj?.name;
  const categoryDescription = categoryObj?.description;

  const headerText = categoryDescription ||
    "Curated tools for clarity and momentum. Only what we’d recommend to a close friend. No ads, no pressure, no fluff.";

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 pt-32 pb-12 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-center-gradient dark:bg-center-gradient-dark opacity-40 pointer-events-none"></div>

      <div className="relative z-10 flex max-w-7xl mx-auto flex-col gap-16">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
            {categoryLabel || "All Products"}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            {headerText}
          </p>

          {rankedProducts.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No products available in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {rankedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="h-full opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 80}ms` }}
                  onMouseEnter={() => handleHover(product.slug)}
                >
                  <div className="flex flex-col justify-between h-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)]">
                    <div>
                    <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded border border-gray-300 dark:border-gray-700 shadow-sm flex items-center justify-center bg-white dark:bg-gray-950">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {product.fallbackDescription}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={`/products/product?slug=${product.slug}`}
                        onClick={() =>
                          trackEvent("click_product_card", {
                            category,
                            slug: product.slug,
                          })
                        }
                        className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
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

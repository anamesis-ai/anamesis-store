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
  const categoryLabel = categoryObj?.name || "";
  const headerText = categoryObj?.description || "";

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 pt-32 pb-12 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black opacity-50 pointer-events-none"></div>

      <div className="relative z-10 flex max-w-7xl mx-auto flex-col gap-16">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center font-display">
            {categoryLabel}
          </h1>
          <p className="text-center text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            {headerText}
          </p>

          {rankedProducts.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No products available in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch scroll-mt-24 opacity-0 motion-safe:animate-fadeInUp will-change-transform" style={{ animationDelay: "80ms" }}>
              {rankedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="h-full opacity-0 animate-fadeInUp will-change-transform motion-safe:transform-gpu"
                  style={{ animationDelay: `${index * 80}ms` }}
                  onMouseEnter={() => handleHover(product.slug)}
                >
                  <div className="flex flex-col justify-between h-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-md transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)]">
                    <div>
                    <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded border border-gray-300 dark:border-gray-700 shadow-sm flex items-center justify-center bg-white dark:bg-gray-950">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                      <h2 className="text-lg font-semibold mb-2 font-display">{product.name}</h2>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
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
                      >
                        <span className="inline-flex items-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm rounded-md transition-all duration-300 shadow-md hover:shadow-[0_6px_14px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_14px_rgba(255,255,255,0.2)] hover:scale-[1.02] cursor-pointer group">
                          View Product
                          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                            →
                          </span>
                        </span>
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

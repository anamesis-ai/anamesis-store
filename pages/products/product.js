import { getStoredRef } from "../../utils/tracking";
import { useRouter } from "next/router";
import products from "../../data/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "../../lib/track";

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [previousPage, setPreviousPage] = useState("/products");
  const [personaRef, setPersonaRef] = useState(null);
  const [scrollDepthsTracked, setScrollDepthsTracked] = useState([]);
  const [hoveredElements, setHoveredElements] = useState([]);

  const product = slug ? products.find((p) => p.slug === slug) : null;

  useEffect(() => {
    const prev = document.referrer;
    if (prev.includes("/products")) {
      setPreviousPage(prev);
    } else {
      setPreviousPage("/products");
    }

    const ref = getStoredRef();
    setPersonaRef(ref);

    if (product) {
      trackEvent("view_product", {
        name: product.name,
        slug: product.slug,
        category: product.category,
        referrer: prev,
        ref: ref || "none",
      });
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrolledPercentage = Math.round(((scrollTop + windowHeight) / docHeight) * 100);
      const thresholds = [25, 50, 75, 100];

      thresholds.forEach((threshold) => {
        if (
          scrolledPercentage >= threshold &&
          !scrollDepthsTracked.includes(threshold)
        ) {
          trackEvent("scroll_depth", {
            name: product?.name,
            slug: product?.slug,
            depth: `${threshold}%`,
          });
          setScrollDepthsTracked((prev) => [...prev, threshold]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [product, scrollDepthsTracked]);

  const handleHover = (elementName) => {
    if (!hoveredElements.includes(elementName)) {
      trackEvent("hover_element", {
        element: elementName,
        name: product?.name,
        slug: product?.slug,
      });
      setHoveredElements((prev) => [...prev, elementName]);
    }
  };

  const finalAffiliateLink =
    product?.affiliateLink && personaRef
      ? `${product.affiliateLink}${product.affiliateLink.includes("?") ? "&" : "?"}ref=${personaRef}`
      : product?.affiliateLink;

  const handleAffiliateClick = () => {
    trackEvent("click_affiliate", {
      name: product?.name,
      slug: product?.slug,
      affiliateLink: finalAffiliateLink,
      price: product?.affiliateData?.price || null,
      availability: product?.affiliateData?.availability || null,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Product Not Found</h1>
          <p className="mb-6">We couldn’t find the product you’re looking for.</p>
          <Link
            href="/products"
            className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
            data-track="click:back_to_products"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 pt-32 pb-12 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <section className="relative opacity-0 animate-fadeInUp">
          <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 shadow-md flex flex-col gap-10 text-base md:text-lg transition-all">
            <div>
              <button
                onClick={() => {
                  trackEvent("click_back_button", {
                    from: product?.slug || "unknown",
                  });
                  router.back();
                }}
                onMouseEnter={() => handleHover("back_button")}
                className="inline-block text-sm underline text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                ← Back
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/2">
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-md flex items-center justify-center bg-white dark:bg-gray-950"
                onMouseEnter={() => handleHover("product_image")}
                data-track="hover:product_image"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

              <div className="flex-1">
                <h1
                  className="text-2xl md:text-3xl font-semibold mb-4 font-display"
                  onMouseEnter={() => handleHover("product_name")}
                  data-track="hover:product_name"
                >
                  {product.name}
                </h1>
                <p
                  className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-6"
                  data-track="hover:product_description"
                  onMouseEnter={() => handleHover("product_description")}
                >
                  {product.fallbackDescription}
                </p>

                {(product.affiliateData.price || product.affiliateData.availability) && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                    {product.affiliateData.price && (
                      <div
                        data-track="hover:product_price"
                        onMouseEnter={() => handleHover("product_price")}
                      >
                        <strong>Price:</strong> {product.affiliateData.price}
                      </div>
                    )}
                    {product.affiliateData.availability && (
                      <div
                        data-track="hover:product_availability"
                        onMouseEnter={() => handleHover("product_availability")}
                      >
                        <strong>Availability:</strong> {product.affiliateData.availability}
                      </div>
                    )}
                  </div>
                )}

                {product.affiliateLink && product.affiliateLink !== "#" ? (
                  <a
                    href={finalAffiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleAffiliateClick}
                    onMouseEnter={() => handleHover("affiliate_button")}
                    data-track="click:view_on_amazon"
                    data-track-meta={JSON.stringify({
                      slug: product.slug,
                      name: product.name,
                      category: product.category,
                    })}
                    className="inline-flex items-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm rounded-md transition-all duration-300 shadow-md hover:shadow-[0_6px_14px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_14px_rgba(255,255,255,0.2)] hover:scale-[1.02] group"
                  >
                    <span>
                      View on Amazon
                      <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                    </span>
                  </a>
                ) : (
                  <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                    Affiliate link coming soon.
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-700 pt-6" />
          </div>
        </section>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import Link from "next/link";
import categories from "../data/categories";
import { trackEvent } from "../lib/track";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [hoveredCategories, setHoveredCategories] = useState([]);

  useEffect(() => {
    trackEvent("view_homepage", {});

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    trackEvent("click_back_to_top", { location: "homepage" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryHover = (slug) => {
    if (!hoveredCategories.includes(slug)) {
      trackEvent("hover_category_card", {
        category: slug,
        location: "homepage",
      });
      setHoveredCategories((prev) => [...prev, slug]);
    }
  };

  const handleCategoryClick = (slug) => {
    trackEvent("click_view_category", {
      category: slug,
      location: "homepage",
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 pt-32 pb-12 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-center-gradient dark:bg-center-gradient-dark opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">
        <section className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            We help you choose better—without ads, pressure, or hidden agendas.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
            Built for clarity, not clicks.
          </p>
          <a
            href="#categories"
            onClick={() => trackEvent("click_cta_scroll_to_categories", { location: "homepage" })}
            className="block w-max mx-auto mt-6 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm md:text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            See What We Recommend
          </a>
        </section>

        <section
          id="categories"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-1"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)]"
              onMouseEnter={() => handleCategoryHover(cat.slug)}
            >
              <div
                className="h-48 w-full rounded border border-gray-300 dark:border-gray-700 bg-no-repeat bg-center bg-[length:100%_100%] shadow-sm mb-4"
                style={{ backgroundImage: `url(/images/${cat.image})` }}
              ></div>

              <h2 className="font-semibold mb-2">{cat.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {cat.description}
              </p>
              <Link href={`/products/${cat.slug}`}>
                <span
                  onClick={() => handleCategoryClick(cat.slug)}
                  className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition cursor-pointer"
                >
                  View Category
                </span>
              </Link>
            </div>
          ))}
        </section>
      </div>

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 px-4 py-2 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg transition"
          aria-label="Back to Top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

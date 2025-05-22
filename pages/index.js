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
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <section className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 font-display">
            We help you choose better—without ads, pressure, or hidden agendas.
          </h1>
          <div className="mt-4">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto mb-2 animate-fadeInUp">
              Every category here holds something quietly beautiful — thoughtfully chosen to support your rhythm, your rituals, your sense of self. Take a breath, scroll slowly, and explore what calls to you.
            </p>
            <p className="text-2xl md:text-3xl text-gray-400 dark:text-gray-600 animate-breathe-slow select-none">↓</p>
          </div>
        </section>

        <section
          id="categories"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-24 opacity-0 motion-safe:animate-fadeInUp will-change-transform"
          style={{ animationDelay: "80ms" }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-md transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)]"
              onMouseEnter={() => handleCategoryHover(cat.slug)}
            >
              <div
                className="h-48 w-full rounded border border-gray-300 dark:border-gray-700 bg-no-repeat bg-center bg-[length:100%_100%] shadow-sm mb-4"
                style={{ backgroundImage: `url(/images/${cat.image})` }}
              ></div>

              <h2 className="text-lg font-semibold mb-2 font-display">{cat.name}</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                {cat.description}
              </p>
              <Link href={`/products/${cat.slug}`}>
                <span
                  onClick={() => handleCategoryClick(cat.slug)}
                  className="inline-flex items-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition cursor-pointer group"
                >
                  View Category
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </span>
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

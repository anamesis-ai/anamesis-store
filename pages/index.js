import { useState, useEffect } from "react";
import Link from "next/link";
import categories from "../data/categories";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-light-100 dark:bg-gray-dark-100 text-gray-light-900 dark:text-gray-dark-100 px-4 pt-32 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              We help you choose better—without ads, pressure, or hidden agendas.
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
              Built for clarity, not clicks.
            </p>
            <a
              href="#categories"
              className="block w-max mx-auto mt-8 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm md:text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition cursor-pointer"
            >
              See What We Recommend
            </a>
          </div>
        </section>

        {/* CATEGORY GRID SECTION */}
        <section
          id="categories"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-1"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="border rounded-lg p-4 shadow-sm bg-gray-light-100 dark:bg-gray-dark-200 border-gray-light-300 dark:border-gray-dark-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)]"
            >
              <img
                src={`/images/${cat.image}`}
                alt={cat.name}
                className="h-48 w-full object-cover rounded mb-4"
              />
              <h2 className="font-semibold mb-2">{cat.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {cat.description}
              </p>
              <Link href={`/products?category=${cat.slug}`}>
                <span className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition cursor-pointer">
                  View Category
                </span>
              </Link>
            </div>
          ))}
        </section>
      </div>

      {/* Back to Top Button */}
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

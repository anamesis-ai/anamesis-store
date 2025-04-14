import { useState } from "react";
import categories from "../data/categories";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen transition-colors duration-300 relative">
        {/* Floating Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-4 left-4 z-50 text-xs md:text-sm px-3 py-1.5 border rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur hover:shadow-md transition"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold max-w-xl leading-snug">
            We help you choose better—without ads, pressure, or hidden agendas.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
            Built for clarity, not clicks.
          </p>
          <a
            href="#categories"
            className="mt-8 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm md:text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Explore Our Top Tools
          </a>
        </section>

        {/* CATEGORY SECTION */}
        <section
          id="categories"
          className="px-4 py-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-1"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900 dark:border-gray-700"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{cat.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {cat.description}
                </p>
                <a
                  href={cat.link}
                  className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                >
                  View Category
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

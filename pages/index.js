import { useState, useEffect } from "react";
import FloatingNav from "../components/FloatingNav";
import categories from "../data/categories";
import smoothscroll from 'smoothscroll-polyfill';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("base");
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "true") {
        setDarkMode(true);
      } else if (savedMode === "false") {
        setDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFont = localStorage.getItem("fontSize");
      if (savedFont) setFontSize(savedFont);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", darkMode);
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("fontSize", fontSize);
    }
  }, [fontSize]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fontSizeClass = {
    sm: "text-sm leading-relaxed",
    base: "text-base leading-normal",
    lg: "text-lg leading-loose",
  }[fontSize];  

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
<div className={`bg-white text-gray-900 dark:bg-[#121212] dark:text-gray-100 min-h-screen transition-colors duration-300 relative animate-fade-in ${fontSizeClass}`}>
        {/* Floating Navigation */}
        <FloatingNav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />

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
            See What We Recommend
          </a>
        </section>

        {/* CATEGORY GRID SECTION */}
        <section
          id="categories"
          className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-1 md:pl-24"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900 dark:border-gray-700"
            >
              <img
                src={`/images/${cat.image}`}
                alt={cat.name}
                className="h-48 w-full object-cover rounded mb-4"
              />
              <h2 className="font-semibold mb-2">{cat.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {cat.description}
              </p>
              <a
                href={`/products?category=${cat.id}`}
                className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              >
                View Category
              </a>
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
  tabIndex="0"
  title="Back to Top"
>
  ↑ Top
</button>
)}
    </div>
  );
}

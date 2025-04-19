import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TopNav() {
  const { darkMode, setDarkMode, fontSize, setFontSize } = useContext(UIContext);
  const router = useRouter();

  const categories = [
    { slug: "", name: "All Products" },
    { slug: "focus-tools", name: "Focus & Attention" },
    { slug: "mind-body", name: "Mind–Body Health" },
    { slug: "workflow", name: "Digital Workflow" },
    { slug: "rest", name: "Rest & Recovery" },
    { slug: "environment", name: "Environment & Ritual" },
    { slug: "insight", name: "Expression & Insight" },
  ];

  return (
    <header className="w-full px-6 py-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm fixed top-0 left-0 z-50 shadow-sm dark:shadow-md">
      {/* Left: Logo / Home */}
      <Link href="/" className="block">
        <img
          src={darkMode ? "/images/logo-dark.jpg" : "/images/logo-light.jpg"}
          alt="anamesis Logo"
          className="h-8 w-auto transition-transform duration-200 hover:scale-105 cursor-pointer ml-1"
        />
      </Link>

      {/* Center: Category Links (only show outside /products) */}
      {router.pathname !== "/products" && (
        <nav className="hidden md:flex gap-4 justify-center items-center">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug ? `/products?category=${cat.slug}` : "/products"}
              className="hover:underline hover:shadow-sm hover:shadow-gray-300 dark:hover:shadow-gray-600 px-2 py-1 transition"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      )}

      {/* Right: Toggles */}
      <div className="flex flex-col items-end gap-1">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-[90px] py-1 bg-gray-200 dark:bg-gray-600 rounded text-black dark:text-white text-sm text-center"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        {/* Font Size Buttons */}
        <div className="flex gap-1 w-full">
          {["sm", "base", "lg"].map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`w-full py-1 rounded text-sm transition text-center ${
                fontSize === size
                  ? "bg-gray-300 dark:bg-gray-600 text-black dark:text-white font-semibold"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {size === "sm" ? "A-" : size === "base" ? "A" : "A+"}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

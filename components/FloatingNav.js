import { useContext } from "react";
import { UIContext } from "../context/UIContext";

export default function FloatingNav() {
  const {
    darkMode,
    setDarkMode,
    fontSize,
    setFontSize
  } = useContext(UIContext);

  const categories = [
    { id: "focus-tools", name: "Focus & Attention" },
    { id: "mind-body", name: "Mind–Body Health" },
    { id: "workflow", name: "Digital Workflow" },
    { id: "rest", name: "Rest & Recovery" },
    { id: "environment", name: "Environment & Ritual" },
    { id: "insight", name: "Expression & Insight" },
  ];

  return (
    <aside className="fixed top-1/2 -translate-y-1/2 left-4 z-50 w-36 bg-white/80 dark:bg-gray-800/80 backdrop-blur border rounded-lg p-3 space-y-4 text-sm text-gray-800 dark:text-gray-200 shadow-lg">
<nav className="space-y-2 flex flex-col items-center text-center">
  {[
    { id: "all", name: "All Products", href: "/products" },
    ...categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      href: `/products?category=${cat.id}`
    }))
  ].map((link) => (
    <button
      key={link.id}
      onClick={() => window.location.href = link.href}
      className="block w-full text-center whitespace-normal break-words hover:underline hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600 transition"
    >
      {link.name}
    </button>
  ))}
</nav>

      <div className="border-t border-gray-300 dark:border-gray-600 pt-3 space-y-2">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full bg-gray-200 dark:bg-gray-700 rounded px-2 py-1"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

{/* Font Size Toggle */}
<div>
  <label className="block text-xs mb-1 mb-2">Font Size</label>
  <div className="flex justify-between space-x-1">
    {["sm", "base", "lg"].map((size) => (
      <button
        key={size}
        onClick={() => setFontSize(size)}
        className={`flex-1 py-1 rounded text-sm transition ${
          fontSize === size
            ? "bg-gray-300 dark:bg-gray-600 text-black dark:text-white font-semibold"
            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
      >
        {size === "sm" ? "A-" : size === "base" ? "A" : "A+"}
      </button>
    ))}
  </div>
</div>
      </div>
    </aside>
  );
}

import { useState } from "react";

export default function FloatingNav({ darkMode, setDarkMode, fontSize, setFontSize }) {
  const categories = [
    { id: "focus-tools", name: "Focus Tools" },
    { id: "mind-body", name: "Mind & Body" },
    { id: "workflow", name: "Digital Workflow" },
    { id: "rest", name: "Rest & Recovery" },
    { id: "environment", name: "Environment & Ritual" },
    { id: "insight", name: "Expression & Insight" },
  ];

  const fontSizes = ["sm", "base", "lg"];

  return (
    <aside className="fixed top-1/2 -translate-y-1/2 left-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur border rounded-lg p-3 space-y-4 text-sm text-gray-800 dark:text-gray-200 shadow-lg w-36">
<nav className="space-y-2 flex flex-col items-center text-center">
<button
  onClick={() => window.location.href = "/products"}
  className="block text-center hover:underline hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600 transition"
>
  All Products
</button>
  {categories.map((cat) => (
    <button
      key={cat.id}
      onClick={() => window.location.href = `/products?category=${cat.id}`}
      className="block text-center hover:underline hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600 transition"
    >
      {cat.name}
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
  <label className="block text-xs mb-1">Font Size</label>
  <div className="flex space-x-2">
    {["sm", "base", "lg"].map((size) => (
      <button
        key={size}
        onClick={() => setFontSize(size)}
        className={`px-2 py-1 rounded text-xs ${
          fontSize === size
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        }`}
      >
        {size === "sm" ? "A–" : size === "base" ? "A" : "A+"}
      </button>
    ))}
  </div>
</div>
      </div>
    </aside>
  );
}

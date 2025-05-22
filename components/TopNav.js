import { useContext, useState, useRef, useEffect } from "react";
import { UIContext } from "../context/UIContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { trackEvent } from "../lib/track";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function TopNav() {
  const { darkMode, setDarkMode, fontSize, setFontSize } = useContext(UIContext);
  const router = useRouter();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const categories = [
    {
      slug: "health-personal-care",
      name: "Health & Personal Care",
      subcategories: [
        "Skin Care",
        "Soap & Body Cleansers",
        "Shave & Hair Removal",
        "Vitamins & Supplements",
        "Feminine Care",
      ],
    },
    {
      slug: "home-kitchen",
      name: "Home & Kitchen",
      subcategories: [
        "Decor",
        "Furniture",
        "Bed & Bath",
        "Garden & Outdoor",
        "Storage & Organization",
      ],
    },
    {
      slug: "electronics",
      name: "Electronics",
      subcategories: [
        "Headphones",
        "Office Electronics",
        "Camera & Photo",
        "Wearable Technology",
        "Audio & Home",
      ],
    },
    {
      slug: "clothing-shoes-jewelry",
      name: "Clothing, Shoes & Jewelry",
      subcategories: [
        "Clothing",
        "Shoes",
        "Jewelry",
        "Handbags",
        "Watches",
      ],
    },
    {
      slug: "beauty-personal-care",
      name: "Beauty & Personal Care",
      subcategories: [
        "Makeup",
        "Hair Care",
        "Fragrance",
        "Foot, Hand & Nail Care",
        "Tools & Accessories",
      ],
    },
    {
      slug: "books",
      name: "Books",
      subcategories: [
        "Romance",
        "Science Fiction & Fantasy",
        "Mystery, Thriller & Suspense",
        "Self-Help",
        "Health, Fitness & Dieting",
      ],
    },
  ];

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleClose = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 100);
  };

  const cancelClose = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleDarkModeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    trackEvent("toggle_theme", { theme: newMode ? "dark" : "light" });
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    trackEvent("change_font_size", { size });
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 text-sm">
      <div className="w-full px-4 md:px-6 py-2 md:py-3 flex justify-between items-center border-b border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm dark:shadow-md">
        <Link href="/" className="block" onMouseEnter={handleClose}>
          <img
            src={darkMode ? "/images/logo-dark.jpg" : "/images/logo-light.jpg"}
            alt="anamesis Logo"
            className="h-8 w-auto transition-transform duration-200 hover:scale-105 hover:rotate-[1deg] cursor-pointer ml-1"
            onClick={() => trackEvent("click_logo", { location: "TopNav" })}
          />
        </Link>

        <nav
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm"
          onMouseLeave={handleClose}
          onMouseEnter={cancelClose}
        >
          {categories.map((cat) => (
            <div
              key={cat.slug}
              onMouseEnter={() => {
                setHoveredCategory(cat.slug);
                trackEvent("hover_category", { slug: cat.slug });
              }}
              className="relative"
            >
              <Link
                href={`/products/${cat.slug}`}
                className={`px-4 py-2 rounded-md transition font-medium relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-6 ${
                  router.asPath.startsWith(`/products/${cat.slug}`)
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-[0_0_8px_rgba(0,0,0,0.15)] dark:shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
                onClick={() => trackEvent("click_category", { slug: cat.slug })}
              >
                {cat.name}
              </Link>
            </div>
          ))}
        </nav>

        <div onMouseEnter={handleClose} className="flex flex-col items-end gap-1">
          <button
            onClick={handleDarkModeToggle}
            aria-label={darkMode ? "Switch to light mode for clarity and calm" : "Switch to dark mode for focus and rest"}
            className="w-[90px] py-1 bg-gray-200 dark:bg-gray-600 rounded text-black dark:text-white text-sm text-center transition-all hover:brightness-105"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
          <div className="flex gap-1 w-full">
            {["sm", "base", "lg"].map((size) => (
              <button
                key={size}
                onClick={() => handleFontSizeChange(size)}
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
      </div>

      {hoveredCategory && (
        <div className="motion-safe:animate-fadeInUp motion-safe:will-change-transform">
          <div
            onMouseLeave={handleClose}
            onMouseEnter={cancelClose}
            className={`w-full px-6 py-3 flex justify-center gap-4 font-medium backdrop-blur-md border-b ${
              darkMode
                ? "bg-gray-800/70 text-white border-gray-700 shadow-inner"
                : "bg-white/70 text-black border-gray-300 shadow-inner"
            }`}
            style={{ minHeight: "56px" }}
          >
            {categories
              .find((cat) => cat.slug === hoveredCategory)
              ?.subcategories.map((sub, idx) => (
                <Link
                  key={idx}
                  href={`/products/${hoveredCategory}/${slugify(sub)}`}
                  className="px-3 py-1 transition-all duration-200 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  onClick={() =>
                    trackEvent("click_subcategory", {
                      category: hoveredCategory,
                      subcategory: sub,
                    })
                  }
                >
                  {sub}
                </Link>
              ))}
          </div>
        </div>
      )}
    </header>
  );
}

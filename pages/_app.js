import "../styles/globals.css";
import { UIProvider, UIContext } from "../context/UIContext";
import TopNav from "../components/TopNav";
import CategorySidebar from "../components/CategorySidebar";
import { useEffect, useState, useContext } from "react";
import smoothscroll from "smoothscroll-polyfill";

function Layout({ children }) {
  const { darkMode, fontSize } = useContext(UIContext);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className={`min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-300 ${fontSizeClass}`}>
        
        <TopNav />
        {typeof window !== "undefined" && window.location.pathname === "/products" && <CategorySidebar />}
        
        {children}
  
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
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;

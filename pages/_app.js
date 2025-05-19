import "../styles/globals.css";
import { UIProvider, UIContext } from "../context/UIContext";
import TopNav from "../components/TopNav";
import { useEffect, useState, useContext } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { storeRefFromURL } from "../utils/tracking";
import { trackEvent } from "../lib/track";

function Layout({ children }) {
  const { darkMode, fontSize } = useContext(UIContext);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
    storeRefFromURL();

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    const handleTrackedEvent = (event) => {
      let target = event.target;

      while (target && target !== document.body) {
        const track = target.getAttribute("data-track");
        if (track) {
          const [type, label] = track.split(":");
          const metaAttr = target.getAttribute("data-track-meta");
          let metadata = {};

          try {
            metadata = metaAttr ? JSON.parse(metaAttr) : {};
          } catch (err) {
            console.warn("Invalid JSON in data-track-meta", err);
          }

          trackEvent(type || event.type, {
            label: label || "unspecified",
            tag: target.tagName,
            ...metadata,
          });
          break;
        }
        target = target.parentElement;
      }
    };

    window.addEventListener("click", handleTrackedEvent);
    window.addEventListener("mouseover", handleTrackedEvent);
    window.addEventListener("focusin", handleTrackedEvent);
    window.addEventListener("input", handleTrackedEvent);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleTrackedEvent);
      window.removeEventListener("mouseover", handleTrackedEvent);
      window.removeEventListener("focusin", handleTrackedEvent);
      window.removeEventListener("input", handleTrackedEvent);
    };
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
      <div
        className={`min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-300 ${fontSizeClass}`}
      >
        <TopNav />

        {children}

        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 px-4 py-2 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg transition"
            aria-label="Back to Top"
            data-track="click:back_to_top"
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
export function trackEvent(name, data = {}) {
    if (typeof window === "undefined") return;
  
    // External analytics (if using Plausible, PostHog, etc.)
    if (window.plausible) {
      window.plausible(name, { props: data });
    }
  
    // Internal analytics (local queue for now)
    const event = {
      name,
      data,
      timestamp: Date.now(),
      pathname: window.location.pathname,
    };
  
    try {
      const stored = JSON.parse(localStorage.getItem("anamesis_events") || "[]");
      stored.push(event);
      localStorage.setItem("anamesis_events", JSON.stringify(stored));
    } catch (err) {
      console.warn("Failed to store analytics event", err);
    }
  }
  
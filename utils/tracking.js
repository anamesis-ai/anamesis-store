export function storeRefFromURL() {
    if (typeof window === "undefined") return;
  
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") || params.get("utm_source");
  
    if (ref) {
      localStorage.setItem("personaRef", ref);
    }
  }
  
  export function getStoredRef() {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("personaRef");
  }
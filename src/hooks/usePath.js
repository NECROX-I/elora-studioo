import { useEffect, useState } from "react";

// App.jsx restores scroll position itself, so the browser must not do it.
if ("scrollRestoration" in window.history)
  window.history.scrollRestoration = "manual";
// Remember the scroll position when the page is refreshed or closed.
window.addEventListener("pagehide", () =>
  window.history.replaceState({ y: window.scrollY }, ""),
);

// Go to an internal URL without a full page reload.
export function navigate(to) {
  window.history.replaceState({ y: window.scrollY }, ""); // remember where we were (for Back)
  window.history.pushState(null, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

const clean = (p) => p.replace(/\/+$/, "") || "/";

// Returns the current pathname, e.g. "/" or "/work/project-one".
export default function usePath() {
  const [path, setPath] = useState(() => clean(window.location.pathname));
  useEffect(() => {
    const sync = () => setPath(clean(window.location.pathname));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  return path;
}

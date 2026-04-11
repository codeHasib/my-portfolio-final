import { useEffect, useState } from "react";

const SPLASH_KEY = "splashShown";
const SPLASH_DURATION = 3000;

export function useSplashScreen() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SPLASH_KEY);

    if (!alreadyShown) {
      setShowSplash(true);
      sessionStorage.setItem(SPLASH_KEY, "true");

      const timer = setTimeout(() => {
        setShowSplash(false);
      }, SPLASH_DURATION);

      return () => clearTimeout(timer);
    }
  }, []);

  return showSplash;
}

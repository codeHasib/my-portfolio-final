"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const SPLASH_KEY = "splashShown";

export default function SplashWrapper() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SPLASH_KEY);
    if (!alreadyShown) {
      setShowSplash(true);
      sessionStorage.setItem(SPLASH_KEY, "true");
    }
  }, []);

  if (!showSplash) return null;

  return <SplashScreen duration={3000} />;
}

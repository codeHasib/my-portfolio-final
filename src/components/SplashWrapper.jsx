// "use client";

// import { useEffect, useState } from "react";
// import SplashScreen from "./SplashScreen";

// const SPLASH_KEY = "splashShown";

// export default function SplashWrapper() {
//   const [showSplash, setShowSplash] = useState(false);

//   useEffect(() => {
//     const alreadyShown = sessionStorage.getItem(SPLASH_KEY);
//     if (!alreadyShown) {
//       setShowSplash(true);
//       sessionStorage.setItem(SPLASH_KEY, "true");
//     }
//   }, []);

//   if (!showSplash) return null;

//   return <SplashScreen duration={3000} />;
// }

"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const SPLASH_KEY = "splashShown";

export default function SplashWrapper() {
  const [status, setStatus] = useState("loading"); // "loading" | "show" | "skip"

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SPLASH_KEY);
    if (alreadyShown) {
      setStatus("skip");
    } else {
      sessionStorage.setItem(SPLASH_KEY, "true");
      setStatus("show");
    }
  }, []);

  // block EVERYTHING until we know what to do
  // this prevents the main page from flashing before splash
  if (status === "loading") {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#0a0a0a", // same as your splash background
        }}
      />
    );
  }

  if (status === "show") {
    return <SplashScreen duration={3502} />;
  }

  // status === "skip" — render nothing, show main page directly
  return null;
}

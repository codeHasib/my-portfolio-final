"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!?";

const GlitchText = ({ text, className = "" }) => {
  const [displayed, setDisplayed] = useState(text);
  const intervalRef = useRef(null);
  const iterationsRef = useRef(0);

  const startGlitch = () => {
    iterationsRef.current = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayed(
        text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < iterationsRef.current) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      iterationsRef.current += 0.5;
      if (iterationsRef.current >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayed(text);
      }
    }, 40);
  };

  const stopGlitch = () => {
    clearInterval(intervalRef.current);
    setDisplayed(text);
  };

  useEffect(() => {
    // if splash already fired before (navigation), glitch immediately
    if (window.__splashDone) {
      startGlitch();
      return;
    }

    // otherwise wait for the splashDone event
    const onSplashDone = () => {
      window.__splashDone = true;
      startGlitch();
    };

    window.addEventListener("splashDone", onSplashDone);

    return () => {
      window.removeEventListener("splashDone", onSplashDone);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={startGlitch}
      onMouseLeave={stopGlitch}
      style={{ cursor: "default", fontFamily: "monospace" }}
    >
      {displayed}
    </span>
  );
};

export default GlitchText;
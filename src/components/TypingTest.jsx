"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const texts = ["WEB DEVELOPER", "FULL STACK DEVELOPER"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setSpeed(120);

        if (displayText === currentText) {
          setIsDeleting(true);
          setSpeed(1000); // pause before deleting
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setSpeed(60);

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setSpeed(300);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <h1 className="text-xl md:text-3xl font-bold text-gray-500">
      {displayText}
      <span className="border-r-2 border-white ml-1 animate-pulse"></span>
    </h1>
  );
}

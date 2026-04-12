"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({ duration = 5000 }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), duration - 800);
    const hideTimer = setTimeout(() => setVisible(false), duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes wordEnter {
          0% {
            opacity: 0;
            transform: translateY(60px) rotate(-8deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes wordExit {
          0% {
            opacity: 1;
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-80px) rotate(4deg);
          }
        }

        .splash-word {
          display: block;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-align: center;
        }
        .big-word {
        color: #ffffff;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          className="splash-word big-word text-4xl md:text-6xl lg:text-8xl font-extrabold"
          style={{
            animation:
              phase === "enter"
                ? "wordEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards"
                : "wordExit 0.8s cubic-bezier(0.7, 0, 0.84, 0) 0s forwards",
          }}
        >
          MOHAMMAD
        </span>
        <span
          className="splash-word big-word mb-10 text-4xl md:text-6xl lg:text-8xl  font-extrabold"
          style={{
            animation:
              phase === "enter"
                ? "wordEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both"
                : "wordExit 0.8s cubic-bezier(0.7, 0, 0.84, 0) 0.1s forwards",
          }}
        >
          HASIB
        </span>
        <span
          className="splash-word font-light text-[20px] md:text-xl lg:text-xl text-gray-400"
          style={{
            animation:
              phase === "enter"
                ? "wordEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.6s both"
                : "wordExit 0.8s cubic-bezier(0.7, 0, 0.84, 0) 0.2s forwards",
          }}
        >
          WEB DEVELOPER
        </span>
      </div>
    </div>
  );
}

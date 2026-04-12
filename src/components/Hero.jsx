"use client";

import Image from "next/image";
import TypingText from "./TypingTest";
import { useTheme } from "@/Context/ThemeContext";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

const SPLASH_KEY = "splashShown";

const Hero = () => {
  const { theme } = useTheme();

  // if splash already ran before, no extra delay needed
  const splashAlreadyShown =
    typeof window !== "undefined" &&
    sessionStorage.getItem(SPLASH_KEY) === "true";

  const baseDelay = splashAlreadyShown ? 0 : 3.5;

  return (
    <div className="flex flex-col justify-center items-center border-b border-gray-500 pb-30">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: baseDelay + 0.1,
        }}
        className="relative h-[350px] w-[350px] p-[4px] rounded-full overflow-hidden bg-gray-500"
      >
        <div className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient rounded-full"></div>

        <div className="relative h-full w-full bg-black rounded-full flex items-center justify-center text-white">
          <div className="rounded-full flex justify-center items-center">
            <Image
              width={280}
              height={280}
              className="transition-all duration-300 hover:scale-130"
              src={"/myImg.png"}
              alt="Image of Mohammad Hasib"
            ></Image>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 18,
          delay: baseDelay + 0.3,
        }}
        className="text-center mt-6"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-500 mb-2">
          HI, NAME IS
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-5">
          {/* MOHAMMAD HASIB */}
          <GlitchText text={"MOHAMMAD HASIB"}></GlitchText>
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 18,
          delay: baseDelay + 0.5,
        }}
      >
        <TypingText />
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
          delay: baseDelay + 0.7,
        }}
        className="mt-10"
      >
        <a
          className={
            theme === "dark"
              ? "btn p-10 text-3xl bg-white text-black rounded-full"
              : "btn p-10 text-3xl bg-black text-white rounded-full"
          }
          href="https://wa.me/+8801997858226"
        >
          CONTACT ME
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;

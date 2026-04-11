"use client";

import Image from "next/image";
import TypingText from "./TypingTest";
import { useTheme } from "@/Context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative h-[350px] w-[350px] p-[4px] rounded-full overflow-hidden bg-gray-500">
        <div className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient rounded-full"></div>

        <div className="relative h-full w-full bg-black rounded-full flex items-center justify-center text-white">
          <div className="rounded-full flex justify-center items-center">
            <Image
              width={280}
              height={280}
              src={"/myImg.png"}
              alt="Image of Mohammad Hasib"
            ></Image>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-500 mb-2">
          HI, NAME IS
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold">
          MOHAMMAD HASIB
        </h1>
      </div>
      <TypingText></TypingText>
      <div className="mt-10">
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
      </div>
    </div>
  );
};

export default Hero;

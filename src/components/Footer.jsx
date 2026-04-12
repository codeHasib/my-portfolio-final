"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-gray-800 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black tracking-tighter uppercase">
            code<span className="text-gray-500">Hasib</span>
          </h2>
          <p className="text-[10px] text-gray-500 tracking-widest mt-1 uppercase">
            © {currentYear} All Rights Reserved
          </p>
        </div>

        {/* Center: Status / Tagline */}
        <div className="hidden lg:block text-[10px] text-gray-600 tracking-[0.3em] uppercase">
          Built with React 19 & Next.js
        </div>

        {/* Right Side: Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="group flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
        >
          Back to top
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:-translate-y-1 transition-transform"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
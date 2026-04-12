"use client";

import { usePortfolioData } from "@/Context/dataContext";
import ProjectLinks from "./ProjectLinks";
import GitIcon from "../../public/images/social/github.png";
import EmailIcon from "../../public/images/social/email.png";
import WhatsappIcon from "../../public/images/social/whatsapp.png";
import VercelIcon from "../../public/images/social/vercel.png";
import LinkIcon from "../../public/images/social/linkedin.png";
import { motion } from "framer-motion"; // Added Framer Motion

const Connect = () => {
  const { personalData } = usePortfolioData();
  const { socialLinks } = personalData;

  // 1. Container variants (staggers the children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // 2. Variants for the titles
  const titleVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const titleVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // 3. Variant for social icons
  const iconPop = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 200, damping: 10 } 
    },
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-25 overflow-hidden min-h-screen"
    >
      <motion.h2 
        variants={titleVariantsLeft}
        className="text-4xl md:text-6xl lg:text-9xl font-extrabold text-center text-gray-500"
      >
        GET IN
      </motion.h2>
      <motion.h2 
        variants={titleVariantsRight}
        className="text-4xl md:text-6xl lg:text-9xl font-extrabold text-center"
      >
        TOUCH
      </motion.h2>

      <div className="flex justify-center items-center gap-4 my-10 flex-wrap px-4">

        
        <motion.div variants={iconPop}>
          <ProjectLinks
            icon={GitIcon}
            link={socialLinks.github}
            text={"GITHUB"}
          />
        </motion.div>

        <motion.div variants={iconPop}>
          <ProjectLinks
            link={`mailto:${socialLinks.email}`} 
            text={"EMAIL"}
            icon={EmailIcon}
          />
        </motion.div>

        <motion.div variants={iconPop}>
          <ProjectLinks
            link={socialLinks.linkedin}
            text={"LINKEDIN"}
            icon={LinkIcon}
          />
        </motion.div>

        <motion.div variants={iconPop}>
          <ProjectLinks
            link={socialLinks.whatsapp}
            icon={WhatsappIcon}
            text={"WHATSAPP"}
          />
        </motion.div>

        <motion.div variants={iconPop}>
          <ProjectLinks
            link={socialLinks.vercel}
            text={"VERCEL"}
            icon={VercelIcon}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Connect;
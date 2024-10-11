import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/jeff.png";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < HERO_CONTENT.length) {
          setDisplayedText((prev) => prev + HERO_CONTENT[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 45);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35"> {/* Tambahkan id "hero" */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }} // Animate to visible state
            transition={{ duration: 0.5 }}
          >
            <h1 className="pb-16 text-3xl font-bold tracking-tight lg:mt-16 lg:text-5xl">
              Hi I'm  Jeff Bezos
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              CEO, presiden dan pemilik saham mayoritas perusahaan <br /> teknologi terbesar di dunia Amazon.com. 
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {displayedText}
            </p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }} 
          >
            <img
              className="rounded-2xl"
              src={profilePic}
              alt="Jeff Bezos"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-blue-300 org"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default Scroll;

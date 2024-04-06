"use client";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const DMT = () => {
  const [theme, setTheme] = useState<any>(null);
  const [selected, setSelected] = useState("light"); // who ara you?
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setSelected("dark");
    } else {
      setTheme("light");
      setSelected("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`grid place-content-center px-4 transition-colors  mt-[20rem] ${
        selected === "light" ? "" : ""
      }`}
    >
      <SliderToggle
        selected={selected}
        setSelected={setSelected}
        handleThemeSwitch={handleThemeSwitch}
        setTheme={setTheme}
      />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected, setTheme }: any) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-white"
        }`}
        onClick={() => {
          setSelected("light");
          setTheme("light");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-[#0e0e0e]"
        }`}
        onClick={() => {
          setSelected("dark");
          setTheme("dark");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default DMT;

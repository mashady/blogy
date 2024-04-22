"use client";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

import "./DarkMode.css";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const DMT = () => {
  /** some issue here will be solved */
  const [theme, setTheme] = useState<any>(null);
  const [localTheme, setLocalTheme] = useState<any>(null);
  const [selected, setSelected] = useState("light"); // who ara you?
  const setThemeInStorage = (theme: string) => {
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    /**
     * if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //let locThe: any = getThemeInStorage();
      if (localStorage.getItem("theme") === "dark") {
        setTheme("dark");
        setSelected("dark");
        setLocalTheme("dark");
        setThemeInStorage("dark");
      }
    } else {
      setTheme("light");
      setSelected("light");
      setLocalTheme("light");
      setThemeInStorage("light");
    }
     */
  }, []);

  useEffect(() => {
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
      setThemeInStorage("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setThemeInStorage("light");
    }
  }, [localTheme]);

  const handleThemeSwitch = () => {
    setThemeInStorage("light");
  };
  const getThemeInStorage = () => {
    localStorage.getItem("theme"); // returns 'light' in this case
  };
  //const themeLo = getThemeInStorage();
  // console.log(themeLo);
  return (
    <div className="">
      <SliderToggle
        selected={selected}
        setSelected={setSelected}
        handleThemeSwitch={handleThemeSwitch}
        setTheme={setLocalTheme}
      />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected, setTheme }: any) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    isOn ? setTheme("dark") : setTheme("light");
  }, [isOn]);
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <div
        className={isOn ? "switch" : "switch justify-end"}
        onClick={toggleSwitch}
      >
        <motion.div
          className={isOn ? "handle" : "handle justify-end"}
          layout
          transition={spring}
        >
          {isOn ? DARK_MODE : LIGHT_MODE}
        </motion.div>
      </div>
      {/**
       * <button
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
       * 
       * 
       */}
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 20,
};

const DARK_MODE = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
  </svg>
);

const LIGHT_MODE = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);

export default DMT;

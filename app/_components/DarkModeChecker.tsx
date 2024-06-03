"use client";
import React, { useEffect } from "react";

const DarkModeChecker = () => {
  let darkMode = localStorage.getItem("dark");

  useEffect(() => {
    if (darkMode === "darkMode") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return <div></div>;
};

export default DarkModeChecker;

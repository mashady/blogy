"use client";
import React, { useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const DarkMode = () => {
  const [dark, setDark] = React.useState(false);
  const [strorage, setStorage] = React.useState<any>(null);
  const ISSERVER = typeof window === "undefined";
  // todo create the checker method
  let dMOde = localStorage.getItem("dark");

  // console.log(lalal);
  useEffect(() => {
    if (dMOde === "darkMode") {
      setDark(true);
      //console.log("lalal dark mode");
      document.body.classList.add("dark");
      // Add styles to your specific class when dark mode is enabled
      const editorWrapper = document.querySelector(
        "#simplemde-editor-2-wrapper > div > div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty"
      );
      if (editorWrapper) {
        editorWrapper.classList.add("dark-mode-enabled");
      }
    } else {
      setDark(false);
      //console.log("lalal light mode");
    }
  }, []);

  const darkModeHandler = () => {
    // if (lalal === null){
    setDark(!dark);
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", dark ? "lightMode" : "darkMode");

    // Toggle styles for your specific class based on dark mode state
    const editorWrapper = document.querySelector(
      "#simplemde-editor-2-wrapper > div > div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty"
    );
    if (editorWrapper) {
      editorWrapper.classList.toggle("dark-mode-enabled", !dark);
    }
    // }
  };
  return (
    <button
      className="mr-4 text-xl border-r-2 p-2 border-[#1f4d78]"
      onClick={() => darkModeHandler()}
    >
      {
        dark && <IoSunny /> // render sunny when dark is true
      }
      {
        !dark && <IoMoon /> // render moon when dark is false
      }
    </button>
  );
};

export default DarkMode;

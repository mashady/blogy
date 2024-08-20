"use client";
import React, { useEffect } from "react";

const DarkModeChecker = () => {
  useEffect(() => {
    let darkMode = localStorage.getItem("dark");

    if (darkMode === "darkMode") {
      document.body.classList.add("dark");
      // Add styles to your specific class when dark mode is enabled
      const editorWrapper = document.querySelector(
        "#simplemde-editor-2-wrapper > div > div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty"
      );
      if (editorWrapper) {
        editorWrapper.classList.add("dark-mode-enabled");
      }
    } else {
      document.body.classList.remove("dark");
      const editorWrapper = document.querySelector(
        "#simplemde-editor-2-wrapper > div > div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty"
      );
      if (editorWrapper) {
        editorWrapper.classList.remove("dark-mode-enabled");
      }
    }
  }, []);
  return <div></div>;
};

export default DarkModeChecker;

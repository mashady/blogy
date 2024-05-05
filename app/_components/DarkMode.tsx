import React, { useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const DarkMode = () => {
  const [dark, setDark] = React.useState(false);
  // todo create the checker method
  let lalal = localStorage.getItem("dark");
  console.log(lalal);
  useEffect(() => {
    if (lalal === "darkMode") {
      setDark(true);
      console.log("lalal dark mode");
      document.body.classList.add("dark");
    } else {
      setDark(false);
      console.log("lalal light mode");
    }
  }, []);

  const darkModeHandler = () => {
    // if (lalal === null){
    setDark(!dark);
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", dark ? "lightMode" : "darkMode");
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

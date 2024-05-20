"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import SectionsBar from "./SectionsBar";
import { IoMoon, IoSunny } from "react-icons/io5";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-4">
        <nav className="h-[90px] flex items-center justify-between">
          <div className="font-semibold text-xl text-main dark:text-white">
            <Link href="/">blogy</Link>
          </div>
          <div className="text-[14px] md:text-[16px] font-semibold flex">
            <DarkMode />

            <button>
              <Link href="/login">Sign In</Link>
            </button>
            <button className="bg-sec text-white w-[100px] h-[40px] ml-4 rounded-lg ">
              <Link href="/register">Sign Up</Link>
            </button>
          </div>
        </nav>
      </div>
      <SectionsBar />
    </>
  );
};

export default Navbar;

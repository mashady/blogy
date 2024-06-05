"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import SectionsBar from "./SectionsBar";
import { IoMoon, IoSunny } from "react-icons/io5";
import DarkMode from "./DarkMode";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname === "/settings") console.log("settings page");

  return (
    <>
      {pathname === "/settings" || pathname.includes("/settings") ? null : (
        <>
          <div className="max-w-[1280px] mx-auto px-4">
            <nav className="h-[90px] flex items-center justify-between">
              <div className="font-semibold text-xl text-main dark:text-white">
                <Link href="/">blogy</Link>
              </div>
              <div className="text-[14px] md:text-[16px] font-semibold flex">
                <DarkMode />

                <LogoutButton />

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
      )}
    </>
  );
};

export default Navbar;

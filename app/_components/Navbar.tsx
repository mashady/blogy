import Link from "next/link";
import React from "react";
import SectionsBar from "./SectionsBar";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-4">
        <nav className="h-[90px] flex items-center justify-between">
          <div className="font-semibold text-xl text-main dark:text-white">
            <Link href="/">blogy</Link>
          </div>
          <div className="text-[14px] md:text-[16px] font-semibold">
            <button>
              <Link href="/sign-in">Sign In</Link>
            </button>
            <button className="bg-sec text-white w-[100px] h-[40px] ml-4 rounded-lg ">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </div>
        </nav>
      </div>
      <SectionsBar />
    </>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
let fakeList = [
  "profile",
  "Privacy",
  "Team",
  "Integration",
  "Appearance",
  "APIs",
];
const SettingsNav = () => {
  let pathname = usePathname();
  return (
    <nav className="bg-sec w-[250px]">
      <div className="fixed top-0 left-0 bg-sec h-full w-[250px] px-6">
        <div className="">
          <div className="flex items-center my-4">
            <Link href="/">
              <IoArrowBackOutline className="text-2xl mr-2 cursor-pointer text-white" />
            </Link>

            <h1 className="text-2xl mb-[4px] text-white">Settings</h1>
          </div>
          <div>
            <ul>
              {fakeList.map((item, i) => {
                return (
                  <div key={i}>
                    <li
                      className={`text-white text-lg mb-2 hover:bg-[#577EAD] transition-all p-2 rounded cursor-pointer ${
                        pathname === "/settings/" + item ? "bg-[#577EAD]" : ""
                      }`}
                    >
                      <Link href={item}>{item}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SettingsNav;

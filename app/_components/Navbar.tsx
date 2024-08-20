"use client";

import Link from "next/link";
import SectionsBar from "./SectionsBar";
import DarkMode from "./DarkMode";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { useState, useEffect } from "react";
import { UserButton } from "./UserButton";
import { useSession } from "next-auth/react";
import { useCurrentUser } from "./hooks/useCurrentUser";

const Navbar = ({ xuser }: any) => {
  const userxxx = useCurrentUser();
  console.log(userxxx);
  const session = useSession();
  console.log(session.data?.user);
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState<any>(userxxx);
  useEffect(() => {
    if (xuser) {
      setCurrentUser(xuser);
      console.log("user is");
      console.log(userxxx);
      console.log("current user is ");
      console.log(currentUser);
    }
  }, []);
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
                {currentUser ? (
                  <>
                    <UserButton user={currentUser} />
                  </>
                ) : (
                  <>
                    <button>
                      <Link href="/login">Sign In</Link>
                    </button>
                    <button className="bg-sec text-white w-[100px] h-[40px] ml-4 rounded-lg ">
                      <Link href="/register">Sign Up</Link>
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
          {pathname.includes("profile") ? null : <SectionsBar />}
        </>
      )}
    </>
  );
};

export default Navbar;

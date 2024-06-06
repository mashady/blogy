"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa"; // user icon

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/logout";

export function UserButton() {
  const handleLogOut = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="sec">
          <FaUserCircle className="text-xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ul className="p-2 space-y-2 capitalize">
          <li>
            <Link href="profile">profile</Link>
          </li>
          <DropdownMenuSeparator />
          <li>
            <Link href="settings/profile">settings</Link>
          </li>
          <DropdownMenuSeparator />

          <li className="flex items-center " onClick={handleLogOut}>
            <IoLogOutOutline className="text-lg mr-2 cursor-pointer" />
            <span className="cursor-pointer">logout</span>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

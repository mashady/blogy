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
import { useCurrentUser } from "./hooks/useCurrentUser";

export function UserButton() {
  const user = useCurrentUser();
  const handleLogOut = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="sec" className="text-red-300">
          <FaUserCircle className="text-xl text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ul className="p-2 space-y-2 capitalize">
          <li>
            <Link href={`/profile/${user?.id}`}>profile</Link>
          </li>
          <DropdownMenuSeparator />
          <li>
            <Link href="/settings/profile">settings</Link>
          </li>
          <DropdownMenuSeparator />
          <li>
            <Link href="/new-post">New Post</Link>
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

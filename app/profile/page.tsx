import React from "react";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="relative">
        <div className="w-full h-[200px] bg-sec rounded"></div>
        <Avatar className="w-[150px] h-[150px] absolute bottom-[-65px] ml-10 border-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="ml-[200px] mt-2 flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">Muhammed Mashady</h1>
          <span className="text-[0.9rem]">Giza, Egypt</span>
        </div>
        <div className="flex justify-center items-center">
          <Button variant="sec" className="mr-2">
            Add Post
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className=" " variant="lightOpcaity">
                <HiDotsHorizontal className="text-xl" />
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
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;

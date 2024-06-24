import React from "react";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";

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
import FeaturePost from "../_components/FeaturePost";
import { currentUser } from "@/lib/auth";
import ProfilePicture from "../_components/ProfilePicture";
const page = async () => {
  const user = await currentUser();

  return (
    <MaxWidthWrapper>
      <div className="relative">
        <div className="w-full h-[200px] bg-sec rounded"></div>
        <Avatar className="w-[150px] h-[150px] absolute bottom-[-65px] ml-10 border-4">
          <AvatarFallback>
            {/**
             * <AvatarImage src="" />
            <RxAvatar className="text-4xl text-sec" />
             * 
             * 
             */}
            <ProfilePicture
              url="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/siri-dumpster-fire-1.jpg?w=1500&quality=82&strip=all&ssl=1"
              imageStyle="object-cover h-full"
              placeholderStyle="text-4xl text-sec w-full h-full flex justify-center items-center"
            />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="ml-[200px] mt-2 flex justify-between">
        <div>
          <h1 className="text-lg font-semibold uppercase">@{user?.name}</h1>
          <span className="text-[0.9rem]">{user?.email}</span>
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
                  <Link href="settings/profile">setting</Link>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mb-4">
        <FeaturePost postsTitle="posts" />
      </div>
    </MaxWidthWrapper>
  );
};

export default page;

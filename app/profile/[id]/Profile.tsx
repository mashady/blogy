"use client";
import React, { useEffect } from "react";
import MaxWidthWrapper from "@/app/_components/MaxWidthWrapper";
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
import ProfilePicture from "@/app/_components/ProfilePicture";
import PorfilePosts from "@/app/_components/PorfilePosts";
import { useSearchParams } from "next/navigation";

const Profile = ({ user }) => {
  //const user = useCurrentUser();
  const searchParams = useSearchParams();
  //searchParams.size !== 0
  return (
    <MaxWidthWrapper>
      <div className="relative">
        <div className="w-full h-[200px] bg-sec rounded"></div>
        <Avatar className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] absolute bottom-[-30px] md:bottom-[-65px] ml-10 border-4">
          <AvatarFallback>
            {/**
             * <AvatarImage src="" />
            <RxAvatar className="text-4xl text-sec" />
             * 
             * 
             */}
            <ProfilePicture
              url={user?.image}
              imageStyle="object-cover h-full"
              placeholderStyle="text-4xl text-sec w-full h-full flex justify-center items-center"
            />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-10 md:ml-[200px] md:mt-2 flex justify-between">
        <div>
          <h1 className="text md:text-lg font-semibold uppercase">
            @{user?.name}
          </h1>
          <span className="text md:text-[0.9rem]">{user?.email}</span>
        </div>
        <div className="flex justify-center items-center">
          <Button variant="sec" className="mr-2">
            Add Post
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <PorfilePosts id={user?.id} />
      </div>
    </MaxWidthWrapper>
  );
};

export default Profile;

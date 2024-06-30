"use client";
import { useState, useEffect } from "react";
import { isValidImage } from "@/lib/isValidImage";
import { FcRemoveImage } from "react-icons/fc";
import Image from "next/image";
import { usePathname } from "next/navigation";
const PostImage = ({ cover }: any) => {
  const [isValid, setIsValid] = useState<any>(null);
  const pathname = usePathname();
  const url =
    "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/siri-dumpster-fire-1.jpg?w=1500&quality=82&strip=all&ssl=1";

  useEffect(() => {
    isValidImage(cover).then((isValid) => {
      if (isValid) {
        console.log("The link is a valid image link.");
      } else {
        console.log("The link is not a valid image link.");
      }
    });

    if (cover) {
      isValidImage(cover).then(setIsValid);
    }
  }, [cover]);
  // Example usage:

  // handle if the cover url not found or not loaded so here we will use a placeholder
  // old image <img className="rounded my-4 h-[400px]" src={url} />
  return (
    <div className="pr-6">
      {isValid === true && (
        <img
          className="rounded my-4 w-full h-[400px]"
          src={pathname === "/po" ? url : cover}
        />
      )}
      {(isValid === false || isValid === null) && (
        <div className="bg-sec rounded my-4 h-[400px] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <FcRemoveImage className="text-4xl text-sec" />
            <p>The link is not a valid image link.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostImage;

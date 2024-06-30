"use client";
import { useState, useEffect } from "react";
import { isValidImage } from "@/lib/isValidImage";
import { FcRemoveImage } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import { usePathname } from "next/navigation";

const ProfilePicture = ({ url, imageStyle, placeholderStyle }: any) => {
  const [isValid, setIsValid] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    isValidImage(url).then((isValid) => {
      if (isValid) {
        console.log("The link is a valid image link.");
      } else {
        console.log("The link is not a valid image link.");
      }
    });

    if (url) {
      isValidImage(url).then(setIsValid);
    }
    console.log(pathname);
  }, [url]);

  return (
    <div className="w-full h-full">
      {isValid === true && <img className={imageStyle} src={url} />}
      {isValid === false ||
        (isValid === null && (
          <div className={placeholderStyle}>
            <div className="flex flex-col items-center">
              <RxAvatar
                className={`${
                  pathname.includes("/posts")
                    ? "text-2xl text-sec"
                    : "text-4xl text-sec"
                }`}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProfilePicture;

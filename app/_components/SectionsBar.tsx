import Link from "next/link";
import React from "react";

const SECTION_LINKS: any = [
  {
    name: "Iphone",
    link: "iphone",
  },
  {
    name: "Vision",
    link: "vision",
  },
  {
    name: "Mac",
    link: "mac",
  },
  {
    name: "Watch",
    link: "watch",
  },
  {
    name: "Ipad",
    link: "ipad",
  },
  {
    name: "TV",
    link: "tv",
  },
  {
    name: "Apple store",
    link: "applestore",
  },
  {
    name: "Apple One",
    link: "appleone",
  },
];

const SectionsBar = () => {
  return (
    <div className="bg-sec py-2 text-white overflow-x-scroll scrollbar pt-[15px]">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="">
          <div className=" flex justify-between items-center">
            <div className="flex py-2">
              {SECTION_LINKS.map((section: any) => (
                <div key={section.name} className="pr-[16px]">
                  <Link
                    href={`/posts/list?section=${section.link}`}
                    className="text truncate text-[14px] md:text-[16px] hover:bg-opacity-50"
                  >
                    {section.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionsBar;

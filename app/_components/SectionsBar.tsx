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
    link: "apple-store",
  },
  {
    name: "Apple One",
    link: "apple-one",
  },
];

const SectionsBar = () => {
  return (
    <div className="bg-sec py-2 text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="">
          <div className="py-2 flex">
            {SECTION_LINKS.map((section: any) => (
              <div key={section.name} className="pr-[16px]">
                <Link
                  href={section.link}
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
  );
};

export default SectionsBar;

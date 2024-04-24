import Link from "next/link";
import React from "react";

const PostTags = () => {
  let POST_TAGES: any = [
    {
      name: "SIRI",
      link: "siri",
    },
    {
      name: "IOS 18",
      link: "ios-18",
    },
    {
      name: "WWDC 2024",
      link: "wwdc-2024",
    },
    {
      name: "AI",
      link: "ai",
    },
  ];
  return (
    <div>
      <div>
        <ul className="py-4">
          {POST_TAGES.map((tag: any) => (
            <li className="inline mr-4 text font-semibold" key={tag.name}>
              <Link href={tag.link}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostTags;

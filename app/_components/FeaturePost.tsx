import Link from "next/link";
import React from "react";
// will be replaced with props
const fakePosts = [
  {
    title:
      "Siri in iOS 18: An AI revolution, or a sometimes useful dumpster fire?",
    cover:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/find-my-repair.jpg",
    author: "Zac Hall",
    date: "Apr 1 2024",
  },
  {
    title:
      "Siri in iOS 18: An AI revolution, or a sometimes useful dumpster fire?",
    cover:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/find-my-repair.jpg",
    author: "Zac Hall",
    date: "Apr 1 2024",
  },
  {
    title:
      "Siri in iOS 18: An AI revolution, or a sometimes useful dumpster fire?",
    cover:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/find-my-repair.jpg",
    author: "Zac Hall",
    date: "Apr 1 2024",
  },
];

const FeaturePost = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-4 capitalize">features</h1>
      {fakePosts.map((post, i) => {
        return (
          <div key={i} className={i === 1 ? "border-y-[1px]" : ""}>
            <div className="flex mt-4 pb-2">
              <figure className="mr-4">
                <img
                  src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/find-my-repair.jpg"
                  alt="image of the post"
                  className="w-[350px] cursor-pointer"
                />
              </figure>
              <div>
                <h3 className="font-semibold text-[16px] cursor-pointer hover:underline">
                  Siri in iOS 18: An AI revolution, or a sometimes useful
                  dumpster fire?
                </h3>
                <div className="text-[0.9rem]">
                  <span className="font-semibold text-[#1f4d78]  hover:text-[#1f4d78] hover:underline transition-all">
                    <Link href="">Zac Hall</Link>
                  </span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Apr 1 2024</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturePost;

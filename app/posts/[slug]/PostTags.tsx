import Link from "next/link";
import React from "react";

const PostTags = ({ tag }: any) => {
  // here we will add the post section only and the tags feature will be added in a new version

  return (
    <div>
      <div>
        <ul className="py-4">
          <li className="inline mr-4 text font-semibold hover:underline uppercase">
            <Link href={`/${tag}`}>{tag}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostTags;

import {
  PostDetails,
  PostImage,
  PostSubject,
  PostTags,
  PostTitle,
} from "../posts/[slug]";

interface LatestPostProps {
  IsHome?: boolean;
}

const LatestPost = ({ IsHome }: LatestPostProps) => {
  return (
    <div className="">
      <PostTags />
      <PostTitle />
      <div className={`${IsHome && "grid grid-cols-1 lg:grid-cols-3"} `}>
        <div className="col-span-2">
          <PostDetails />
          <PostImage />
          <PostSubject readMore />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;

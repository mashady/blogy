import {
  PostDetails,
  PostImage,
  PostSubject,
  PostTags,
  PostTitle,
} from "../posts/[slug]";

interface LatestPostProps {
  IsHome?: boolean;
  post?: any;
}

const LatestPost = ({ IsHome, post }: LatestPostProps) => {
  return (
    <div className="">
      <PostTags tag={post?.section} />
      <PostTitle title={post?.title} />
      <div className={`${IsHome && "grid grid-cols-1 lg:grid-cols-3"} `}>
        <div className="col-span-2">
          <PostDetails
            userId={post?.assignedToUser?.id}
            userName={post?.assignedToUser?.name}
            userImage={post?.assignedToUser?.image}
            postDate={post?.createdAt}
          />
          <PostImage cover={post?.image} />
          <PostSubject readMore subject={post?.description} slug={post?.slug} />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;

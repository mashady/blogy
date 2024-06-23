import Link from "next/link";
import { FaPlus } from "react-icons/fa";
interface PostSubjectProps {
  readMore?: boolean;
  subject: any;
}

const PostSubject = ({ readMore, subject }: PostSubjectProps) => {
  return (
    <div className="mb-6">
      <article
        className={`prose lg:prose-xl text-[18px] ${
          readMore && "line-clamp-5"
        }`}
      >
        {subject}
      </article>
      {readMore && (
        <div className=" flex justify-center items-center">
          <Link
            href="/"
            className="flex flex-col justify-center items-center my-4"
          >
            <FaPlus className="text-2xl cursor-pointer mb-2" />
            <strong className="uppercase cursor-pointer hover:underline text-[0.9rem]">
              read more
            </strong>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostSubject;

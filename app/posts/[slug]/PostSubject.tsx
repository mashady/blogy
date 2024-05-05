import Link from "next/link";
import { FaPlus } from "react-icons/fa";
interface PostSubjectProps {
  readMore?: boolean;
}

const PostSubject = ({ readMore }: PostSubjectProps) => {
  return (
    <div className="mb-6">
      <article
        className={`prose lg:prose-xl text-[18px] ${
          readMore && "line-clamp-5"
        }`}
      >
        Siri launched with the iPhone 4S in October 2011, replacing Voice
        Control with a more capable virtual assistant. A dozen years later, Siri
        has evolved into the primary way we interact with our Apple products.
        Wait, no, I’m being told Siri sounds more natural but the core
        technology is roughly the same. Meanwhile, artificial intelligence now
        means generative AI and chat bots are based on large language models.
        Siri and the rest of iOS 18 will join the AI revolution in June, ending
        our long national nightmare of Siri being somewhere between hot garbage
        and kinda useful sometimes. At least that’s what’s being reported, but
        we don’t really have a great sense of what to expect yet. Tempered AI
        expectations Standby for a bold prediction: Apple AI will be better than
        Siri as we now know it, but iOS 18 won’t live up to the AI hype. What
        does that mean? The bar for a better Siri is low; the bar for breaking
        new ground on AI is high and constantly rising. I don’t recommend anyone
        take a shot each time AI is mentioned at Apple’s upcoming Worldwide
        Developer Conference. The human body can only handle so much. But I’m
        skeptical that Siri will change such that its reputation for being
        frustrating is replaced. Please prove me wrong, Apple. Will I turn to
        Siri instead of the ChatGPT app to quickly find facts for my curious
        kids? Will Siri be worth paying for, even if it doesn’t require a
        subscription? Will I actually use Siri on my Mac? My hopes are so, so
        high. My expectations are conservative and measured.
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

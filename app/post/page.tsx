import Link from "next/link";
import React from "react";
import { LiaComments } from "react-icons/lia";
import { IoSend } from "react-icons/io5";

const Post = () => {
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
  let POST_IMAGE_PLACEHOLDER: string =
    "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/siri-dumpster-fire-1.jpg?w=1500&quality=82&strip=all&ssl=1";
  return (
    <div className="container mx-auto">
      <div className="mt-6">
        <div>
          <ul className="py-4">
            {POST_TAGES.map((tag: any) => (
              <li className="inline mr-4 text font-semibold" key={tag.name}>
                <Link href={tag.link}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-2xl md:text-4xl cursor-pointer max-w-[70%] md:max-w-[700px] mb-6">
            Siri in iOS 18: An AI revolution, or a sometimes useful dumpster
            fire?
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/** post body */}
          <div className="col-span-2">
            <div className="flex items-center">
              <div className="inline-flex h-[45px]  mr-4 w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <img
                  className="h-full w-full rounded-[inherit] object-cover"
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="00"
                />
              </div>
              <div className="text-[0.9rem]">
                <span className="font-semibold text-lite-sec hover:text-[#1f4d78] hover:underline transition-all">
                  <Link href="">Zac Hall</Link>
                </span>
                <span className="mx-2">|</span>
                <span>Apr 1 2024 - 7:44 am PT</span>
              </div>
              <div className="flex items-center ml-4 font-simi-bold">
                <span>
                  <LiaComments className="text-xl  mr-2" />
                </span>
                <span className="hover:underline text-[#96caff] hover:text-[#1f4d78] transition-all">
                  <Link href="">47 comments</Link>
                </span>
              </div>
            </div>
            {/** POST IMAGE */}
            <div className="pr-6">
              <img
                className="rounded my-4"
                src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/siri-dumpster-fire-1.jpg?w=1500&quality=82&strip=all&ssl=1"
              />
            </div>
            {/** POST SUBJECT */}
            <div className="mb-6">
              <article className="prose lg:prose-xl text-[18px]">
                Siri launched with the iPhone 4S in October 2011, replacing
                Voice Control with a more capable virtual assistant. A dozen
                years later, Siri has evolved into the primary way we interact
                with our Apple products. Wait, no, I’m being told Siri sounds
                more natural but the core technology is roughly the same.
                Meanwhile, artificial intelligence now means generative AI and
                chat bots are based on large language models. Siri and the rest
                of iOS 18 will join the AI revolution in June, ending our long
                national nightmare of Siri being somewhere between hot garbage
                and kinda useful sometimes. At least that’s what’s being
                reported, but we don’t really have a great sense of what to
                expect yet. Tempered AI expectations Standby for a bold
                prediction: Apple AI will be better than Siri as we now know it,
                but iOS 18 won’t live up to the AI hype. What does that mean?
                The bar for a better Siri is low; the bar for breaking new
                ground on AI is high and constantly rising. I don’t recommend
                anyone take a shot each time AI is mentioned at Apple’s upcoming
                Worldwide Developer Conference. The human body can only handle
                so much. But I’m skeptical that Siri will change such that its
                reputation for being frustrating is replaced. Please prove me
                wrong, Apple. Will I turn to Siri instead of the ChatGPT app to
                quickly find facts for my curious kids? Will Siri be worth
                paying for, even if it doesn’t require a subscription? Will I
                actually use Siri on my Mac? My hopes are so, so high. My
                expectations are conservative and measured.
              </article>
            </div>
            {/** COMMENTS */}
            <div className="">
              <h2 className="text-3xl font-bold">COMMENTS</h2>

              <form className="my-6">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  leave your comment
                </label>
                <div className="relative">
                  <input
                    type="comment"
                    id="comment"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                    placeholder="leave your comment..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <IoSend />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/** features */}
          <div className="">feature</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

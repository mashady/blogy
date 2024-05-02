import Navbar from "./_components/Navbar";
import SearchModal from "./_components/SearchModal";
import DarkModeToggler from "./_components/dark mode/DarkModeToggler";
import SectionsBar from "./_components/SectionsBar";
import Link from "next/link";
import { PostDetails, PostImage, PostTags, PostTitle } from "./posts/[slug]";
export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="text-center">
            <PostImage />
            <PostTags />
            <h1 className="font-semibold text-2xl md:text-4xl cursor-pointer  mb-6">
              Siri in iOS 18: An AI revolution, or a sometimes useful dumpster
              fire?
            </h1>
            <div className="flex items-center justify-center">
              <div className="inline-flex h-[25px]  mr-4 w-[25px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <img
                  className="h-full w-full rounded-[inherit] object-cover"
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="00"
                />
              </div>
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
        <div>
          <div>
            <h1 className="text-3xl font-bold mt-4 capitalize">features</h1>
            <div className="flex mt-4">
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
        </div>
      </div>
    </main>
  );
}

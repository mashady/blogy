import Link from "next/link";
import MaxWidthWrapper from "./_components/MaxWidthWrapper";
import { RiWifiOffLine } from "react-icons/ri";
import { TbError404 } from "react-icons/tb";
export default async function NotFound() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-14rem-2px)]">
          <div className="bg-[#ffc107] bg-opacity-50 dark:bg-opacity-15 p-12 w-[150px] h-[150px] rounded flex justify-center items-center">
            <TbError404 className="text-5xl text-[#ffc107]" />
          </div>
          <h1 className="text-3xl font-semibold mt-4">Page not found</h1>

          <p className="text-center w-[270px]  mt-2">
            Could not find requested resource
          </p>
          <button className="bg-sec text-white w-[150px] h-[40px] mt-6 rounded-full">
            <Link href="/">Explore posts</Link>
          </button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

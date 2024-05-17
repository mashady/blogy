import React from "react";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
let image =
  "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const page = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="my-16">
          <div className="grid md:grid-cols-2 gap-5">
            <form className="h-full px-6 ">
              <span>Add your touch to the community</span>
              <h1 className="text-3xl font-semibold">New Section</h1>
              <input
                type="text"
                className="bg-inherit text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[#4242423b] dark:border-[#fff] border-[1px] outline-none rounded p-2 w-full lg:w-1/2 mt-10"
                placeholder="Your section name"
                autoFocus
              />
              <button className="flex items-center justify-between gap-3 bg-[#1f4d78] text-white rounded  h-[50px] mt-2 px-6">
                Save
              </button>
            </form>

            {/** the cover */}
            <div className="hidden md:flex">
              <img
                className=" object-cover rounded-lg"
                src={image}
                alt="cover 3aady"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;

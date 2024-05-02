import React from "react";
import { IoSend } from "react-icons/io5";

const PostComments = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold">COMMENTS</h2>

      <form className="my-6">
        <label className="mb-2 text-sm font-medium sr-only dark:text-white">
          leave your comment
        </label>
        <div className="relative">
          <input
            type="comment"
            id="comment"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border placeholder-black focus:placeholder-gray-400 border-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
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
  );
};

export default PostComments;

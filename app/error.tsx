"use client"; // Error components must be Client Components

import { useEffect } from "react";
import MaxWidthWrapper from "./_components/MaxWidthWrapper";
import { MdError } from "react-icons/md";
import Link from "next/link";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center min-h-[calc(100vh-14rem-2px)]">
            <div className="bg-[#dc3545] bg-opacity-15 p-12 w-[150px] h-[150px] rounded flex justify-center items-center">
              <MdError className="text-5xl text-[#dc3545]" />
            </div>
            <h1 className="text-3xl font-semibold mt-4">Page not found</h1>

            <p className="text-center w-[270px]  mt-2">
              Could not find requested resource
            </p>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className="bg-sec text-white w-[150px] h-[40px] mt-6 rounded-full"
            >
              Try again
            </button>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}

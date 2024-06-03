"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { NewVerification } from "@/actions/newVerification";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import Link from "next/link";
// review this code soon
const NewVerificationForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const hasVerified = useRef(false); // Initialize a ref to track verification state

  useEffect(() => {
    if (!token) {
      setError("Missing token");
      return;
    }

    if (!hasVerified.current) {
      // Check the ref before proceeding
      hasVerified.current = true; // Set the ref to true to prevent future runs

      NewVerification(token)
        .then((data) => {
          if (data.success) {
            console.log("done ✔");

            setSuccess(data.success);
            setError(null);
          } else if (data.error) {
            console.log("error 👎");

            setError(data.error);
            setSuccess(null);
          }
        })
        .catch(() => {
          setError("Something went wrong");
          setSuccess(null);
        });
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-14rem-2px)]">
      <h1 className="text-3xl font-semibold mb-2">
        Confirming your verification.
      </h1>
      {!success && !error && <BeatLoader color="#fff" />}
      {success && <SuccessMessage message={success} />}
      {error && <ErrorMessage message={error} />}
      <Link
        className="text-lg text-sec no-underline hover:underline mt-2"
        href="/login"
      >
        Back to login page
      </Link>
    </div>
  );
};

export default NewVerificationForm;

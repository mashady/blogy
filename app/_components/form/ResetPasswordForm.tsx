"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import SuccessMessage from "@/app/_components/form/SuccessMessage";
import ErrorMessage from "@/app/_components/form/ErrorMessage";
import { ResetPassword } from "@/scemas";
import { resetPassword } from "@/actions/resetPassword";
import Link from "next/link";
import { z } from "zod";

type ResetPasswordFormData = z.infer<typeof ResetPassword>;

type ResetPasswordResponse = {
  error?: string;
  success?: string;
};

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPassword),
  });

  const handleFormSubmit: SubmitHandler<ResetPasswordFormData> = (values) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      resetPassword(values)
        .then((data: ResetPasswordResponse) => {
          if (data.error) {
            setError(data.error);
          } else if (data.success) {
            setSuccess(data.success);
            reset(); // reset the form upon success
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">Hey again👋</h1>
          <p>Please enter your Email.</p>
        </div>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="text-center w-[300px]"
        >
          <div className="flex flex-col mb-2">
            <label className="text-lg  text-left">Email</label>
            <input
              type="email"
              placeholder="enter your email address"
              className={`bg-inherit ${
                errors.email
                  ? "border-[#dc3545] dark:border-[#dc3545] "
                  : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
              } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
              {...register("email")}
            />
            {errors.email && (
              <ErrorMessage message={errors.email.message as string} />
            )}
          </div>
          {/** server side error */}

          {error && <ErrorMessage message={error} />}
          {success && <SuccessMessage message={success} />}

          <button
            type="submit"
            className="flex items-center justify-center mt-2  gap-3 bg-[#1f4d78] text-white rounded w-full h-[50px] px-4"
          >
            {isPending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

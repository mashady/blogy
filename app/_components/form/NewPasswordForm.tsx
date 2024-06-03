"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import SuccessMessage from "@/app/_components/form/SuccessMessage";
import ErrorMessage from "@/app/_components/form/ErrorMessage";
import { NewPassword } from "@/scemas";
import { newPassword } from "@/actions/newPassword";
import Link from "next/link";
import { z } from "zod";

type NewPasswordFormData = z.infer<typeof NewPassword>;

type NewPasswordResponse = {
  error?: string;
  success?: string;
};

const NewPasswordForm = () => {
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
  } = useForm<NewPasswordFormData>({
    resolver: zodResolver(NewPassword),
  });

  const handleFormSubmit: SubmitHandler<NewPasswordFormData> = (values) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values, token).then((data: NewPasswordResponse) => {
        if (data.error) {
          setError(data.error);
        } else if (data.success) {
          setSuccess(data.success);
          reset(); // reset the form upon success
        }
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">Almost done👏</h1>
          <p>Please enter your New Password.</p>
        </div>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="text-center w-[300px]"
        >
          <div className="flex flex-col mb-2">
            <label className="text-lg  text-left">Password</label>
            <input
              type="password"
              placeholder="enter your new password"
              className={`bg-inherit ${
                errors.password
                  ? "border-[#dc3545] dark:border-[#dc3545] "
                  : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
              } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
              {...register("password")}
            />
            {errors.password && (
              <ErrorMessage message={errors.password.message as string} />
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

export default NewPasswordForm;

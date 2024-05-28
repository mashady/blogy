"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useTransition } from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { LoginSchema } from "@/scemas";
type LoginFormData = z.infer<typeof LoginSchema>;

let loginPagePoster =
  "https://cdn.dribbble.com/users/5565147/screenshots/16177614/media/0c5be841ee18d0d5c0320deb5d52c408.png?resize=1600x1200&vertical=center";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  // url error
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already use with different provider"
      : "";

  // what is the callback URL ??
  const callbackUrl = searchParams.get("callbackUrl");

  // prepare the login form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  // create the submit method
  const handleFormSubmit: SubmitHandler<LoginFormData> = async (values) => {
    console.log(values);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
      <div className="flex flex-col justify-center items-center ">
        <div>
          <div className="mb-8  ">
            <h1 className="text-4xl font-semibold">Welcome back👋</h1>
            <p>Please enter your details.</p>
          </div>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="text-centers w-[300px]"
          >
            <div className="flex flex-col mb-2">
              <label className="text-lg">Email</label>
              <input
                type="text"
                placeholder="enter your email address"
                className={`bg-inherit ] ${
                  errors.email
                    ? "border-[#dc3545] dark:border-[#dc3545]"
                    : "border-[#4242423b] focus:border-[#1f4d78"
                } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white  dark:border-[#fff] border-[1px] outline-none rounded p-2 w-full mt-2`}
                {...register("email")}
              />
              {errors.email && (
                <ErrorMessage message={errors.email?.message as string} />
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-lg">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                className={`bg-inherit ] ${
                  errors.password
                    ? "border-[#dc3545] dark:border-[#dc3545]"
                    : "border-[#4242423b] focus:border-[#1f4d78"
                } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white  dark:border-[#fff] border-[1px] outline-none rounded p-2 w-full mt-2`}
                {...register("password")}
              />
              {errors.password && (
                <ErrorMessage message={errors.password?.message as string} />
              )}
            </div>
            <div className="mb-4">
              <span className="hover:underline">
                <Link href="/forget-password">Forget password</Link>
              </span>
            </div>
            {/** server side error */}
            {error && <ErrorMessage message={error || urlError} />}{" "}
            {success && <SuccessMessage message={success} />}{" "}
            <button className="flex items-center justify-center gap-3 bg-[#1f4d78] text-white rounded w-full h-[50px] px-4">
              Sign In
            </button>
            <div className="text-center mt-2">
              <span className="hover:underline">
                <Link href="/register">Donot have an account? Sign up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img
          className="rounded object-cover h-[480px]"
          src={loginPagePoster}
          alt="just image"
        />
      </div>
    </div>
  );
};

export default LoginForm;

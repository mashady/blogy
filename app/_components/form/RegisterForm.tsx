"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useTransition } from "react";
import { RegisterSchema } from "@/scemas"; // prapare code schemas
import Link from "next/link";
import ErrorMessage from "./ErrorMessage";
import { z } from "zod";
import { register as registerAction } from "@/actions/register";
import SuccessMessage from "./SuccessMessage";

type RegisterFormData = z.infer<typeof RegisterSchema>;

let registerPagePoster =
  "https://cdn.dribbble.com/users/9072136/screenshots/16399743/media/d74799668d326e68a74be78daf1092e6.png?resize=1000x750&vertical=center";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  // prepare the register form methods
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });
  // the handle submit method
  const handleFormSubmit: SubmitHandler<RegisterFormData> = async (
    values: any
  ) => {
    // handle the form submission

    setError("");
    setSuccess("");

    startTransition(() => {
      // our actions will be executed
      registerAction(values).then((data: any) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });

    console.log(values);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
      <div className="hidden lg:flex">
        <img
          className="rounded object-cover h-[480px]"
          src={registerPagePoster}
          alt="just image"
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div>
          <div className="mb-8  ">
            <h1 className="text-4xl font-semibold">Welcome✨</h1>
            <p>Please enter your details.</p>
          </div>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="text-centers w-[300px]"
          >
            <div className="flex flex-col mb-2">
              <label className="text-lg">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="enter your full name"
                className={`bg-inherit ${
                  errors.name
                    ? "border-[#dc3545] dark:border-[#dc3545] "
                    : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
                } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
              />
              {errors.name && (
                <ErrorMessage message={errors.name?.message as string} />
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-lg">Email</label>
              <input
                {...register("email")}
                type="text"
                placeholder="enter your email address"
                className={`bg-inherit ${
                  errors.email
                    ? "border-[#dc3545] dark:border-[#dc3545] "
                    : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
                } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
              />
              {errors.email && (
                <ErrorMessage message={errors.email?.message as string} />
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-lg">Password</label>
              <input
                {...register("password")}
                type="password"
                placeholder="enter your password"
                className={`bg-inherit ${
                  errors.password
                    ? "border-[#dc3545] dark:border-[#dc3545] "
                    : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
                } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
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
            {error && <ErrorMessage message={error} />}{" "}
            {success && <SuccessMessage message={success} />}{" "}
            <button className="flex items-center justify-center gap-3 bg-[#1f4d78] text-white rounded w-full h-[50px] mt-2 px-4">
              Sign Up
            </button>
            <div className="text-center mt-2">
              <span className="hover:underline">
                <Link href="/login">Already have an account? Login up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

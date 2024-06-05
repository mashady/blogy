"use client";
import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import SettingsPageTitle from "@/app/_components/SettingsPageTitle";
import { settings } from "@/actions/settings";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SettingsSchema } from "@/scemas";
import { z } from "zod";
import ErrorMessage from "./ErrorMessage";
import LogoutButton from "../LogoutButton";
import SuccessMessage from "./SuccessMessage";
import ChooseRole from "./ChooseRole";
import TwoFactor from "../Switch";

type SettingsProfileFormData = z.infer<typeof SettingsSchema>;

const SettingsProfileForm = () => {
  const { data: session } = useSession();
  const { update } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SettingsProfileFormData>({
    resolver: zodResolver(SettingsSchema),
  });
  const handleSelectRole = (value: any) => {
    setValue("role", value, { shouldValidate: true });
  };
  const handleSelectTwoFactor = (value: any) => {
    setValue("isTwoFactorEnabled", value, { shouldValidate: true });
  };
  const handleFormSubmit = async (values: SettingsProfileFormData) => {
    try {
      console.log("Form submitted with values:", values);
      await SettingsSchema.parseAsync(values); // Manually validate
      setError("");
      setSuccess("");
      startTransition(() => {
        settings(values)
          .then((data: any) => {
            if (data.error) {
              setError(data.error);
              console.log("error:", data.error);
            } else if (data.success) {
              setSuccess(data.success);
              console.log("success:", data.success);
              update();
              router.refresh();
              reset();
            }
          })
          .catch(() => setError("Something went wrong"));
      });
    } catch (e) {
      console.error("Validation error:", e);
      setError("Validation error: ");
    }
  };

  return (
    <div className="min-h-[100vh] pt-4 pl-4">
      <SettingsPageTitle pageName="profile" />
      <div className="mt-2 py-6 border-b-[1px] border-[#ffffff2e]">
        <h1 className="text-2xl capitalize">profile</h1>
        <span className="text-[0.95rem]">Manage your profile settings</span>
      </div>
      <div>
        <h2 className="text-xl capitalize mt-4">Basics info</h2>
        <span className="text-[0.95rem]">Tell us about your basics info</span>
      </div>
      <LogoutButton />
      <form className="mt-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col mb-2">
          <label className="text-lg text-left">Name</label>
          <input
            type="text"
            placeholder="enter your username"
            className={`bg-inherit ${
              errors.name
                ? "border-[#dc3545] dark:border-[#dc3545] "
                : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
            } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
            {...register("name")}
          />
          {errors.name && (
            <ErrorMessage message={errors.name.message as string} />
          )}
        </div>
        {session?.user?.isOAuth === false && (
          <>
            <div className="flex flex-col mb-2">
              <label className="text-lg text-left">Email</label>
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
          </>
        )}
        <div className="flex flex-col mb-2">
          <label className="text-lg text-left">Password</label>
          <input
            type="password"
            placeholder="enter your password"
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
        <div className="flex flex-col mb-2">
          <label className="text-lg text-left">New Password</label>
          <input
            type="password"
            placeholder="enter your new password"
            className={`bg-inherit ${
              errors.newPassword
                ? "border-[#dc3545] dark:border-[#dc3545] "
                : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
            } text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <ErrorMessage message={errors.newPassword.message as string} />
          )}
        </div>
        {/** role */}
        <div className="flex flex-col mb-2">
          <label className="text-lg text-left">Role</label>
          <ChooseRole handleSelectRole={handleSelectRole} />
          {errors.role && (
            <ErrorMessage message={errors.role.message as string} />
          )}
        </div>
        {/** two factor */}
        <div>
          <TwoFactor handleSelectTwoFactor={handleSelectTwoFactor} />
          {errors.isTwoFactorEnabled && (
            <ErrorMessage
              message={errors.isTwoFactorEnabled.message as string}
            />
          )}
        </div>
        {error && <ErrorMessage message={error} />}
        {success && <SuccessMessage message={success} />}
        <button
          type="submit"
          className="flex items-center justify-center gap-3 bg-[#1f4d78] text-white rounded w-1/4 h-[50px] px-4 mt-6"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SettingsProfileForm;

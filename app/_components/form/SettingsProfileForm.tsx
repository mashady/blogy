"use client";
import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import NextAuth, { DefaultSession } from "next-auth";
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

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: UserRole | undefined | null;
      isTwoFactorEnabled: boolean | undefined;
      isOAuth: boolean;
    } & DefaultSession["user"];
  }
}

type SettingsProfileFormData = z.infer<typeof SettingsSchema>;

const SettingsProfileForm = () => {
  const session = useSession();
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
    defaultValues: {
      name: (session.data?.user?.name as string) || undefined,
      email: (session.data?.user?.email as string) || undefined,
      password: undefined,
      newPassword: undefined,
      role: session.data?.user?.role || undefined,
      isTwoFactorEnabled: session.data?.user?.isTwoFactorEnabled || false,
    },
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
          .catch(() => setError("error "));
      });
    } catch (e) {
      console.error("Validation error:", e);
      setError("Validation error: ");
    }
  };
  /*console.log(
    "Two factor value in session:",
    session.data?.user?.isTwoFactorEnabled
  );*/
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
      {JSON.stringify(session.data?.user)}
      <LogoutButton />
      <form className="mt-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col mb-2">
          <label className="text-lg text-left">Name</label>
          <input
            type="text"
            placeholder="enter your username"
            defaultValue={session.data?.user?.name || undefined}
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
                defaultValue={session.data?.user?.email || undefined}
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
            placeholder="***************"
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
            placeholder="***************"
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
          <ChooseRole
            handleSelectRole={handleSelectRole}
            defaultValue={session.data?.user?.role}
          />
          {errors.role && (
            <ErrorMessage message={errors.role.message as string} />
          )}
        </div>
        {/** two factor */}
        <div>
          <TwoFactor
            handleSelectTwoFactor={handleSelectTwoFactor}
            defaultValue={session.data?.user?.isTwoFactorEnabled || false}
          />
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

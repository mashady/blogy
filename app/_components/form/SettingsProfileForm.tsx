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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

const SettingsProfileForm = ({ user }: any) => {
  const session = useSession();
  const { update } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });
  const handleSelectRole = (value: any) => {
    form.setValue("role", value, { shouldValidate: true });
  };
  const handleSelectTwoFactor = (value: any) => {
    form.setValue("isTwoFactorEnabled", value, { shouldValidate: true });
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
              form.reset();
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
      <div className="mb-4">
        <h2 className="text-xl capitalize mt-4">Basics info</h2>
        <span className="text-[0.95rem]">Tell us about your basics info</span>
      </div>

      <Form {...form}>
        <form
          className="w-[300px] space-y-4 pb-4"
          onSubmit={form.handleSubmit(handleFormSubmit)}
        >
          <FormField
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your beauty name :)"
                      disabled={isPending}
                      className={`bg-inherit ] ${
                        form.formState.errors.name
                          ? "border-[#dc3545] dark:border-[#dc3545]"
                          : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
                      }  `}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          {session.data?.user?.isOAuth === false && (
            <FormField
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your beauty email :)"
                        disabled={isPending}
                        type="email"
                        className={`bg-inherit ] ${
                          form.formState.errors.email
                            ? "border-[#dc3545] dark:border-[#dc3545]"
                            : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
                        } `}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          )}
          <FormField
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="**********"
                      disabled={isPending}
                      type="password"
                      className={`bg-inherit ] ${
                        form.formState.errors.password
                          ? "border-[#dc3545] dark:border-[#dc3545]"
                          : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
                      } `}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />

          <FormField
            name="newPassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="**********"
                      disabled={isPending}
                      className={`bg-inherit ] ${
                        form.formState.errors.newPassword
                          ? "border-[#dc3545] dark:border-[#dc3545]"
                          : "border-[#4242423b] focus:border-[#1f4d78] dark:focus:border-[#1f4d78] dark:border-[#fff] "
                      } `}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />

          <FormField
            name="role"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Role</FormLabel>

                  <Select
                    disabled={isPending}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-sec outline-0">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent className="bg-sec">
                      <SelectItem value="ADMIN">Admin</SelectItem>
                      <SelectItem value="USER">User</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="isTwoFactorEnabled"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border border-white p-3 shadow-sm">
                  <div className="space-y-0.5 ">
                    <FormLabel>Two Factor Authentication</FormLabel>
                    <FormDescription>
                      Enable two factor authentication for your account.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      disabled={isPending}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    ></Switch>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button
            disabled={isPending}
            type="submit"
            className="bg-sec text-white"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SettingsProfileForm;
/***
 * 
 * 
 * <form className="mt-4" onSubmit={handleSubmit(handleFormSubmit)}>
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
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

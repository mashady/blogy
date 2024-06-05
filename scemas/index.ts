import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code: z.optional(z.string()),
});

export const NewPassword = z.object({
  password: z.string().min(1, { message: "password is required" }),
});

export const ResetPassword = z.object({
  email: z.string().email({ message: "email is required" }),
});

export const SettingsSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Minimum 3 characters are required." })
      .optional(),
    isTwoFactorEnabled: z.boolean().optional(),
    role: z.enum(["ADMIN", "USER"]),
    email: z.string().optional(),
    password: z
      .string()
      .min(6, { message: "Minimum 6 characters are required." })
      .optional(),
    newPassword: z
      .string()
      .min(6, { message: "Minimum 6 characters are required." })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && !data.password) return false;
      return true;
    },
    { message: "New password is required!", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (!data.password && data.newPassword) return false;
      return true;
    },
    { message: "Password is required!", path: ["password"] }
  );

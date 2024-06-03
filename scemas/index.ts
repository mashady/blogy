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

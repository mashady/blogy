"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "../lib/token";
import { ResetPassword } from "@/scemas";

export const resetPassword = async (values: any) => {
  const emailValidation = ResetPassword.safeParse(values); //email is valid? go and fetch the user
  if (!emailValidation.success) return { error: "invalid email" };

  const { email } = emailValidation.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) return { error: "Email not found" };

  const passwordResetToken = await generatePasswordResetToken(email); // here we gen a new token
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "Reset Email sent successfully" };
};
/***
    senario
    - we will create a three steps in this action
    *fetch user by its email.
    *generate token.
    *send this token to the user.

*/

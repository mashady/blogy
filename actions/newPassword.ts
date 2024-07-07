"use server"; // what is the diffrent between server actions and APIs ?
// prepare the google authentication and github authentication
import { getPasswordResetTokenByToken } from "@/data/passwordResetToken";
import { getUserByEmail } from "@/data/user";
import prisma from "@/prisma/client";
import { NewPassword } from "@/scemas";
import bcrypt from "bcryptjs";

export const newPassword = async (values: any, token: any) => {
  if (!token) return { error: "Missing token!" }; // here a check statement to check if there is a token or retrun an error

  const validatedPassword = NewPassword.safeParse(values); // this to validate the password
  if (!validatedPassword.success) return { error: "Invalid password" }; // if values are not valid return an error

  const { password } = validatedPassword.data; // extract the password
  const existingToken = await getPasswordResetTokenByToken(token); // to check if this token is already exist

  if (!existingToken) return { error: "invalid token" }; // here a check statement to check if the is exist
  const hasExppired = new Date(existingToken.expires) < new Date(); // check if the token expired or not
  if (hasExppired) return { error: "token has expired" };

  // if we arrive to this step, this means that the token exist and every thing is running okay
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "this email is not found" };
  // to this steps means that user exist and now we will hash the password which the user entered
  const hashedPassword = await bcrypt.hash(password, 10);
  // keep DataBase in touch with your updates 😊
  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });
  // the last step to delete our password reset token
  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });
  return { success: "password updated" };
};

"use server";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/data/user"; // handle fetch user by email.
import { RegisterSchema } from "@/scemas";
import prisma from "@/prisma/client";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerficationToken } from "@/lib/token";
interface RegisterResponse {
  error?: string;
  success?: string;
}
export const register = async (values: any) => {
  const validatedFields = RegisterSchema.safeParse(values); // validate the values comes to func as a props
  if (!validatedFields.success) return { error: "Invalid fields" }; // if not success return an error message
  const { name, email, password } = validatedFields.data; // distuct the values of the fields
  // todo: hash the passowrd value
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email); // check if the user exist or not
  if (existingUser) return { error: "Email already in use" }; // now the user exist dear :)

  /** now the user did not exist in our database so we will create a new one */
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerficationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  // its take a moment to realise that iam mistaken 🤣🤣🤣
  // forget to return the success message.
  return { success: "Email registered successfully" };

  // here we need to find user by its email
  // we will create a func to fetch the user data by its email
};

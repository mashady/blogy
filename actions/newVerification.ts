"use server";
// issue
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationTokenEmail";
import prisma from "@/prisma/client";

export const NewVerification = async (token: any) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) return { error: "Token not found" };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token expired" };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "User not found" };

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { emailVerified: new Date(), email: existingToken.email },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified" };
};

/***
    senario
    

*/

"use server";
import { currentUser } from "@/lib/auth";
import { update } from "@/auth";
import bcrypt from "bcryptjs";
import { getUserByEmail, getUserById } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import prisma from "@/prisma/client";
import { VerificationToken } from "@prisma/client";
import { generateVerficationToken } from "@/lib/token";

export const settings = async (values: any) => {
  const user = await currentUser();
  console.log("current user:");
  console.log(user);
  if (!user) return { error: "Unauthorized" };

  const userDB = await getUserById(user.id!);
  if (!userDB) return { error: "Unauthorized" };

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);
    if (existingUser && existingUser.id !== user.id)
      return { error: "Email already in use!" };

    await prisma.user.update({
      where: { id: userDB.id },
      data: {
        email: values.email,
        emailVerified: null,
      },
    });

    const verificationToken = await generateVerficationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Verification email sent!" };
  }

  if (values.password && values.newPassword && userDB.password) {
    const passwordMatch = await bcrypt.compare(
      values.password,
      userDB.password
    );

    if (!passwordMatch) return { error: "Incorrect password" };

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  const updatedUser = await prisma.user.update({
    where: { id: userDB.id },
    data: { ...values },
  });

  // SERVER UPDATE
  /**
  
   update({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
    },
  });
  
  */

  return { success: "Settings updated!" };
};

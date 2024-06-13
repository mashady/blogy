"use server";
import { isRedirectError } from "next/dist/client/components/redirect";
import { signIn } from "@/auth";
import { getTwoFactorConfirmationById } from "@/data/twoFactorConfirmation";
import { getTwoFactorTokenByEmail } from "@/data/twoFactorToken";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail, sendTwoFactorTokenMail } from "@/lib/mail";
import prisma from "@/prisma/client";
import { generateVerficationToken, generateTwoFactorToken } from "@/lib/token";
import { LoginSchema } from "@/scemas";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values: any, callbackUrl: any) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerficationToken(
      existingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Confirmation email sent!" };
  }

  // two factor authentication
  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
      if (!twoFactorToken) return { error: "Invalid code" };
      if (twoFactorToken.token !== code) return { error: "Invalid token" };
      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) return { error: "Code has expired!" };
      await prisma.twoFactorToken.delete({ where: { id: twoFactorToken.id } });
      const existingConfirmation = await getTwoFactorConfirmationById(
        existingUser.id
      );
      if (existingConfirmation) {
        await prisma.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }
      await prisma.twoFactorConfirmation.create({
        data: { userId: existingUser.id },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenMail(twoFactorToken.email, twoFactorToken.token);
      return { twoFactor: true };
    }
  }

  console.log("Attempting sign-in with callbackUrl:", callbackUrl);

  try {
    const user = await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT, // Set redirect to false for proper handling within this function
    });

    console.log("USER LOGIN", user);

    if (user.error) {
      console.error("Sign-in error:", user.error);
      return { error: user.error };
    }

    return {
      success: "Login successful",
      redirectUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    };
  } catch (error: any) {
    if (isRedirectError(error)) {
      throw error;
    }

    console.error("LOGIN ERROR", error);

    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "Invalid credentials" };
      }
      return { error: "Something went wrong with credentials" };
    }

    throw error;
  }
};

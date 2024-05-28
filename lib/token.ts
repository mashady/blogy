import crypto from "crypto";
import { v4 as uuid } from "uuid";
import prisma from "@/prisma/client";

import { getTwoFactorTokenByEmail } from "@/data/twoFactorToken";
import { getPasswordResetTokenByEmail } from "@/data/passwordResetToken";
import { getVerificationTokenByEmail } from "@/data/verificationTokenEmail";

export const generateVerficationToken = async (email: string) => {
  const token = uuid(); // this is our token
  const oneHour = 1000 * 60 * 60;
  const expires = new Date(new Date().getTime() + oneHour); // the expire string, so the token expire on one our from the time of the creation

  // here we will check if the user already have a token so we need to delate this token to generate a new one
  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    // here we delated the old one
    await prisma.verificationToken.delete({ where: { id: existingToken.id } });
  }
  const verficationToken = await prisma.verificationToken.create({
    // and here we create a new token
    data: {
      email,
      token,
      expires,
    },
  });
  return verficationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuid(); // this is our token
  const oneHour = 1000 * 60 * 60;
  const expires = new Date(new Date().getTime() + oneHour); // the expire string, so the token expire on one our from the time of the creation

  // here we will check if the user already have a token so we need to delate this token to generate a new one
  const existingToken = await getPasswordResetTokenByEmail(email);
  if (existingToken) {
    // here we delated the old one
    await prisma.passwordResetToken.delete({ where: { id: existingToken.id } });
  }
  const passwordResetToken = await prisma.passwordResetToken.create({
    // and here we create a new token
    data: {
      email,
      token,
      expires,
    },
  });
  return passwordResetToken;
};

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString(); // this is our token
  const fiveMinute = 1000 * 60 * 5;
  const expires = new Date(new Date().getTime() + fiveMinute); // the expire string, so the token expire on one our from the time of the creation

  // here we will check if the user already have a token so we need to delate this token to generate a new one
  const existingToken = await getTwoFactorTokenByEmail(email);
  if (existingToken) {
    // here we delated the old one
    await prisma.twoFactorToken.delete({ where: { id: existingToken.id } });
  }
  const twoFactorToken = await prisma.twoFactorToken.create({
    // and here we create a new token
    data: {
      email,
      token,
      expires,
    },
  });
  return twoFactorToken;
};

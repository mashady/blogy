import prisma from "@/prisma/client";

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFcatorToken = await prisma.twoFactorToken.findFirst({
      where: { email },
    });
    return twoFcatorToken;
  } catch (error) {
    return null;
  }
};

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFcatorToken = await prisma.twoFactorToken.findFirst({
      where: { token },
    });
    return twoFcatorToken;
  } catch (error) {
    return null;
  }
};

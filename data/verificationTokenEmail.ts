import prisma from "@/prisma/client";
/** we will verify token by email or by token */

export const getVerificationTokenByEmail = async (email: string) => {
  // for what token by email use?
  try {
    const verfificationToken = await prisma.verificationToken.findFirst({
      where: { email },
    });
    return verfificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: any) => {
  // for what token by email use?
  try {
    const verfificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });
    return verfificationToken;
  } catch (error) {
    return null;
  }
};

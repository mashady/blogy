import prisma from "@/prisma/client";
export const getTwoFactorConfirmationById = async (userId: string) => {
  try {
    const twoFcatorConfirmation = await prisma.twoFactorConfirmation.findUnique(
      {
        where: { userId },
      }
    );
    return twoFcatorConfirmation;
  } catch (error) {
    return null;
  }
};

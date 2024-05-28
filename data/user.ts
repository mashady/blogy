import prisma from "@/prisma/client";
// handle fetch user information
export const getUserByEmail = async (email: string) => {
  // wait until create the prisma user
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
};

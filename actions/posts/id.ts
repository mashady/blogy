"use server";

import prisma from "@/prisma/client";

interface RegisterResponse {
  error?: string;
  success?: string;
}
export const getPostsById = async (id: any) => {
  if (!id) return { error: "no id" };

  const posts = await prisma.post.findMany({
    where: {
      assignedToUserId: id,
    },
  });

  return posts;
};

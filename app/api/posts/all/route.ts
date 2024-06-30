import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: any, res: any) {
  const skip = parseInt(req.nextUrl.searchParams.get("skip")) || 0;
  const take = parseInt(req.nextUrl.searchParams.get("take")) || 5;

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    skip: skip,
    take: take,
    include: {
      assignedToUser: true,
    },
  });
  const transformedPosts = posts.map((post) => ({
    ...post,
    assignedToUser: {
      id: post?.assignedToUser?.id,
      name: post?.assignedToUser?.name,
      email: post?.assignedToUser?.email,
    },
  }));
  return NextResponse.json(transformedPosts);
}

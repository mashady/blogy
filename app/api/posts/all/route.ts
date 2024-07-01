import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import NextCors from "nextjs-cors";
const prisma = new PrismaClient();

export async function GET(req, res) {
  const skip = parseInt(req.nextUrl.searchParams.get("skip")) || 0;
  const take = parseInt(req.nextUrl.searchParams.get("take")) || 5;
  const response = NextResponse.json({ message: "Hello, world!" });
  // Set CORS headers
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, baggage"
  );

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

export async function OPTIONS() {
  const response = new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers":
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, baggage",
    },
  });

  return response;
}

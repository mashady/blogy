import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { postSchema } from "@/app/ValidationSchemas";

// Helper function to add CORS headers to the response
const addCorsHeaders = (response) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET,HEAD,POST");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
};

// API Route to handle POST requests
export async function POST(req) {
  const body = await req.json();
  const validation = postSchema.safeParse(body);

  if (!validation.success) {
    return addCorsHeaders(
      NextResponse.json(validation.error.format(), { status: 400 })
    );
  }

  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      slug: body.slug,
      cover: body.cover,
      description: body.description,
      section: body.section,
      assignedToUserId: body.user,
    },
  });

  return addCorsHeaders(NextResponse.json(newPost, { status: 201 }));
}

// API Route to handle GET requests
export async function GET(req) {
  const userId = req.nextUrl.searchParams.get("id");

  if (!userId) {
    return addCorsHeaders(
      NextResponse.json({ error: "User ID is required" }, { status: 400 })
    );
  }

  const posts = await prisma.post.findMany({
    where: { assignedToUserId: userId },
    include: {
      assignedToUser: true,
    },
  });
  const transformedPosts = posts.map((post) => ({
    ...post,
    assignedToUser: {
      id: post.assignedToUser?.id,
      name: post.assignedToUser?.name,
      email: post.assignedToUser?.email, // Include only the fields you want to expose
    },
  }));
  return addCorsHeaders(NextResponse.json(transformedPosts, { status: 200 }));
}

// Handling OPTIONS method for preflight requests
export async function OPTIONS() {
  return addCorsHeaders(NextResponse.json(null, { status: 204 }));
}

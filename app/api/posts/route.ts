import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { postSchema } from "@/app/ValidationSchemas";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = postSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      slug: body.slug,
      cover: body.cover,
      description: body.description,
      section: body.section,
      //tags: { create: [{ name: "dev" }, { name: "king-abusamir" }] },
      tags: { create: body.tags },
    },
  });
  return NextResponse.json(newPost, { status: 201 });
}

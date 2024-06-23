// pages/api/getTags.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { postId } = req.query;

  if (!postId) {
    return res.status(400).json({ error: "postId is required" });
  }

  try {
    const tags = await prisma.tag.findMany({
      where: {
        posts: {
          some: {
            postId: postId,
          },
        },
      },
      include: {
        posts: {
          include: {
            post: true,
          },
        },
      },
    });

    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  } finally {
    await prisma.$disconnect();
  }
}

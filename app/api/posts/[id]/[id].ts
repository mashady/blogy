import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  if (req.method === "GET") {
    try {
      // Extract the user ID from the URL
      const { id } = req.query;

      // Fetch posts for the given user ID
      const posts = await prisma.post.findMany({
        where: {
          assignedToUserId: id,
        },
      });

      // Return the fetched posts as a JSON response
      return res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      return res.status(500).json({ error: "Failed to fetch posts" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    // If the request method is not GET, respond with 405 Method Not Allowed
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

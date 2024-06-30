import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { cache, Suspense } from "react";
import Profile from "./Profile";

const fetchUser = cache((userId: any) =>
  prisma.user.findUnique({
    // find post by slug
    where: {
      id: userId,
    },
  })
);

const page = async ({ params }: any) => {
  const user = await fetchUser(params.id);
  const transformedUser = {
    id: user?.id,
    name: user?.name,
    email: user?.email,
    image: user?.image,
  };
  if (!user) return notFound();
  return (
    <div>
      <Profile user={transformedUser} />
    </div>
  );
};

export default page;

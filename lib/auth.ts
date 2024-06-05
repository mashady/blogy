import { auth } from "@/auth";

export const currentUser = async () => {
  try {
    const session = await auth();
    return session?.user; // Return null if session or session.user is undefined
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null; // Return null in case of an error
  }
};

export const currentRole = async () => {
  try {
    const session = await auth();
    return session?.user?.role; // Return null if session, session.user, or session.user.role is undefined
  } catch (error) {
    console.error("Error fetching current role:", error);
    return null; // Return null in case of an error
  }
};

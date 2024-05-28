// the next auth
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";
import { LoginSchema } from "./scemas";

// use Auth Options as type safty
const authOptions: AuthOptions = {
  // providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const validatedFields = LoginSchema.safeParse(credentials); // validation stage by zod
        if (validatedFields.success) {
          const { email, password } = validatedFields.data; // every thing is okay, get our {email, password}

          const user = await getUserByEmail(email); // now get user data by email
          if (!user || !user.password) return null;
          // check if user s email already exist and this user on the db aleady have a password or return null
          // if every thin is okaay then compare password user writtern with that on the db together
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user; // if all is good reurn this user data
        }
        return null; // if not rerun null
      },
    }),
  ],
};

export default authOptions;

import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/src/lib/prisma";
import GitHubProvider from "next-auth/providers/github";


export const authConfig = {
    providers: [
        GitHubProvider({})
    ],
    adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions

export default NextAuth(authConfig);
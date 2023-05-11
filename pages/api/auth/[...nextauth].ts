import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {client} from "../../../prisma/client"

declare var process : {
  env: {
    GITHUB_ID: string
    GITHUB_SECRET: string
    NEXT_PUBLIC_SECRET: string
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOptions)
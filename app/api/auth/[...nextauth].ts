import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import client from "../../../prisma/client"

export const authOptions = {
  adapter: PrismaAdapter(client),
  providers: [],
}

export default NextAuth(authOptions)
import { NextResponse } from "next/server"
import { client } from "@/prisma/client"

// Check if prisma connexion is working for prod
// If deckinfo.name === Capitale it's working

export async function GET(request: Request) {

  const deckInfo = await client.deck.findUnique({
    where: {
      id: '645e12cd59028a9144e1bd30'
    }
  })

  return new NextResponse(`Working - ${deckInfo?.name}`, {
    status: 200
  })
}

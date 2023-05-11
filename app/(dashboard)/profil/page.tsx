import { DefaultSession, getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { client } from "@/prisma/client"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { DeckList } from "@/components/DeckList"
import { DeckListEmpty } from "@/components/DeckListEmpty"
import { ProfilWelcome } from "@/components/ProfilWelcome"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profil",
  description: "Flashcard en ligne vous permet de réaliser des flashcards gratuitement."
}

const getUserId = async (session: DefaultSession) => {
  return await client.user.findUnique({
    where: {
      email: session.user?.email || ""
    },
    select: {
      id: true
    }
  })
}

const getDecksForUser = async (userId: string) => {
  return await client.deck.findMany({
    where: {
      authorId: userId
    }
  })
}

export default async function Profil() {

  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/login")
  }

  const userId = await getUserId(session)

  if (!userId) {
    return redirect("/login")
  }

  const userDeck = await getDecksForUser(userId.id)

  return (
    <>
      <ProfilWelcome name={session.user?.name || ""} />
      {userDeck.length === 0 
      ? <DeckListEmpty /> 
      : <DeckList flashcards={userDeck}/>
      }
    </>
  )
}
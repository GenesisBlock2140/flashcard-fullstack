import { DefaultSession, getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { client } from "@/prisma/client"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

import { ButtonLink } from "@/components/Button/ButtonLink"
import { ProfilDetails } from "@/components/ProfilDetails"
import { LogOut } from "@/components/Auth/LogOut"
import { DeckList } from "@/components/DeckList"
import { DeckListEmpty } from "@/components/DeckListEmpty"

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
    return redirect("/api/auth/signin")
  }

  const userId = await getUserId(session)

  if (!userId) {
    return redirect("/api/auth/signin")
  }

  const userDeck = await getDecksForUser(userId.id)

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex justify-between items-center font-roboto font-light my-5 p-2">
        <p className="text-2xl">Profil</p>
        <LogOut />
      </div>
      <ProfilDetails 
        name={session.user?.name || ""}
        email={session.user?.email || ""}
        picture={session.user?.image || ""}
      />
      <section className="text-center m-20">
        <ButtonLink text="+ Créer un nouveau deck" to={"/"} format="bleu" />
      </section>
      {userDeck.length === 0 
      ? <DeckListEmpty /> 
      : <DeckList flashcards={userDeck}/>
      }
    </div>
  )
}
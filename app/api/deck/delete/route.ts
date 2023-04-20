import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { checkDeckFormat } from "@/utils/validator/checkDeckFormat"

import { client } from "@/prisma/client"

export async function DELETE(request: Request, response:Response) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("L'utilisateur doit être connecté", {
      status: 403
    })
  }

  const {deckId} = await request.json()

  if(!deckId){
    return new NextResponse("Aucun deck selectionné", {
      status: 400
    })
  }

  if (!checkDeckFormat(deckId)) {
    return new NextResponse("Format invalide", {
      status: 400
    })
  }

  try {

    const deckData = await client.deck.findUnique({
      where: {
        id: deckId
      }
    })

    if (!deckData) {
      return new NextResponse("Impossible de trouver un deck", {
        status: 400
      })
    }

    const userData = await client.user.findUnique({
      where: {
        email: session.user?.email || ""
      }
    })


    if (deckData.authorId !== userData?.id) {
      return new NextResponse("Cet utilisateur n'est pas le créateur du deck", {
        status: 403
      })
    }

    const deleteDeckInDB = await client.deck.delete({
      where: {
        id: deckId
      }
    })

    return new NextResponse("Deck supprimé", {
      status: 200
    })
  
  } catch (error) {
    console.log(error)
  }

}
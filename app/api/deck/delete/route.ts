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

  // In try catch
  // TODO: Fetch deckId data
  // TODO: Check if userId === userId de la session
  // DELETE deck AND flashcard collection

}
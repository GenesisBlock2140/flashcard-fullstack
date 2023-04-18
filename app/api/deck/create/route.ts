import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { deckSchema } from "@/services/validations/deck"

import { client } from "@/prisma/client"
import * as z from "zod"

export async function POST(request: Request, response:Response) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("L'utilisateur doit être connecté", {
      status: 403
    })
  }

  const {name, theme, flashcard} = await request.json()

  if(!name || !theme || !flashcard){
    return new NextResponse("Des informations sont manquantes", {
      status: 400
    })
  }

  try {
    const body = deckSchema.parse({name, theme, flashcard})

    const createNewDeck = await client.user.update({
      where: {
        email: session.user?.email || ""
      },
      data: {
        Deck: {
          create: {
            name: body.name,
            theme: body.theme,
            isPublic: true,
            flashcards: {
              createMany: {
                data: body.flashcard
              }
            }
          }
        }
      }
    })

    if (createNewDeck) {
      return NextResponse.json({name, theme, flashcard}, {
        status: 200
      })
    }

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, {
        status: 422
      })
    }
    return new NextResponse("Une erreur est survenu", {
      status: 400
    })
  }

}
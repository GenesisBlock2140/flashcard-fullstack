import { notFound } from "next/navigation"
import { client } from "@/prisma/client"
import { checkDeckFormat } from "@/utils/validator/checkDeckFormat"

import { DeckView } from "@/components/DeckView"


export default async function DeckSlug ({params}:{params: { slug: string }}) {

  if (!checkDeckFormat(params.slug)) {
    return notFound()
  }

  const flashData = await client.flashcard.findMany({
    where: {
      deckId: params.slug
    }
  })

  if (flashData.length === 0) {
    return notFound()
  }

  const deckData = await client.deck.findUnique({
    where: {
      id: params.slug
    }
  })

  console.log(deckData)

  // TODO: Faire condition si PAS PUBLIC    ET   PAS LE DECK DE l'USER = return notfound
  // TODO: Fetch data using prisma and send it to child

  return (
    <div className="text-center font-roboto my-10 rounded-2xl lg:bg-[#f7f7f7] lg:p-10">
      <h1 className="text-4xl font-medium">
        {deckData?.name}
      </h1>
      <p className="text-xl mb-3">
        {`Thème: ${deckData?.theme}`}
      </p>
      <DeckView flashcards={flashData} />
    </div>
  )
}
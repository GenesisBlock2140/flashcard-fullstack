import { notFound } from "next/navigation"
import { client } from "@/prisma/client"
import { checkDeckFormat } from "@/utils/validator/checkDeckFormat"

import { DeckView } from "@/components/DeckView"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Révision en cours ...",
}

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
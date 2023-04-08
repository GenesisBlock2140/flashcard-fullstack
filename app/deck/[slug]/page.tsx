import { notFound } from "next/navigation"
import {client} from "@/prisma/client"
import { checkDeckFormat } from "@/utils/validator/checkDeckFormat"

import { DeckView } from "@/components/DeckView"
import deckJson from "@/utils/data/deck.json"

export default async function DeckSlug ({params}:{params: { slug: string }}) {

  if (!checkDeckFormat(params.slug)) {
    return notFound()
  }

  // TODO: Faire condition si PAS PUBLIC    ET   PAS LE DECK DE l'USER = return notfound
  // TODO: Fetch data using prisma and send it to child
  if (!deckJson.deck.isPublic) {
    return notFound()
  }

  return (
    <div className="text-center font-roboto my-10 rounded-2xl lg:bg-[#f7f7f7] lg:p-10">
      <h1 className="text-4xl font-medium">
        {deckJson.deck.name}
      </h1>
      <p className="text-xl mb-3">
        {`Thème: ${deckJson.deck.theme}`}
      </p>
      <DeckView flashcards={deckJson.deck.flashcards} />
    </div>
  )
}
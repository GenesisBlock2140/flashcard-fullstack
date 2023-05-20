import { hostUrl } from "@/config/hostConf"

interface IcreateDeck {
  name: string
  theme: string
  flashcard: FlashCard[]
}

type FlashCard = {
  textRecto: string
  textVerso: string
}

export const createDeck = async ({name, theme, flashcard}:IcreateDeck) => {
  const newDeck = await fetch(`${hostUrl}/api/deck/create`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      theme,
      flashcard
    })
  })

  return newDeck
}
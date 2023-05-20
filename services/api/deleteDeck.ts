import { hostUrl } from "@/config/hostConf"

interface IdeleteDeck {
  deckId: string
}

export const deleteDeck = async ({deckId}:IdeleteDeck) => {
  const deletedDeck = await fetch(`${hostUrl}/api/deck/delete`, {
    method: "DELETE",
    body: JSON.stringify({
      deckId: deckId
    })
  })

  return deletedDeck
}
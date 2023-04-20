interface IdeleteDeck {
  deckId: string
}

export const deleteDeck = async ({deckId}:IdeleteDeck) => {
  const deletedDeck = await fetch("http://localhost:3000/api/deck/delete", {
    method: "DELETE",
    body: JSON.stringify({
      deckId: deckId
    })
  })

  return deletedDeck
}
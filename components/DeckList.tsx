import { FC } from 'react'
import Deck from '../utils/types/deck'
import { DeckCard } from './Card/DeckCard'

interface IDeckList {
  flashcards: Deck[]
}

export const DeckList: FC<IDeckList> = ({flashcards}) => {
  return (
    <>
      <p className="text-xl font-light p-2">
        {`Decks (${flashcards.length})`}
      </p>
      <section className="block mx-auto">
        {flashcards.map((deck, key) => {
          return <DeckCard title={deck.name} deckId={deck.id} key={key} />
        })}
      </section>
    </>
  )
}
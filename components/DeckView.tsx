"use client"

import { FC } from 'react'
import { useState } from 'react'

import { FlashCard } from './Card/FlashCard'
import { Button } from './Button/Button'
import { Flashcard } from '@/utils/types/flashcard'
import { ProgressBar } from './ProgressBar'

interface IDeckView {
  flashcards: Flashcard[]
}

export const DeckView: FC<IDeckView> = ({flashcards}) => {

  const [currentFlashcard, setCurrentFlashcard] = useState<number>(0)
  const progressPourcent = ((currentFlashcard + 1) / flashcards.length ) * 100
  
  const handleNextFlashcard = () => {
    if (currentFlashcard + 1 < flashcards.length) {
      setCurrentFlashcard(current => current + 1)
    }
  }

  const handlePreviousFlashcard = () => {
    if (currentFlashcard > 0) {
      setCurrentFlashcard(current => current - 1)
    }
  }

  return (
    <div>
      <div className='max-w-[250px] lg:max-w-[350px] mx-auto my-2'>
        <ProgressBar progress={progressPourcent} />
      </div>
      <FlashCard 
        textRecto={flashcards[currentFlashcard].textRecto}
        textVerso={flashcards[currentFlashcard].textVerso}
      />
      <div className="flex justify-center gap-2 my-5">
        <Button text="Precedent" action={handlePreviousFlashcard} />
        <Button text="Suivant" action={handleNextFlashcard} />
      </div>
      <p className='text-xl'>
        {`${currentFlashcard + 1} / ${flashcards.length}`}
      </p>
    </div>
  )
}
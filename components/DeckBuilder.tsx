"use client"
import { FC, useEffect, useRef, useState } from "react"

import { Button } from "@/components/Button/Button"
import { FlashCard } from "@/components/Card/FlashCard"
import { TextAreaDeckCreation } from "@/components/TextAreaDeckCreation"
import { createDeck } from "@/services/auth/createDeck"
import { ModalPublish } from "./Modal/ModalPublish"

type FlashCard = {
  textRecto: string
  textVerso: string
}

interface IDeckBuilder {}

export const DeckBuilder: FC<IDeckBuilder> = () => {
  const [allFlashcards, setAllFlashcards] = useState<FlashCard[]>([])
  const [currentFlashCardEdit, setCurrentFlashcardEdit] = useState<number>(0)
  const [showConfirm, setShowConfirm] = useState<boolean>(false)

  const textRecto = useRef<HTMLTextAreaElement>(null)
  const textVerso = useRef<HTMLTextAreaElement>(null)

  // Checking to avoid Typescript error
  const isFlashcardNotNull = allFlashcards !== null && currentFlashCardEdit !== null

  useEffect(() => {
    if (currentFlashCardEdit === allFlashcards.length) {
      resetTextAreaValue()
    } else if (textRecto.current !== null && textVerso.current !== null && isFlashcardNotNull ) {
      textRecto.current.value = allFlashcards[currentFlashCardEdit].textRecto
      textVerso.current.value = allFlashcards[currentFlashCardEdit].textVerso
    }
  }, [currentFlashCardEdit])


  const resetTextAreaValue = () => {
    if (textRecto.current !== null && textVerso.current !== null) {
      textRecto.current.value = ""
      textVerso.current.value = ""
    }
  }

  const saveTextChange = () => {
    if (textRecto.current !== null && textVerso.current !== null) {
      setAllFlashcards([...allFlashcards].filter((item,key) => 
      {if (key === currentFlashCardEdit) {
        item.textRecto = textRecto.current?.value || ""
        item.textVerso = textVerso.current?.value || ""
      }
      return item
      }))
    }
  }

  const addFlashcardToList = () => {
    if (textRecto.current !== null && textVerso.current !== null) {
      const newFlashcard = {
        textRecto: textRecto.current.value,
        textVerso: textVerso.current.value
      }
      setAllFlashcards([...allFlashcards, newFlashcard])
    }
  }

  const nextFlashcard = () => {
    if (textRecto.current?.value !== "" && textVerso.current?.value !== "") {
      if (currentFlashCardEdit === allFlashcards.length) {
        addFlashcardToList()
      } else {
        saveTextChange()
      }
      setCurrentFlashcardEdit(old => old + 1)
    }
  }

  const previousFlashcard = () => {
    if ((currentFlashCardEdit - 1) !== -1) {
      saveTextChange()
      setCurrentFlashcardEdit(old => old - 1)
    }
  }

  const handleSubmit = async() => {
    const testt = await createDeck({
      name: "Test",
      theme: "Test",
      flashcard: allFlashcards
    })

    console.log(testt)
  }

  return (
    <div>
      <h1 className="text-xl font-medium text-center mb-10">Exemple titre - exemple theme</h1>
      <div className="max-w-[700px] lg:h-[500px] bg-[#FCFCFC] border border-[#E6EBF2] lg:flex gap-5 p-2 lg:p-4 rounded-lg">
        <div className="flex justify-between lg:flex-col">
          <div className="block lg:flex lg:flex-col gap-2">
            <Button text="Suivant" color="white" action={nextFlashcard} />
            <Button text="Précedent" color="white" action={previousFlashcard} />
          </div>
          <div>
            <Button text="Publier" color="black" action={() => setShowConfirm(show => !show)} />
            <p className="text-center">
              {`${currentFlashCardEdit}/${allFlashcards.length}`}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-around">
          <TextAreaDeckCreation textAreaName="Recto" textAreaRef={textRecto} />
          <TextAreaDeckCreation textAreaName="Verso" textAreaRef={textVerso} />
        </div>
      </div>
      {showConfirm 
      ? <ModalPublish actionClose={() => setShowConfirm(show => !show)} action={handleSubmit} /> 
      : null}
    </div>
  )
}
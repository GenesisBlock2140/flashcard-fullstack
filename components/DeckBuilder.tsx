"use client"
import { FC, useEffect, useRef, useState } from "react"

import { Button } from "@/components/Button/Button"
import { FlashCard } from "@/components/Card/FlashCard"
import { TextAreaDeckCreation } from "@/components/TextAreaDeckCreation"
import { createDeck } from "@/services/api/createDeck"
import { ModalPublish } from "./Modal/ModalPublish"
import { Input } from "./Input/Input"
import { Error } from "./Error"
import { redirect } from "next/navigation"

type FlashCard = {
  textRecto: string
  textVerso: string
}

interface IDeckBuilder {}

export const DeckBuilder: FC<IDeckBuilder> = () => {
  const [allFlashcards, setAllFlashcards] = useState<FlashCard[]>([])
  const [currentFlashCardEdit, setCurrentFlashcardEdit] = useState<number>(0)
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [recto, setRecto] = useState<string>("")
  const [verso, setVerso] = useState<string>("")


  const deckNameInput = useRef<HTMLInputElement>(null)
  const deckThemeInput = useRef<HTMLInputElement>(null)
  const textRecto = useRef<HTMLTextAreaElement>(null)
  const textVerso = useRef<HTMLTextAreaElement>(null)

  const [msgError, setMsgError] = useState<string>("")

  // Checking to avoid Typescript error
  const isFlashcardNotNull = allFlashcards !== null && currentFlashCardEdit !== null

  useEffect(() => {
    if (currentFlashCardEdit === allFlashcards.length) {
      resetTextAreaValue()
      setRecto("")
      setVerso("")
    } else if (textRecto.current !== null && textVerso.current !== null && isFlashcardNotNull ) {
      textRecto.current.value = allFlashcards[currentFlashCardEdit].textRecto
      textVerso.current.value = allFlashcards[currentFlashCardEdit].textVerso
      setRecto(allFlashcards[currentFlashCardEdit].textRecto)
      setVerso(allFlashcards[currentFlashCardEdit].textVerso)
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

    if (deckNameInput.current?.value === undefined || deckThemeInput.current?.value === undefined) {
      setMsgError("Merci de remplir les champs de l'étape 1")
      return 
    }

    if (deckNameInput.current.value.length < 3 || deckThemeInput.current.value.length < 3) {
      setMsgError("Merci de remplir les champs de l'étape 1 avec plus de 3 caractères")
      return
    }

    const submitCreateDeck = await createDeck({
      name: deckNameInput.current?.value,
      theme: deckThemeInput.current?.value,
      flashcard: allFlashcards
    })

    if(submitCreateDeck.status === 200) {
      // Using window.location because redirect from NextJS have issue with "use client" comp
      return window.location.replace("/profil")
    } else {
      setMsgError("Une erreur coté serveur est survenu, rafraîchir la page.")
    }

  }

  const TextRectoUpdateRealTime = (text:string) => {
    setRecto(text)
  }

  const TextVersoUpdateRealTime = (text:string) => {
    setVerso(text)
  }

  return (
    <>
      {msgError.length !== 0 && <Error message={msgError} />}
      <div className="flex flex-col justify-between items-start my-10">
        <h1 className="text-xl font-medium">1. Information du deck</h1>
        <p className="text-light-gray">Les informations de bases d'un deck </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-5 lg:gap-20">
        <div>
          <label className="m-1">Nom du deck</label>
          <Input type="text" inputRef={deckNameInput} placeholder="Nom du deck" />
        </div>
        <div>
          <label className="m-1">Thème du deck</label>
          <Input type="text" inputRef={deckThemeInput} placeholder="Thème du deck" />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start my-10">
        <h1 className="text-xl font-medium">2. Création des flashcards</h1>
        <p className="text-light-gray">Créez les flashcards de votre deck simplement </p>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-slate-100 rounded-lg">
        <div className="max-w-[700px] lg:h-[500px] lg:flex gap-5 p-2 lg:p-4 rounded-lg">
          <div className="flex justify-between lg:flex-col">
            <div className="block lg:flex lg:flex-col gap-2">
              <Button text="Suivant" color="white" action={nextFlashcard} />
              <Button text="Précédent" color="white" action={previousFlashcard} />
            </div>
            <div>
              <Button text="Publier" color="black" action={() => setShowConfirm(show => !show)} />
              <p className="text-center">
                {`${currentFlashCardEdit}/${allFlashcards.length}`}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-around">
            <TextAreaDeckCreation textAreaName="Recto" textAreaRef={textRecto} textUpdate={TextRectoUpdateRealTime} />
            <TextAreaDeckCreation textAreaName="Verso" textAreaRef={textVerso} textUpdate={TextVersoUpdateRealTime} />
          </div>
        </div>
        <div className="max-w-[400px] mx-auto hidden lg:block">
            <FlashCard textRecto={recto} textVerso={verso} />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start my-10">
        <h1 className="text-xl font-medium">3. Vérifier les informations</h1>
        <p className="text-light-gray">D'autres options seront bientôt disponibles dans cette section. </p>
        <p className="font-semibold my-2">Vérifiez les informations des flashcards et cliquez sur "Publier" dans la 2ème section si tout est bon.</p>
      </div>
      {showConfirm 
      ? <ModalPublish actionClose={() => setShowConfirm(show => !show)} action={handleSubmit} /> 
      : null}
    </>
  )
}
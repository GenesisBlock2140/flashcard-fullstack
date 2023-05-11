import { DeckBuilder } from "@/components/DeckBuilder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créer un nouveau deck",
}

export default async function Create() {

  return (
    <>
      <DeckBuilder />
    </>
  )
}
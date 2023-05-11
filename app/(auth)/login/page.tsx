import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { ConnectWith } from "@/components/ConnectWith"
import { Return } from "@/components/Button/Return"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Connexion",
  description: "Flashcard en ligne vous permet de réaliser des flashcards gratuitement."
}

export default async function Login () {

  const session = await getServerSession(authOptions)

  if (session) {
    return redirect('/profil')
  }

  return (
    <>
      <div className="absolute top-10 left-10">
        <Return to={'/'} />
      </div>
      <h1 className="text-4xl text-dark font-medium mb-5">Bienvenue 👋</h1>
      <p className="text-base text-light-gray lg:text-lg">Connectez-vous simplement et en moins de 10s</p>
      <p className="text-base text-light-gray lg:text-lg">Et commencez à créer vos flashcards</p>
      <p className="m-2 text-light-gray"> ~ </p>
      <div className="flex flex-col justify-center items-center gap-2 mt-1">
        <ConnectWith provider="Github" />
        <ConnectWith provider="Google" />
        <ConnectWith provider="Twitter" />
      </div>
    </>
  )
}
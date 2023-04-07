import { DeckCard } from "@/components/Card/DeckCard"
import { ButtonLink } from "@/components/Button/ButtonLink"
import { ProfilDetails } from "@/components/ProfilDetails"

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { LogOut } from "@/components/Auth/LogOut"

export default async function Profil() {

  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/api/auth/signin")
  }

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex justify-between items-center font-roboto font-light my-5 p-2">
        <p className="text-2xl">Profil</p>
        <LogOut />
      </div>
      <ProfilDetails 
        name={session.user?.name || ""}
        email={session.user?.email || ""}
        picture={session.user?.image || ""}
      />
      <section className="text-center m-20">
        <h2 className="text-2xl lg:text-3xl font-roboto font-medium mb-5">Créer un nouveau deck ?</h2>
        <ButtonLink text="C'est parti" to={"/"} format="bleu" />
      </section>
      <p className="text-2xl font-roboto font-light p-2">Decks (5)</p>
      <section className="flex justify-center lg:justify-around items-center flex-wrap m-10">
        <DeckCard title="Révision histoire" />
        <DeckCard title="Révision histoire" />
        <DeckCard title="Révision histoire" />
        <DeckCard title="Révision histoire" />
      </section>
    </div>
  )
}
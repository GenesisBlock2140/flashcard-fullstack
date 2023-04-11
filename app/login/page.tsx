import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { ConnectWith } from "@/components/ConnectWith"

export default async function Login () {

  const session = await getServerSession(authOptions)

  if (session) {
    return redirect('/profil')
  }

  return (
    <div className="max-w-[1200px] flex flex-col justify-center my-40 text-center">
      <h1 className="text-3xl font-medium">Bienvenue 👋</h1>
      <p className="text-light-gray text-xl">Connectez-vous simplement et en moins de 10 secondes</p>
      <ConnectWith provider="github" />
    </div>
  )
}
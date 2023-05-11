import Image from "next/image"
import profilSvg from '@/public/svg/profil.svg'
import Link from "next/link"
import { Metadata } from "next"
import { useCurrentUser } from "@/hook/use-current-user"

export const metadata: Metadata = {
  title: "Informations de votre compte"
}

export default async function Details() {

  const userInfo = await useCurrentUser()

  return (
    <>
      <h1 className="text-2xl px-2">Informations</h1>
      <div className="grid lg:grid-cols-2">
        <div className="max-w-[600px] py-5">
          <div className="flex items-center justify-start gap-2 mb-6">
            <Image src={profilSvg} alt="profilDetails" width={18} height={18} />
            <p className="text-base">Details du compte</p>
          </div>
          <div className="mb-5">
            <p className="font-medium my-1">Utilisateur</p>
            <p className="bg-slate-100 p-2 rounded-lg">{userInfo?.name}</p>
          </div>
          <div className="my-5">
            <p className="font-medium my-1">Addresse mail</p>
            <p className="bg-slate-100 p-2 rounded-lg">{userInfo?.email}</p>
          </div>
          <div className="my-5">
            <p className="font-medium my-1">Role</p>
            <p className="bg-slate-100 p-2 rounded-lg">Utilisateur</p>
          </div>
        </div>
        <div className="max-w-[400px] sm:w-[400px] lg:mx-auto py-5 px-2">
          <div className="flex items-center justify-start gap-2 mb-8">
            <Image src={profilSvg} alt="profilDetails" width={18} height={18} />
            <p className="text-base">Abonnements</p>
          </div>
          <div className="max-w-[400px] bg-slate-100 p-10 rounded-lg">
            <p className="text-4xl font-medium mb-1">Plan</p>
            <p>Gratuit</p>
          </div>
          <Link href={'/pricing'} className="block text-sm font-medium underline mt-6 ml-2 cursor-pointer">
            Passer au format pro ?
          </Link>
        </div>
      </div>
    </>
  )
}
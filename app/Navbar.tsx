import { FC } from "react"
import Link from "next/link"

interface INavbar {}

export const Navbar: FC<INavbar> = () => {
  return (
    <div className="max-w-[1200px] h-20 flex justify-between items-center mx-auto p-5">
      <Link href={"/"} className="text-2xl font-bold">Flashcard</Link>
      <div className="text-xl flex gap-10">
        <Link href={"/"}>Tutoriel</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Connexion</Link>
      </div>
    </div>
  )
}
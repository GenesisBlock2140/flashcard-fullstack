import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Link from "next/link"

interface INavbar {}

export const Navbar = async ({}:INavbar) => {

  const session = await getServerSession(authOptions)

  return (
      <header className="max-w-[1200px] h-20 flex justify-between items-center mx-auto p-5">
        <Link href={"/"} className="text-xl text-dark font-medium lg:after:content-['lashcard']">
          F
        </Link>
        <div className="text-base flex items-center flex-wrap gap-10">
          <Link href={"/faq"}>Tutoriel</Link>
          <Link href={"/prix"}>Prix</Link>
          <Link href={`${session ? "/profil" : "/login"}`}
            className="bg-dark text-white px-3 py-1 rounded-lg" >
            {session ? "Profil" : "Connexion"}
          </Link>
        </div>
      </header>
  )
}

// Avoid type 'Promise<Element>' is not a valid JSX element ERROR in layout.tsx, because typescript don't understand async comp
export default Navbar as unknown as () => JSX.Element
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Link from "next/link"

interface INavbar {}

export const Navbar = async ({}:INavbar) => {

  const session = await getServerSession(authOptions)

  return (
      <header className="max-w-[1200px] h-20 flex justify-between items-center mx-auto p-5 border-b border-b-[#e2e8f0]">
        <Link href={"/"} className="text-2xl text-dark font-medium lg:after:content-['lashcard']">
          F
        </Link>
        <div className="text-[18px] flex items-center flex-wrap gap-10">
          <Link href={"/faq"}>Tutoriel</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={`${session ? "/profil" : "/login"}`}
            className="bg-dark text-white px-5 py-1 rounded-lg" >
            {session ? "Profil" : "Connexion"}
          </Link>
        </div>
      </header>
  )
}

// Avoid type 'Promise<Element>' is not a valid JSX element ERROR in layout.tsx, because typescript don't understand async comp
export default Navbar as unknown as () => JSX.Element
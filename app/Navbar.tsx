import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Link from "next/link"

interface INavbar {}

export const Navbar = async ({}:INavbar) => {

  const session = await getServerSession(authOptions)

  return (
    <header className="border-b-2 border-[##f3f3f3]">
      <nav className="max-w-[1200px] h-20 flex justify-between items-center mx-auto p-5">
        <Link href={"/"} className="text-2xl font-bold lg:after:content-['lashcard']">
          F
        </Link>
        <div className="text-xl flex flex-wrap gap-10">
          <Link href={"/faq"}>FAQ</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={`${session ? "/profil" : "/api/auth/signin"}`}>
            {session ? "Profil" : "Connexion"}
          </Link>
        </div>
      </nav>
    </header>
  )
}

// Avoid type 'Promise<Element>' is not a valid JSX element ERROR in layout.tsx, because typescript don't understand async comp
export default Navbar as unknown as () => JSX.Element
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import { DeckBuilder } from "@/components/DeckBuilder";

export default async function Create() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/login")
  }

  return (
    <div>
      <DeckBuilder />
    </div>
  )
}
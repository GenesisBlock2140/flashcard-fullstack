import { DashboardNav } from "@/components/DashboardNav"
import { DashboardNavLeft } from "@/components/DashboardNavLeft"
import { redirect } from "next/navigation"
import { Container } from "@/components/Container"
import { useCurrentUser } from "@/hook/use-current-user"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await useCurrentUser()

  if (!session) {
    return redirect("/login")
  }

  return (
    <>
      <DashboardNav picture={session.image || ""} />
      <DashboardNavLeft picture={session.image || ""} />
      <Container>
        {children}
      </Container>
    </>
  )
}

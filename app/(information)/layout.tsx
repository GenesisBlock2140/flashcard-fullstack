import { Container } from "@/components/Container"
import Navbar from "../Navbar"
import { Footer } from "../Footer"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Navbar />
      <Container className="max-w-[1200px] my-20 lg:my-40">
        {children}
      </Container>
      <Footer />
    </>
  )
}
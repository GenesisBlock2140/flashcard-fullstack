import Image from "next/image"
import LoginBackground from '@/public/login-background.jpg'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="lg:flex items-center justify-center">
      <div className="max-w-[1200px] lg:w-[50%] h-[100vh] flex flex-col justify-center text-center bg-[#fbfbfb] lg:border-r-2">
        {children}
      </div>
      <div className="hidden lg:flex lg:max-w-[49%] mx-auto my-auto">
        <Image src={LoginBackground} alt="background" className="w-2/3 mx-auto" />
      </div>
    </div>
  )
}
import { FC } from "react"
import Link from "next/link"

interface IButtonLink {
  text: string
  to: string
  format: string
}

export const ButtonLink: FC<IButtonLink> = ({text, to, format}) => {

  const btnFormat = format === "bleu" ? "bg-primary text-white h-[50px] py-3 border-[3px] border-primary" : "bg-white border-[3px] border-black text-black py-[9px]"
  const btnFormatHover = format === "bleu" ? "hover:bg-white hover:text-primary" : "hover:bg-black hover:text-white"

  return (
    <Link 
      href={to} 
      className={`w-[150px] h-[50px] text-xl font-bold rounded-full px-5 py-[9px] ${btnFormat} ${btnFormatHover} transition ease-in-out duration-500`}>
      {text}
    </Link>
  )
}
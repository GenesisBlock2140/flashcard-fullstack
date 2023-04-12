import { FC } from "react"
import Link from "next/link"

interface IButtonLink {
  text: string
  to: string
  format: string
}

export const ButtonLink: FC<IButtonLink> = ({text, to, format}) => {

  const btnFormat = format === "bleu" ? "bg-dark text-white h-[50px] py-3 border-[3px] border-dark" : "bg-white border-[3px] border-dark text-dark py-[9px]"
  const btnFormatHover = format === "bleu" ? "hover:bg-white hover:text-dark" : "hover:bg-dark hover:text-white"

  return (
    <Link 
      href={to} 
      className={`w-[150px] h-[50px] text-[18px] font-bold rounded-lg px-5 py-[9px] ${btnFormat} ${btnFormatHover} transition ease-in-out duration-500`}>
      {text}
    </Link>
  )
}
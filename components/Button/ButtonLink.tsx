import { FC } from "react"
import Link from "next/link"

interface IButtonLink {
  text: string
  color: string
  to: string
}

const colors = {
  black: 'bg-dark text-white hover:bg-white hover:text-dark',
  white: 'bg-white text-dark hover:bg-dark hover:text-white'
}

export const ButtonLink: FC<IButtonLink> = ({text, color, to}) => {

  let colorClasses = color === 'black' ? colors['black'] : colors['white']

  return (
    <Link 
      href={to} 
      className={`w-[150px] h-[50px] text-[18px] font-bold ${colorClasses} border-[3px] border-dark rounded-lg px-5 py-[9px] transition ease-in-out duration-500`}>
      {text}
    </Link>
  )
}
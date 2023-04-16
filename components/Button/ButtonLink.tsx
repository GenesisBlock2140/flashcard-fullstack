import { FC } from "react"
import Link from "next/link"

interface IButtonLink {
  text: string
  color: string
  to: string
}

const btnColors = {
  black: 'bg-dark text-white hover:bg-white hover:text-dark',
  white: 'bg-white text-dark hover:bg-dark hover:text-white'
}

const btnAnimation = {
  reverseColor: 'transition ease-in-out'
}

const btnDefaultStyle = 'w-[150px] h-[50px] text-[18px] font-bold border-[3px] border-dark rounded-lg px-5 py-[9px]'

export const ButtonLink: FC<IButtonLink> = ({text, color, to}) => {

  let selectedColor = color === 'black' ? btnColors['black'] : btnColors['white']

  return (
    <Link 
      href={to} 
      className={`${btnDefaultStyle} ${selectedColor} ${btnAnimation} duration-500`}>
      {text}
    </Link>
  )
}
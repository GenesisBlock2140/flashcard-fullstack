import { FC } from 'react'

interface IButton {
  text: string
  bgColor: string
  textColor: string
  icon?: string
  action: () => void
}

export const Button: FC<IButton> = ({text, bgColor, textColor, icon, action}) => {
  return (
    <button 
      className={`w-[140px] text-xl px-4 py-2 rounded-lg 
      bg-${bgColor} 
      text-${textColor}`}
      onClick={action}
    >
      {text}
    </button>
  )
}
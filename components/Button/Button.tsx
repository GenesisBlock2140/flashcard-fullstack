import { FC } from 'react'

interface IButton {
  text: string
  color: string
  icon?: string
  action?: () => void
}

const btnColors = {
  black: 'bg-dark text-white',
  white: 'bg-white text-dark'
}

const btnDefaultStyle = 'w-[140px] text-xl px-4 py-2 rounded-lg border-[3px] border-dark'

export const Button: FC<IButton> = ({text, color, icon, action}) => {

  let selectedColor = color === 'black' ? btnColors['black'] : btnColors['white']

  return (
    <button 
      className={`${btnDefaultStyle} ${selectedColor}`}
      onClick={action}
    >
      {text}
    </button>
  )
}
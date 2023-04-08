import { FC } from 'react'

interface IButton {
  text: string
  icon?: string
  action: () => void
}

export const Button: FC<IButton> = ({text, icon, action}) => {
  return (
    <button 
      className='w-[140px] bg-primary text-white text-xl px-4 py-2 rounded-full'
      onClick={action}
    >
      {text}
    </button>
  )
}
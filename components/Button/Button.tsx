import { FC } from 'react'

interface IButton {
  text: string
  icon?: string
  action: () => void
}

export const Button: FC<IButton> = ({text, icon, action}) => {
  return (
    <button 
      className='bg-[#1A91FF] text-xl text-white px-4 py-2 rounded-full'
      onClick={action}
    >
      {text}
    </button>
  )
}
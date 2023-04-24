import { FC } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'

interface IButton {
  text: string
  color: string
  size?: string
  to?: string
  icon?: string
  state?: string
  action?: () => void
}

interface ButtonStyle {
  base: string
  state: {
    disabled: string
  }
  colors: { 
    black: string
    white: string
    [key: string]: string
  }
  size: {
    normal: string
    big: string
    fit: string
    [key: string]: string
  }
}

const styles:ButtonStyle = {
  base: 'text-xl font-medium px-4 py-2 rounded-lg border-[3px] border-dark transition ease-in-out duration-500',
  state: {
    disabled: 'cursor-not-allowed opacity-50'
  },
  colors: {
    black: 'bg-dark text-white hover:bg-white hover:text-dark',
    white: 'bg-white text-dark hover:bg-dark hover:text-white'
  },
  size: {
    normal: "w-[140px]",
    big: "w-[200px]",
    fit: "w-fit"
  }
}

export const Button: FC<IButton> = ({text, color, size, to, icon, state, action}) => {

  const ButtonElement = (
    <button 
      className={clsx([styles.base, 
      color && styles.colors[color],
      state && styles.state.disabled,
      size ? styles.size[size] : styles.size['normal'],])}
      onClick={action}
      disabled={state === 'disabled'}
    >
      {text}
    </button>
  )

  if(!to) {
    return (
      ButtonElement
    )
  }

  return (
    <Link href={to}>
      {ButtonElement}
    </Link>
  )
}
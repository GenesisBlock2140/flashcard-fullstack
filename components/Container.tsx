import { FC } from 'react'
import clsx from 'clsx'

interface IContainer {
  children: React.ReactNode
  className?: string
}

export const Container: FC<IContainer> = ({ children, className }) => {
  return (
    <div className={clsx(className, 'max-w-[1000px] mx-auto px-2')}>
      { children }
    </div>
  )
}
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface INavItems {
  title: string
  link: string
  svg?: any
  isActive?: boolean
}

export const NavItems: FC<INavItems> = ({ title, link, svg, isActive = false}) => {
  return (
    <Link 
      href={link} 
      className={clsx('flex items-center justify-start gap-3 p-2 rounded-lg cursor-pointer', isActive ? 'bg-slate-200' : 'hover:bg-slate-100')}>
      <Image src={svg} alt={title} width={20} height={20} />
      <p>{title}</p>
    </Link>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import arrowLeft from '@/public/svg/arrow-left.svg'

interface IReturn {
  to: string
}

export const Return: FC<IReturn> = ({to}) => {
  return (
    <Link href={to}>
      <button className='flex items-center gap-2 bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded-lg duration-500'>
        <Image src={arrowLeft} alt='arrowLeft' width={18} />
        <span>Retour</span>
      </button>
    </Link>
  )
}
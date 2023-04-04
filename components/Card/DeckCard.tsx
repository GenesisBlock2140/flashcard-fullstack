import { FC } from 'react'
import Link from 'next/link'

interface IDeckCard {
  title: string
}

export const DeckCard: FC<IDeckCard> = ({title}) => {
  return (
    <div className='max-w-[200px] m-2'>
      <Link href={"/"}>
        <div className='w-[100px] h-[150px] bg-[#EFEFEF] mb-5 mx-auto rounded-xl' />
        <p className='text-xl font-light text-center'>{title}</p>
      </Link>
    </div>
  )
}
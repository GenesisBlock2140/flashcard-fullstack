import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import editSvg from '@/public/svg/edit.svg'

interface IDeckCard {
  title: string
  deckId: string
}

export const DeckCard: FC<IDeckCard> = ({title, deckId}) => {
  return (
    <div className='max-w-[1000px] flex justify-between items-center border-2 border-[#f3f3f3] rounded-lg px-6 py-7 m-2'>
      <p className='text-[18px] font-light text-center'>{title}</p>
      <div className='flex items-center gap-2'>
        <Link href={`/deck/${deckId}`} className='bg-dark text-white font-semibold px-5 py-1 rounded-lg'>
          Voir
        </Link>
        <Link href={`/deck/edit/${deckId}`}>
          <Image src={editSvg} alt='edit' width={30} />
        </Link>
      </div>
    </div>
  )
}
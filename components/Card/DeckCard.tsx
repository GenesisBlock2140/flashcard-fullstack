"use client"

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import editSvg from '@/public/svg/edit.svg'
import trashSvg from '@/public/svg/trash.svg'
import { deleteDeck } from '@/services/api/deleteDeck'
import { Modal } from '../Modal/Modal'
import { Button } from '../Button/Button'

interface IDeckCard {
  title: string
  deckId: string
}

export const DeckCard: FC<IDeckCard> = ({title, deckId}) => {

  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false)

  const deleteDeckFromUser = async () => {
    const deletedDeck = await deleteDeck({deckId})
  }

  return (
    <div className='max-w-[1000px] flex justify-between items-center border-2 border-[#f3f3f3] rounded-lg px-2 lg:px-6 py-7 my-2'>
      <p className='text-[18px] font-light text-center overflow-hidden'>{title}</p>
      <div className='flex items-center gap-2'>
        <Link href={`/deck/${deckId}`} className='bg-dark text-white font-semibold px-5 py-1 rounded-lg'>
          Voir
        </Link>
        <Link href={`/deck/edit/${deckId}`}>
          <Image src={editSvg} alt='edit' width={25} />
        </Link>
        <button onClick={() => setShowConfirmDelete(show => !show)}>
          <Image src={trashSvg} alt='delete' width={25} />
        </button>
      </div>
      {showConfirmDelete 
      ? <Modal title='Supprimer le deck' hasClickOnClose={() => setShowConfirmDelete(show => !show)}> 
          <p>Voulez vous vraiment supprimer le deck?</p>
          <Button text='Supprimer' color='black' action={deleteDeckFromUser} />
        </Modal> 
      : null}
    </div>
  )
}
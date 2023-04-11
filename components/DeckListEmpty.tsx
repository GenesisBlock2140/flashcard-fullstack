import { FC } from 'react'
import docText from '../public/svg/document-text.svg'
import Image from 'next/image'

interface IDeckListEmpty {}

export const DeckListEmpty: FC<IDeckListEmpty> = () => {
  return (
    <div className='flex justify-center flex-col items-center border-2 border-[#F3F3F3] rounded-xl m-2 p-20 text-xl'>
      <Image src={docText} alt='doc' width={60} height={60} />
      <p>Aucun deck</p>
      <p className='text-[16px] text-light-gray'>Créer votre premier deck</p>
    </div>
  )
}
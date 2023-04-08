import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import tapSVG from "@/public/svg/tap.svg"

interface IFlashCard {
  textRecto: string
  textVerso: string
}

export const FlashCard: FC<IFlashCard> = ({textRecto, textVerso}) => {

  const [isRecto, setIsRecto] = useState<boolean>(true)

  // We want to have textRecto first when we swap to another flashcard, useEffect will notice when
  // textRecto change = new input pass from parent, and set Recto to true
  useEffect(()=> {
    console.log("useeffect trigger")
    setIsRecto(true)
  },[textRecto])

  return (
    <div 
      className='max-w-[350px] h-[450px] border-2 border-[#f2f2f2] lg:bg-white drop-shadow rounded-2xl mx-auto' 
      onClick={() => setIsRecto(old => !old)}>
      <p className='flex items-center justify-center h-[450px] text-xl break-all relative'>
        {isRecto ? textRecto : textVerso}
        <Image src={tapSVG} width={20} height={20} alt='tapsvg' className='absolute bottom-3 right-3' />
      </p>
    </div>
  )
}
import Image from 'next/image'
import { FC } from 'react'

import Bulb from '@/public/svg/bulb.svg'
import Smile from '@/public/svg/face-smile.svg'
import Rocket from '@/public/svg/rocket.svg'

interface IInfoCard {
  title: string
  description: string
  icon?: string
}

export const InfoCard: FC<IInfoCard> = ({title, description, icon}) => {

  const selectIcon = icon === "Smile" ? Smile : icon === "Bulb" ? Bulb : Rocket

  return (
    <div className='max-w-[350px] h-40 text-left text-white bg-dark rounded-lg p-5'>
      <Image src={selectIcon} alt='Bulb' className='my-1' width={40} />
      <p className='text-xl font-bold'>{title}</p>
      <p>{description}</p>
    </div>
  )
}
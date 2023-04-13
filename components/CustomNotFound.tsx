import Image from 'next/image'
import { FC } from 'react'
import map from '../public/svg/map.svg'

interface ICustomNotFound {
  title: string
  message: string
}

export const CustomNotFound: FC<ICustomNotFound> = ({ title, message}) => {
  return (
    <div className='text-center text-dark my-40'>
      <Image src={map} alt='map' width={80} className='block mx-auto m-3' />
      <p className='text-3xl font-medium'>{title}</p>
      <p className='text-xl text-light-gray'>{message}</p>
    </div>
  )
}
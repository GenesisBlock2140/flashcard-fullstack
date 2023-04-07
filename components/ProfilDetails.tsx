import { FC } from 'react'
import Image from 'next/image'

interface IProfilDetails {
  name: string
  email: string
  picture: string
}

export const ProfilDetails: FC<IProfilDetails> = ({name, email, picture}) => {
  return (
    <div className='max-w-[1000px] lg:h-[150px] lg:flex flex-wrap justify-around items-center bg-[#FCFCFC] border-2 border-[#F3F3F3] rounded-xl text-2xl font-light p-5 lg:p-0'>
      <Image src={picture} width={120} height={120} alt='profil picture' className='m-auto lg:m-1 rounded-full w-auto h-auto' />
      <p className='text-center'>{name}</p>
      <p className='text-center'>{email}</p>
    </div>
  )
}
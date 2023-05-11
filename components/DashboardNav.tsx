import Image from 'next/image'
import { FC } from 'react'
import notifSvg from '@/public/svg/notif.svg'

interface IDashboardNav {
  picture: string
}

export const DashboardNav: FC<IDashboardNav> = ({ picture }) => {
  return (
    <div className='hidden w-full h-20 2xl:flex items-center justify-end gap-5 px-2'>
      <Image src={notifSvg} alt='notif' width={30} height={30} className=' hover:bg-slate-200 cursor-pointer' />
      <Image src={picture} alt='userImage' width={40} height={40} className='rounded-full cursor-pointer' />
    </div>
  )
}
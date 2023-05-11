"use client"

import Image from 'next/image'
import { FC, useState } from 'react'
import academicSvg from '@/public/svg/academic.svg'
import profilSvg from '@/public/svg/profil.svg'
import lockSvg from '@/public/svg/lock.svg'
import barsSvg from '@/public/svg/bars-3.svg'
import closeSvg from '@/public/svg/close.svg'
import pricingSvg from '@/public/svg/pricing.svg'
import { LogOut } from './Auth/LogOut'
import { usePathname } from 'next/navigation';
import { NavItems } from './NavItems'
import { dashboardConf } from '@/config/dashboardConf'

interface IDashboardNavLeft {
  picture: string
}

export const DashboardNavLeft: FC<IDashboardNavLeft> = ({ picture }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const isActivePage = (pageLink: string) => {
    return pageLink === pathname ? true : false
  }

  return (
    <>
      <div className='2xl:hidden flex items-center justify-between py-1 px-3 h-[60px]'>
        <Image src={isOpen ? closeSvg : barsSvg} alt='menu' onClick={() => setIsOpen(old => !old) } className={`${isOpen ? "hidden" : ""}`} />
        <Image src={picture} alt='profil' width={40} height={40} className={`${isOpen ? "hidden" : ""} rounded-full`} />
      </div>
      <div className={` w-[200px] h-full ${isOpen ? "block" : "hidden"} 2xl:block fixed top-0 left-0 bg-white border-r border-slate-200 py-5 z-50`}>
        <Image src={isOpen ? closeSvg : barsSvg} alt='menu' onClick={() => setIsOpen(old => !old) } className='2xl:hidden ml-[15px]' />
        <div className='h-full flex flex-col justify-between'>
          <div className='h-[300px] flex flex-col items-center justify-between'>
            <Image src={picture} alt='profil' width={100} height={100} className='rounded-full block mx-auto' />
            <div className='w-[90%] flex flex-col gap-1'>
              {dashboardConf.nav.map((items, key) => {
                return <NavItems title={items.title} link={items.link} svg={items.svg} isActive={isActivePage(items.link)} key={key} />
              })}
            </div>
          </div>
          <div className='text-center mb-5'>
            <LogOut />
          </div>
        </div>
      </div>
    </>
  )
}
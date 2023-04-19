"use client"

import { FC, useState } from 'react'
import closeCircle from '@/public/svg/x-circle.svg'
import Image from 'next/image'

interface IModal {
  title: string
  children: React.ReactNode
  hasClickOnClose?: () => void
}

export const Modal: FC<IModal> = ({children, title, hasClickOnClose}) => {

  const [isOpen, setIsOpen] = useState<boolean>(true)

  const clickOnClose = () => {
    setIsOpen(prev => !prev)
    if (hasClickOnClose) {
      hasClickOnClose()
    }
  }

  return (
    <>
      { isOpen ? <div className='w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-dark opacity-90'>
        <div className='max-w-[450px] h-auto bg-white rounded-lg p-5 mx-2'>
          <div className='flex justify-between items-center font-bold text-[18px] mb-2'>
            <p>{title}</p>
            <button 
            className='text-[12px]'
            onClick={clickOnClose} >
              <Image src={closeCircle} alt='close' />
            </button>
          </div>
          <div className='py-2'>
            {children}
          </div>
        </div>
      </div> : null}
    </>
  )
}
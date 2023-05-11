"use client"

import { FC } from 'react'
import { useState } from 'react'

interface IQuestion {
  question: string
  answer: string
}

export const Question: FC<IQuestion> = ({question, answer}) => {

  const [isToggle, setIsToggle] = useState<boolean>(false)

  return (
    <div className='max-w-[600px] h-auto mx-auto my-5 border-2 border-[#ECECEC] rounded-xl cursor-pointer'>
      <div className='flex justify-between items-center h-16 px-5' onClick={() => setIsToggle(old => !old)}>
        <p className='text-base font-medium'>{question}</p>
        <span className='text-2xl font-bold'>
          {isToggle ? "-" : "+"}
        </span>
      </div>
      <p className={`${isToggle ? "block" : "hidden"} text-sm px-4 pb-3`}>{answer}</p>
    </div>
  )
}
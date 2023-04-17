"use client"

import { FC } from 'react'

interface ITextAreaDeckCreation {
  textAreaName: string
  textAreaRef: React.Ref<HTMLTextAreaElement>
}

export const TextAreaDeckCreation: FC<ITextAreaDeckCreation> = ({ textAreaName, textAreaRef}) => {

  return (
    <div>
      <p>{textAreaName}</p>
      <textarea 
      name={textAreaName} 
      className="w-[320px] h-[200px] resize-none border border-[#E6EBF2] rounded-lg p-1" 
      ref={textAreaRef} >
      </textarea>
    </div>
  )
}
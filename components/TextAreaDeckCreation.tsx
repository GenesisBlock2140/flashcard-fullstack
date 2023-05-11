import { FC } from 'react'

interface ITextAreaDeckCreation {
  textAreaName: string
  textAreaRef: React.Ref<HTMLTextAreaElement> 
  textUpdate: (text:string) => void
}

export const TextAreaDeckCreation: FC<ITextAreaDeckCreation> = ({ textAreaName, textAreaRef, textUpdate}) => {

  return (
    <div>
      <p>{textAreaName}</p>
      <textarea 
      name={textAreaName} 
      className="w-[320px] h-[200px] resize-none border border-[#E6EBF2] rounded-lg p-1" 
      onChange={(e) => textUpdate(e.currentTarget.value)}
      ref={textAreaRef} >
      </textarea>
    </div>
  )
}
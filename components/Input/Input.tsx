import { FC } from 'react'

interface IInput {
  type: string
  placeholder?: string
  inputRef: React.Ref<HTMLInputElement>
}

export const Input: FC<IInput> = ({ type, inputRef, placeholder }) => {
  return (
    <input 
    type={type}
    ref={inputRef}
    className='w-full h-10 text-dark border-2 border-[#f2f2f2] rounded-lg py-1 px-3'
    placeholder={placeholder ? placeholder : ""}
    />
  )
}
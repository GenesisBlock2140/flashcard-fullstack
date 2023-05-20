import { FC } from 'react'
import clsx from 'clsx'

interface IError {
  message: string
  classname?: string
}

export const Error: FC<IError> = ({ message, classname }) => {
  return (
    <div className={clsx([classname, 'w-full h-auto bg-red-200 p-3 mt-4 rounded-lg'])}>
      <p className='text-red-700'>{message}</p>
    </div>
  )
}
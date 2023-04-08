import { FC } from 'react'

interface IProgressBar {
  progress: number
}

export const ProgressBar: FC<IProgressBar> = ({ progress }) => {

  // "style" is used because tailwind class "w" with % is bug
  
  return (
    <div className='max-w-[250px] lg:max-w-[400px] block bg-dark-primary rounded-full'>
      <div className={` bg-primary rounded-full duration-500`} style={{width: progress + "%"}}>
        <p className='text-white  text-center font-medium'>
          {`${progress > 15 ? progress.toString()+"%" : "?"}`}
        </p>
      </div>
    </div>
  )
}
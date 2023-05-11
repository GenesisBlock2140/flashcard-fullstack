import { FC } from 'react'
import { Button } from './Button/Button'

interface IProfilWelcome {
  name: string
}

export const ProfilWelcome: FC<IProfilWelcome> = ({ name }) => {
  return (
    <div className='max-w-[1000px] h-auto lg:h-[300px] bg-slate-200 text-dark px-12 py-14 mb-2 rounded-lg'>
      <p className='text-2xl font-medium'>Bonjour {name},</p>
      <p className='my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus eu purus eu ornare. Nam ut felis elementum, tincidunt augue eu, pretium eros.</p>
      <Button text='+ Créer un deck' to='/deck/create' size='fit' color='black' />
    </div>
  )
}
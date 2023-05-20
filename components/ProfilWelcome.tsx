import { FC } from 'react'
import { Button } from './Button/Button'

interface IProfilWelcome {
  name: string
}

export const ProfilWelcome: FC<IProfilWelcome> = ({ name }) => {
  return (
    <div className='max-w-[1000px] h-auto lg:h-[300px] bg-slate-200 text-dark px-12 py-14 mb-2 rounded-lg'>
      <p className='text-2xl font-medium'>Bonjour {name},</p>
      <p className='my-8'>Bienvenue sur votre espace utilisateur, que voulez-vous faire aujourd'hui ? Apprendre de nouvelles compétences ? Réviser un sujet ? Vous êtes au bon endroit.</p>
      <Button text='+ Créer un deck' to='/deck/create' size='fit' color='black' />
    </div>
  )
}
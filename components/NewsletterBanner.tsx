import { FC } from 'react'

interface INewsletterBanner {}

export const NewsletterBanner: FC<INewsletterBanner> = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-dark text-white rounded-lg p-5 lg:py-10'>
      <p className='text-xl lg:text-3xl font-bold'>Abonnez-vous à notre newsletter</p>
      <p>Du contenu exclusif, sans spam, seulement un mail utile tout les 3 mois</p>
      <input type="text" className='w-[280px] text-dark rounded-lg m-2 mt-5 p-1' />
      <button className=''>S'inscrire</button>
    </div>
  )
}
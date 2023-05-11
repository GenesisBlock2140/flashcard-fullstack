import { FC } from 'react'
import Image from "next/image";
import checkSvg from '@/public/svg/check.svg'

interface ICardPricing {
  title: string
  description: string
  price: string
  isCurrentPlan: boolean
  includes: string[]
}

export const CardPricing: FC<ICardPricing> = ({title, description, price, isCurrentPlan, includes}) => {
  return (
    <div className="w-[300px] border-2 border-slate-100 rounded-lg p-5 my-10">
    <p className="text-2xl font-semibold">
      {title}
    </p>
    <p className="text-light-gray">
      {description}
    </p>
    <div className=" my-4">
      <p className="text-light-gray"><span className="font-semibold text-dark text-4xl">{price}</span>€ par mois</p>
      <button className={`${isCurrentPlan ? 'bg-slate-100 text-light-gray' : 'bg-dark text-white'} rounded-lg py-2 px-4 mt-2`}>
        {isCurrentPlan ? "Plan actuel" : "En savoir plus"}
      </button>
    </div>
    <div>
      <p className="my-2">Avantage</p>
      <ul className="px-1 text-light-gray">
        {includes.map((avantages, key) => {
          return <li className="flex gap-1" key={key}><Image src={checkSvg} alt="check" />{avantages}</li>
        })}
      </ul>
    </div>
  </div>
  )
}
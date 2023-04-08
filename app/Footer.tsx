import { FC } from "react"

interface IFooter {}

export const Footer: FC<IFooter> = () => {
  return (
    <footer className="bg-[#F7F7F7]">
      <div className="max-w-[1200px] h-[300px] mx-auto flex justify-between items-center flex-wrap text-xl font-medium">
        <div>
          <p className="text-3xl font-bold">Flashcard</p>
          <p>Développé par LIEN</p>
          <p className="mt-10">©2023. All rights reserved</p>
        </div>
        <div>
          <p className="font-bold">Une question ?</p>
          <p className="text-2xl font-bold">contact@nomdusite.com</p>
          <p className="text-[15px] text-[#373737]">N’hésitez pas à donner votre feedback, des suggestions !</p>
        </div>
      </div>
    </footer>
  )
}
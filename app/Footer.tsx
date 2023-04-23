import { FC } from "react"

interface IFooter {}

export const Footer: FC<IFooter> = () => {
  return (
    <footer className="max-w-[1200px] h-[70px] mx-auto flex justify-between items-center flex-wrap text-sm font-light border-[#e2e8f0] border-t">
        <p className="text-center">Flashcard est <span className="font-medium">open source</span>, développé par <a href="https://github.com/GenesisBlock2140/flashcard-fullstack">@GenesisBlock</a></p>
        <p className="w-full lg:w-auto text-center flex items-center justify-center">contact@nomdusite.com</p>
    </footer>
  )
}
import { FC } from "react"
import { socialConf } from "@/config/socialConf"

interface IFooter {}

export const Footer: FC<IFooter> = () => {
  return (
    <footer className="max-w-[1200px] h-[70px] mx-auto flex justify-between items-center flex-wrap text-sm font-light">
      <p className="text-center">Flashcard est <span className="font-medium">open source</span>, développé par <a href={socialConf.github} target="_blank">@GenesisBlock</a></p>
      <p className="w-full lg:w-auto text-center flex items-center justify-center">{socialConf.mail}</p>
    </footer>
  )
}
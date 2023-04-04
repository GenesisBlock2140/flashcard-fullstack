import { ButtonLink } from "@/components/Button/ButtonLink"
import flashcardPres from "../public/flashcard-pres.png"
import Image from "next/image"

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <section className="text-center my-[50px] lg:mt-[170px] lg:mb-[210px]">
        <h1 className="text-[45px] leading-[3rem] font-roboto font-bold lg:text-[75px] lg:leading-[5rem]">Flashcard <br/> pour apprendre</h1>
        <p className="text-[28px] m-10">Créez vos flashcard gratuitement <br/> dans un environnement minimaliste</p>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <ButtonLink text="Tutoriel" to={"/"} format="black" />
          <ButtonLink text="Inscription" to={"/"} format="bleu" />
        </div>
      </section>
      <section className="text-center">
        <p className="text-xl font-roboto">"Simple, rapide, intuitif ..."</p>
        <h2 className="text-4xl font-roboto font-bold">Facile à prendre en main</h2>
        <p className="text-xl">Une interface conçu pour le focus.</p>
        <div className="max-w-[1000px] h-[500] mx-auto rounded-lg my-10">
          <Image src={flashcardPres} alt="présentation schema flashcard" />
        </div>
      </section>
    </main>
  )
}

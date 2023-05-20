import { Metadata } from "next"
import { InfoCard } from "@/components/Card/InfoCard"
import { FlashCard } from "@/components/Card/FlashCard"
import { NewsletterBanner } from "@/components/NewsletterBanner"
import { Button } from "@/components/Button/Button"
import Navbar from "./Navbar"
import { Footer } from "./Footer"

export const metadata: Metadata = {
  title: "Flashcard en ligne - Gratuit",
  description: "Flashcard en ligne vous permet de réaliser des flashcards gratuitement."
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='max-w-[1200px] mx-auto px-2'>
        <section className="text-center my-[80px] lg:mt-[190px] lg:mb-[230px]">
          <h1 className="text-3xl text-dark leading-[2.5rem] font-bold lg:text-6xl lg:leading-[4rem]">Créez vos flashcards <br/> pour réviser simplement.</h1>
          <div className="lg:text-xl text-light-gray my-6">
            <p>Créez vos flashcards gratuitement dans un environnement minimaliste.</p>
            <p>Inscrivez-vous en moins de 10 secondes</p>
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap text-center">
            <Button text="Tutoriel" to={"/faq"} color="white" />
            <Button text="Inscription" to={"/login"} color="black" />
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl lg:text-4xl text-dark font-bold">Facile à prendre en main</h2>
          <p className="lg:text-xl text-light-gray">Une interface conçue pour la productivité.</p>
          <div className="flex flex-wrap items-center justify-around gap-4 m-8">
            <InfoCard 
              title="Simple" 
              description="Une interface minimaliste pour vous garantir l'essentiel." 
              icon="Smile"
            />
            <InfoCard 
              title="Rapide" 
              description="Réalisez vos flashcards en quelques clics." 
              icon="Rocket" 
            />
            <InfoCard 
              title="Intuitif" 
              description="Un environnement simple, à portée de tous." 
              icon="Bulb"
            />
          </div>
        </section>
        <section className="flex flex-wrap justify-around items-center my-20 lg:my-[200px]">
          <div className="lg:max-w-[50%] text-light-gray text-center lg:text-left lg:text-lg lg:p-10 mb-5">
            <h2 className="text-3xl text-dark font-bold mb-2">Une flashcard c'est quoi ?</h2>
            <p className="pt-3">Une flashcard est une carte virtuelle avec une face recto et une face verso, au recto on écrit la question, au verso la réponse /ou une explication.</p>
            <p className="mb-5">Un deck est composé de plusieurs flashcards, c'est un outil très efficace pour les révisions / apprendre un sujet.</p>
            <p className="mt-2">Une fois votre deck crée, vous pouvez <span className="font-semibold">réviser un sujet en quelques minutes</span>.</p>
          </div>
          <div className="text-center lg:w-[350px]">
            <FlashCard 
              textRecto="Quelle est la capitale de la France?" 
              textVerso="Paris"
            />
            <p className="text-[12px] mt-2">
              Exemple de flashcard, 
              <span className="font-bold"> cliquez pour voir la réponse.</span>
            </p>
          </div>
        </section>
        <NewsletterBanner />
      </div>
      <Footer />
    </>
  )
}

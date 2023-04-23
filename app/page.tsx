import { ButtonLink } from "@/components/Button/ButtonLink"
import { Metadata } from "next"
import { InfoCard } from "@/components/Card/InfoCard"
import { FlashCard } from "@/components/Card/FlashCard"
import { NewsletterBanner } from "@/components/NewsletterBanner"

export const metadata: Metadata = {
  title: "Flashcard en ligne - Gratuit",
  description: "Flashcard en ligne vous permet de réaliser des flashcards gratuitement."
}

export default function Home() {
  return (
    <div>
      <section className="text-center my-[80px] lg:mt-[170px] lg:mb-[210px]">
        <h1 className="text-3xl text-dark leading-[2.5rem] font-bold lg:text-6xl lg:leading-[4rem]">Créez vos flashcards <br/> pour réviser simplement.</h1>
        <div className="lg:text-xl text-light-gray my-6">
          <p>Créez vos flashcards gratuitement dans un environnement minimaliste.</p>
          <p>Inscrivez-vous en moins de 10 secondes</p>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap text-center">
          <ButtonLink text="Tutoriel" to={"/faq"} color="white" />
          <ButtonLink text="Inscription" to={"/login"} color="black" />
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-3xl lg:text-4xl text-dark font-bold">Facile à prendre en main</h2>
        <p className="lg:text-xl text-light-gray">Une interface conçu pour la productivité.</p>
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
            description="Un environnement simple, a portée de tous." 
            icon="Bulb"
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-around items-center my-20 lg:my-[200px]">
        <div className="lg:max-w-[50%] text-light-gray text-center lg:text-left lg:text-xl lg:p-10">
          <h2 className="text-3xl text-dark font-bold mb-2">Une flashcard c'est quoi ?</h2>
          <p>Une interface conçu pour la productivité, une interface conçu pour la productivité.</p>
          <p className="mb-5">Voici un petit shema intéractif pour te permettre de comprendre.</p>
        </div>
        <div className="text-center lg:w-[350px]">
          <FlashCard 
            textRecto="Quelle est la capitale de la France?" 
            textVerso="Paris"
          />
          <p className="text-[12px]">
            Exemple de flashcard, 
            <span className="font-bold"> cliquez pour voir la réponse.</span>
          </p>
        </div>
      </section>
      <NewsletterBanner />
    </div>
  )
}

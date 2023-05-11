import { Question } from "@/components/Question";
import { faqConf } from "@/config/faqConf";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foire aux questions",
  description: "Réponse aux questions sur les Flashcards"
}

export default function Faq () {

  return (
    <>
      <h1 className="text-4xl lg:text-[48px] font-bold text-dark text-center">Foire aux questions </h1>
      <p className="max-w-[600px] mx-auto my-10">Les réponses à vos questions les plus fréquentes sur notre application et son fonctionnement, en toute transparence.</p>
      <section>
        {faqConf.q.map((data, key) => {
          return <Question question={data.question} answer={data.answer} key={key} />
        })}
      </section>
    </>
  )
}
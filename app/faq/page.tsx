import { Question } from "@/components/Question";
import { qData } from "@/utils/data/question"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foire aux questions",
  description: "Réponse aux questions sur les Flashcards"
}

export default function Faq () {

  return (
    <div className="my-10">
      <h1 className="text-4xl lg:text-[48px] font-bold text-dark text-center">Foire aux questions </h1>
      <p className="max-w-[600px] mx-auto my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis arcu, viverra et bibendum sed.</p>
      <section>
        {qData.map((data, key) => {
          return <Question question={data.question} answer={data.res} key={key} />
        })}
      </section>
    </div>
  )
}
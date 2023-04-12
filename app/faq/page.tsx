import { Question } from "@/components/Question";
import dataQ from "@/utils/data/question.json"
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
        <Question 
          question={dataQ.question}
          answer={dataQ.res}
        />
        <Question 
          question={dataQ.question2}
          answer={dataQ.res2}
        />
        <Question
          question={dataQ.question2}
          answer={dataQ.res2}
        />
      </section>
    </div>
  )
}
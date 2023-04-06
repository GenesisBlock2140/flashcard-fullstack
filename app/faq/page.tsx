import { Question } from "@/components/Question";
import dataQ from "@/utils/data/question.json"

export default function Faq () {
  return (
    <main className="max-w-[1200px] mx-auto my-20 p-2">
      <h1 className="text-4xl lg:text-[48px] font-roboto font-semibold text-center">Foire aux questions </h1>
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
    </main>
  )
}
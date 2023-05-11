import { socialConf } from "./socialConf"

interface IfaqConf {
  q: {
    question: string
    answer: string
  }[]
}

export const faqConf:IfaqConf = {
  q: [
    {
      question: "Est-ce que Flashcard est gratuit ?",
      answer: "Oui, flashcard est en service totalement gratuit et open source."
    },
    {
      question: "Comment créer des flashcards ?",
      answer: "C'est très simple, connecte toi puis rend toi dans 'Créer' dans ton tableau de bord."
    },
    {
      question: "C'est quoi un deck ?",
      answer: "Un deck est un ensemble de flashcards, par exemple un deck 'capitales' peut rassembler plusieurs flashcards sur les capitales des pays d'Europe."
    },
    {
      question: "Comment faire une suggestion ?",
      answer: "Vous souhaitez faire part de votre avis sur l'application ? Envoyez nous un mail à " + socialConf.mail
    },
  ]
}
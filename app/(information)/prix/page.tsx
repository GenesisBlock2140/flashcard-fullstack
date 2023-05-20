import { CardPricing } from "@/components/Card/CardPricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prix des Abonnements",
  description: "Consulter les prix des abonnements"
}

export default function Prix () {
  return (
    <>
      <h1 className="text-4xl lg:text-[48px] font-bold text-dark text-center">Abonnements </h1>
      <p className="max-w-[700px] mx-auto my-10">Trouvez l'abonnement qui vous correspond le mieux, pour travailler et apprendre dans des conditions optimales. Il est possible de résilier à tout moment sans justification.</p>
      <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center sm:justify-between">
        <CardPricing
          title="Normal" 
          description="Idéal pour une utilisation ordinaire" 
          price="0"
          isCurrentPlan={false}
          includes={["5 decks", "50 flashcards par deck", "Partagez vos decks"]}
        />
        <CardPricing
          title="Pro" 
          description="Pour une utilisation hebdo" 
          price="3.99"
          isCurrentPlan={false}
          includes={["20 decks", "60 flashcards par deck", "Partagez vos decks", "Nouveaux ajouts en Beta"]}
        />
        <CardPricing
          title="Expert" 
          description="Pour une utilisation quotidienne" 
          price="7.99"
          isCurrentPlan={false}
          includes={["100 decks", "80 flashcards par deck", "Partagez vos decks", "Nouveaux ajouts en Beta", "Autres avantages", "Autres avantages"]}
        />
      </div>
      <p className="text-sm text-center">*Ce site est en version Beta, <span className="font-semibold">aucun abonnement n'est fonctionnel</span>.</p>
    </>
  )
}
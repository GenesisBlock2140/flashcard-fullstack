import { CardPricing } from "@/components/Card/CardPricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abonnements",
  description: "Voir les différentes offres que propose le site"
}

export default function Pricing () {
  return (
    <>
      <h1 className="text-2xl">Abonnement</h1>
      <p className="my-2">Changez votre abonnement en fonction de vos besoins.</p>
      <div className="flex flex-wrap justify-center sm:justify-between">
        <CardPricing
          title="Normal" 
          description="Idéal pour une utilisation ordinaire" 
          price="0"
          isCurrentPlan={true}
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
      <div className="text-sm">
        <p>* Ceci est une version Beta, <span className="font-semibold">aucun abonnement n'est disponible.</span></p>
        <p>* L'utilisation du site est entièrement gratuite.</p>
      </div>
    </>
  )
}
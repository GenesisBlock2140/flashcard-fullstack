import profilSvg from '@/public/svg/profil.svg'
import academicSvg from '@/public/svg/academic.svg'
import lockSvg from '@/public/svg/lock.svg'
import pricingSvg from '@/public/svg/pricing.svg'

interface IdashboardConf {
  nav: {
    title: string
    link: string
    svg: any
  }[]
}

export const dashboardConf: IdashboardConf = {
  nav: [
    {
      title: "Profil",
      link: "/profil",
      svg: profilSvg
    },
    {
      title: "Créer",
      link: "/deck/create",
      svg: academicSvg
    },
    {
      title: "Informations",
      link: "/profil/details",
      svg: lockSvg
    },
    {
      title: "Abonnements",
      link: "/pricing",
      svg: pricingSvg
    }
  ]
}
"use client"

import { FC } from 'react'
import { signIn } from "next-auth/react"
import Image from "next/image"
import google from "@/public/svg/google.svg"
import github from "@/public/svg/github.svg"
import twitter from "@/public/svg/twitter.svg"

interface IConnectWith {
  provider: string
}

export const ConnectWith: FC<IConnectWith> = ({ provider }) => {

  // google provider default to avoid typescript error
  let imgProvier = google

  switch (provider.toLowerCase()) {
    case "github":
      imgProvier = github
      break;
    case "twitter":
      imgProvier = twitter
      break;
    default:
      imgProvier = google
      break;
  }

  return (
    <div className="w-[350px] flex items-center justify-center border-2 rounded-lg p-3 cursor-pointer hover:bg-slate-200 duration-300" onClick={() => signIn(provider.toLowerCase())}>
      <Image src={imgProvier} alt={provider} width={16} className="mr-2" />
      <p className="text-base">{provider}</p>
    </div>
  )
}
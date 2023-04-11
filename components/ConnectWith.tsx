"use client"

import { FC } from 'react'
import { signIn } from "next-auth/react"
import Image from "next/image"
import github from "../public/svg/github.svg"

interface IConnectWith {
  provider: string
}

export const ConnectWith: FC<IConnectWith> = ({ provider }) => {

  const imgProvier = provider === "github" ? github : ""

  return (
    <div className="w-[350px] block mx-auto border-2 rounded-lg p-3 m-6 cursor-pointer" onClick={() => signIn(provider)}>
      <Image src={imgProvier} alt={provider} width={22} className="inline-block mt-[-7px]" />
      <p className="font-medium text-[18px] inline-block">Github</p>
    </div>
  )
}
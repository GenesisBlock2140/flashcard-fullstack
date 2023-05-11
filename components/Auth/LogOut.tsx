"use client"

import { signOut } from 'next-auth/react'
import { FC } from 'react'

interface ILogOut {}

export const LogOut: FC<ILogOut> = () => {
  return (
    <button className='text-base' onClick={() => signOut()}>
      Déconnexion
    </button>
  )
}
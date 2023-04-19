import { FC } from 'react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'

interface IModalPublish {
  action?: () => void
  actionClose?: () => void
}

export const ModalPublish: FC<IModalPublish> = ({action, actionClose}) => {
  return (
    <Modal title="Publier le deck" hasClickOnClose={actionClose}>
      <p className="text-[18px] my-4">Voulez-vous vraiment publier ce deck ?</p>
      <Button text="Confirmer" color="black" action={action} />
    </Modal>
  )
}
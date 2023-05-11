import loadingSvg from '@/public/svg/loading.svg'
import Image from 'next/image'

export default function DeckLoading () {
  return(
    <div className='my-20 lg:my-40'>
      <Image src={loadingSvg} alt='Loading' width={100} className='block mx-auto animate-spin' />
    </div>
  )
}
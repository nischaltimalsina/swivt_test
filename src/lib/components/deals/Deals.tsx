
import { IDealCardProps } from '../../types'

const Deals = ({src, title}:IDealCardProps) => {
  return (
    <div className='h-[309px] w-[455px] flex-shrink-0 bg-white rounded-lg overflow-hidden'>
        <img className='w-full object-cover' src={src} alt={title} />
    </div>
  )
}

export default Deals
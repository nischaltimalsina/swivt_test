import React from 'react'
import { ICatalogueCardProps } from '../../types'
import Caption from '../typography/Captions'

const Catalogue = ({src,title}:ICatalogueCardProps) => {
  return (
    <div className="w-[172px]  flex-shrink-0">
    <div className='h-36 w-full rounded-lg bg-catalogue flex justify-center items-center box-shadow'>
      <img src={src} alt={title} className="h-[100px] w-28 object-contain catalogue-shadow" />
    </div>
    <Caption color='secondary' size='lg' fontWeight='medium' className=' p-4 leading-6 text-center'>{title}</Caption>
    </div>
  )
}

export default Catalogue
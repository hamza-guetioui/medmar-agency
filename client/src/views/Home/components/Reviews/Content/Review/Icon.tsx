import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Icon() {
  return (
    <div className='absolute top-4 left-6 text-4xl'>
        <FontAwesomeIcon icon={faQuoteLeft} />
    </div>
  )
}

export default Icon
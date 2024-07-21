import React from 'react'
import styles from './Styles.module.css';
import Image from 'next/image';

function Media() {
  return (
    <>
      <div className='absolute top-5 right-12 rounded-xl  h-[86%] w-6/12 '>
        <Image src="/images/marketing.jpeg" width={736} height={1349} className='object-cover opacity-95 object-top rounded-xl w-full h-full' alt='imag'/>

        <Image  src="/images/videoPlayer.jpg" width={220} height={140} alt='t' className='absolute brightness-110 top-[37%] -left-[40%] rounded-xl shadow-lg'/>
        <Image  src="/images/socielMedia.gif" width={180} height={120} alt='t' className='absolute brightness-50  -bottom-8 -right-8 rounded-xl shadow-xl'/>
      </div>
    
    </>
  )
}

export default Media
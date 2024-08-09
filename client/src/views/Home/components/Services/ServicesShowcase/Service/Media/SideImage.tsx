import React from 'react'
import Image from 'next/image';
import styles from './Styles.module.css'


const SideImage = () => {
  return (
    <Image src="/images/socielMedia.gif" width={736} height={1349} className={styles.SideImage} alt='imag'/>

  )
}

export default SideImage
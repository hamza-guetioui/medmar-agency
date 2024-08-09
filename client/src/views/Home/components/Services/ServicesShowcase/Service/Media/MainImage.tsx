import React from 'react'
import Image from 'next/image';
import styles from './Styles.module.css'

const MainImage = () => {
  return (
    <Image src="/images/marketing.jpeg" width={736} height={1349} className={styles.MainImage} alt='imag'/>

  )
}

export default MainImage
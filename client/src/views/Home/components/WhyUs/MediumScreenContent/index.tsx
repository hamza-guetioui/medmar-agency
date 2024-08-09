import React from 'react'
import InfoSection from '../InfoSection'
import ContentSection from './ContentSection'
import styles from './Styles.module.css'

function index() {
  return (
    <div className={styles.Container}>
        <InfoSection />
        <ContentSection />
    </div>
  )
}

export default index
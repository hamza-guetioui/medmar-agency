import React from 'react'
import styles from './Styles.module.css'
import Title from './Title'
import Paragraph from './Paragraph'

function index() {
  return (
    <div className={styles.Container}>
        <Title/>
        <Paragraph/>
    </div>
  )
}

export default index
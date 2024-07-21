import React from 'react'
import Title from './Title'
import styles from './Styles.module.css'
import Paragraph from './Paragraph'
import Navigation from './Navigation'

 

function Index() {
  return (
    <div className={styles.Header}>
        <Title/>
        <div>
        <Paragraph/>
        <Navigation/>
        </div>
      
       
    </div>
  )
}

export default Index
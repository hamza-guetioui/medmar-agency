import React from 'react'

import InfoSection from "./InfoSection"
import LinkHubSection from "./LinkHubSection"

import styles from "./Styles.module.css"

function Index() {
  return (
    <div className={styles.Container}>
      <InfoSection />
      <LinkHubSection />
    </div>
  )
}

export default Index
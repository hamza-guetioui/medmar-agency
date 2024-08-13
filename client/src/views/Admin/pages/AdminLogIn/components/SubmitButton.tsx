import React from 'react'
import styles from './Styles.module.css'

type Props = {}

const SubmitButton = (props: Props) => {
  return (
    <button type='submit' className={styles.logIn}>Log In</button>
  )
}

export default SubmitButton
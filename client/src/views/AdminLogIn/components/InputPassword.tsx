import React from 'react'
import styles from './Styles.module.css'

type Props = {}

const InputPassword = (props: Props) => {
  return (
    <div className={styles.inputWrapper}>
    <label className={styles.Label}>password : </label>
    <input type="password" name="password" className={styles.Input} placeholder="entry yoour password" />
    </div>
  )
}

export default InputPassword
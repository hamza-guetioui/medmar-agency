import React from 'react'
import InputText from './InputText'
import InputPassword from './InputPassword'
import Title from './Title'
import styles from './Styles.module.css'
import SubmitButton from './SubmitButton'

type Props = {
    
}

const Form = (props: Props) => {
  return (
    <form className={styles.Form}>
        <Title/>
        <InputText/>
        <InputPassword/>
        <SubmitButton/>
    </form>
  )
}

export default Form
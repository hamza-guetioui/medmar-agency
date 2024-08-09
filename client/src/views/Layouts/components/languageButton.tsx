"use client"
import { useTranslateContext } from '@/context/TranslationContext'
import React from 'react'

type Props = {}

const LanguageButton = (props: Props) => {
    const {language , setLanguage } = useTranslateContext()
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">en</option>
        <option value="fr">fr</option>
    </select>
  )
}

export default LanguageButton
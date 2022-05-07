import React from 'react'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../hooks'
import styles from '../styles/components/WordsPanel.module.scss'
import LetterBlock from './words-panel/LetterBlock'

export interface WordsPanelProps {
  className: string
}

export default function WordsPanel({ className }: WordsPanelProps) {
  const attempts = useAppSelector((state) => state.game.attempts);
  const lastLetter = useAppSelector((state) => state.game.lastLetter);
  const intendedWord = useAppSelector((state) => state.game.intendedWord);

  return (
    <main className={styles.panel + " " + className}>
      {attempts.map((row, rowIndex) => {
        return row.map((letter, letterIndex) => {
          let blockState: "empty" | "letter" | "incorrect" | "wrongPlacement" | "correct";
          if (rowIndex < lastLetter[0]) {
            if (letter == intendedWord[letterIndex]) blockState = "correct"
            else if (intendedWord.includes(letter)) blockState = "wrongPlacement"
            else blockState = "incorrect"

          } else if (letter) blockState = "letter"
          else blockState = "empty"
          return (<LetterBlock key={rowIndex * row.length + letterIndex} state={blockState}>{letter}</LetterBlock>)
        })
      })}
    </main>
  )
}

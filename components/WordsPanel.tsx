import React from 'react'
import { useAppSelector } from '../hooks'
import styles from '../styles/components/WordsPanel.module.scss'
import letterBlockStyles from '../styles/components/LetterBlock.module.scss'
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

          let anim;
          if (blockState === "correct") anim = `${letterBlockStyles.correctAnim} 0.5s ease-in-out forwards 1 ${0.25 * letterIndex}s`;
          else if (blockState === "wrongPlacement") anim = `${letterBlockStyles.wrongPlacementAnim} 0.5s ease-in-out forwards 1 ${0.25 * letterIndex}s`;
          else if (blockState === "incorrect") anim = `${letterBlockStyles.incorrectAnim} 0.5s ease-in-out forwards 1 ${0.25 * letterIndex}s`;
          else if (blockState === "letter") anim = `${letterBlockStyles.letterAnim} 0.1s ease-in-out forwards 1`;
          else anim = "none";

          return (<LetterBlock
            key={rowIndex * row.length + letterIndex}
            state={blockState}
            style={{animation: anim}}
          >
            {letter}
          </LetterBlock>)
        })
      })}
    </main>
  )
}

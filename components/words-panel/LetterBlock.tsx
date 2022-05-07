import React from 'react'
import styles from '../../styles/components/LetterBlock.module.scss'

export interface LetterBlockProps {
    children: React.ReactNode,
    state: "empty" | "letter" | "incorrect" | "wrongPlacement" | "correct"
}

export default function LetterBlock({ children, state }: LetterBlockProps) {
    return (
        <div className={styles.letterBlock + " " + styles[state]}>{children}</div>
    )
}

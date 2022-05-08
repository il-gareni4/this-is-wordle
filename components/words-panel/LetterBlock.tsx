import React from 'react'
import styles from '../../styles/components/LetterBlock.module.scss'

export interface LetterBlockProps {
    children: React.ReactNode,
    state: "empty" | "letter" | "incorrect" | "wrongPlacement" | "correct",
    style?: React.CSSProperties
}

export default function LetterBlock({ children, state, style }: LetterBlockProps) {
    return (
        <div className={styles.letterBlock + " " + styles[state]} style={style}>{children}</div>
    )
}

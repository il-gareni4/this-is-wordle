import React from 'react'
import styles from '../../styles/components/KeyboardKey.module.scss'

export interface KeyboardKeyProps {
    children: React.ReactNode,
    onClick: () => void,
    style: string[]
}

export default function KeyboardKey({children, onClick, style}: KeyboardKeyProps) {
    return (
        <button className={styles.key + " " + style.map((style) => styles[style]).join(" ")} onClick={onClick}><div>{children}</div></button>
    )
}

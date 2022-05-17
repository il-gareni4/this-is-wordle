import * as React from 'react'
import styles from '../styles/components/NavbarButton.module.scss'

export interface NavbarButtonProps {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent) => void
}

export default function NavbarButton({children, onClick}: NavbarButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
        {children}
    </button>
  )
}

import * as React from 'react'
import styles from '../styles/components/NavbarButton.module.scss'

export interface NavbarButtonProps {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent) => void,
    withIcon?: boolean
}

export default function NavbarButton({children, onClick, withIcon}: NavbarButtonProps) {
  return (
    <button className={styles.btn + " " + (withIcon ? styles.withIcon : "")} onClick={onClick}>
        {children}
    </button>
  )
}

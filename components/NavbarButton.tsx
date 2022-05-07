import * as React from 'react'
import styles from '../styles/components/NavbarButton.module.scss'

export interface NavbarButtonProps {
    children: React.ReactNode
}

export default function NavbarButton({children}: NavbarButtonProps) {
  return (
    <button className={styles.btn}>
        {children}
    </button>
  )
}

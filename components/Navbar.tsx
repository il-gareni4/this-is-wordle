import React from 'react'
import Logo from './icons/Logo'
import styles from '../styles/components/Navbar.module.scss'
import NavbarButton from './NavbarButton'
import InfoCircleIcon from './icons/InfoCircleIcon'
import RankingIcon from './icons/RankingIcon'
import SettingIcon from './icons/SettingIcon'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <NavbarButton><InfoCircleIcon /></NavbarButton>
            <Logo />
            <div className={styles.rightButtons}>
                <NavbarButton><RankingIcon /></NavbarButton>
                <NavbarButton><SettingIcon /></NavbarButton>
            </div>
        </nav>
    )
}

import React from 'react'
import Logo from './icons/Logo'
import styles from '../styles/components/Navbar.module.scss'
import NavbarButton from './NavbarButton'
import InfoCircleIcon from './icons/InfoCircleIcon'
import RankingIcon from './icons/RankingIcon'
import SettingIcon from './icons/SettingIcon'

interface NavbarProps {
    onStatsClick: (e: React.MouseEvent) => void
}

export default function Navbar({onStatsClick}: NavbarProps) {
    return (
        <nav className={styles.navbar}>
            <NavbarButton onClick={() => 0}><InfoCircleIcon /></NavbarButton>
            <Logo />
            <div className={styles.rightButtons}>
                <NavbarButton onClick={onStatsClick}><RankingIcon /></NavbarButton>
                <NavbarButton onClick={() => 0}><SettingIcon /></NavbarButton>
            </div>
        </nav>
    )
}

import React from 'react'
import Logo from './icons/Logo'
import styles from '../styles/components/Navbar.module.scss'
import NavbarButton from './NavbarButton'
import InfoCircleIcon from './icons/InfoCircleIcon'
import RankingIcon from './icons/RankingIcon'
import SettingIcon from './icons/SettingIcon'
import { useAppDispatch, useAppSelector } from '../hooks'

interface NavbarProps {
    onStatsClick: (e: React.MouseEvent) => void,
    onGameResultClick: (e: React.MouseEvent) => void
}

export default function Navbar({ onStatsClick, onGameResultClick }: NavbarProps) {
    const dispatch = useAppDispatch()
    const gameEnded = useAppSelector((state) => state.game.gameEnded)

    return (
        <nav className={styles.navbar}>
            <NavbarButton onClick={() => 0} withIcon><InfoCircleIcon /></NavbarButton>
            {gameEnded ? <NavbarButton onClick={onGameResultClick}>Game results</NavbarButton> : <Logo />}
            <div className={styles.rightButtons}>
                <NavbarButton onClick={onStatsClick} withIcon><RankingIcon /></NavbarButton>
                <NavbarButton onClick={() => 0} withIcon><SettingIcon /></NavbarButton>
            </div>
        </nav>
    )
}

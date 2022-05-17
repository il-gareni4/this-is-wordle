import React from 'react'
import styles from '../styles/components/Modal.module.scss'
import CrossIcon from './icons/CrossIcon'

interface ModalProps {
    children: React.ReactNode,
    blackoutClass?: string,
    windowClass?: string,
    onClose: () => void
}

export default function Modal({ children, blackoutClass, windowClass, onClose }: ModalProps) {
    return (
        <div className={styles.blackout + " " + blackoutClass} onMouseDown={onClose}>
            <div className={styles.window + " " + windowClass} onMouseDown={(e) => e.stopPropagation()}>
                {children}
                <div className={styles.crossIcon} onClick={onClose}>
                    <CrossIcon />
                </div>
            </div>
        </div>
    )
}

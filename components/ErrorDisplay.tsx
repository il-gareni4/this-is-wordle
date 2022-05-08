import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../hooks'
import styles from "../styles/components/ErrorDisplay.module.scss"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ErrorDisplay() {
    type ErrorType = { time: number, message: string };
    const [lastErrors, setLastErrors] = useState<ErrorType[]>([]);
    const [latestError, setLastestError] = useState<ErrorType | null>(null);
    const [errorToDelete, setErrorToDelete] = useState<number | null>(null)
    const display = useRef<HTMLDivElement>(null)

    const error = useAppSelector((state) => state.game.error)

    useEffect(() => {
        if (!error) return
        if (lastErrors.length >= 5) {
            setLastestError(error);
            return
        }
        else if (latestError && latestError.time == error.time) return;

        const newLastErrors = [...lastErrors]
        newLastErrors.push(error);
        setLastErrors(newLastErrors);
        setLastestError(error);

        setTimeout(() => {
            setErrorToDelete(error.time)
        }, 2000)
    }, [error, lastErrors, latestError])

    useEffect(() => {
        if (errorToDelete === null) return;
        setLastErrors(lastErrors.filter(err => err.time !== errorToDelete))
        setErrorToDelete(null);
    }, [errorToDelete, lastErrors])


    return (
        <div className={styles.display} ref={display}>
            <TransitionGroup>
                {
                    lastErrors.slice().reverse().map(entry => {
                        return (<CSSTransition
                            key={entry.time}
                            timeout={200}
                            classNames={{
                                enter: styles.errorMessageEnter,
                                enterActive: styles.errorMessageEnterActive,
                                exit: styles.errorMessageExit,
                                exitActive: styles.errorMessageExitActive,
                            }}
                        >
                            <div className={styles.errorMessage} key={entry.time}>
                                {entry.message}
                            </div>
                        </CSSTransition>)
                    })
                }
            </TransitionGroup>
        </div>
    )
}

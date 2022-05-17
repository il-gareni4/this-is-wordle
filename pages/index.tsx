import { addLetter, confirmWord, removeLetter } from '../store/gameSlice'
import { useAppDispatch } from '../hooks'
import React, { useEffect, useState } from 'react'
import ErrorDisplay from '../components/ErrorDisplay'
import Head from 'next/head'
import Keyboard from '../components/Keyboard'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import type { NextPage } from 'next'
import WordsPanel from '../components/WordsPanel'
import Modal from '../components/Modal'
import { CSSTransition } from 'react-transition-group'


const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [gameModal, setGameModal] = useState(false)
  const [statsModal, setStatsModal] = useState(false)

  useEffect(() => {
    const keyAction = (ev: KeyboardEvent) => {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const letter = ev.key.toUpperCase();

      if (alphabet.includes(letter)) dispatch(addLetter(letter))
      else if (ev.key === "Backspace") dispatch(removeLetter())
      else if (ev.key === "Enter") dispatch(confirmWord())
    };
    window.addEventListener("keydown", keyAction);
    return () => {
      window.removeEventListener("keydown", keyAction);
    };
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>This is Wordle</title>
      </Head>
      <Navbar onStatsClick={() => setStatsModal(true)} />
      <div className={styles.container}>
        <WordsPanel className={styles.panel} />
        <Keyboard className={styles.keyboard} />
      </div>
      <ErrorDisplay />
      <CSSTransition
        in={gameModal}
        timeout={{ enter: 250, exit: 200 }}
        unmountOnExit
        classNames={{
          enter: styles.modalEnter,
          enterActive: styles.modalEnterActive,
          exit: styles.modalExit,
          exitActive: styles.modalExitActive
        }}
      >
        <Modal
          onClose={() => setGameModal(false)}
          blackoutClass={styles.modalBlackout}
          windowClass={styles.modalWindow}
        >
          <h2>Game</h2>
        </Modal>
      </CSSTransition>
      <CSSTransition
        in={statsModal}
        timeout={{ enter: 250, exit: 200 }}
        unmountOnExit
        classNames={{
          enter: styles.modalEnter,
          enterActive: styles.modalEnterActive,
          exit: styles.modalExit,
          exitActive: styles.modalExitActive
        }}
      >
        <Modal
          onClose={() => setStatsModal(false)}
          blackoutClass={styles.modalBlackout}
          windowClass={styles.modalWindow}
        >
          <h2 className={styles.statsTitle}>Statistics</h2>
          <div className={styles.statsList}>
            <div className={styles.statsElement}>
              <h3>8</h3>
              <div>Games</div>
            </div>
            <div className={styles.statsSeparator} />
            <div className={styles.statsElement}>
              <h3>5</h3>
              <div>Wins</div>
            </div>
            <div className={styles.statsSeparator} />
            <div className={styles.statsElement}>
              <h3>62.5%</h3>
              <div>Win %</div>
            </div>
            <div className={styles.statsSeparator} />
            <div className={styles.statsElement}>
              <h3>1</h3>
              <div>Current<br />streak</div>
            </div>
            <div className={styles.statsSeparator} />
            <div className={styles.statsElement}>
              <h3>3</h3>
              <div>Max<br />streak</div>
            </div>
          </div>
        </Modal>
      </CSSTransition>
    </>
  )
}

export default Home

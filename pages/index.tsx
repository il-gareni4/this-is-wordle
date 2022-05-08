import { addLetter, confirmWord, removeLetter } from '../store/gameSlice'
import { useAppDispatch } from '../hooks'
import React, { useEffect } from 'react'
import ErrorDisplay from '../components/ErrorDisplay'
import Head from 'next/head'
import Keyboard from '../components/Keyboard'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import type { NextPage } from 'next'
import WordsPanel from '../components/WordsPanel'


const Home: NextPage = () => {
  const dispatch = useAppDispatch();

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
      <Navbar />
      <div className={styles.container}>
        <WordsPanel className={styles.panel} />
        <Keyboard className={styles.keyboard} />
      </div>
      <ErrorDisplay />
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import RightArrowIcon from '../components/icons/RightArrowIcon'
import Keyboard from '../components/Keyboard'
import KeyboardKey from '../components/keyboard/KeyboardKey'
import Navbar from '../components/Navbar'
import WordsPanel from '../components/WordsPanel'
import { useAppDispatch } from '../hooks'
import { addLetter, confirmWord, removeLetter } from '../store/gameSlice'
import styles from '../styles/Home.module.scss'


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
    </>
  )
}

export default Home

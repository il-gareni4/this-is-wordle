import React, { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { addLetter, confirmWord, removeLetter } from '../store/gameSlice'
import styles from '../styles/components/Keyboard.module.scss'
import RightArrowIcon from './icons/RightArrowIcon'
import TagCrossIcon from './icons/TagCrossIcon'
import KeyboardKey from './keyboard/KeyboardKey'

export interface KeyboardProps {
    className: string
}

export default function Keyboard({ className }: KeyboardProps) {
    const dispatch = useAppDispatch();
    const lettersState = useAppSelector((state) => state.game.lettersState);

    return (
        <div className={className + " " + styles.keyboard}>
            <div className={styles.keyboardRow}>
                <KeyboardKey onClick={() => dispatch(addLetter("Q"))} style={[lettersState['Q']]}>Q</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("W"))} style={[lettersState['W']]}>W</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("E"))} style={[lettersState['E']]}>E</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("R"))} style={[lettersState['R']]}>R</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("T"))} style={[lettersState['T']]}>T</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("Y"))} style={[lettersState['Y']]}>Y</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("U"))} style={[lettersState['U']]}>U</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("I"))} style={[lettersState['I']]}>I</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("O"))} style={[lettersState['O']]}>O</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("P"))} style={[lettersState['P']]}>P</KeyboardKey>
            </div>
            <div className={styles.keyboardRow}>
                <KeyboardKey onClick={() => dispatch(addLetter("A"))} style={[lettersState['A']]}>A</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("S"))} style={[lettersState['S']]}>S</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("D"))} style={[lettersState['D']]}>D</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("F"))} style={[lettersState['F']]}>F</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("G"))} style={[lettersState['G']]}>G</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("H"))} style={[lettersState['H']]}>H</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("J"))} style={[lettersState['J']]}>J</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("K"))} style={[lettersState['K']]}>K</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("L"))} style={[lettersState['L']]}>L</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(removeLetter())} style={["dark"]}>
                    <TagCrossIcon />
                </KeyboardKey>
            </div>
            <div className={styles.keyboardRow}>
                <KeyboardKey onClick={() => dispatch(addLetter("Z"))} style={[lettersState['Z']]}>Z</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("X"))} style={[lettersState['X']]}>X</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("C"))} style={[lettersState['C']]}>C</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("V"))} style={[lettersState['V']]}>V</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("B"))} style={[lettersState['B']]}>B</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("N"))} style={[lettersState['N']]}>N</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(addLetter("M"))} style={[lettersState['M']]}>M</KeyboardKey>
                <KeyboardKey onClick={() => dispatch(confirmWord())} style={["long", "blue"]}>
                    <RightArrowIcon />
                </KeyboardKey>
            </div>
        </div>
    )
}

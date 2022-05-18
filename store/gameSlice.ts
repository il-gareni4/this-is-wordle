import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { time } from 'console';
import words5 from "../data/words5"

interface GameState {
    intendedWord: string,
    maxTries: number,
    attempts: string[][],
    lastLetter: number[],
    lettersState: any,
    wordsList: any,
    error?: { time: number, message: string },
    gameEnded: boolean,
    gameResult: boolean,
    stats: { totalGames: number, gamesWon: number, currentStreak: number, maxStreak: number }
}

const words = Object.keys(words5);

const initialState: GameState = {
    intendedWord: words[Math.floor(Math.random() * words.length)].toUpperCase(),
    maxTries: 6,
    attempts: [],
    lastLetter: [0, 0],
    lettersState: {
        A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '',
        I: '', J: '', K: '', L: '', M: '', N: '', O: '', P: '',
        Q: '', R: '', S: '', T: '', U: '', V: '', W: '', X: '',
        Y: '', Z: ''
    },
    wordsList: words5,
    gameEnded: false,
    gameResult: false,
    stats: {
        totalGames: 0,
        gamesWon: 0,
        currentStreak: 0,
        maxStreak: 0
    }
}

for (let i = 0; i < initialState.maxTries; i++) {
    const wordPart = new Array(initialState.intendedWord.length);
    for (let j = 0; j < initialState.intendedWord.length; j++) {
        wordPart[j] = ''
    }
    initialState.attempts.push(wordPart);
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addLetter: (state, payload: PayloadAction<string>) => {
            if (state.gameEnded || state.lastLetter[1] >= state.intendedWord.length) return;
            else {
                state.attempts[state.lastLetter[0]][state.lastLetter[1]] = payload.payload;
                state.lastLetter = [state.lastLetter[0], state.lastLetter[1] + 1];
            }
        },
        removeLetter: (state) => {
            if (state.gameEnded || state.lastLetter[1] <= 0) return;
            else {
                state.attempts[state.lastLetter[0]][state.lastLetter[1] - 1] = "";
                state.lastLetter = [state.lastLetter[0], state.lastLetter[1] - 1];
            }
        },
        confirmWord: (state) => {
            if (state.gameEnded || state.lastLetter[1] < state.intendedWord.length) return;
            if (!state.wordsList.hasOwnProperty(state.attempts[state.lastLetter[0]].join("").toLocaleLowerCase())) {
                state.error = { time: Date.now(), message: "Not in word list" }
                return;
            }
            for (let i = 0; i < state.attempts[0].length; i++) {
                const letter = state.attempts[state.lastLetter[0]][i]
                if (state.intendedWord[i] === letter) state.lettersState[letter] = "green";
                else if (state.intendedWord.includes(letter) && state.lettersState[letter] !== "green") state.lettersState[letter] = "yellow";
                else if (state.lettersState[letter] !== "green" && state.lettersState[letter] !== "yellow") state.lettersState[letter] = "black";
            }
            state.lastLetter = [state.lastLetter[0] + 1, 0];

            const wordFound = state.attempts[state.lastLetter[0] - 1].join("") == state.intendedWord;
            if (state.lastLetter[0] >= state.maxTries || wordFound) {
                state.gameEnded = true;
                state.gameResult = wordFound;
                state.stats.totalGames++;
                if (wordFound) {
                    state.stats.gamesWon++;
                    state.stats.currentStreak++;
                    if (state.stats.currentStreak > state.stats.maxStreak)
                        state.stats.maxStreak = state.stats.currentStreak
                } else {
                    state.stats.currentStreak = 0;
                }
            }
        },
        startNewGame: (state) => {
            const words = Object.keys(state.wordsList);
            state.intendedWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
            state.gameEnded = false;
            state.gameResult = false;
            state.lastLetter = [0, 0]

            state.attempts = []
            for (let i = 0; i < state.maxTries; i++) {
                const wordPart = new Array(initialState.intendedWord.length);
                for (let j = 0; j < initialState.intendedWord.length; j++) {
                    wordPart[j] = ''
                }
                state.attempts.push(wordPart);
            }

            state.lettersState = {
                A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '',
                I: '', J: '', K: '', L: '', M: '', N: '', O: '', P: '',
                Q: '', R: '', S: '', T: '', U: '', V: '', W: '', X: '',
                Y: '', Z: ''
            }
        }
    },
})

export const { addLetter, removeLetter, confirmWord, startNewGame } = gameSlice.actions

export default gameSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GameState {
    intendedWord: string,
    maxTries: number,
    attempts: string[][],
    lastLetter: number[],
    lettersState: any
}

const initialState: GameState = {
    intendedWord: "HEART",
    maxTries: 6,
    attempts: [],
    lastLetter: [0, 0],
    lettersState: {
        A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '',
        I: '', J: '', K: '', L: '', M: '', N: '', O: '', P: '',
        Q: '', R: '', S: '', T: '', U: '', V: '', W: '', X: '',
        Y: '', Z: ''
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
            if (state.lastLetter[1] >= state.intendedWord.length || state.lastLetter[0] >= state.maxTries) return;
            else {
                state.attempts[state.lastLetter[0]][state.lastLetter[1]] = payload.payload;
                state.lastLetter = [state.lastLetter[0], state.lastLetter[1] + 1];
            }
        },
        removeLetter: (state) => {
            if (state.lastLetter[1] <= 0) return;
            else {
                state.attempts[state.lastLetter[0]][state.lastLetter[1] - 1] = "";
                state.lastLetter = [state.lastLetter[0], state.lastLetter[1] - 1];
            }
        },
        confirmWord: (state) => {
            if (state.lastLetter[0] >= state.maxTries ||
                state.lastLetter[1] < state.intendedWord.length) return;
            for (let i = 0; i < state.attempts[0].length; i++) {
                const letter = state.attempts[state.lastLetter[0]][i]
                if (state.intendedWord[i] == letter) state.lettersState[letter] = "green";
                else if (state.intendedWord.includes(letter) && state.lettersState[letter] !== "green") state.lettersState[letter] = "yellow";
                else if (state.lettersState[letter] !== "green" && state.lettersState[letter] !== "yellow") state.lettersState[letter] = "black";
            }
            state.lastLetter = [state.lastLetter[0] + 1, 0];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addLetter, removeLetter, confirmWord } = gameSlice.actions

export default gameSlice.reducer
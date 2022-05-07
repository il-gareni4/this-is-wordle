import gameSlice from './store/gameSlice';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        game: gameSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
import { configureStore } from '@reduxjs/toolkit'
import itemreducer from "./itemSlice"

export const store = configureStore({
    reducer : itemreducer
})

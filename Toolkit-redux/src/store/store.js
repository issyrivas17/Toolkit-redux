import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './slice/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: 
  },
}) 
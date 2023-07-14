import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem, Restaurante } from '../../pages/Home'

type CartSlice = {
  items: CardapioItem[]
  isOpen: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem[]>) => {
      state.items = [...state.items, ...action.payload]
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer

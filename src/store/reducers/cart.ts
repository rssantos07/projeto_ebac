import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartSlice = {
  items: MenuItem[]
  isOpen: boolean
  checkout: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false,
  checkout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem[]>) => {
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
    },
    clear: (state) => {
      state.items = []
    },
    checkoutOpen: (state) => {
      state.checkout = true
    },
    checkoutClose: (state) => {
      state.checkout = false
    }
  }
})

export const { add, open, close, remove, checkoutOpen, checkoutClose, clear } =
  cartSlice.actions

export default cartSlice.reducer

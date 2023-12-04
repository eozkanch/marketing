// redux/actions.js

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === product.name);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          ...product,
          quantity,
        });
      }
    },
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== itemNameToRemove);
    },
    removeAllItems: (state) => {
      state.items = [];
    },
    increaseItemQuantity: (state, action) => {
      const itemNameToIncrease = action.payload;
      const existingItem = state.items.find((item) => item.name === itemNameToIncrease);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemNameToDecrease = action.payload;
      const existingItem = state.items.find((item) => item.name === itemNameToDecrease);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    // ... diğer reducer'lar
  },
});

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice.reducer);

export const {
  addItem,
  removeItem,
  removeAllItems,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default persistedCartReducer;












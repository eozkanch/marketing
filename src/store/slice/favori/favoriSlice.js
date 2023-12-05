// redux/favoriteActions.js

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritePersistConfig = {
  key: 'favori',
  storage,
};

const favoriteSlice = createSlice({
  name: 'favori',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const { product } = action.payload;
      const isAlreadyFavorite = state.items.some((item) => item.name === product.name);

      if (!isAlreadyFavorite) {
        state.items.push(product);
      }
    },
    removeFavorite: (state, action) => {
      const itemNameToRemove = action.payload;
      state.items = state.items.filter((item) => item.name !== itemNameToRemove);
    },
    removeAllFavorites: (state) => {
      state.items = [];
    },
    // ... other reducers
  },
});

const persistedFavoriteReducer = persistReducer(favoritePersistConfig, favoriteSlice.reducer);

export const {
  addFavorite,
  removeFavorite,
  removeAllFavorites,
} = favoriteSlice.actions;
export default persistedFavoriteReducer;

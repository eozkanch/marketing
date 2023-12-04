// Varsayalım ki configureStore.js veya store.js adında bir dosyanız var

import { configureStore } from '@reduxjs/toolkit';
import persistedCartReducer from './slice/cart/cartSlice';

import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    // ... diğer reducer'lar
  },
});

export const persistor = persistStore(store);



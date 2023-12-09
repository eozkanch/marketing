// Varsayalım ki configureStore.js veya store.js adında bir dosyanız var

import { configureStore } from '@reduxjs/toolkit';
import persistedCartReducer from './slice/cart/cartSlice';
import persistedFavoriteReducer from './slice/favori/favoriSlice';
import persistedAuthReducer from './slice/auth/auth-slice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    favori: persistedFavoriteReducer,
    auth: persistedAuthReducer,
    // ... diğer reducer'lar
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);



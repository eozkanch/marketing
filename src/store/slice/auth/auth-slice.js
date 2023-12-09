// auth-slice.js
import { createSlice } from '@reduxjs/toolkit';
import { services } from '../../../services';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: {},
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            services.encryptedLocalStorage.removeItem('token');
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            services.encryptedLocalStorage.removeItem('token');
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export default persistedAuthReducer;

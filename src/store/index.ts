/**
 * Application Store
 */

// Dependencies
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appReducer from './features/app';

const store = configureStore({
    reducer: {
        app: appReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
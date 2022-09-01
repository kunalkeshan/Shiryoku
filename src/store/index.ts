/**
 * Application Store
 */

// Dependencies
import { configureStore } from "@reduxjs/toolkit";
import appReducer from './features/app';

const store = configureStore({
    reducer: {
        app: appReducer,
    }
});

export default store;
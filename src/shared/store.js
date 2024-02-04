import { configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import todoSlice from '../engine/todo/slice.js'
// import {logger} from "./middleware/logger.js";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    middleware: () => [
        // logger,
        thunk
    ]
})
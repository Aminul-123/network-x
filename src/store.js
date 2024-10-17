import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import networkSlice from './slices/networkSlice';

const store = configureStore({
    reducer : {
        post : postSlice,
        network : networkSlice,
    }
})

export default store
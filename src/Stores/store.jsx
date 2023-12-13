import { configureStore } from "@reduxjs/toolkit";
import userslice from "./slices/slice"
const store = configureStore({
    reducer:{
        cart:userslice
    }
})

export default store;
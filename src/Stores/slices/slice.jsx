import { createSlice } from "@reduxjs/toolkit";
import product from "../../products";

const userslice = createSlice({
    name:"user",
    initialState:{
        cart:[],
        items:product,
        totalQuantity:0,
        totalprice:0
    },
    reducers:{
        addtocart(state,action){
         state.cart.push(action.payload)
        }
    }
});

export default userslice.reducer;
export const { addtocart } = userslice.actions
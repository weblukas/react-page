import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: {
        id: 0,
        name: '',
        description: '',
        price: 0
    }

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action)=>{ 
            state.cartItems = action.payload
        }
    }
})

export const { addItems } = cartSlice.actions
export default cartSlice.reducer
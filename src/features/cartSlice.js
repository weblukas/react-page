import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems.splice(action.payload, 1)
    },
    removeItems: (state, action)=> {
     state.cartItems = state.cartItems.filter((cartItem)=> {
      const removedProductsId = action.payload
     return ( removedProductsId !== cartItem.ItemId  )
     }  )
    }
  },
});

export const { addItem, removeItem, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
